import { useCallback } from "react";
import { Button } from "react-bootstrap";
import { useAuthContext } from '../providers/AuthProvider';
import { useCommunityContext } from '../providers/CommunityProvider';
import { useNavigate } from "react-router-dom";

import FrameComponent from "../components/FrameComponent";
import NavDivs from "../components/NavDivs";
import Item from "../components/Item";

import "bootstrap/dist/css/bootstrap.min.css";

const UserTag = () => {
  const navigate = useNavigate();

  const { profile, logout } = useAuthContext();
  const { communities, loading, error, subscribeToCommunity, unsubscribeFromCommunity , isUserSubscribed } = useCommunityContext();

  return (
    <div className="w-full relative bg-white flex flex-row items-start justify-start pt-6 px-2 pb-0 box-border gap-[63px] leading-[normal] tracking-[normal] mq450:gap-[16px] mq800:gap-[31px] mq1350:flex-wrap">
      <FrameComponent />
      <main className="w-[1132px] flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border max-w-full">
        <section className="self-stretch flex flex-col items-end justify-start gap-[20px] max-w-full text-left text-159xl text-white font-text">
          <div className="self-stretch flex flex-row items-end justify-start gap-[23px] max-w-full mq1125:flex-wrap">
            {/* <div className="flex-1 flex flex-col items-end justify-start gap-[4.8px] max-w-full mq800:min-w-full"> */}
            <div className="self-stretch flex flex-col items-start justify-start pt-[4.3px] px-0 pb-0 box-border gap-[1.4px] max-w-full">              
              <NavDivs activeTab="Tag"/>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-0.5 pl-0 box-border max-w-full">
                <div className="flex-1 flex flex-col items-end justify-start pt-[25.2px] pb-[115px] pr-[169px] pl-[15px] box-border relative gap-[59.5px] max-w-full mq450:pr-5 mq450:box-border mq800:gap-[30px] mq800:pt-5 mq800:pr-[84px] mq800:pb-[75px] mq800:box-border">
                  <img
                    className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[15px] max-w-full overflow-hidden max-h-full"
                    loading="lazy"
                    alt=""
                    src="/bg2.svg"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full mq800:flex-wrap">
                    <div className="flex flex-col items-start justify-start gap-[46.6px] min-w-[178px] mq800:flex-1">
                      <a className="[text-decoration:none] relative uppercase font-bold text-[inherit] z-[1] mq450:text-4xl mq800:text-11xl">
                      {profile?.displayName}
                      </a>
                      <div className="relative text-base leading-[18px] text-gray-100 inline-block min-w-[85px] z-[1]">
                      {'@'+profile?.displayName}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border min-w-[211px] max-w-full text-center text-base font-small-text">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[58.8px] z-[1] mq450:gap-[29px]">
                        <div className="self-stretch rounded-xl bg-gray-300 flex flex-col items-start justify-start">
                          <div className="w-[313px] relative leading-[150%] font-medium inline-block">
                            #SnowSlipped, #Harsh_snow
                          </div>
                          <div className="self-stretch relative leading-[150%] text-gray-300 overflow-hidden text-ellipsis whitespace-nowrap">
                            3 times
                          </div>
                        </div>
                        <div className="self-stretch rounded-xl bg-gray-300 flex flex-col items-start justify-start">
                          <div className="w-[313px] relative leading-[150%] font-medium inline-block">
                            #RoadClosure
                          </div>
                          <div className="self-stretch relative leading-[150%] text-gray-300 overflow-hidden text-ellipsis whitespace-nowrap">
                            4 times
                          </div>
                        </div>
                        <div className="self-stretch rounded-xl bg-gray-300 flex flex-col items-start justify-start">
                          <div className="w-[313px] relative leading-[150%] font-medium inline-block">
                            #Hangout
                          </div>
                          <div className="self-stretch relative leading-[150%] text-gray-300 overflow-hidden text-ellipsis whitespace-nowrap">
                            1 time
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[324px] rounded-xl bg-gray-300 flex flex-col items-start justify-start max-w-full z-[1] text-center text-base font-small-text">
                    <div className="w-[313px] relative leading-[150%] font-medium inline-block">
                      #UrbanFarming
                    </div>
                    <div className="self-stretch relative leading-[150%] text-gray-300 overflow-hidden text-ellipsis whitespace-nowrap">
                      7 times
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[411px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border min-w-[411px] max-w-full text-base text-darkgray mq800:min-w-full mq1125:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[54px] max-w-full mq450:gap-[27px]">
                <div className="w-[395px] flex flex-row items-start justify-start py-0 px-[27px] box-border max-w-full text-black font-small-text">
                  <div className="flex-1 rounded-lg bg-white box-border overflow-hidden flex flex-col items-start justify-start py-[22px] px-[23px] gap-[8px] max-w-full border-[1px] border-solid border-gainsboro-200 mq800:pt-5 mq800:pb-5 mq800:box-border">
                    <div className="relative leading-[150%] font-semibold">
                      Top Activities performers
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
         
        </section>
      </main>
      <div className="h-[69.7px] w-[1421.2px] hidden max-w-full" />
    </div>
  );
};

export default UserTag;
