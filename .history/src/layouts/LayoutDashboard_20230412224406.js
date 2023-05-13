import { Button } from "components/button";
import DashboardFund from "dashboard/DashboardFund";
import DashboardSearch from "dashboard/DashboardSearch";
import React from "react";
import { Link } from "react-router-dom";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-lite">
      <div className="flex items-center justify-between mb-[30px]">
        <div className="flex items-center flex-1 gap-14">
          <Link>
            <img src="/Logo.svg" alt="" />
          </Link>
          <DashboardSearch></DashboardSearch>
        </div>
        <div className="flex items-center gap-10">
          <DashboardFund></DashboardFund>
          <Button className="bg-secondary px-[26px]">Start a campaign</Button>
          <img
            src="https://images.unsplash.com/photo-1681186018205-bf4d312c2b90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80"
            alt=""
            className="w-[52px] h-[52px] object-cover rounded-full"
          />
        </div>
      </div>
      <div className="">
        <div className="">sidebar</div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
