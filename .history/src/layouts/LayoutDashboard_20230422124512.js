import Overlay from "components/common/Overlay";
import DashboardSidebar from "dashboard/DashboardSidebar";
import DashboardTopbar from "dashboard/DashboardTopbar";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import classNames from "utils/classNames";

const LayoutDashboard = () => {
  const { isOpen } = useSelector((state) => state.menu);
  return (
    <div className="m-6 overflow-hidden bg-lite dark:bg-darkbg md:m-10 md:mb-14">
      <div className="w-full">
        <Overlay></Overlay>
        <DashboardTopbar></DashboardTopbar>
        <div
          className={classNames(
            "flex md:gap-5 xl:gap-10 w-[200%] md:w-[calc(100%+350px)] xl:right-0 xl:w-full relative transition-all duration-300",
            isOpen ? "right-0" : "right-full md:right-[350px]"
          )}
        >
          <DashboardSidebar></DashboardSidebar>
          <div className="space-y-[30px] lg:space-y-[40px] w-1/2 md:flex-1">
            <Outlet></Outlet>
          </div>
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
