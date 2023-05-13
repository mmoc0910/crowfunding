import Overlay from "components/common/Overlay";
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
          "fixed inset-0 flex items-center justify-center bg-text1 bg-opacity-60 z-20"
        }
        className={
          "bg-white rounded-[20px] px-10 pt-10 pb-[50px] outline-none max-w-[520px] w-full relative"
        }
      >
        <span className="absolute">
          <IconClose />
        </span>
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
