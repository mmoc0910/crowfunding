import React from "react";
import { Button } from "components/button";
import DashboardFund from "dashboard/DashboardFund";
import DashboardSearch from "dashboard/DashboardSearch";
import { Link } from "react-router-dom";
const DashboardTopbar = () => {
  return (
    <div className="flex lg:w-[200%]">
      <div className="flex items-center justify-between mb-[30px] lg:mb-[46px] gap-[24px] md:gap-0 w-[50%] lg:w-full">
        <div className="flex items-center flex-1 ml-3 gap-[24px] md:gap-14">
          <Link className="hidden lg:block">
            <img src="/Logo.svg" alt="" />
          </Link>
          <div className="cursor-pointer">
            <IconTopBar />
          </div>
          <DashboardSearch></DashboardSearch>
        </div>

        <div className="flex items-center gap-10">
          <DashboardFund></DashboardFund>
          <Button
            href={"/campaign/start-campaign"}
            className="bg-secondary20 px-[26px] text-white hidden lg:block"
          >
            Start a campaign
          </Button>
          <img
            src="https://images.unsplash.com/photo-1681186018205-bf4d312c2b90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80"
            alt=""
            className="w-10 h-10 md:w-[52px] md:h-[52px] object-cover rounded-full flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
};
const IconTopBar = () => {
  return (
    <svg
      width={22}
      height={24}
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2314_10051)">
        <path
          d="M1 13.4H21V10.6H1V13.4ZM1 19H21V16.2H1V19ZM1 7.8H21V5H1V7.8Z"
          fill="#808191"
        />
      </g>
      <defs>
        <clipPath id="clip0_2314_10051">
          <rect width={22} height={24} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default DashboardTopbar;
