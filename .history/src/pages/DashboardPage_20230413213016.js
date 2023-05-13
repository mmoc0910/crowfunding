import Heading from "components/common/Heading";
import LayoutDashboard from "layouts/LayoutDashboard";
import React from "react";

const DashboardPage = () => {
  return (
    <LayoutDashboard>
      <div className="">
        {" "}
        <Heading>Popular Campaign</Heading>
      </div>
    </LayoutDashboard>
  );
};

export default DashboardPage;
