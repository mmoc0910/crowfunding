import React from "react";
import Proptypes from "prop-types";

const IconCategory = ({ size = "small" }) => {
  return (
    <>
      {size === "small" ? (
        <svg
          width={18}
          height={18}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2240_6170)">
            <path
              d="M6.8775 4.5L8.3775 6H15V13.5H3V4.5H6.8775ZM7.5 3H3C2.175 3 1.5075 3.675 1.5075 4.5L1.5 13.5C1.5 14.325 2.175 15 3 15H15C15.825 15 16.5 14.325 16.5 13.5V6C16.5 5.175 15.825 4.5 15 4.5H9L7.5 3Z"
              fill="currentcolor"
            />
          </g>
          <defs>
            <clipPath id="clip0_2240_6170">
              <rect width={18} height={18} fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          width={20}
          height={16}
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.17 2L9.17 4H18V14H2V2H7.17ZM8 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2H10L8 0Z"
            fill="currentcolor"
          />
        </svg>
      )}
    </>
  );
};

IconCategory.propTypes = {
  size: Proptypes.oneOf(["small", "big"]),
};

export default IconCategory;
