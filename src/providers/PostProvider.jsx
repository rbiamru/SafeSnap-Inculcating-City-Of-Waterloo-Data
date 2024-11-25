import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, getDocs, addDoc, query, where, limit } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { useFirebaseContext } from './FirebaseProvider';
import { useAuthContext } from './AuthProvider';
import { useExifContext } from './ExifProvider';

export const PostContext = createContext({});

const PostProvider = (props) => {
    const { children } = props;
    const { myFS, myStorage, GeoPoint } = useFirebaseContext();
    const { user } = useAuthContext();
    const { extractExifData, convertDMSToDD } = useExifContext(); // Use the Exif context

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPosts = async () => {
        try {
            const postsCollection = collection(myFS, 'posts');
            const postsSnapshot = await getDocs(postsCollection);
            const postsList = postsSnapshot.docs.map((doc) => ({
                postId: doc.id,
                createAt: doc.data().createAt,
                post_imageUrl: doc.data().post_imageUrl,
                comment: doc.data().comment,
                uid: doc.data().uid,
                // lid: doc.data().lid,
                latitudeAndLongitude: doc.data().latitudeAndLongitude,
                latitude: doc.data().latitudeAndLongitude.latitude,
                longitude: doc.data().latitudeAndLongitude.longitude,
                locationTag: doc.data().locationTag,
                locationCreatedAt: doc.data().locationCreatedAt,
            }));
            setPosts(postsList);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching posts: ', error);
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
                // lid: postData.lid,
                latitudeAndLongitude: new GeoPoint(postData.latitude, postData.longitude),
                locationTag: postData.locationTag || 'Unspecified Location',
                locationCreatedAt: new Date(),
                tags: postData.tags || [],
            });
            console.log(`Added new post with ID: ${newPostRef.id}`);
            await fetchPosts(); // Refresh the posts list
        } catch (error) {
            console.error('Error adding post: ', error);
            setError(error);
        }
    };

    const addInitialPosts = async () => {

        const initialPosts = [
            {
                post_imageUrl: 'https://example.com/image1.jpg',
                comment: 'Beautiful day at the park!',
                latitude: 40.7128, // New York City's approximate latitude
                longitude: -74.0060,
                locationTag: 'New York City Park',
                createAt: 'July 28, 2024 at 6:14:07 PM UTC-4'
            },
            {
                post_imageUrl: 'https://example.com/image2.jpg',
                comment: 'Delicious meal at the new restaurant',
                latitude: 34.0522,
                longitude: -118.2437,
                locationTag: 'Los Angeles Restaurant'
            },
            {
                post_imageUrl: 'https://example.com/image3.jpg',
                comment: 'Exciting concert last night',
                latitude: 41.8781,
                longitude: -87.6298,
                locationTag: 'Chicago Concert Hall'
            }
        ];


        for (const post of initialPosts) {
            const existingPostQuery = query(
                collection(myFS, 'posts'),
                where('comment', '==', post.comment),
                where('post_imageUrl', '==', post.post_imageUrl),
                limit(1)
            );
            const querySnapshot = await getDocs(existingPostQuery);

            if (querySnapshot.empty) {
                await addPost(post);
                console.log(`Added initial post: ${post.comment}`);
            } else {
                console.log(`Post already exists: ${post.comment}`);
            }
        }
    };

    const uploadImage = async (file) => {
        if (!file) return null;

        const storageRef = ref(myStorage, `images/${file.name}`);
        try {
            const snapshot = await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(snapshot.ref);
            return downloadURL;
        } catch (error) {
            console.error("Error uploading file: ", error);
            setError(error);
            return null;
        }
    };

    useEffect(() => {
        fetchPosts();
        // Uncomment the following line to add initial posts
        //addInitialPosts();
    }, []);

    const theValues = {
        posts,
        loading,
        error,
        addPost,
        refreshPosts: fetchPosts,
        addInitialPosts,
        uploadImage,
        extractExifData,
        convertDMSToDD,
    };

    return (
        <PostContext.Provider value={theValues}>
            {children}
        </PostContext.Provider>
    );
};

const usePostContext = () => {
    const context = useContext(PostContext);
    if (context === undefined) {
        throw new Error('usePostContext was used outside of its Provider');
    }
    return context;
};

export { PostProvider, usePostContext };
