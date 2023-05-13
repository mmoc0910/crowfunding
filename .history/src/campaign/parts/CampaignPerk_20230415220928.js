import { defaultImg } from "constants/global";
import React from "react";

const CampaignPerk = () => {
  return (
    <div className="rounded-[10px] bg-white w-full shadow-[-4px_4px_8px_rgba(226,_226,_226,_0.2),_4px_4px_8px_rgba(226,_226,_226,_0.2)] space-y-5">
      <img
        src={defaultImg}
        alt=""
        className="h-[230px] rounded-[10px] w-full object-cover"
      />
    </div>
  );
};

export default CampaignPerk;