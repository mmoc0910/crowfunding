import { defaultImg } from "constants/global";
import React from "react";
import { Link } from "react-router-dom";

const CampaignViewAuthor = () => {
  return (
    <div className="flex items-center gap-3 md:gap-5 mb-[25px]">
      <Link>
        <img
          src={defaultImg}
          alt="author"
          className="w-10 h-10 md:w-[60px] md:h-[60px] rounded-full object-cover"
        />
      </Link>
      <div className="space-y-1">
        <div className="flex items-center gap-4">
          <Link className="text-sm font-medium md:text-lg text-text1 dark:text-white">
            Saiful Islam
          </Link>
          <div className="flex items-center gap-1 text-[#F5A623]">
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-sm font-semibold text-primary20">02 Campaign</p>
          <span className="w-[6px] h-[6px] rounded-full bg-text3"></span>
          <p className="text-sm text-text3">Dhaka, Bangladesh</p>
        </div>
      </div>
    </div>
  );
};
const IconStar = () => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9678 6.1735C14.9278 6.05439 14.8558 5.94863 14.7595 5.86789C14.6632 5.78715 14.5466 5.73458 14.4223 5.71597L10.0707 5.05116L8.1178 0.891791C8.06273 0.774649 7.97546 0.6756 7.86619 0.606221C7.75691 0.536843 7.63015 0.5 7.50071 0.5C7.37127 0.5 7.24451 0.536843 7.13523 0.606221C7.02596 0.6756 6.93869 0.774649 6.88362 0.891791L4.93077 5.05116L0.579114 5.71597C0.455165 5.73487 0.338826 5.78757 0.242885 5.86829C0.146944 5.94901 0.0751162 6.05462 0.0352983 6.17351C-0.00451953 6.2924 -0.0107859 6.41996 0.0171881 6.54218C0.045162 6.6644 0.106293 6.77655 0.193861 6.86628L3.36521 10.1133L2.61516 14.7077C2.59469 14.8338 2.61005 14.9631 2.65949 15.0809C2.70893 15.1987 2.79047 15.3002 2.8948 15.3739C2.99913 15.4476 3.12207 15.4905 3.2496 15.4977C3.37714 15.505 3.50414 15.4762 3.61613 15.4148L7.50275 13.2683L11.3894 15.4148C11.5014 15.4768 11.6285 15.5059 11.7563 15.499C11.8841 15.4921 12.0074 15.4493 12.112 15.3756C12.2167 15.3019 12.2985 15.2003 12.3481 15.0823C12.3976 14.9643 12.413 14.8347 12.3924 14.7084L11.6423 10.114L14.8116 6.86628C14.8988 6.77629 14.9595 6.66403 14.987 6.54182C15.0146 6.41962 15.0079 6.29218 14.9678 6.1735Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default CampaignViewAuthor;
