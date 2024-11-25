import { memo, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import Password from "./Password";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Username = memo(({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-base text-white font-small-text ${className}`}
    >
      <Form
        className="[border:none] [outline:none] bg-[transparent] self-stretch h-10 font-small-text font-medium text-xl text-gray-200"
        type="text"
      />
      <Password />
      <div
        className="self-stretch rounded-lg bg-black flex flex-row items-start justify-start py-2 px-[63px] whitespace-nowrap cursor-pointer mq450:pl-5 mq450:pr-5 mq450:box-border"
        onClick={onButtonContainerClick}
      >
        <div className="relative leading-[150%] font-medium">
          Sign in with email to join community
        </div>
      </div>
    </div>
  );
});

Username.propTypes = {
  className: PropTypes.string,
};

export default Username;
