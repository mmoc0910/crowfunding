import React from "react";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignMeta from "./parts/CampaignMeta";
import CampaignAuthor from "./parts/CampaignAuthor";
import CampaignImage from "./parts/CampaignImage";
import { defaultImg } from "constants/global";

const CampaignItem = ({ campaign }) => {
  return (
    <div className="xl:w-full bg-white shadow-[0px_2px_4px_rgba(184,184,184,0.03),0px_6px_12px_rgba(184,184,184,0.02),0px_12px_20px_rgba(184,184,184,0.03)] dark:shadow-none rounded-[15px] dark:bg-dark-secondary section-item">
      <CampaignImage image={campaign.images[0] || defaultImg}></CampaignImage>
      <div className="py-4 pl-5 pr-9">
        <CampaignCategory>{campaign.category}</CampaignCategory>
        <CampaignTitle>{campaign.title}</CampaignTitle>
        <CampaignDesc>{campaign.short_description}</CampaignDesc>
        <div className="flex items-start justify-between mb-5 mr-3">
          <CampaignMeta info="$2,000" desc="Raised of $1,900"></CampaignMeta>
          <CampaignMeta info="173" desc="Total backers" s></CampaignMeta>
        </div>
        <CampaignAuthor author="Mahfuzul Nabil"></CampaignAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
