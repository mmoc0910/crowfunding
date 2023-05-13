import React from "react";
import CampaignImage from "./parts/CampaignImage";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignTitle from "./parts/CampaignTitle";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-[30px] w-full max-w-[1048px]">
      <CampaignImage className="h-[266px]"></CampaignImage>
      <div className="max-w-[435px] w-full">
        <CampaignCategory size="big">Architecture</CampaignCategory>
        <CampaignTitle className="mb-4 text-xl font-bold">
          Remake - We Make architecture exhibition
        </CampaignTitle>
      </div>
    </div>
  );
};

export default CampaignFeature;
