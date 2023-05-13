import CampaignFeature from "campaign/CampaignFeature";
import { Button } from "components/button";
import Heading from "components/common/Heading";
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import { Label } from "components/label";
import { Input } from "postcss";
import CampaignPerk from "campaign/parts/CampaignPerk";

const CampaignPage = () => {
  const { control } = useForm();
  return (
    <>
      <div className="lg:flex pl-4 pr-10 py-5 md:px-10 md:py-8 dark:bg-dark-secondary rounded-[20px]">
        <div className="flex items-start gap-[15px] md:gap-[25px] w-full">
          <button className="flex items-center justify-center bg-secondary40 rounded-full w-10 h-10 md:w-[54px] md:h-[54px] shrink-0">
            <IconPlus />
          </button>
          <div className="w-full lg:flex lg:items-center lg:justify-between">
            <div className="space-y-2 mb-[15px] lg:mb-0">
              <h1 className="text-text1 font-semibold text-sm md:text-[22px] dark:text-white">
                Create Your Campaign
              </h1>
              <p className="text-xs md:text-sm text-text3">
                Jump right into our editor and create your first Virtue
                campaign!
              </p>
              <Link className="text-xs md:text-sm text-primary">
                Need any help? Learn More...
              </Link>
            </div>
            <Button
              className="text-secondary bg-[#EEEAFD] px-[19px] dark:text-white dark:bg-[#352A65] !text-sm max-w-max !py-[9px] !min-h-max"
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
      <ReactModal
        isOpen={true}
        overlayClassName={
          "fixed inset-0 flex items-center justify-center dark:bg-darkbg dark:bg-opacity-90 bg-text1 bg-opacity-60 z-50"
        }
        className={
          "bg-white rounded-[20px] px-10 pt-[55px] pb-[50px] outline-none max-w-[520px] w-full relative overflow-scroll max-h-[85%] scroll-hidden dark:bg-dark-secondary"
        }
      >
        <span className="absolute top-[20px] right-10 w-11 h-11 flex items-center justify-center cursor-pointer text-text1 dark:text-white">
          <IconClose />
        </span>
        <h2 className="text-text1 text-[25px] font-bold mb-10 text-center dark:text-white">
          Back this project
        </h2>
        <form className="mb-[60px]">
          <Label className="mb-[10px] inline-block">
            Enter the contribute amount
          </Label>
          <Input
            control={control}
            type="number"
            name="abc"
            placeholder="$10"
            className="!px-5 !py-3 !placeholder:text-text4 !text-lg !font-medium mb-5"
          ></Input>
          <p className="mb-5 text-sm text-text3">
            Contribution are not associatied with perks
          </p>
          <ButtonGoogle className="text-white px-11 bg-primary">
            Continue
          </ButtonGoogle>
        </form>
        <div className="space-y-10">
          <CampaignPerk showButton></CampaignPerk>
          <CampaignPerk showButton></CampaignPerk>
          <CampaignPerk showButton></CampaignPerk>
        </div>
      </ReactModal>
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
