import { memo } from "react";
import PropTypes from "prop-types";

const PostFooter = memo(({ className = "" }) => {
  return (
    <section
      className={`w-[1406px] flex flex-row items-start justify-end py-0 px-[41px] box-border max-w-full ${className}`}
    >
      <footer className="flex-1 flex flex-col items-start justify-start gap-[0.1px] max-w-full text-left text-smi text-gray-100 font-text">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq733:flex-wrap">
          <div className="w-[473.7px] relative leading-[18px] inline-block shrink-0 max-w-full z-[1]">
            @John_Doe | 14.06.24
          </div>
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[21px] shrink-0">
              <div className="flex flex-row items-start justify-start gap-[14px]">
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/icn-1.svg"
                />
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/icn-2.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[2.8px] px-0 pb-0">
                <img
                  className="w-8 h-8 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/icn-3.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[562.5px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full text-base text-white">
          <div className="flex-1 relative leading-[18px] inline-block max-w-full z-[1]">
            <p className="m-0">{`I slipped! `}</p>
            <p className="m-0 whitespace-pre-wrap">{`#snow_slip #public   `}</p>
          </div>
        </div>
        <div className="w-[297.4px] relative leading-[18px] inline-block z-[1]">
          39 comments
        </div>
      </footer>
    </section>
  );
});

PostFooter.propTypes = {
  className: PropTypes.string,
};

export default PostFooter;
