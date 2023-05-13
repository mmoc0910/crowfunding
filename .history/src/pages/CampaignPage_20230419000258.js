import CampaignFeature from "campaign/CampaignFeature";
import { Button } from "components/button";
import Heading from "components/common/Heading";
import React from "react";
import { Link } from "react-router-dom";

const CampaignPage = () => {
  return (
    <>
      <div className="lg:flex pl-4 pr-10 py-5 md:px-10 md:py-8 dark:bg-dark-secondary rounded-[20px]">
        <div className="flex items-start gap-[15px] lg:gap-[25px] w-full">
          <button className="flex items-center justify-center bg-secondary40 rounded-full w-10 h-10 lg:w-[54px] lg:h-[54px] shrink-0">
            <IconPlus />
          </button>
          <div className="w-full lg:flex lg:items-center lg:justify-between">
            <div className="space-y-2 mb-[15px] lg:mb-0">
              <h1 className="text-text1 font-semibold text-sm lg:text-[22px] dark:text-white">
                Create Your Campaign
              </h1>
              <p className="text-xs lg:text-sm text-text3">
                Jump right into our editor and create your first Virtue
                campaign!
              </p>
              <Link className="text-xs lg:text-sm text-primary">
                Need any help? Learn More...
              </Link>
            </div>
            <Button
              className="text-secondary bg-[#EEEAFD] px-[19px] dark:text-white dark:bg-[#352A65] !text-sm"
              href={"/campaign/start-campaign"}
            >
              Create campaign
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-[50px]">
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
            <Button className="px-14 text-secondary bg-[#EEEAFD] mx-auto dark:text-white dark:bg-[#352A65]">
              See more+
            </Button>
          </div>
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
            <Button className="px-14 text-secondary bg-[#EEEAFD] mx-auto dark:text-white dark:bg-[#352A65]">
              See more+
            </Button>
          </div>
        </div>
      </div>
    </>
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
