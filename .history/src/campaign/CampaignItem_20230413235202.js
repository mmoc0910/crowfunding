import React from "react";
import { Link } from "react-router-dom";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignMeta from "./parts/CampaignMeta";
import { v4 as uuidv4 } from "uuid";
import CampaignAuthor from "./parts/CampaignAuthor";
import CampaignImage from "./parts/CampaignImage";

const CampaignItem = () => {
  return (
    <div className="w-full bg-white shadow-[0px_2px_4px_rgba(184,184,184,0.03),0px_6px_12px_rgba(184,184,184,0.02),0px_12px_20px_rgba(184,184,184,0.03)] rounded-[15px] dark:bg-dark-secondary">
      <CampaignImage></CampaignImage>
      <div className="py-4 pl-5 pr-9">
        <CampaignCategory></CampaignCategory>
        <CampaignTitle>Powered Kits Learning Boxes</CampaignTitle>
        <CampaignDesc>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampaignDesc>
        <div className="flex items-start justify-between gap-[50px] mr-3 mb-5">
          <CampaignMeta info="$2,000" desc="Raised of $1,900"></CampaignMeta>
          <CampaignMeta info="173" desc="Total backers"></CampaignMeta>
        </div>
        <CampaignAuthor author="Mahfuzul Nabil"></CampaignAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
