import React from "react";
import { Button } from "components/button";
import DashboardFund from "dashboard/DashboardFund";
import DashboardSearch from "dashboard/DashboardSearch";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../store/menu/menu-slice";
import classNames from "utils/classNames";
const DashboardTopbar = () => {
  const { isOpen } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  return (
    <div className="relative w-full">
      <div
        className={classNames(
          "relative right-[calc(100%-22px)] flex w-[calc(200%-22px)] lg:w-full mb-[30px] lg:mb-[46px]"
        )}
      >
        <div className="flex items-center w-[calc(50%-11px)] lg:hidden">
          <Link>
            <img src="/Logo.svg" alt="logo" className="w-10 h-10" />
          </Link>
          <Button
            href={"/campaign/start-campaign"}
            className="bg-secondary20 px-[20px] text-white !text-sm !min-h-[40px] !h-[40px] mx-auto"
          >
            Start a campaign
          </Button>
        </div>
        <div className="flex items-center justify-between w-[calc(50%+11px)] lg:w-full lg:gap-5">
          <div className="flex items-center flex-1 lg:ml-3 lg:gap-14">
            <Link className="hidden lg:block">
              <img src="/Logo.svg" alt="" />
            </Link>
            <div
              className="block w-10 cursor-pointer lg:hidden"
              onClick={() => dispatch(toogleMenu())}
            >
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
    </div>
  );
};
const IconTopBar = () => {
  return (
    <svg
      className="w-3/4 h-auto md:w-full"
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
