import IconDashboard from "icons/IconDashboard";
import React from "react";
import { NavLink } from "react-router-dom";
const sidebarLink = [
  {
    icon: "",
  },
];
const DashboardSidebar = () => {
  return (
    <div className="w-full md:w-[76px] shadow-[10px_10px_20px_rgba(218,213,213,0.15)] py-10 px-[14px] rounded-[20px] flex flex-col gap-[30px]">
      <NavLink className="flex items-center gap-5">
        <div className="w-full md:w-[48px] md:h-[48px] px-5 py-[14px] md:px-0 md:py-0 gap-5 md:gap-0 md:rounded-[10px] flex items-center md:justify-center text-icon-color flex-shrink-0">
          <IconDashboard></IconDashboard>
          <span className="text-sm font-medium md:hidden">ahiii</span>
        </div>
      </NavLink>
    </div>
  );
};

export default DashboardSidebar;
