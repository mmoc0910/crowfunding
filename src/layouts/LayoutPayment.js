import { defaultImg } from "constants/global";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const LayoutPayment = ({ children }) => {
  return (
    <div className="bg-lite dark:bg-darkbg">
      <div className="max-w-[1090px] mx-auto px-[24px] md:px-[40px] pt-[24px] md:pt-10 pb-28">
        <div className="flex items-center justify-between mb-5 md:mb-10">
          <Link>
            <img src="/Logo.svg" alt="" />
          </Link>
          <Link>
            <img
              src={defaultImg}
              alt="avatar"
              className="w-[52px] h-[52px] object-cover rounded-full"
            />
          </Link>
        </div>
        <Link className="flex max-w-max items-center gap-[10px] mb-5 md:mb-10">
          <span className="text-icon-color">
            <IconBack />
          </span>
          <span className="text-sm font-semibold text-primary">Back</span>
        </Link>
        <div className="w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};
const IconBack = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1233_33731)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.1713 18.277L10.4306 12.3975C10.2225 12.216 10.201 11.9001 10.3825 11.692C10.3971 11.6753 10.4128 11.6595 10.4295 11.6449L17.1702 5.72823C17.3777 5.54607 17.6936 5.56664 17.8758 5.77417C17.9558 5.8654 18 5.98263 18 6.10401V17.9002C18 18.1764 17.7761 18.4002 17.5 18.4002C17.3792 18.4002 17.2624 18.3565 17.1713 18.277Z"
          fill="currentColor"
        />
        <path
          d="M8 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H8C8.55228 18 9 17.5523 9 17V7C9 6.44772 8.55228 6 8 6Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1233_33731">
          <rect width={24} height={24} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default LayoutPayment;
