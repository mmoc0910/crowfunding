import React from "react";
import CampaignImage from "./parts/CampaignImage";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignMeta from "./parts/CampaignMeta";

const CampaignFeature = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:gap-[30px] w-full max-w-[1048px]">
      <CampaignImage className="h-[266px]"></CampaignImage>
      <div className="max-w-[435px] w-full">
        <CampaignCategory size="big">Architecture</CampaignCategory>
        <CampaignTitle className="mb-4 font-bold lg:text-xl">
          Remake - We Make architecture exhibition
        </CampaignTitle>
        <CampaignDesc className="text-sm">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampaignDesc>
        <div className="py-[10px] mb-3">
          <div className="w-full bg-[#EFEFEF] rounded-[5px] h-[5px] dark:bg-dark-strock">
            <div className="w-3/4 bg-primary rounded-[5px] h-[5px] dark:bg-primary20"></div>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <CampaignMeta
            info="$2,000"
            desc="Raised of $2,500"
            size="big"
          ></CampaignMeta>
          <CampaignMeta
            info="173"
            desc="Total backers"
            size="big"
          ></CampaignMeta>
          <CampaignMeta info="30" desc="Days left" size="big"></CampaignMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
