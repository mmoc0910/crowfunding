import React from "react";

const IconEyeToogle = ({ open = false }) => {
  return (
    <span>
      {open ? (
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 8C1 8 4.27273 1 10 1C15.7273 1 19 8 19 8C19 8 15.7273 15 10 15C4.27273 15 1 8 1 8Z"
            stroke="#A2A2A8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L19 20"
            stroke="#A2A2A8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </span>
  );
};

export default IconEyeToogle;
