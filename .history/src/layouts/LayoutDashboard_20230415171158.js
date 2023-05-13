import Overlay from "components/common/Overlay";
import DashboardSidebar from "dashboard/DashboardSidebar";
import DashboardTopbar from "dashboard/DashboardTopbar";
import React from "react";
import { Outlet } from "react-router-dom";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-6 md:p-10 bg-lite dark:bg-darkbg">
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
