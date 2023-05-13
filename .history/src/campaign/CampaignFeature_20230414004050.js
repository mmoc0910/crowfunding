import React from "react";
import CampaignImage from "./parts/CampaignImage";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignMeta from "./parts/CampaignMeta";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-[30px] w-full max-w-[1048px]">
      <CampaignImage className="h-[266px]"></CampaignImage>
      <div className="max-w-[435px] w-full">
        <CampaignCategory size="big">Architecture</CampaignCategory>
        <CampaignTitle className="mb-4 text-xl font-bold">
          Remake - We Make architecture exhibition
        </CampaignTitle>
        <CampaignDesc className="text-sm">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampaignDesc>
        <div className="py-[10px] mb-3">
          <div className="w-full bg-[#EFEFEF] rounded-[5px] h-[5px]">
            <div className="w-3/4 bg-primary rounded-[5px] h-[5px]"></div>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <CampaignMeta
            info="$2,000"
            desc="Raised of $2,500"
            size="big"
          ></CampaignMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
