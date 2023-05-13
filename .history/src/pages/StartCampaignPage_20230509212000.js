import CampaignStartNew from "campaign/parts/CampaignStartNew";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StartCampaignPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  React.useEffect(() => {
    if (!user || !user?.id) {
      navigate("/sign-in");
    }
  }, [navigate, user]);
  return (
    <>
      <CampaignStartNew></CampaignStartNew>
    </>
  );
};

export default StartCampaignPage;
