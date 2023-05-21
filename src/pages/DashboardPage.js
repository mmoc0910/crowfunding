import CampaignFeature from "campaign/CampaignFeature";
import CampaignGrid from "campaign/CampaignGrid";
import CampaignItem from "campaign/CampaignItem";
import Heading from "components/common/Heading";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import React, { memo } from "react";
import { v4 as uuidv4 } from "uuid";

const DashboardPage = () => {
  const axiosPrivate = useAxiosPrivate();
  const [campaigns, setCampaigns] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    async function fetchCampaigns() {
      try {
        const response = await axiosPrivate.get("/api/campaigns?_limit=4");
        setCampaigns(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCampaigns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading)
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-10">
        <div className="w-10 h-10 border-4 rounded-full border-primary border-b-transparent animate-spin"></div>
      </div>
    );
  return (
    <>
      <div>
        <Heading>
          Your Campaign
          <span className="text-secondary dark:text-inherit">(4)</span>
        </Heading>
        {campaigns.length > 0 && (
          <CampaignFeature campaign={campaigns[0]}></CampaignFeature>
        )}
      </div>
      <div>
        <Heading>Popular Campaign</Heading>
        <CampaignGrid>
          {campaigns.length > 0 &&
            campaigns.map((campaign) => (
              <CampaignItem campaign={campaign} key={uuidv4()}></CampaignItem>
            ))}
        </CampaignGrid>
      </div>
      <div>
        <Heading>Recent Campaign</Heading>
        <CampaignGrid>
          {campaigns.length > 0 &&
            campaigns.map((campaign) => (
              <CampaignItem campaign={campaign} key={uuidv4()}></CampaignItem>
            ))}
        </CampaignGrid>
      </div>
    </>
  );
};

export default memo(DashboardPage);
