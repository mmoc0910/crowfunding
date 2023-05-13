import { defaultImg } from "constants/global";
import React from "react";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignSocial from "./parts/CampaignSocial";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignMeta from "./parts/CampaignMeta";
import { Button } from "components/button";
import CampaignViewAuthor from "./parts/CampaignViewAuthor";
import { useForm } from "react-hook-form";
import { Input } from "components/input";
import CampaignPerk from "./parts/CampaignPerk";
import Heading from "components/common/Heading";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";
import CampaignMainImage from "./CampaignMainImage";

const CampaignView = () => {
  const { control } = useForm();
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
      <div className="lg:w-[1066px] flex gap-10 mb-[70px]">
        <div className="space-y-[30px] w-3/4">
          <CampaignMainImage />
          {/* <img
            src={defaultImg}
            alt=""
            className="h-[395px] w-full object-cover rounded-[25px]"
          />
          <div className="flex items-center justify-center w-full gap-5">
            <img
              src="https://images.unsplash.com/photo-1681457550293-5a516cb5dedf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80"
              alt=""
              className="object-cover w-[90px] h-[70px] rounded-[5px]"
            />
            <img
              src={defaultImg}
              alt=""
              className="object-cover w-[90px] h-[70px] rounded-[5px]"
            />
            <img
              src="https://images.unsplash.com/photo-1681375020549-b6c39cb7cd51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              alt=""
              className="object-cover w-[90px] h-[70px] rounded-[5px]"
            />
            <img
              src="https://images.unsplash.com/photo-1681319350180-6c7844a09c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
              className="object-cover w-[90px] h-[70px] rounded-[5px]"
            />
          </div> */}
        </div>
        <div className="shrink-0 w-[445px]">
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
          <div className="py-[10px] mb-3">
            <div className="w-full bg-[#EFEFEF] rounded-[5px] h-[5px] dark:bg-dark-strock">
              <div className="w-3/4 bg-primary rounded-[5px] h-[5px] dark:bg-primary20"></div>
            </div>
          </div>
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
      <div className="w-full pt-24 mb-[70px]">
        <div className="flex items-center justify-between py-[34px]">
          <div className="flex items-center gap-[50px]">
            <button className="text-sm font-semibold text-secondary">
              Campgain
            </button>
            <button className="text-sm font-medium text-text3 dark:txt">
              Risks
            </button>
            <button className="text-sm font-medium text-text3">FAQ</button>
            <button className="text-sm font-medium text-text3">Updates</button>
            <button className="text-sm font-medium text-text3">Comments</button>
          </div>
          <Button className="px-[35px] bg-primary text-white">
            Back this project
          </Button>
        </div>
        <div className="flex gap-[124px] pt-7">
          <div className="w-full">
            <h2 className="mb-5 text-lg font-semibold text-text1 dark:text-white">
              Story
            </h2>
            <p className="dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              officia. Excepturi accusantium maiores, tempore voluptatem
              necessitatibus iste corrupti sint magnam ad, minus laboriosam
              consectetur libero neque iure ratione alias debitis?
            </p>
          </div>
          <div className="max-w-[440px] w-full">
            <h2 className="mb-5 text-lg font-semibold text-text1 dark:text-white">
              Support
            </h2>
            <form className="px-[25px] py-5 rounded-[10px] dark:bg-dark-secondary dark:shadow-none bg-white shadow-[-4px_4px_8px_rgba(226,_226,_226,_0.2),_4px_4px_8px_rgba(226,_226,_226,_0.2)] mb-[60px]">
              <h4 className="p-[10px] text-text3 font-medium text-xl text-center mb-5">
                Pledge without reward
              </h4>
              <Input
                control={control}
                type="number"
                name="abc"
                placeholder="$10"
                className="!px-5 !py-3 !placeholder:text-text4 !text-lg !font-medium mb-5"
              ></Input>
              <div className="bg-[#F7F7F7] p-5 rounded-[10px] mb-5 dark:bg-darkbg">
                <h4 className="mb-5 text-sm font-semibold text-text2 dark:text-white">
                  Back it because you believe in it.
                </h4>
                <p className="text-sm text-text3">
                  Support the project for no reward, just because it speaks to
                  you.
                </p>
              </div>
              <Button className="w-full text-white bg-secondary20">
                Continue
              </Button>
            </form>
            <div className="space-y-[30px] mb-[70px]">
              <CampaignPerk />
              <CampaignPerk />
              <CampaignPerk />
              <CampaignPerk />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-24">
        <Heading className="mb-10">You also may be interested in</Heading>
        <CampaignGrid>
          <CampaignItem />
          <CampaignItem />
          <CampaignItem />
          <CampaignItem />
        </CampaignGrid>
      </div>
    </>
  );
};

export default CampaignView;
