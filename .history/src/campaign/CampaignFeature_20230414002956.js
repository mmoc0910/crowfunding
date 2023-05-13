import React from "react";
import CampaignImage from "./parts/CampaignImage";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-[30px] w-full max-w-[1048px]">
      <CampaignImage></CampaignImage>
      <div className=""></div>
    </div>
  );
};

export default CampaignFeature;
