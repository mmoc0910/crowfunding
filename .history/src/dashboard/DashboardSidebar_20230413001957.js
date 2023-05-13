import IconDashboard from "icons/IconDashboard";
import React from "react";
const sidebarLink = [
  {
    icon: "",
  },
];
const DashboardSidebar = () => {
  return (
    <div className="w-full md:w-[76px] shadow-[10px_10px_20px_rgba(218,213,213,0.15)] py-10 px-[14px] rounded-[20px] flex flex-col gap-[30px]">
      <div className="flex items-center gap-[]">
        <div className="w-[48px] h-[48px] rounded-[10px] flex items-center justify-center text-icon-color">
          <IconDashboard></IconDashboard>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
