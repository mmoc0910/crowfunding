import React from "react";
import { Link } from "react-router-dom";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link>
            <img src="/Logo.svg" alt="" />
          </Link>
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