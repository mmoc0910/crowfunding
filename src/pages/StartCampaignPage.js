import CampaignStartNew from "campaign/parts/CampaignStartNew";
import React from "react";
import RequireAuthPage from "./RequireAuthPage";

const StartCampaignPage = () => {
  return (
    <RequireAuthPage>
      <CampaignStartNew></CampaignStartNew>
    </RequireAuthPage>
  );
};

export default StartCampaignPage;
