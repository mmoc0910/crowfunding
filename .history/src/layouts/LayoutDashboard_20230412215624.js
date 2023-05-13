import React from "react";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10">
      <div className="">top bar</div>
      <div className="">
        <div className="">sidebar</div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
