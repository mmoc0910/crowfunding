import IconCampaign from "icons/IconCampaign";
import IconDarkMode from "icons/IconDarkMode";
import IconDashboard from "icons/IconDashboard";
import IconLogout from "icons/IconLogout";
import IconPayment from "icons/IconPayment";
import IconProfile from "icons/IconProfile";
import IconWithDraw from "icons/IconWithDraw";
import React from "react";
import { NavLink } from "react-router-dom";
const sidebarLink = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "",
  },
  {
    icon: <IconWithDraw></IconWithDraw>,
    title: "Withdraw",
    url: "",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "",
  },
  {
    icon: <IconDarkMode></IconDarkMode>,
    title: "Light/Dark",
    url: "",
  },
];
const DashboardSidebar = () => {
  return (
    <div className="w-full md:w-[76px] shadow-[10px_10px_20px_rgba(218,213,213,0.15)] py-10 px-[14px] rounded-[20px] flex flex-col gap-[30px]">
      {sidebarLink.length > 0 &&
        sidebarLink.map((item) => (
          <NavLink className="flex items-center gap-5">
            <span className="w-full md:w-[48px] md:h-[48px] px-5 py-[14px] md:px-0 md:py-0 gap-5 md:gap-0 md:rounded-[10px] flex items-center md:justify-center text-icon-color flex-shrink-0">
              {item.icon}
              <span className="text-sm font-medium md:hidden">ahiii</span>
            </span>
          </NavLink>
        ))}
    </div>
  );
};

export default DashboardSidebar;
