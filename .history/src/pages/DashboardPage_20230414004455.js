import CampaignFeature from "campaign/CampaignFeature";
import CampaignGrid from "campaign/CampaignGrid";
import CampaignItem from "campaign/CampaignItem";
import Heading from "components/common/Heading";
import LayoutDashboard from "layouts/LayoutDashboard";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const DashboardPage = () => {
  return (
    <LayoutDashboard>
      <div className="">
        <Heading>
          Your Campaign{" "}
          <span className="text-secondary dark:text-inherit">(4)</span>
        </Heading>
        <CampaignFeature></CampaignFeature>
      </div>
      <div className="">
        <Heading>Popular Campaign</Heading>
        <CampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItem key={uuidv4()}></CampaignItem>
            ))}
        </CampaignGrid>
      </div>
      <div className="">
        <Heading>Popular Campaign</Heading>
        <CampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItem key={uuidv4()}></CampaignItem>
            ))}
        </CampaignGrid>
      </div>
    </LayoutDashboard>
  );
};

export default DashboardPage;
