import { Button } from "components/button";
import Overlay from "components/common/Overlay";
import { Input } from "components/input";
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
          "fixed inset-0 flex items-center justify-center bg-text1 bg-opacity-60 z-50"
        }
        className={
          "bg-white rounded-[20px] px-10 pt-10 pb-[50px] outline-none max-w-[520px] w-full relative"
        }
      >
        <span className="absolute top-[20px] right-10 w-11 h-11 flex items-center justify-center cursor-pointer">
          <IconClose />
        </span>
        <h2 className="text-text1 text-[25px] font-bold mb-10">
          Back this project
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
              Support the project for no reward, just because it speaks to you.
            </p>
          </div>
          <Button className="w-full text-white bg-secondary20">Continue</Button>
        </form>
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
