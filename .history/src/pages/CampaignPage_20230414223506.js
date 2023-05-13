import CampaignFeature from "campaign/CampaignFeature";
import { Button } from "components/button";
import Heading from "components/common/Heading";
import LayoutDashboard from "layouts/LayoutDashboard";
import React from "react";
import { Link } from "react-router-dom";

const CampaignPage = () => {
  return (
    <LayoutDashboard>
      <div className="flex items-center justify-between px-10 py-8">
        <div className="flex items-start gap-[25px]">
          <button className="flex items-center justify-center bg-secondary40 rounded-full w-[54px] h-[54px]">
            <IconPlus />
          </button>
          <div className="space-y-2">
            <h1 className="text-text1 font-semibold text-[22px]">
              Create Your Campaign
            </h1>
            <p className="text-sm text-text3">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <Link className="text-sm text-primary">
              Need any help? Learn More...
            </Link>
          </div>
        </div>
        <Button
          className="text-secondary bg-[#EEEAFD] px-[30px]"
          href={"/campaign/start-campaign"}
        >
          Create campaign
        </Button>
      </div>
      <div>
        <Heading>
          Your Campaign{" "}
          <span className="text-secondary dark:text-inherit">(4)</span>
        </Heading>
        <div className="space-y-10">
          <CampaignFeature></CampaignFeature>
          <CampaignFeature></CampaignFeature>
          <CampaignFeature></CampaignFeature>
          <CampaignFeature></CampaignFeature>
          <Button className="px-14 text-secondary bg-[#EEEAFD] mx-auto">
            See more+
          </Button>
        </div>
      </div>
    </LayoutDashboard>
  );
};
const IconPlus = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V19"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12H19"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default CampaignPage;
