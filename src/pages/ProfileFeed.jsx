import { useCallback } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import NavDivs from "../components/NavDivs";
import ProfileButton from "../components/ProfileButton";
import Item from "../components/Item";
import { useAuthContext } from '../providers/AuthProvider';
import { useCommunityContext } from '../providers/CommunityProvider';

import "../styles/Feed.css"; 
import "bootstrap/dist/css/bootstrap.min.css";

const ProfileFeed = () => {
  const navigate = useNavigate();

  const onMenuItemContainerClick = useCallback(() => {
    navigate("/21-public-post");
  }, [navigate]);

  const { profile, logout } = useAuthContext();

  const { communities, loading, error, subscribeToCommunity, unsubscribeFromCommunity , isUserSubscribed } = useCommunityContext();

  return (

    <div className="w-full relative bg-white flex flex-row items-start justify-start pt-6 px-2 pb-0 box-border gap-[49px] leading-[normal] tracking-[normal] text-left text-base text-gray-100 font-text mq800:gap-[24px] mq1350:flex-wrap">
      <FrameComponent onMenuItemContainerClick={onMenuItemContainerClick} />
      <div className="w-[686px] flex flex-col items-start justify-start pt-2 pb-0 pr-[27px] pl-0 box-border max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start relative max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start pt-[4.3px] px-0 pb-0 box-border gap-[1.4px] max-w-full">
           <NavDivs activeTab="Profile"/>
            <div className="self-stretch flex flex-col items-start justify-start pt-[90.3px] px-[142px] pb-[190.7px] box-border relative gap-[82.3px] max-w-full mq450:gap-[21px] mq450:pt-[38px] mq450:px-5 mq450:pb-[81px] mq450:box-border mq800:gap-[41px] mq800:pt-[59px] mq800:px-[71px] mq800:pb-[124px] mq800:box-border">
              <img
                className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xl max-w-full overflow-hidden max-h-full"
                alt=""
                src="/bg1.svg"
              />
              <div className="w-[327.4px] flex flex-row items-start justify-start py-0 px-[33px] box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px] z-[1]">
                  <a className="[text-decoration:none] relative leading-[18px] text-[inherit] inline-block min-w-[51px] mt-2">
                    About:
                  </a>
                  <div className="h-[60px] relative leading-[20px] inline-block text-white">
                    <p className="m-0">
                      <span>
                        <span className="font-semibold">
                          👜 Traveller with passion
                        </span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span>{`🙌 Founder of `}</span>
                        <span className="text-cornflowerblue">
                          @unemployedYouth
                        </span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span>📍 Waterloo</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px] z-[1] text-white">
                <ProfileButton 
                  image="/instagram.svg"
                  title="Instagram: " 
                  profileLink = "https://www.instagram.com"
                  profileName = "KiranGill123@"/>
                <ProfileButton
                  image="/twitter@2x.png"
                  title="Twitter: "
                  profileName = "KiranGill123@"
                  profileLink = "https://www.twitter.com"
                  propBorder="1px solid rgba(41, 152, 255, 0.74)"
                />
                <ProfileButton
                  image="youtube@2x.png"
                  title="Youtube: "
                  profileName = "@kiran_gill"
                  profileLink = "https://www.youtube.com"
                  propBorder="1px solid rgba(41, 152, 255, 0.74)"
                />
                <ProfileButton
                  image="/social-icons-black@2x.png"
                  title="Facebook: "
                  profileName = "KiranGill123@"
                  profileLink = "https://www.facebook.com"
                  propBorder="1px solid rgba(41, 152, 255, 0.74)"
                />
                <ProfileButton
                  image="/telegram@2x.png"
                  title="Telegram: "
                  profileLink = "https://www.telegram.com"
                  profileName = "KiranGill123@"
                  propBorder="1px solid rgba(40, 152, 255, 0.61)"
                />
              </div>
            </div>
          </div>
          <a className="[text-decoration:none] absolute !m-[0] top-[83px] left-[50px] text-19xl uppercase font-bold text-white inline-block z-[2] mq450:text-4xl mq800:text-11xl">
            Hello, {profile?.displayName}
          </a>
        </div>
      </div>
      <div className="h-[1372px] w-[740px] relative overflow-y-auto shrink-0 hidden max-w-full">
        <img
          className="relative rounded-3xl w-[740px] h-[1338.9px]"
          alt=""
          src="/bg-1.svg"
        />
        <div className="absolute top-[83px] left-[168px] w-[430px] h-[1494px]">
          <div className="absolute top-[0px] left-[0px] w-full h-full">
            <img
              className="absolute top-[465px] left-[0px] rounded-7xl w-52 h-48 object-cover"
              alt=""
              src="/rectangle-6@2x.png"
            />
            <img
              className="absolute top-[675px] left-[18px] rounded-41xl w-[412px] h-[248px] object-cover"
              alt=""
              src="/rectangle-1@2x.png"
            />
            <div className="absolute top-[940px] left-[10px] flex flex-col items-start justify-start gap-[8px] border-[1px] border-solid border-black">
              <img
                className="w-[202px] h-[202px] relative rounded-7xl object-cover"
                alt=""
                src="/rectangle-2-1@2x.png"
              />
              <img
                className="w-[202px] h-[198px] relative rounded-7xl object-cover"
                alt=""
                src="/rectangle-4-1@2x.png"
              />
              <img
                className="self-stretch h-[138px] relative rounded-7xl max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/rectangle-6-1@2x.png"
              />
            </div>
            <div className="absolute top-[936px] left-[220px] flex flex-col items-start justify-start gap-[8px] border-[1px] border-solid border-black">
              <img
                className="self-stretch flex-1 relative rounded-7xl max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/double-image-placeholders@2x.png"
              />
              <img
                className="self-stretch flex-1 relative rounded-7xl max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/double-image-placeholders1@2x.png"
              />
            </div>
            <div className="absolute top-[420px] left-[220px] flex flex-col items-start justify-start border-[1px] border-solid border-black">
              <img
                className="self-stretch flex-1 relative rounded-7xl max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/rectangle-5-1@2x.png"
              />
            </div>
            <div className="absolute top-[241px] left-[10px] flex flex-col items-start justify-start border-[1px] border-solid border-black">
              <img
                className="w-[202px] h-[198px] relative rounded-7xl object-cover"
                alt=""
                src="/rectangle-4@2x.png"
              />
            </div>
            <img
              className="absolute top-[209px] left-[222px] rounded-7xl w-[202px] h-[202px] object-cover"
              alt=""
              src="/rectangle-2@2x.png"
            />
            <img
              className="absolute top-[0px] left-[226px] rounded-7xl w-[203.3px] h-[202px] object-cover"
              alt=""
              src="/image-31@2x.png"
            />
            <img
              className="absolute top-[8px] left-[14px] rounded-7xl w-[198px] h-[219px] object-cover"
              alt=""
              src="/image-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border max-w-full text-darkgray">
        <div className="flex flex-col items-start justify-start gap-[54px] max-w-full mq450:gap-[27px]">
          <div className="w-[395px] flex flex-row items-start justify-start py-0 px-[27px] box-border max-w-full text-black font-small-text">
            <div className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full">
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
      <div className="h-[69.7px] w-[1421.2px] hidden max-w-full" />
    </div>
  );
};

export default ProfileFeed;
