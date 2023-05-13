import { defaultImg } from "constants/global";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setFocus } from "../store/search/search-slice";
import classNames from "utils/classNames";

const DashboardSearch = () => {
  const { isFocus } = useSelector((state) => state.search);
  console.log(isFocus);
  const dispatch = useDispatch();
  return (
    <div className="relative z-50 max-w-[217px] md:max-w-[458px] w-full mx-auto lg:mx-0">
      <div className="w-full">
        <div className="w-full p-[6px] pl-[15px] bg-white dark:bg-dark-secondary rounded-[100px] dark:shadow-none shadow-[10px_10px_20px_rgba(218,213,213,0.15)] flex items-center min-h-[40px] h-full md:min-h-[52px]">
          <div className="flex-1">
            <input
              type="text"
              className="text-xs md:text-sm placeholder:text-text4 p-1 md:p-[10px] w-full text-text1 bg-inherit dark:placeholder:text-text2 dark:text-white"
              placeholder="Do fundrise now"
              onFocus={() => dispatch(setFocus(true))}
            />
          </div>
          <button className="bg-primary dark:bg-primary20 rounded-[20px] md:px-[27px] md:py-[11px] px-[10px] py-[5px] flex-shrink-0 ">
            <IconSearch />
          </button>
        </div>
      </div>
      <div
        className={classNames(
          "w-[320px] absolute -translate-x-1/2 md:translate-x-0 left-1/2 md:left-0 top-full mt-5 bg-white rounded-[20px] md:w-full lg:w-[820px] dark:bg-dark-secondary",
          isFocus ? "" : " hidden"
        )}
      >
        <div className="p-[10px] flex items-center justify-between dark:bg-dark-soft dark:rounded-[20px]">
          <h4 className="text-xs md:text-sm font-medium p-[10px] underline dark:text-white text-text1">
            See all 10,124 fundraisier
          </h4>
          <button className="cursor-pointer w-[48px] h-[34px] md:w-[72px] md:h-[50px] flex items-center justify-center dark:bg-[#422C32] bg-[#F9E3E3] rounded-[10px]">
            <IconClose />
          </button>
        </div>
        <div className="py-[10px] px-[15px] md:p-[25px]">
          <div className="space-y-[15px] md:space-y-6 mb-[30px]">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
          <div className="space-y-[15px]">
            <h4 className="text-sm font-semibold text-text1 dark:text-text4">
              Related searchs
            </h4>
            <div className="space-y-[10px]">
              <Link className="text-xs md:text-sm text-text2">
                <strong className="font-medium text-text1 dark:text-text4">
                  education
                </strong>{" "}
                fund
              </Link>
              <Link className="text-xs md:text-sm text-text2">
                schoralship fund
              </Link>
              <Link className="text-xs md:text-sm text-text2">
                <strong className="font-medium text-text1 dark:text-text4">
                  education
                </strong>{" "}
                and schools fund
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchItem = () => {
  return (
    <Link className="flex items-center gap-[15px] md:gap-5">
      <img
        src={defaultImg}
        alt=""
        className="w-[50px] h-[50px] object-cover rounded-[10px]"
      />
      <div className="flex-1">
        <h4 className="mb-1 text-xs md:text-sm text-text1 dark:text-white">
          <strong className="font-semibold">Education</strong> fund for Durgham
          Family
        </h4>
        <p className="text-xs md:text-sm text-text3">By Durgham Family</p>
      </div>
    </Link>
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
