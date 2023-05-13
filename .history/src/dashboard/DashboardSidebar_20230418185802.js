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
import DashboardFund from "./DashboardFund";
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
    url: "/logout",
    onclick: () => {},
  },
  {
    icon: <IconDarkMode></IconDarkMode>,
    title: "Light/Dark",
    url: "/darkmode",
    onclick: () => {},
  },
];
const DashboardSidebar = () => {
  return (
    <div className="order-1 w-1/2 lg:w-[76px] dark:shadow-none dark:bg-dark-secondary shadow-[10px_10px_20px_rgba(218,213,213,0.15)] px-0 py-0 md:py-10 md:px-[14px] rounded-none lg:rounded-[20px] flex flex-col gap-4 lg:gap-[30px] md:h-[749px]">
      <DashboardFund inTopBar={false} />
      {sidebarLink.length > 0 &&
        sidebarLink.map((item) => (
          <NavLink
            to={item.url}
            className={({ isActive }) =>
              classNames(
                "w-full md:w-[48px] md:h-[48px] px-5 py-[14px] md:px-0 md:py-0 gap-5 md:gap-0 md:rounded-[10px] flex items-center md:justify-center flex-shrink-0 md:last:bg-white dark:md:last:bg-dark-secondary dark:md:last:shadow-[10px_10px_20px_rgba(2,2,2,0.25)] md:last:shadow-[10px_10px_20px_rgba(211,211,211,0.25)] md:last:mt-[167px] last:mb-[34px] lg:last:mb-0",
                isActive
                  ? "bg-primary-extra text-primary dark:bg-dark-strock"
                  : "text-icon-color dark:text-text3"
              )
            }
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
