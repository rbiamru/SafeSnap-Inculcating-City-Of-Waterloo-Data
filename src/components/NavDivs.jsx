import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Button from './Button'; // Adjust the path as necessary

const Navdivs = memo(({ className = "" , activeTab }) => {
  const navigate = useNavigate();

  const onProfileClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onFeedClick = useCallback(() => {
    navigate("/user-feed");
  }, [navigate]);

  const onTaggedClick = useCallback(() => {
    navigate("/user-tags");
  }, [navigate]);

  const onUploadClick = useCallback(() => {
    navigate("/feedaupdate");
  }, [navigate]);

  return (
    <div className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full ${className}`}>
      <nav className="m-0 w-[412px] flex flex-row items-start justify-start gap-[5px] max-w-full whitespace-nowrap mq450:flex-wrap">
        {activeTab === 'Profile' ?
          <Button className="w-[125px] h-[38px]" variant="outline-primary" onClick={onProfileClick}>
            Profile
          </Button>:
          <Button className="w-[125px] h-[38px]" variant="primary" onClick={onProfileClick}>
             Profile
          </Button>}
        {activeTab === 'Feed' ?
          <Button className="w-[133px] h-[38px] cursor-pointer" variant="outline-primary" onClick={onFeedClick}>
            Feed
          </Button>:
          <Button className="w-[133px] h-[38px] cursor-pointer" variant="primary" onClick={onFeedClick}>
           Feed
         </Button>}
         {activeTab === 'Tag' ?
          <Button className="w-[133px] h-[38px] cursor-pointer" variant="outline-primary" onClick={onTaggedClick}>
            Tagged
          </Button>:
          <Button className="w-[133px] h-[38px] cursor-pointer" variant="primary" onClick={onTaggedClick}>
            Tagged
          </Button>}
        <Button className="w-[133px] h-[38px] cursor-pointer" variant="primary" onClick={onUploadClick}>
          Upload
        </Button>
      </nav>
    </div>
  );
});

Navdivs.propTypes = {
  className: PropTypes.string,
};

export default Navdivs;
