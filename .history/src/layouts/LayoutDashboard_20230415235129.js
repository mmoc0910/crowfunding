import CampaignPerk from "campaign/parts/CampaignPerk";
import { Button } from "components/button";
import Overlay from "components/common/Overlay";
import { Input } from "components/input";
import { Label } from "components/label";
import DashboardSidebar from "dashboard/DashboardSidebar";
import DashboardTopbar from "dashboard/DashboardTopbar";
import React from "react";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import { Outlet } from "react-router-dom";

const LayoutDashboard = () => {
  const { control } = useForm();
  return (
    <div className="p-6 md:p-10 bg-lite dark:bg-darkbg">
      <ReactModal
        isOpen
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
          <Button className="text-white px-11 bg-primary">Continue</Button>
        </form>
        <div className="space-y-10">
          <CampaignPerk showButton></CampaignPerk>
          <CampaignPerk showButton></CampaignPerk>
          <CampaignPerk showButton></CampaignPerk>
        </div>
      </ReactModal>
      <Overlay></Overlay>
      <DashboardTopbar></DashboardTopbar>
      <div className="flex gap-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1 space-y-[40px]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
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
export default LayoutDashboard;
