// src/components/SimpleMap.jsx

import React from 'react';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useMapContext, GeoPoint, GeoFirestore } from '../providers/MapProvider';

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 53.54992,
  lng: 10.00678,
};

function SimpleMap() {
    const { markers, loading, error } = useMapContext();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCJ36K272dZlTaaK_SYV5nP9S8QUR10dAY', // Replace with your Google Maps API key
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded || loading) return 'Loading Maps';

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={center}
    >
   {/* {markers.map((marker, index) => (
        <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
      ))} */}
    </GoogleMap>
  );
}

export default SimpleMap;
