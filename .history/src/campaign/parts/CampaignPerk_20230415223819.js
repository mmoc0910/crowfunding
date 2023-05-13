import { defaultImg } from "constants/global";
import React from "react";
import { Link } from "react-router-dom";

const CampaignPerk = () => {
  return (
    <div className="rounded-[10px] bg-white w-full dark:bg-dark-secondary dark:shadow-none shadow-[-4px_4px_8px_rgba(226,_226,_226,_0.2),_4px_4px_8px_rgba(226,_226,_226,_0.2)]">
      <img
        src={defaultImg}
        alt=""
        className="h-[230px] rounded-[10px] w-full object-cover"
      />
      <div className="p-5 space-y-5">
        <span className="w-[82px] h-[22px] flex items-center justify-center text-xs text-white rounded-[2px] bg-secondary20">
          Featured
        </span>
        <div className="">
          <Link className="mb-1 text-xl font-semibold text-text1">
            Special One Camera
          </Link>
          <div className="flex items-center gap-[10px] mb-[15px]">
            <p className="text-xl font-bold text-text1">$2,724 USD</p>
            <p className="text-sm font-medium text-error">
              <span className="line-through">$1,504 USD</span> (12% OFF)
            </p>
          </div>
          <p className="font-medium text-text1">Estimated Shipping</p>
          <p className="mb-[15px] text-sm text-text2">October 2022</p>
          <p className="text-sm text-text2 mb-[15px]">
            <span className="font-medium text-text1">05</span> claimed
          </p>
          <p className="text-sm text-text2">Ships worldwide</p>
        </div>
      </div>
    </div>
  );
};

export default CampaignPerk;
