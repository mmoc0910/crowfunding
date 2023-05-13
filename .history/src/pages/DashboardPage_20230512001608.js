import CampaignFeature from "campaign/CampaignFeature";
import CampaignGrid from "campaign/CampaignGrid";
import CampaignItem from "campaign/CampaignItem";
import Heading from "components/common/Heading";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const DashboardPage = () => {
  const axiosPrivate = useAxiosPrivate();
  React.useEffect(() => {
    async function fetchCampaigns() {
      const response = await axiosPrivate.get("/api/campaigns");
      console.log(response);
    }
    fetchCampaigns();
  });
  return (
    <>
      <div>
        <Heading>
          Your Campaign
          <span className="text-secondary dark:text-inherit">(4)</span>
        </Heading>
        <CampaignFeature></CampaignFeature>
      </div>
      <div>
        <Heading>Popular Campaign</Heading>
        <CampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItem key={uuidv4()}></CampaignItem>
            ))}
        </CampaignGrid>
      </div>
      <div>
        <Heading>Recent Campaign</Heading>
        <CampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItem key={uuidv4()}></CampaignItem>
            ))}
        </CampaignGrid>
      </div>
    </>
  );
};

export default DashboardPage;
