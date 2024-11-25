import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuthContext } from '../providers/AuthProvider';


const FrameComponent = memo(({ className = "", onMenuItemContainerClick }) => {
  const navigate = useNavigate();

  const onMenuItemContainerClick1 = useCallback(() => {
    navigate("/21-public-post");
  }, [navigate]);

  const { logout } = useAuthContext();

  return (
    <div
      className={`w-60 flex flex-col items-start justify-start gap-[24px] text-left text-xl text-black font-small-text ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-4">
        <div className="relative tracking-[-0.01em] leading-[150%] font-semibold inline-block min-w-[96px] mq450:text-base mq450:leading-[24px]">
          Safe Snap
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-base">
        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-whitesmoke-100 flex flex-row items-start justify-start py-2 px-4 gap-[16px] top-[0] z-[99] sticky cursor-pointer">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/home.svg"
          />
          <div className="flex-1 relative leading-[150%] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
            Home
          </div>
        </div>
      
        <div className="self-stretch rounded-lg bg-white flex flex-row items-start justify-start py-2 px-4 gap-[16px] cursor-pointer">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/bell.svg"
          />
          <div className="flex-1 relative leading-[150%] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
            Notifications
          </div>
        </div>
        <div
          className="self-stretch rounded-lg bg-white flex flex-row items-start justify-start py-2 px-4 gap-[16px] cursor-pointer"
          onClick={logout}>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/messagecircle1.svg" />
            <div className="flex-1 relative leading-[150%] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
            Logout
            </div>
        </div>
      </div>
    </div>
  );
});

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onMenuItemContainerClick: PropTypes.func,
};

export default FrameComponent;
