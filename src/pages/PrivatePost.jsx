import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";

const PrivatePost = () => {
  const navigate = useNavigate();

  const onIcnArrowIconClick = useCallback(() => {
    navigate("/feeda");
  }, [navigate]);

  return (
    <div className="w-full relative bg-darkslategray-200 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 [backdrop-filter:blur(8px)] [background:linear-gradient(180deg,_rgba(56,_55,_58,_0.7),_#38373a)] flex flex-col items-end justify-start pt-[50px] pb-[82.6px] pr-[18px] pl-2 box-border gap-[17.5px] max-w-full mq720:pt-8 mq720:pb-[54px] mq720:box-border">
        <div className="self-stretch h-[900px] relative [backdrop-filter:blur(8px)] [background:linear-gradient(180deg,_rgba(56,_55,_58,_0.7),_#38373a)] hidden" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
          <div className="w-[1398.7px] flex flex-col items-end justify-start gap-[3px] max-w-full">
            <header className="self-stretch flex flex-row items-start justify-start">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer z-[1]"
                loading="lazy"
                alt=""
                src="/icn-arrow.svg"
                onClick={onIcnArrowIconClick}
              />
            </header>
            <img
              className="w-[14.7px] h-[3px] relative object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/icn1@2x.png"
            />
          </div>
        </div>
        <video
          className="self-stretch h-[621px] relative rounded-7xl bg-cover bg-no-repeat bg-[top] z-[1]"
          controls
        >
          <source src />
        </video>
        <FrameComponent1 />
      </main>
    </div>
  );
};

export default PrivatePost;
