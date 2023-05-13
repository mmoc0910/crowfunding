import CampaignStartNew from "campaign/parts/CampaignStartNew";
import useAuthorization from "hooks/useAuthorization";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StartCampaignPage = () => {
  // const navigate = useNavigate();
  // const { user } = useSelector((state) => state.auth);
  // React.useEffect(() => {
  //   if (!user) {
  //     navigate("/sign-in");
  //   }
  // }, [navigate, user]);
  useAuthorization();
  return (
    <>
      <CampaignStartNew></CampaignStartNew>
    </>
  );
};

export default StartCampaignPage;
