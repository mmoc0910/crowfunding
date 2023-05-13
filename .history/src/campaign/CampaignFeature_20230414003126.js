import React from "react";
import CampaignImage from "./parts/CampaignImage";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-[30px] w-full max-w-[1048px]">
      <CampaignImage className="h-[266px]"></CampaignImage>
      <div className="max-w-[435px] w-full"></div>
    </div>
  );
};

export default CampaignFeature;
