import React from "react";
import { Button } from "components/button";
import DashboardFund from "dashboard/DashboardFund";
import DashboardSearch from "dashboard/DashboardSearch";
import { Link } from "react-router-dom";
const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-[46px]">
      <div className="flex items-center flex-1 ml-3 gap-14">
        <Link>
          <img src="/Logo.svg" alt="" />
        </Link>
        <DashboardSearch></DashboardSearch>
      </div>
      <div className="flex items-center gap-10">
        <DashboardFund></DashboardFund>
        <Button
          href={"/campaign/start-campaign"}
          className="bg-secondary20 dark:bg-secondary20 px-[26px] text-white"
        >
          Start a campaign
        </Button>
        <img
          src="https://images.unsplash.com/photo-1681186018205-bf4d312c2b90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80"
          alt=""
          className="w-[52px] h-[52px] object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default DashboardTopbar;
