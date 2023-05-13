import React from "react";
import { Link } from "react-router-dom";
import classNames from "utils/classNames";

const DashboardFund = ({ inTopBar = true }) => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="relative">
      <div
        className={classNames(
          "items-center gap-2 cursor-pointer text-icon-color dark:text-text3 py-2",
          inTopBar ? "hidden lg:flex" : "flex lg:hidden px-5 pt-6 pb-2"
        )}
        onClick={() => setShow(!show)}
      >
        {inTopBar ? <IconUpBig /> : <IconUpSmall />}
        <span className="font-semibold text-text2 dark:text-text3">
          Fundrising for
        </span>
        {inTopBar ? <IconDownBig /> : <IconDownSmall />}
      </div>
      {inTopBar && (
        <div
          className={classNames(
            "lg:w-[calc(100vw-100px)] xl:w-[1170px] absolute z-10 lg:right-0 xl:right-1/2 lg:translate-x-[92px] xl:translate-x-1/3 top-[calc(100%+45px)] rounded-[20px] transition-all duration-75",
            show ? "visible opacity-100" : "invisible opacity-0"
          )}
        >
          <div className="grid w-full grid-cols-3 dark:bg-darkbg dark:rounded-[20px]">
            <div className="col-span-1 lg:p-[30px_30px_60px] xl:p-[40px_40px_103px] grow-0 shrink-0 bg-white dark:bg-dark-secondary rounded-[20px_0px_0px_20px]">
              <h5 className="mb-5 text-sm font-semibold text-text1 dark:text-white xl:text-base">
                Tech & Innovation
              </h5>
              <div className="grid grid-cols-2 gap-x-5 gap-y-[6px] flex-row">
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Audio
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Camera Gear
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Travel & Outdoors
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Transportation
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Home
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Accssories
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Productivity
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Health & Fitness
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Food & Beverage
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Clothe & Wearables
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Green Tech
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Education
                </Link>
              </div>
            </div>
            <div className="col-span-1 lg:p-[30px_30px_60px] xl:p-[40px_40px_103px] grow-0 shrink-0 bg-[#F9F9F9] dark:bg-darkbg shadow-[15px_4px_80px_rgba(198,_194,_194,_0.25)] dark:shadow-[0px_16px_30px_rgba(33,_25,_25,_0.17),_0px_30px_60px_rgba(1,_2,_9,_0.2)]">
              <h5 className="mb-5 text-sm font-semibold text-text1 dark:text-white xl:text-base">
                Creative Works
              </h5>
              <div className="grid grid-cols-2 gap-x-5 gap-y-[6px] flex-row">
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Audio
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Camera Gear
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Travel & Outdoors
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Transportation
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Home
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Accssories
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Productivity
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Health & Fitness
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Food & Beverage
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Clothe & Wearables
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Green Tech
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Education
                </Link>
              </div>
            </div>
            <div className="col-span-1 lg:p-[30px_30px_60px] xl:p-[40px_40px_103px] grow-0 shrink-0 bg-white dark:bg-dark-secondary rounded-[0px_20px_20px_0px]">
              <h5 className="mb-5 text-sm font-semibold text-text1 dark:text-white xl:text-base">
                Community Project
              </h5>
              <div className="grid grid-cols-2 gap-x-5 gap-y-[6px] flex-row">
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Audio
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Camera Gear
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Travel & Outdoors
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Transportation
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Home
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Accssories
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Productivity
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Health & Fitness
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Food & Beverage
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Clothe & Wearables
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Green Tech
                </Link>
                <Link className="text-xs xl:text-sm text-text2 dark:text-text3">
                  Education
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute -z-10 bottom-[calc(100%-18px)] lg:right-[calc((100%/3)*2+(100%/3)-62px)] xl:right-[calc((100%/3)-60px)] text-white dark:text-dark-secondary">
            <IconCategory />
          </div>
        </div>
      )}
    </div>
  );
};
const IconUpBig = () => {
  return (
    <svg
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 2.293L11.707 6.586L7.707 2.586L0 10.293L1.414 11.707L7.707 5.414L11.707 9.414L17.414 3.707L19.707 6V0H13.707L16 2.293Z"
        fill="currentcolor"
      />
    </svg>
  );
};
const IconUpSmall = () => {
  return (
    <svg
      width={16}
      height={10}
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 2.21975L9.28025 5.4395L6.28025 2.4395L0.5 8.21975L1.5605 9.28025L6.28025 4.5605L9.28025 7.5605L13.5605 3.28025L15.2803 5V0.5H10.7803L12.5 2.21975Z"
        fill="currentColor"
      />
    </svg>
  );
};
const IconDownSmall = () => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L6 6L11 1" stroke="currentcolor" strokeWidth="2" />
    </svg>
  );
};
const IconDownBig = () => {
  return (
    <svg
      width={10}
      height={7}
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.25 1.5L5 5.25L8.75 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};
const IconCategory = () => {
  return (
    <svg
      width={69}
      height={64}
      viewBox="0 0 69 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2376_282)">
        <path
          d="M29.1699 11.5C31.0944 8.16667 35.9056 8.16667 37.8301 11.5L57.3157 45.25C59.2402 48.5833 56.8346 52.75 52.9856 52.75H14.0144C10.1654 52.75 7.7598 48.5833 9.6843 45.25L29.1699 11.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2376_282"
          x="0.00683594"
          y={0}
          width="68.9863"
          height="63.75"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={1} dy={1} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.545098 0 0 0 0 0.631373 0 0 0 0 0.560784 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2376_282"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2376_282"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default DashboardFund;
