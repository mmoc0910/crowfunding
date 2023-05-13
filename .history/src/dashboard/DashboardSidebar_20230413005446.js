import IconCampaign from "icons/IconCampaign";
import IconDarkMode from "icons/IconDarkMode";
import IconDashboard from "icons/IconDashboard";
import IconLogout from "icons/IconLogout";
import IconPayment from "icons/IconPayment";
import IconProfile from "icons/IconProfile";
import IconWithDraw from "icons/IconWithDraw";
import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "utils/classNames";
const sidebarLink = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithDraw></IconWithDraw>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "#",
    onclick: () => {},
  },
  {
    icon: <IconDarkMode></IconDarkMode>,
    title: "Light/Dark",
    url: "#",
    onclick: () => {},
  },
];
const DashboardSidebar = () => {
  return (
    <div className="w-full md:w-[76px] shadow-[10px_10px_20px_rgba(218,213,213,0.15)] py-10 px-[14px] rounded-[20px] flex flex-col gap-[30px]">
      {sidebarLink.length > 0 &&
        sidebarLink.map((item) => (
          <NavLink
            to={item.url}
            className={`w-full md:w-[48px] md:h-[48px] px-5 py-[14px] md:px-0 md:py-0 gap-5 md:gap-0 md:rounded-[10px] flex items-center md:justify-center text-icon-color flex-shrink-0 md:last:bg-white md:last:shadow-[10px_10px_20px_rgba(211,211,211,0.25)] md:last:mt-[167px] $(isActive ? )`}
            // className={classNames(
            //   "w-full md:w-[48px] md:h-[48px] px-5 py-[14px] md:px-0 md:py-0 gap-5 md:gap-0 md:rounded-[10px] flex items-center md:justify-center text-icon-color flex-shrink-0 md:last:bg-white md:last:shadow-[10px_10px_20px_rgba(211,211,211,0.25)] md:last:mt-[167px]",
            //   ({ isActive }) => (isActive ? "bg-black" : "")
            // )}
            key={item.title}
          >
            <span>{item.icon}</span>
            <span className="text-sm font-medium md:hidden">{item.title}</span>
          </NavLink>
        ))}
    </div>
  );
};

export default DashboardSidebar;
