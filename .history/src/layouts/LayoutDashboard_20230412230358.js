import { Button } from "components/button";
import DashboardFund from "dashboard/DashboardFund";
import DashboardSearch from "dashboard/DashboardSearch";
import DashboardTopbar from "dashboard/DashboardTopbar";
import React from "react";
import { Link } from "react-router-dom";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-lite">
      <DashboardTopbar></DashboardTopbar>
      <div className="">
        <div className="">sidebar</div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
