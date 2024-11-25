import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { useFirebaseContext } from './FirebaseProvider';
import { useAuthContext } from './AuthProvider';
import { useExifContext } from './ExifProvider';

export const LocationContext = createContext({});

const LocationProvider = (props) => {
    const { children } = props;
    const { myFS, GeoPoint } = useFirebaseContext();
    const { user } = useAuthContext();
    const { extractExifData, convertDMSToDD } = useExifContext();

    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchLocations = async () => {
        try {
            const locationsCollection = collection(myFS, 'locations');
            const locationsSnapshot = await getDocs(locationsCollection);
            const locationsList = locationsSnapshot.docs.map((doc) => ({
                locationId: doc.id,
                createAt: doc.data().createAt,
                post_imageUrl: doc.data().post_imageUrl,
                latitude: doc.data().latitudeAndLongitude.latitude,
                longitude: doc.data().latitudeAndLongitude.longitude,
                locationTag: doc.data().locationTag
            }));
            setLocations(locationsList);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching Locations: ', error);
            setError(error);
            setLoading(false);
        }
    };

    const addPost = async (postData) => {
        try {
            const newPostRef = await addDoc(collection(myFS, 'posts'), {
                createAt: new Date(),
                post_imageUrl: postData.post_imageUrl,
                comment: postData.comment,
                uid: user.uid,
                latitudeAndLongitude: new GeoPoint(postData.latitude, postData.longitude),
                locationTag: postData.locationTag || 'Unspecified Location',
                locationCreatedAt: new Date(),
                tags: postData.tags || [],
            });
            console.log(`Added new post with ID: ${newPostRef.id}`);
            await fetchLocations(); // Refresh the locations list
        } catch (error) {
            console.error('Error adding post: ', error);
            setError(error);
        }
    };

    useEffect(() => {
        fetchLocations();
    }, []);

    const theValues = {
        locations,
        loading,
        error,
        addPost,
        refreshLocations: fetchLocations,
        extractExifData,
        convertDMSToDD,
    };

    return (
        <LocationContext.Provider value={theValues}>
            {children}
        </LocationContext.Provider>
    );
};

const useLocationContext = () => {
    const context = useContext(LocationContext);
    if (context === undefined) {
        throw new Error('useLocationContext was used outside of its Provider');
    }
    return context;
};

export { LocationProvider, useLocationContext };
