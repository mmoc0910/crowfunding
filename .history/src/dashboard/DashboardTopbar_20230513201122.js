import React from "react";
import { Button } from "components/button";
import DashboardFund from "dashboard/DashboardFund";
import DashboardSearch from "dashboard/DashboardSearch";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../store/menu/menu-slice";
import classNames from "utils/classNames";
import usePermissionLink from "hooks/usePermissionLink";
import { permissions } from "constants/permissions";
import { defaultImg } from "constants/global";
const DashboardTopbar = () => {
  const { isOpen } = useSelector((state) => state.menu);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div
      className={classNames(
        "relative xl:right-0 flex w-[calc(200%-22px)] md:w-[calc(100%+350px)] xl:w-full mb-[30px] lg:mb-[46px] transition-all duration-300 ease-linear",
        isOpen ? "right-0" : "right-[calc(100%-22px)] md:right-[350px]"
      )}
    >
      <div className="flex items-center w-[calc(50%-11px)] md:w-[350px] xl:hidden">
        <Link reloadDocument to={"/"} relative="/">
          <img src="/Logo.svg" alt="logo" className="w-10 h-10" />
        </Link>
        <Button
          href={usePermissionLink({
            permission: permissions.campaigns.CREATE_CAMPAIGN,
            href: "/campaign/start-campaign",
          })}
          className="bg-secondary20 px-[20px] text-white !text-sm !min-h-[40px] !h-[40px] mx-auto"
        >
          Start a campaign
        </Button>
      </div>
      <div className="flex items-center justify-between w-[calc(50%+11px)] md:w-[calc(100%-350px)] xl:w-full xl:gap-5">
        <div className="flex items-center flex-1 xl:ml-3 xl:gap-14">
          <Link className="hidden xl:block">
            <img src="/Logo.svg" alt="" />
          </Link>
          <div
            className="block cursor-pointer xl:hidden"
            onClick={() => dispatch(toogleMenu())}
          >
            <IconTopBar />
          </div>
          <DashboardSearch></DashboardSearch>
        </div>
        <div className="flex items-center gap-10">
          <DashboardFund></DashboardFund>
          <Button
            href={usePermissionLink({
              permission: permissions.campaigns.CREATE_CAMPAIGN,
              href: "/campaign/start-campaign",
            })}
            className="bg-secondary20 px-[26px] text-white hidden xl:flex"
          >
            Start a campaign
          </Button>
          {user ? (
            <Link to={"/profile"}>
              <img
                src={defaultImg}
                alt="avatar"
                className="w-10 h-10 md:w-[52px] md:h-[52px] object-cover rounded-full flex-shrink-0"
              />
            </Link>
          ) : (
            <Link
              to={"/sign-in"}
              className="text-sm font-medium underline md:text-base text-secondary dark:text-secondary40 decoration-secondary dark:decoration-secondary40"
            >
              sign in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
const IconTopBar = () => {
  return (
    <svg
      className="w-full h-auto"
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
