import { memo } from "react";
import PropTypes from "prop-types";

const Item = memo(({ className = "", avatar, helenaHills, helenahills }) => {
  return (
    <div
      className={`self-stretch rounded-lg flex flex-row items-center justify-start py-3 px-0 gap-[16px] text-left text-base text-black font-small-text ${className}`}
    >
      <img
        className="h-12 w-12 relative rounded-981xl overflow-hidden shrink-0 object-contain min-h-[48px]"
        loading="lazy"
        alt=""
        src={avatar}
      />
      <div className="flex-1 flex flex-col items-start justify-start">
        <div className="relative leading-[150%] font-medium inline-block min-w-[90px]">
          {helenaHills}
        </div>
        <div className="self-stretch relative leading-[150%] text-darkslategray-100 overflow-hidden text-ellipsis whitespace-nowrap">
          {helenahills}
        </div>
      </div>
    </div>
  );
});

Item.propTypes = {
  className: PropTypes.string,
  avatar: PropTypes.string,
  helenaHills: PropTypes.string,
  helenahills: PropTypes.string,
};

export default Item;
