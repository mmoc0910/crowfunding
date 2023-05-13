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
import { useDarkMode } from "hooks/useDarkMode";
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
    url: "/payments",
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
    // onclick: (e) => {
    //   e.preventDefault();
    // },
  },
];
const DashboardSidebar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <div className="w-1/2 md:w-[calc(350px-40px)] xl:w-[76px] pr-1 lg:pr-0">
      <div className="w-full dark:shadow-none dark:bg-dark-secondary shadow-md md:shadow xl:shadow-[10px_10px_20px_rgba(218,213,213,0.15)] px-0 py-0 lg:py-10 xl:px-[14px] rounded-lg lg:rounded-[20px] flex flex-col gap-4 xl:gap-[30px] xl:h-[749px]">
        <DashboardFund inTopBar={false} />
        {sidebarLink.length > 0 &&
          sidebarLink.map((item) => (
            <NavLink
              to={item.url}
              onClick={
                item.title === "Light/Dark"
                  ? (e) => {
                      e.preventDefault();
                      console.log("click");
                      setDarkMode(!darkMode);
                    }
                  : item?.onclick
              }
              className={({ isActive }) =>
                classNames(
                  "w-full xl:w-[48px] xl:h-[48px] px-5 py-[14px] xl:px-0 xl:py-0 gap-5 xl:gap-0 xl:rounded-[10px] flex items-center xl:justify-center flex-shrink-0 xl:last:bg-white dark:xl:last:bg-dark-secondary dark:xl:last:shadow-[10px_10px_20px_rgba(2,2,2,0.25)] xl:last:shadow-[10px_10px_20px_rgba(211,211,211,0.25)] xl:last:mt-[167px] last:mb-[34px] xl:last:mb-0",
                  isActive
                    ? "bg-primary-extra text-primary dark:bg-dark-strock"
                    : "text-icon-color dark:text-text3"
                )
              }
              key={item.title}
            >
              <span>{item.icon}</span>
              <span className="text-sm font-medium translate-y-[1px] xl:hidden">
                {item.title}
              </span>
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;
