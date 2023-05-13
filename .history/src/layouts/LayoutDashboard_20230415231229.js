import Overlay from "components/common/Overlay";
import DashboardSidebar from "dashboard/DashboardSidebar";
import DashboardTopbar from "dashboard/DashboardTopbar";
import React from "react";
import ReactModal from "react-modal";
import { Outlet } from "react-router-dom";

const LayoutDashboard = () => {
  return (
    <div className="p-6 md:p-10 bg-lite dark:bg-darkbg">
      <ReactModal
        isOpen
        overlayClassName={"fixed inset-0 flex items-center justify-center"}
        className={"moadl"}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eligendi
        saepe, numquam est voluptas sint a ducimus repudiandae nulla officiis
        officia quis perferendis nihil nemo. Iusto beatae libero consequatur
        delectus.
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

export default LayoutDashboard;
