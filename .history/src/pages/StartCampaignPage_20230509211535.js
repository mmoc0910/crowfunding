import CampaignStartNew from "campaign/parts/CampaignStartNew";
import React from "react";
import { useSelector } from "react-redux";

const StartCampaignPage = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  React.useEffect(() => {}, []);
  return (
    <>
      <CampaignStartNew></CampaignStartNew>
    </>
  );
};

export default StartCampaignPage;
