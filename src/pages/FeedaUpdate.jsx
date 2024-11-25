import { useCallback, useState, useEffect } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../providers/AuthProvider';
import { useCommunityContext } from '../providers/CommunityProvider';
import { usePostContext } from '../providers/PostProvider';
import { useExifContext } from '../providers/ExifProvider';

import PlacesSearch from "../components/PlacesSearch";
import Item from "../components/Item";
import "../styles/Feed.css"; 
import "bootstrap/dist/css/bootstrap.min.css";

const FeedaUpdate = () => {
  const navigate = useNavigate();

  const { profile, logout } = useAuthContext();
  // Posts
  const { posts, loading, addPost, uploadImage } = usePostContext();
  const { communities, subscribeToCommunity, unsubscribeFromCommunity , isUserSubscribed } = useCommunityContext();
  const [exifData, setExifData] = useState(null);
  const { extractExifData } = useExifContext();

  const onMapViewClick = useCallback(() => {
    navigate("/map-view");
  }, [navigate]);

  const onMenuItemContainerClick2 = useCallback(() => {
    navigate("/feed2");
  }, [navigate]);

  const backToProfile = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  // upload image
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [file, setFile] = useState(null);

  const [comment, setComment] = useState('');
  // set location
  const [coordinates, setCoordinates] = useState(null);

  const [location, setLocation] = useState(null);

  const [locationTag, setLocationTag] = useState('');

  const [error, setError] = useState('');

  const setGeoLocation = (lat,long) =>{
    setCoordinates({lat:lat,long:long});
  }

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setError('');
    // Upload image
    const downloadURL = await uploadImage(file);
    console.log('Image uploaded successfully:', downloadURL);
    setImageUrl(downloadURL);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    if (!imageFile) {
      setError('Please upload an image.');
      return;
    }
    if (!comment) {
      setError('Please add a comment.');
      return;
    }

    try {
      const downloadURL = await uploadImage(imageFile);
      await addPost({
        post_imageUrl: downloadURL,
        comment,
        latitude: coordinates.lat,
        longitude: coordinates.long,
        locationTag: locationTag || 'Unspecified Location',
      });
      setImageFile(null);
      setImageUrl('');
      setComment('');
      setLocation('');
      setFile(null);
      setLocation(null);
      setExifData('');
      alert('Post added successfully!')
    } catch (error) {
      console.error('Error adding post:', error);
      alert('Failed to add post. Please try again.');
    }
  };

  return (
    <section className="w-[1500px] flex flex-row items-start justify-start relative gap-[80px] min-w-[934px] max-w-full text-left text-xl text-black font-small-text mq800:flex-wrap mq800:gap-[20px] mq1325:flex-1 mq1125:gap-[40px] mq1125:min-w-full">
      {/* Left tab Safe Snap, Upload, saved public posts, saved private posts, Search, Profile, Authorisation page */}
      <div className="w-64 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col items-start justify-start pt-6 px-2 pb-[622px] box-border gap-[24px] min-w-[256px] mq800:flex-1 mq800:pt-5 mq800:pb-[404px] mq800:box-border">
        <div className="flex flex-row items-start justify-start py-0 px-4">
          <div className="relative tracking-[-0.01em] leading-[150%] font-semibold inline-block min-w-[96px] mq450:text-base mq450:leading-[24px]">
            Safe Snap
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-base">
          <div className="self-stretch rounded-lg bg-whitesmoke-100 flex flex-row items-start justify-start py-2 px-4 gap-[16px]">
          <i className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] bi bi-upload"/>
          <div className="flex-1 relative leading-[150%] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
              Upload
            </div>
          </div>
          <div  className="self-stretch rounded-lg bg-white flex flex-row items-start justify-start py-2 px-4 gap-[16px] top-[0] z-[99] sticky cursor-pointer"
            onClick={onMenuItemContainerClick2}>
              <i className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] bi bi-search"/>
            <div className="flex-1 relative leading-[150%] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
              Search
            </div>
          </div>
          <div
            className="self-stretch rounded-lg bg-white flex flex-row items-start justify-start py-2 px-4 gap-[16px] top-[0] z-[99] sticky cursor-pointer"
            onClick={onMapViewClick} >
              <i className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] bi bi-map-fill"/>
            <div className="flex-1 relative leading-[150%] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
              Map View
            </div>
          </div>
          <div
            className="self-stretch rounded-lg bg-white flex flex-row items-start justify-start py-2 px-4 gap-[16px] whitespace-nowrap cursor-pointer"
            onClick={backToProfile}>
            <i className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] bi bi-person-fill"/>
            <div className="flex-1 relative leading-[150%] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
             User Profile
            </div>

          </div>

        </div>
      </div>

      <div className="flex-1 flex flex-col items-start justify-start pt-16 px-0 pb-0 box-border min-w-[389px] max-w-full text-center text-base mq800:pt-[42px] mq800:box-border mq450:pt-[27px] mq450:box-border mq450:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[86px] max-w-full mq800:gap-[43px] mq450:gap-[21px]">

          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[18px] box-border max-w-full">
            <div className="min-w-full">
              <div className="flex-1 bg-gainsboro-300 flex flex-col items-center justify-center pt-[50px] pb-[136px] pr-5 pl-[27px] box-border max-w-full mq450:pt-[103px] mq450:pb-[88px] mq450:box-border">
                <div style={{width:"90%"}}>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
                    <h3><em>Upload Post</em></h3>
                    <Form.Group>
                      <Form.Label className="mb-3">Image</Form.Label>
                      <Form.Control type="file" onChange={handleImageChange} accept="image/*" required />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label  className="mt-3 mb-3">Comment</Form.Label>
                      <Form.Control
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add a comment"
                        required
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label  className="mt-3 mb-3">Location Tag</Form.Label>
                      <Form.Control
                        type="text"
                        value={locationTag}
                        onChange={(e) => setLocationTag(e.target.value)}
                        placeholder="Add a location tag"
                      />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label  className="mt-3 mb-3">Choose Location</Form.Label>
                    {/*Places Search API */}
                    <PlacesSearch setGeoLocation={setGeoLocation}/>
                    </Form.Group>
                    <Button className="btn btn-primary mt-4 w-full" type="submit">Post</Button>
                  </Form>
                  <h4 className="mt-3"><em><u>Recent Posts</u></em></h4>
                  <br />
                  {/* Displaying the Feed */}
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {posts.map(post => (
                        <div key={post.postId} className="flex flex-col items-center">
                          <img src={post.post_imageUrl} alt="Post" className="w-full h-80 object-cover border-2 feedImage" />
                          <h4 className="font-semibold mt-2">{post.comment}</h4>
                          {/* <p>Latitude: {post.latitude}, Longitude: {post.longitude}</p> */}
                          <p className="">{exifData}</p>

                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      {/* Top Activity performers scroll */}
      <div className="sticky top-0 right-0 h-[749px] w-[341px] overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[277px] box-border gap-[25px] min-w-[341px] max-w-full mq1325:flex-1 mq450:pb-[117px] mq450:box-border mq450:min-w-full mq1125:pb-[180px] mq1125:box-border">
        <div className="self-stretch rounded-lg bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start py-[30px] px-[30px] gap-[8px] border-[1px] border-solid border-gainsboro-200 mq800:pt-5 mq800:pb-5 mq800:box-border">
          <div className="relative leading-[150%] font-semibold">
            Top Activity Performers
          </div>
          <Item
            avatar="/avatar@2x.png"
            helenaHills="Helena Hills"
            helenahills="@helenahills"
          />
          <Item
            avatar="/avatar-1@2x.png"
            helenaHills="Charles Tran"
            helenahills="@charlestran"
          />
          <Item
            avatar="/avatar-2@2x.png"
            helenaHills="Oscar Davis"
            helenahills="@oscardavis"
          />
          <Item
            avatar="/avatar-3@2x.png"
            helenaHills="Daniel Jay Park"
            helenahills="@danielj"
          />
          <Item
            avatar="/avatar-4@2x.png"
            helenaHills="Carlo Rojas"
            helenahills="@carlorojas"
          />
        </div>

        <div className="self-stretch rounded-lg bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start py-[22px] px-[23px] gap-[8px] border-[1px] border-solid border-gainsboro-200">
          <div className="relative leading-[150%] font-semibold">
            Communities you might like
          </div>
          {communities.map((community) => (
            <div key={community.cid} className="flex items-center justify-between w-full">
              <Item
                avatar="/avatar-6@2x.png" // Replace with actual community avatar if available
                helenaHills={community.community_name}
                helenahills={`${community.subscribed_users.length} members`}
              />
              {isUserSubscribed(community.cid) === true ?
                  <Button variant="secondary" onClick={() => unsubscribeFromCommunity(community.cid)}>
                      Unsubscribe
                  </Button>:
                  <Button variant="primary" onClick={() => subscribeToCommunity(community.cid)}>
                    Subscribe
                  </Button>}
            </div>
          ))}
        </div>
      </div>
    </section >

    // </div >
  );
};

export default FeedaUpdate;