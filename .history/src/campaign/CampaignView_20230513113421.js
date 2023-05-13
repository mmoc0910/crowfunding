import React from "react";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignSocial from "./parts/CampaignSocial";
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
import ReactModal from "react-modal";
import { Label } from "components/label";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";

const CampaignView = () => {
  const { control } = useForm();
  const [show, setShow] = React.useState(false);
  const axiosPrivate = useAxiosPrivate();
  const [campaigns, setCampaigns] = React.useState([]);
  const { slug } = useParams();
  React.useState(() => {
    console.log(slug);
    async function fetchCampaign() {
      const response = await axiosPrivate.get(`api/campaigns?q=${slug}`);
      console.log(response);
    }
    fetchCampaign();
  }, [slug]);
  React.useEffect(() => {
    async function fetchCampaigns() {
      try {
        const response = await axiosPrivate.get("/api/campaigns");
        setCampaigns(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCampaigns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="w-full rounded-[15px] md:rounded-[25px] h-[119px] md:h-[140px] overflow-hidden relative z-[1] mb-10">
        <img
          src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute z-[2] inset-0 w-full h-full bg-[linear-gradient(179.14deg,_rgba(32,_18,_63,_0)_-7.14%,_#000000ab_87.01%)] bg-opacity-60 flex items-center justify-center">
          <h2 className="font-bold text-xl md:text-[40px] text-white">
            Education
          </h2>
        </div>
      </div>
      <div className="xl:w-[1066px] flex lg:flex-row flex-col gap-[10px] lg:gap-[30px] xl:gap-10 mb-[70px]">
        <div className="space-y-[30px] w-full lg:w-[calc(55%-15px)] xl:w-[583px]">
          <CampaignMainImage />
        </div>
        <div className="shrink-0 w-full flex flex-col lg:w-[calc(45%-15px)] xl:w-[445px] md:px-14 lg:px-0">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <CampaignCategory size="big" className="mb-0">
              Film
            </CampaignCategory>
            <CampaignSocial></CampaignSocial>
          </div>
          <h1 className="mb-4 text-base font-bold md:text-xl text-text1 dark:text-white lg:text-sm">
            Meet - AI Virtual Background 4K Webcam
          </h1>
          <CampaignDesc className="text-xs md:text-sm mb-5 md:mb-[25px]">
            The first-ever 4K webcam that embeded AI technology to protect your
            background during video calls.
          </CampaignDesc>
          <CampaignViewAuthor></CampaignViewAuthor>
          <div className="py-[10px] mb-4 order-3 lg:order-1">
            <div className="w-full bg-[#EFEFEF] rounded-[5px] h-[5px] dark:bg-dark-strock">
              <div className="w-3/4 bg-primary rounded-[5px] h-[5px] dark:bg-primary20"></div>
            </div>
          </div>
          <div className="flex items-center justify-between order-2 mb-2 lg:mb-4">
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
          <Button
            className="order-3 w-full text-white bg-primary"
            type="button"
            onClick={() => setShow(true)}
          >
            Back this project
          </Button>
        </div>
      </div>
      <div className="w-full md:pt-16 mb-[70px]">
        <div className="flex items-center justify-between py-5 lg:py-[34px]">
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
          <Button className="px-[35px] bg-primary text-white hidden lg:block">
            Back this project
          </Button>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[124px] md:pt-7">
          <div className="w-full">
            <h2 className="mb-[15px] md:mb-5 text-sm font-semibold lg:text-lg text-text1 dark:text-white">
              Story
            </h2>
            <div className="">
              <p className="dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                officia. Excepturi accusantium maiores, tempore voluptatem
                necessitatibus iste corrupti sint magnam ad, minus laboriosam
                consectetur libero neque iure ratione alias debitis?
              </p>
            </div>
          </div>
          <div className="lg:max-w-[440px] w-full">
            <h2 className="mb-[15px] md:mb-5 text-sm font-semibold lg:text-lg text-text1 dark:text-white">
              Support
            </h2>
            <div className="xl:mx-2">
              <form className="px-[25px] py-5 rounded-[10px] dark:bg-dark-secondary dark:shadow-none bg-white shadow-[-4px_4px_8px_rgba(226,_226,_226,_0.2),_4px_4px_8px_rgba(226,_226,_226,_0.2)] mb-10 md:mb-[60px]">
                <h4 className="p-[10px] text-text3 font-medium md:text-xl text-center mb-[15px] md:mb-5">
                  Pledge without reward
                </h4>
                <Input
                  control={control}
                  type="number"
                  name="abc"
                  placeholder="$10"
                  className="!px-5 !py-3 !placeholder:text-text4 !text-lg !font-medium mb-5"
                ></Input>
                <div className="bg-[#F7F7F7] p-[15px] md:p-5 rounded-[10px] mb-[15px] md:mb-5 dark:bg-darkbg">
                  <h4 className="mb-[10px] md:mb-5 text-xs font-semibold md:text-sm text-text2 dark:text-white">
                    Back it because you believe in it.
                  </h4>
                  <p className="text-xs md:text-sm text-text3">
                    Support the project for no reward, just because it speaks to
                    you.
                  </p>
                </div>
                <Button className="w-full text-white bg-secondary20">
                  Continue
                </Button>
              </form>
              <div className="space-y-[30px] mb-10 lg:mb-[70px]">
                <CampaignPerk />
                <CampaignPerk />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-24">
        <Heading className="mb-10">You also may be interested in</Heading>
        <CampaignGrid>
          {campaigns.length > 0 &&
            campaigns.map((campaign) => (
              <CampaignItem campaign={campaign} key={uuidv4()}></CampaignItem>
            ))}
        </CampaignGrid>
      </div>
      <ReactModal
        isOpen={show}
        overlayClassName={
          "fixed inset-0 flex items-center justify-center dark:bg-darkbg dark:bg-opacity-90 bg-text1 bg-opacity-60 z-50"
        }
        className={
          "bg-white rounded-[20px] p-[48px_24px_30px_24px] md:px-10 md:pt-[55px] md:pb-[50px] outline-none max-w-[calc(100vw-48px)] md:max-w-[520px] w-full relative overflow-scroll max-h-[85%] scroll-hidden dark:bg-dark-secondary"
        }
      >
        <span
          className="absolute top-4 right-4 md:top-[20px] md:right-10 w-11 h-11 flex items-center justify-center cursor-pointer text-text1 dark:text-white"
          onClick={() => setShow(false)}
        >
          <IconClose />
        </span>
        <h2 className="text-text1 text-xl md:text-[25px] font-bold mb-5 md:mb-10 text-center dark:text-white">
          Back this project
        </h2>
        <form className="mb-[30px] md:mb-[60px]">
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
          <p className="mb-5 text-xs md:text-sm text-text3">
            Contribution are not associatied with perks
          </p>
          <Button className="text-white px-11 bg-primary">Continue</Button>
        </form>
        <div className="space-y-[30px] md:space-y-10">
          <CampaignPerk showButton></CampaignPerk>
          <CampaignPerk showButton></CampaignPerk>
          <CampaignPerk showButton></CampaignPerk>
        </div>
      </ReactModal>
    </>
  );
};
const IconClose = () => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 1.61143L14.3886 0L8 6.38857L1.61143 0L0 1.61143L6.38857 8L0 14.3886L1.61143 16L8 9.61143L14.3886 16L16 14.3886L9.61143 8L16 1.61143Z"
        fill="currentcolor"
      />
    </svg>
  );
};
export default CampaignView;
