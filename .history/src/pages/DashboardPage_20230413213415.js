import CampaignGrid from "campaign/CampaignGrid";
import CampaignItem from "campaign/CampaignItem";
import Heading from "components/common/Heading";
import LayoutDashboard from "layouts/LayoutDashboard";
import React from "react";

const DashboardPage = () => {
  return (
    <LayoutDashboard>
      <div className="">
        <Heading>Popular Campaign</Heading>
        <CampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => {
              <CampaignItem></CampaignItem>;
            })}
        </CampaignGrid>
      </div>
    </LayoutDashboard>
  );
};

export default DashboardPage;
