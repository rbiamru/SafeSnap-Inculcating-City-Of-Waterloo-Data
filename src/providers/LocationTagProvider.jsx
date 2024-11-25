// // LocationTagProvider.jsx
// import React, { createContext, useContext } from 'react';
// import { collection, getDocs, getFirestore } from 'firebase/firestore';
// import { GeoFirestore } from 'geofirestore';
// import { useFirebaseContext } from './FirebaseProvider';

// const LocationTagContext = createContext();

// export const LocationTagProvider = ({ children }) => {
//     const { myApp } = useFirebaseContext();

//     const myFS = getFirestore(myApp);

//     // Ensure that myFS is a valid Firestore instance
//     if (!myFS || typeof myFS.collection !== 'function') {
//         console.error('Invalid Firestore instance');
//         return null;
//       }
//   const geofirestore = new GeoFirestore(myFS);
//   const geocollection = geofirestore.collection('locationTags');

//   const addLocationTag = async (tagData) => {
//     try {
//       await geocollection.add({
//         name: tagData.name,
//         coordinates: new myFS.GeoPoint(tagData.latitude, tagData.longitude),
//         createdAt: new Date(),
//         createdBy: tagData.uid,
//         active: true,
//         expiresAt: tagData.expiresAt || null
//       });
//     } catch (error) {
//       console.error('Error adding location tag:', error);
//     }
//   };

//   const getNearbyTags = async (center, radius) => {
//     const query = geocollection.near({ center, radius });
//     const snapshot = await query.get();
//     return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//   };

//   return (
//     <LocationTagContext.Provider value={{ addLocationTag, getNearbyTags }}>
//       {children}
//     </LocationTagContext.Provider>
//   );
// };

// export const useLocationTagContext = () => useContext(LocationTagContext);
