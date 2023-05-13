import { defaultImg } from "constants/global";
import React from "react";
import { Link } from "react-router-dom";

const CampaignPerk = () => {
  return (
    <div className="rounded-[10px] bg-white w-full shadow-[-4px_4px_8px_rgba(226,_226,_226,_0.2),_4px_4px_8px_rgba(226,_226,_226,_0.2)]">
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
          <Link className="font-serif text-xl text-text1">
            Special One Camera
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignPerk;