import IconCategory from "icons/IconCategory";
import React from "react";
import { Link } from "react-router-dom";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignMeta from "./parts/CampaignMeta";

const CampaignItem = () => {
  return (
    <div className="w-full bg-white shadow-[0px_2px_4px_rgba(184,184,184,0.03),0px_6px_12px_rgba(184,184,184,0.02),0px_12px_20px_rgba(184,184,184,0.03)] rounded-[15px] dark:bg-dark-secondary">
      <Link className="block w-full h-[180px] rounded-[15px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1612898800042-f6278e97aff9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt=""
          className="object-cover w-full h-full"
        />
      </Link>
      <div className="py-4 pl-5 pr-9">
        <CampaignCategory></CampaignCategory>
        <CampaignTitle>Powered Kits Learning Boxes</CampaignTitle>
        <CampaignDesc>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampaignDesc>
        <div className="flex items-start justify-between gap-[50px] mr-3 mb-4">
          <CampaignMeta info="$2,000" desc="Raised of $1,900"></CampaignMeta>
          <CampaignMeta info="173" desc="Total backers"></CampaignMeta>
        </div>
        <div className="flex gap-[10px] items-center">
          <Link>
            <img
              src="https://images.unsplash.com/photo-1612898800042-f6278e97aff9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt=""
              className="object-cover w-[30px] h-[30px] rounded-full"
            />
          </Link>
          <p className="text-xs text-text3">
            by{" "}
            <Link className="inline text-xs font-semibold text-text2 dark:text-text4">
              Mahfuzul Nabil
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignItem;
