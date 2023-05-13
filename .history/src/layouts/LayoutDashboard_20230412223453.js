import DashboardSearch from "dashboard/DashboardSearch";
import React from "react";
import { Link } from "react-router-dom";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-lite">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1 gap-14">
          <Link>
            <img src="/Logo.svg" alt="" />
          </Link>
          <DashboardSearch></DashboardSearch>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-7"></div>
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
