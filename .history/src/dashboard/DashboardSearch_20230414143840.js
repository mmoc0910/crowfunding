import { Button } from "components/button";
import React from "react";

const DashboardSearch = () => {
  return (
    <div className="relative z-30 max-w-[458px] w-full">
      <div className="w-full">
        <div className="w-full p-[6px] pl-[15px] bg-white dark:bg-dark-secondary rounded-[100px] dark:shadow-none shadow-[10px_10px_20px_rgba(218,213,213,0.15)] flex items-center">
          <div className="flex-1">
            <input
              type="text"
              className="text-sm placeholder:text-text4 p-[10px] w-full text-text1 bg-inherit dark:placeholder:text-text2 dark:text-white"
              placeholder="Do fundrise now"
            />
          </div>

          <button className="bg-primary dark:bg-primary20 rounded-[20px] px-[27px] py-[11px] flex-shrink-0">
            <IconSearch />
          </button>
        </div>
      </div>
      <div className="absolute left-0 top-full mt-5 bg-white rounded-[20px] w-full md:w-[600px] lg:w-[843px]">
        <div className="p-[10px] flex items-center justify-between">
          <h4 className="text-sm font-medium p-[10px]">
            See all 10,124 fundraisier
          </h4>
        </div>
      </div>
    </div>
  );
};

const IconSearch = () => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2226_12410)">
        <path
          d="M16.9702 16.5L13.2202 12.75M15.0952 8.0625C15.0952 8.9243 14.9255 9.77766 14.5957 10.5739C14.2659 11.3701 13.7825 12.0935 13.1731 12.7029C12.5637 13.3123 11.8403 13.7957 11.0441 14.1255C10.2479 14.4553 9.39451 14.625 8.53271 14.625C7.67092 14.625 6.81755 14.4553 6.02135 14.1255C5.22516 13.7957 4.50171 13.3123 3.89233 12.7029C3.28294 12.0935 2.79955 11.3701 2.46976 10.5739C2.13996 9.77766 1.97021 8.9243 1.97021 8.0625C1.97021 6.32202 2.66162 4.65282 3.89233 3.42211C5.12303 2.1914 6.79223 1.5 8.53271 1.5C10.2732 1.5 11.9424 2.1914 13.1731 3.42211C14.4038 4.65282 15.0952 6.32202 15.0952 8.0625Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2226_12410">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0.470215)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
const IconClose = () => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 1.61143L14.3886 0L8 6.38857L1.61143 0L0 1.61143L6.38857 8L0 14.3886L1.61143 16L8 9.61143L14.3886 16L16 14.3886L9.61143 8L16 1.61143Z"
        fill="#EB5757"
      />
    </svg>
  );
};
export default DashboardSearch;
