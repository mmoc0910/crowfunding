import { defaultImg } from "constants/global";
import React from "react";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignSocial from "./parts/CampaignSocial";

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
            className="h-[400px] w-full object-cover rounded-[25px]"
          />
        </div>
        <div className="flex-1 max-w-[445px]">
          <div className="flex items-center justify-between">
            <CampaignCategory size="big" className="!mb-0">
              Film
            </CampaignCategory>
            <CampaignSocial></CampaignSocial>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignView;
