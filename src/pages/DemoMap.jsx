import React, { useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { useLocationContext } from '../providers/LocationProvider';
import { usePostContext } from '../providers/PostProvider';
import "../styles/Map.css"; 

const DemoMap = () => {
  const { locations, fetchLocations, loading, error } = useLocationContext();
  const { posts, fetchPosts } = usePostContext();
  const navigate = useNavigate();

  const onUploadClick = useCallback(() => {
    navigate("/feedaUpdate");
  }, [navigate]);

  const backToProfile = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="container">
      <div className="sidebar">
        <div className="w-64 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col items-start justify-start
         pt-6 px-2 pb-[622px] box-border gap-[24px] min-w-[256px] mq800:flex-1 mq800:pt-5 mq800:pb-[404px] mq800:box-border" style={{height:'100%'}}>
          <div className="flex flex-row items-start justify-start py-0 px-4">
            <div className="relative tracking-[-0.01em] leading-[150%] font-semibold inline-block min-w-[96px] mq450:text-base mq450:leading-[24px]">
              Safe Snap
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-base">
            <div className="self-stretch rounded-lg bg-white flex flex-row items-start justify-start py-2 px-4 gap-[16px] cursor-pointer"
                 onClick={onUploadClick}>
              <i className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] bi bi-upload" />
              <div className="flex-1 relative leading-[150%] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                Upload
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-whitesmoke-100 flex flex-row items-start justify-start py-2 px-4 gap-[16px] top-[0] z-[99] sticky cursor-pointer">
              <i className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] bi bi-map-fill" />
              <div className="flex-1 relative leading-[150%] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                Map View
              </div>
            </div>
            <div
              className="self-stretch rounded-lg bg-white flex flex-row items-start justify-start py-2 px-4 gap-[16px] whitespace-nowrap cursor-pointer"
              onClick={backToProfile}>
              <i className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] bi bi-person-fill" />
              <div className="flex-1 relative leading-[150%] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                User Profile
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map-container">
        <APIProvider apiKey={'API_KEY'} onLoad={() => console.log('Maps API has loaded.')}>
          <div className="map">
            <Map
              defaultZoom={13}
              defaultCenter={{ lat: 43.4794, lng: -80.5180 }}
              mapId={'3af05940931c24c4'}
              onCameraChanged={(ev) => {
                console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom);
              }}>
              {posts.map((post) => (
                <AdvancedMarker
                  key={post.postId}
                  position={{ lat: post.latitude, lng: post.longitude }}>
                  <Pin background={'#87CEEB'} glyphColor={'#000'} borderColor={'#000'} />
                </AdvancedMarker>
              ))}
            </Map>
          </div>
        </APIProvider>
      </div>
    </section>
  );
};

export default DemoMap;
