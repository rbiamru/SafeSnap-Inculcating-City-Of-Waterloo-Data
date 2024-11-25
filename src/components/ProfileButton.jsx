import { memo, useMemo } from "react";
import PropTypes from "prop-types";

const ProfileButton = memo(({ className = "", image, title, propBorder , profileName , profileLink }) => {
  const btnStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const openNewTab = (profileLink) => {
    window.open(profileLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`self-stretch profileBtn cursor-pointer rounded-4xs flex flex-row items-start justify-start pt-[11px] px-[46px] pb-[15px] gap-[20px] text-left text-base text-white font-text border-[1px] border-solid border-gold mq450:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
      style={btnStyle} onClick={(profileLink)=>openNewTab(profileLink)} >
      <img
        className="h-[30px] w-[30px] relative"
        loading="lazy"
        alt=""
        src={image}
      />
      <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
        <div className="relative leading-[18px]">
          <span>{title}</span>
          <span className="font-semibold text-gray-100">{profileName}</span>
        </div>
      </div>
    </div>
  );
});

ProfileButton.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
};

export default ProfileButton;
