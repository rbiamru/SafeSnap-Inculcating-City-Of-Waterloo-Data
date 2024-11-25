import React, { useState, useEffect , useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import FrameComponent from '../components/FrameComponent';

const Map = () => {
  const navigate = useNavigate();

  const [userLocation, setUserLocation] = useState(null);
  const [nearbyTags, setNearbyTags] = useState([{
    id: 1,
    name: 'snowslip',
    coordinates: {
      latitude: 37.817000,
      longitude: 144.965000,
    },
  },
  {
    id: 2,
    name: 'roadclosure',
    coordinates: {
      latitude: 37.815500,
      longitude: 144.963500,
    },
  },
  {
    id: 3,
    name: 'event',
    coordinates: {
      latitude: 37.816800,
      longitude: 144.964500,
    },
  },
  {
    id: 4,
    name: 'construction',
    coordinates: {
      latitude: 37.815200,
      longitude: 144.964000,
    },
  },]);

  const onMenuItemContainerClick = useCallback(() => {
    navigate("/21-public-post");
  }, [navigate]);

  const checkProximity = (location) => {
    nearbyTags.forEach(tag => {
      const distance = getDistance(location, tag.coordinates);
      if (distance < 1) { // 1 km radius
        alert(`Alert: ${tag.name} near ${tag.coordinates.latitude}, ${tag.coordinates.longitude}!`);
      }
    });
  };

  const getDistance = (point1, point2) => {
    const R = 6371; // Earth's radius in km
    const dLat = (point2.latitude - point1.lat) * (Math.PI / 180);
    const dLon = (point2.longitude - point1.lng) * (Math.PI / 180);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(point1.lat * (Math.PI / 180)) * Math.cos(point2.latitude * (Math.PI / 180)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  if (!userLocation) return <div>Loading map...</div>;

  return (
    <div className="w-full relative bg-white flex flex-row items-start justify-start pt-6 px-2 pb-0 box-border gap-[49px] leading-[normal] tracking-[normal] text-left text-base text-gray-100 font-text mq800:gap-[24px] mq1350:flex-wrap">
      <FrameComponent onMenuItemContainerClick={onMenuItemContainerClick} />
      <LoadScript googleMapsApiKey={"API"}>
              <GoogleMap
                center={userLocation}
                zoom={14}
                mapContainerStyle={{ width: '100%', height: '1000px' }}
              >
                <Marker position={userLocation} />
                {nearbyTags.map(tag => (
                  <Marker 
                    key={tag.id}
                    position={{lat: tag.coordinates.latitude, lng: tag.coordinates.longitude}}
                   
                    onClick={() => alert(`${tag.name} at this location!`)}
                  />
                ))}
              </GoogleMap>
              </LoadScript></div>
  );
};

const getMarkerIconForTag = (tagName) => {
  // Return different icon URLs based on tag name
  switch(tagName) {
    case 'snowslip': return 'path_to_snowslip_icon.png';
    case 'roadclosure': return 'path_to_roadclosure_icon.png';
    // ... other cases
    default: return 'path_to_default_icon.png';
  }
};

export default Map;
