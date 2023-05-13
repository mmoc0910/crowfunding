import { defaultImg } from "constants/global";
import React from "react";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignSocial from "./parts/CampaignSocial";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignMeta from "./parts/CampaignMeta";
import { Button } from "components/button";
import CampaignViewAuthor from "./parts/CampaignViewAuthor";

const CampaignView = () => {
  return (
    <>
      <div className="w-full rounded-[25px] h-[140px] overflow-hidden relative z-[1] mb-10">
        <img
          src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute z-[2] inset-0 w-full h-full bg-[linear-gradient(179.14deg,_rgba(32,_18,_63,_0)_-7.14%,_#000000ab_87.01%)] bg-opacity-60 flex items-center justify-center">
          <h1 className="font-bold text-[40px] text-white">Education</h1>
        </div>
      </div>
      <div className="lg:w-[1066px] flex gap-10">
        <div className="">
          <img
            src={defaultImg}
            alt=""
            className="h-[380px] w-full object-cover rounded-[25px]"
          />
        </div>
        <div className="flex-1 max-w-[445px]">
          <div className="flex items-center justify-between mb-4">
            <CampaignCategory size="big" className="mb-0">
              Film
            </CampaignCategory>
            <CampaignSocial></CampaignSocial>
          </div>
          <CampaignTitle className="mb-4 text-xl font-bold">
            Meet - AI Virtual Background 4K Webcam
          </CampaignTitle>
          <CampaignDesc className="text-sm mb-[25px]">
            The first-ever 4K webcam that embeded AI technology to protect your
            background during video calls.
          </CampaignDesc>
          <CampaignViewAuthor></CampaignViewAuthor>
          <div className="flex items-center justify-between mb-4">
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
          <Button className="w-full text-white bg-primary">
            Back this project
          </Button>
        </div>
      </div>
    </>
  );
};

export default CampaignView;
