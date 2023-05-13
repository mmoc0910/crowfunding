import React from "react";
import { Link } from "react-router-dom";

const CampaignImage = () => {
  return (
    <Link className="block w-full h-[180px] rounded-[15px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1612898800042-f6278e97aff9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        alt=""
        className="object-cover w-full h-full"
      />
    </Link>
  );
};

export default CampaignImage;
