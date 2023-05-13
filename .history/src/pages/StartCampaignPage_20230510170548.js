import CampaignStartNew from "campaign/parts/CampaignStartNew";
import useAuthorization from "hooks/useAuthorization";
import React from "react";

const StartCampaignPage = () => {
  useAuthorization();
  return (
    <>
      <CampaignStartNew></CampaignStartNew>
    </>
  );
};

export default StartCampaignPage;
