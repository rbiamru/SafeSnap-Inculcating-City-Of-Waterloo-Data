import React, { useState, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useLoadScript, StandaloneSearchBox } from '@react-google-maps/api';

const libraries = ['places'];

const PlacesSearch = ({setGeoLocation}) => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState(null);
  const searchBoxRef = useRef(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'API_KEY',
    libraries,
  });

  const onPlacesChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    if (places.length > 0) {
      const place = places[0];
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setCoordinates({ lat, lng });
      setGeoLocation(lat,lng);
      setPlaces(places);
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <StandaloneSearchBox
        onLoad={ref => (searchBoxRef.current = ref)}
        onPlacesChanged={onPlacesChanged}
      >
        <Form.Control
          type="text"
          placeholder="Search for places"
        />
      </StandaloneSearchBox>
      {coordinates && (
        <div>
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lng}</p>
        </div>
      )}
    </div>
  );
};

export default PlacesSearch;
