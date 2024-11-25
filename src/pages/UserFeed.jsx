import { useCallback } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../providers/AuthProvider';
import { useCommunityContext } from '../providers/CommunityProvider';
import { usePostContext } from '../providers/PostProvider';
import FrameComponent from "../components/FrameComponent";
import NavDivs from "../components/NavDivs";
import Item from "../components/Item";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Feed.css"; 

const UserFeed = () => {

  const { profile, logout } = useAuthContext();
  // Posts
  const { posts, addPost, uploadImage } = usePostContext();
  const { communities, loading, error, subscribeToCommunity, unsubscribeFromCommunity , isUserSubscribed } = useCommunityContext();

  return (
    <div className="w-full relative bg-white flex flex-row items-start justify-start pt-6 px-2 pb-0 box-border gap-[44px] leading-[normal] tracking-[normal] mq800:gap-[22px] mq1350:flex-wrap">
    
      <FrameComponent />
      <main className="w-[1151px] flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border max-w-full">
        <section className="self-stretch h-[859px] flex flex-col items-end justify-start pt-0 px-0 pb-[803px] box-border max-w-full text-left text-base text-darkgray font-text mq450:pb-[220px] mq450:box-border mq800:h-auto mq1125:pb-[339px] mq1125:box-border mq1350:pb-[522px] mq1350:box-border">
          {/* Top Tab Profile, Feed, Tagged, Upload*/}
          <NavDivs activeTab="Feed"/>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full text-white">
            <div className="w-[1128px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[27px] shrink-0 max-w-full mq1125:flex-wrap">
              <div className="h-[1372px] flex-1 overflow-y-auto flex flex-col items-end justify-start pt-[2.5px] px-0 pb-[569px] box-border gap-[219px] max-w-full z-[1] mq450:h-auto mq450:gap-[55px] mq450:pb-[156px] mq450:box-border mq800:gap-[109px] mq800:min-w-full mq1125:pb-60 mq1125:box-border mq1350:pt-5 mq1350:pb-[370px] mq1350:box-border">
                <div className="self-stretch flex flex-col items-start justify-start pt-[16.5px] px-0 pb-[49px] box-border relative gap-[46.6px] shrink-0 max-w-full mq450:pb-[21px] mq450:box-border mq800:gap-[23px] mq800:pt-5 mq800:pb-8 mq800:box-border">
                  <div className="w-full h-[1344.1px] absolute !m-[0] right-[0px] bottom-[-543.6px] left-[0px]">
                    <img className="absolute top-[0px] left-[0px] rounded-3xl w-full h-full"
                        alt=""
                        src="/bg.svg" />
                    <br /> <br /><br />
                    <br /> <br /><br />
                    {posts.map(post => (
                          <div key={post.postId} className="flex flex-col items-center mt-1 ml-10">
                            <img src={post.post_imageUrl} alt="Post" className="w-[400px] h-[250px] relative rounded-7xl object-cover feedPosts" />
                            <h4 className="font-semibold color-white mt-2">{post.comment}</h4>
                            {/* <p>Latitude: {post.latitude}, Longitude: {post.longitude}</p> */}
                          </div>
                    ))}  
                  </div>
                  <div className="py-0 px-[27px] text-19xl">
                    <a className="[text-decoration:none] relative uppercase font-bold text-[inherit] z-[1] ">
                    {profile?.displayName}
                    </a>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-[27px] pb-[5.8px] text-gray-100">
                    <div className="relative leading-[18px] inline-block min-w-[85px] z-[1]">
                    {'@'+profile?.displayName}
                    </div>
                  </div>
                  <div className="w-[590px] flex flex-col items-start justify-start gap-[39px] max-w-full text-center font-small-text mq800:gap-[19px]">
                    <div className="w-[149px] relative leading-[150%] font-medium inline-block z-[1]">
                      <p className="m-0">#SnowSlipped</p>
                      <p className="m-0">#RoadClosure</p>
                      <p className="m-0">#UrbanFarming</p>
                      <p className="m-0">#Hangout</p>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                      <div className="w-[432px] flex flex-row items-start justify-center py-0 pr-0 pl-5 box-border gap-[8px] max-w-full mq450:flex-wrap">
                       
                        <div className="flex-1 flex flex-col items-start justify-start pt-[179px] px-0 pb-0 box-border min-w-[131px] mq450:pt-[116px] mq450:box-border">
                          <div className="self-stretch h-[248px] rounded-7xl flex flex-col items-start justify-start bg-cover bg-no-repeat bg-[top] z-[1]">
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="w-[341px] flex flex-col items-start justify-start pt-[54px] px-0 pb-0 box-border min-w-[341px] max-w-full text-black font-small-text mq450:pt-[23px] mq450:box-border mq450:min-w-full mq800:pt-[35px] mq800:box-border mq1125:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start gap-[25px]">
                  <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start py-[22px] px-[23px] gap-[8px] border-[1px] border-solid border-gainsboro-200 mq800:pt-5 mq800:pb-5 mq800:box-border">
                    <div className="relative leading-[150%] font-semibold">
                      Top Activity performers
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
                  <div className="self-stretch h-[252px] rounded-lg bg-white box-border overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-6 px-[23px] pb-0 gap-[8px] border-[1px] border-solid border-gainsboro-200 mq450:h-auto">
                    <div className="relative leading-[150%] font-semibold">
                      Communities you might like
                    </div>
                    {communities.map((community) => (
                      <div key={community.cid} className="flex items-center justify-between w-full">
                        <Item
                          avatar="/avatar-5@2x.png" // Replace with actual community avatar if available
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
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserFeed;
