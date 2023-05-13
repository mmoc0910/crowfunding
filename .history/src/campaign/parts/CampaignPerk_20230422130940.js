import { Button } from "components/button";
import { defaultImg } from "constants/global";
import React from "react";
import { Link } from "react-router-dom";

const CampaignPerk = ({ showButton = false }) => {
  return (
    <div className="space-y-[15px] md:space-y-[25px]">
      <div className="rounded-[10px] bg-white w-full dark:bg-dark-secondary dark:shadow-[0px_16px_30px_rgba(33,_25,_25,_0.17),_0px_30px_60px_rgba(1,_2,_9,_0.2)] shadow-[-4px_4px_8px_rgba(226,_226,_226,_0.2),_4px_4px_8px_rgba(226,_226,_226,_0.2)]">
        <img
          src={defaultImg}
          alt=""
          className="h-[200px] md:h-[400px] lg:h-[230px] rounded-[10px] w-full object-cover"
        />
        <div className="p-5 space-y-5">
          <span className="w-[82px] h-[22px] flex items-center justify-center text-xs text-white rounded-[2px] bg-secondary20">
            Featured
          </span>
          <div className="">
            <Link className="mb-1 text-sm font-semibold md:text-xl text-text1 dark:text-white">
              Special One Camera
            </Link>
            <div className="flex items-center gap-[10px] mb-[15px]">
              <p className="text-sm font-bold md:text-xl text-text1 dark:text-white">
                $2,724 USD
              </p>
              <p className="text-xs font-medium md:text-sm text-error">
                <span className="line-through">$1,504 USD</span> (12% OFF)
              </p>
            </div>
            <p className="text-sm font-medium md:text-base text-text1 dark:text-text4">
              Estimated Shipping
            </p>
            <p className="mb-[15px] text-xs md:text-sm text-text2 dark:text-text3">
              October 2022
            </p>
            <p className="text-xs md:text-sm text-text2 dark:text-text3 mb-[10px] md:mb-[15px]">
              <span className="font-medium text-text1 dark:text-white">05</span>{" "}
              claimed
            </p>
            <p className="text-xs md:text-sm text-text2 dark:text-text3">
              Ships worldwide
            </p>
          </div>
        </div>
      </div>
      {showButton && (
        <Button className="w-full text-white bg-secondary20 text-sm md:text-base !min-h-[40px]">
          Get this perk
        </Button>
      )}
    </div>
  );
};

export default CampaignPerk;
