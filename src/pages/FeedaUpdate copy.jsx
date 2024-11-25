import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../components/Item";
//book provider
import { useBookContext } from '../providers/BookProvider';

const FeedaUpdate = () => {
  const navigate = useNavigate();

  const onMenuItemContainerClick = useCallback(() => {
    navigate("/21-public-post");
  }, [navigate]);

  const onMenuItemContainerClick1 = useCallback(() => {
    navigate("/22-private-post");
  }, [navigate]);

  const onMenuItemContainerClick2 = useCallback(() => {
    navigate("/feed2");
  }, [navigate]);

  const onMenuItemContainerClick2a = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onMenuItemContainerClick3 = useCallback(() => {
    navigate("/auth");
  }, [navigate]);

 

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-end justify-start gap-[125px] leading-[normal] tracking-[normal] text-left text-base text-black font-small-text mq800:gap-[31px] mq1325:flex-wrap mq1325:gap-[62px] mq450:gap-[16px]">
      <section className="w-[934px] flex flex-row items-start justify-start relative gap-[80px] min-w-[934px] max-w-full text-left text-xl text-black font-small-text mq800:flex-wrap mq800:gap-[20px] mq1325:flex-1 mq1125:gap-[40px] mq1125:min-w-full">
        <div className="w-64 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col items-start justify-start pt-6 px-2 pb-[622px] box-border gap-[24px] min-w-[256px] mq800:flex-1 mq800:pt-5 mq800:pb-[404px] mq800:box-border">
          <div className="flex flex-row items-start justify-start py-0 px-4">
            <div className="relative tracking-[-0.01em] leading-[150%] font-semibold inline-block min-w-[96px] mq450:text-base mq450:leading-[24px]">
              Safe Snap
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-base">
            <div className="self-stretch rounded-lg bg-whitesmoke-100 flex flex-row items-start justify-start py-2 px-4 gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/home.svg"
              />
              <div className="flex-1 relative leading-[150%] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                Upload
              </div>
            </div>
            <div
              className="self-stretch rounded-lg bg-white flex flex-row items-start justify-start py-2 px-4 gap-[16px] whitespace-nowrap cursor-pointer"
              onClick={onMenuItemContainerClick}
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/bookmark.svg"
              />
              <div className="flex-1 relative leading-[150%] font-medium overflow-hidden text-ellipsis whitespace-nowrap">{`Saved public posts `}</div>
            </div>
            <div
              className="self-stretch rounded-lg bg-white flex flex-row items-start justify-start py-2 px-4 gap-[16px] whitespace-nowrap cursor-pointer"
              onClick={onMenuItemContainerClick1}
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/bookmark.svg"
              />
              <div className="flex-1 relative leading-[150%] font-medium overflow-hidden text-ellipsis whitespace-nowrap">{`Saved private posts `}</div>
            </div>
            <div
              className="self-stretch rounded-lg bg-white flex flex-row items-start justify-start py-2 px-4 gap-[16px] top-[0] z-[99] sticky cursor-pointer"
              onClick={onMenuItemContainerClick2}
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/search.svg"
              />
              <div className="flex-1 relative leading-[150%] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                Search
              </div>
            </div>
            <div
              className="self-stretch rounded-lg bg-white flex flex-row items-start justify-start py-2 px-4 gap-[16px] top-[0] z-[99] sticky cursor-pointer"
              onClick={onMenuItemContainerClick2a}
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/search.svg"
              />
              <div className="flex-1 relative leading-[150%] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                Profile
              </div>
            </div>
            <div
              className="self-stretch rounded-lg bg-white flex flex-row items-start justify-start py-2 px-4 gap-[16px] whitespace-nowrap cursor-pointer"
              onClick={onMenuItemContainerClick3}
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/messagecircle.svg"
              />
              <div className="flex-1 relative leading-[150%] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                Authorisation page
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-10 w-10 absolute !m-[0] top-[123px] left-[272px] object-cover cursor-pointer"
          loading="lazy"
          alt=""
          src="/image-6@2x.png"
          onClick={onMenuItemContainerClick3}
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-16 px-0 pb-0 box-border min-w-[389px] max-w-full text-center text-base mq800:pt-[42px] mq800:box-border mq450:pt-[27px] mq450:box-border mq450:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[86px] max-w-full mq800:gap-[43px] mq450:gap-[21px]">
            <nav className="m-0 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[32px] max-w-full whitespace-nowrap text-left text-9xl text-silver font-small-text mq450:flex-wrap mq450:gap-[16px]">
              <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[31px] font-semibold font-inherit text-black inline-block min-w-[78px] mq450:text-3xl mq450:leading-[25px]">
                Home
              </h2>
              <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[31px] font-semibold font-inherit inline-block min-w-[125px] mq450:text-3xl mq450:leading-[25px]">
                Following
              </h2>
              <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[31px] font-semibold font-inherit inline-block min-w-[99px] mq450:text-3xl mq450:leading-[25px]">
                Explore
              </h2>
            </nav>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[18px] box-border max-w-full">
              <div className="flex-1 flex flex-col items-end justify-start gap-[42px] max-w-full mq800:gap-[21px]">
                <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1.5 pl-0 box-border max-w-full">
                  <div className="flex-1 bg-gainsboro-300 flex flex-row items-start justify-center pt-[159px] pb-[136px] pr-5 pl-[27px] box-border max-w-full mq450:pt-[103px] mq450:pb-[88px] mq450:box-border">
                    <div className="h-[376px] w-[574px] relative bg-gainsboro-300 hidden max-w-full" />
                    <div className="w-[301px] flex flex-row items-start justify-start pt-2.5 px-0 pb-0 box-border">
                      <div className="flex-1 flex flex-row items-start justify-start relative">
                        <div className="h-[71px] flex-1 relative leading-[150%] font-medium inline-block z-[1]">
                          <p className="m-0">Upload from camera</p>
                          <p className="m-0">Drop File</p>
                        </div>
                        <div className="h-px w-60 absolute !m-[0] top-[29px] left-[27px] box-border z-[2] border-t-[1px] border-solid border-black" />
                        <div className="h-[70px] w-[239px] absolute !m-[0] top-[-10px] left-[27px]">
                          <div className="absolute top-[0px] left-[0px] box-border w-full h-full z-[3] border-[1px] border-solid border-black" />
                          <img
                            className="absolute top-[10px] left-[11px] w-[23px] h-6 object-cover z-[4]"
                            alt=""
                            src="/image-4@2x.png"
                          />
                          <img
                            className="absolute top-[39px] left-[11px] w-[23px] h-6 object-cover z-[4]"
                            alt=""
                            src="/image-5@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-end justify-start py-0 pr-0 pl-[21px] box-border max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1.5 pl-0 box-border max-w-full">
                    <div className="h-[49px] flex-1 relative leading-[150%] font-medium inline-block max-w-full">
                      <p className="m-0">Upload Picture</p>
                    
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">&nbsp;</p>
                    </div>
                  </div>
                  <div className="w-[546px] flex flex-row items-start justify-center gap-[16px] max-w-full text-left mq800:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
                      <img
                        className="w-8 h-8 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/icn.svg"
                      />
                    </div>
                    <div className="h-[134px] flex-1 relative min-w-[324px] max-w-full">
                      <div className="absolute top-[19px] left-[0px] leading-[150%] font-medium inline-block w-[498px] h-24 [-webkit-text-stroke:2px_rgba(0,_0,_0,_0.2)]">
                        <p className="m-0">
                          Comment here with # tags. Enabling Location is
                          mandatory
                        </p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">{` #public -> for publishing`}</p>
                        <p className="m-0">{`#private -> for saving in your phone memory`}</p>
                      </div>
                      <img
                        className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[472px] z-[1]"
                        loading="lazy"
                        alt=""
                        src="/rectangle-13.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[749px] w-[341px] overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[277px] box-border gap-[25px] min-w-[341px] max-w-full mq1325:flex-1 mq450:pb-[117px] mq450:box-border mq450:min-w-full mq1125:pb-[180px] mq1125:box-border">
        <div className="self-stretch rounded-lg bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start py-[22px] px-[23px] gap-[8px] border-[1px] border-solid border-gainsboro-200 mq800:pt-5 mq800:pb-5 mq800:box-border">
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
          <Item
            avatar="/avatar-5@2x.png"
            helenaHills="Libraries near me"
            helenahills="13.2k members"
          />
          <Item
            avatar="/avatar-6@2x.png"
            helenaHills="Sceneries near me"
            helenahills="2k members"
          />
          <Item
            avatar="/avatar-7@2x.png"
            helenaHills="Sailing near me"
            helenahills="125 members"
          />
        </div>
      </div>
    </div>
  );
};

export default FeedaUpdate;
