// src/providers/MapProvider.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useFirebaseContext, GeoPoint } from './FirebaseProvider';
import { GeoFirestore } from 'geofirestore';

const MapContext = createContext();

const MapProvider = ({ children }) => {
  const { myFS, GeoPoint } = useFirebaseContext();
  const [markers, setMarkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     const geoFirestore = new GeoFirestore(myFS);

//     const fetchMarkers = async () => {
//       try {
//         const geoCollection = geoFirestore.collection('locations');
//         const query = geoCollection.near({
//           center: new GeoPoint(53.54992, 10.00678),
//           radius: 10,
//         });

//         const snapshot = await query.get();
//         // const fetchedMarkers = snapshot.docs.map(doc => ({
//         //   lat: doc.data().location.latitude,
//         //   lng: doc.data().location.longitude,
//         // }));
//         //setMarkers(fetchedMarkers);
//       } catch (error) {
//         console.error('Error fetching markers: ', error);
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMarkers();
//   }, [myFS, GeoPoint]);

  const value = {
    markers,
    loading,
    error,
  };

  return (
    <MapContext.Provider value={value}>
      {children}
    </MapContext.Provider>
  );
};

export const useMapContext = () => {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error('useMapContext must be used within a MapProvider');
  }
  return context;
};

export {GeoPoint, GeoFirestore};
export default MapProvider;