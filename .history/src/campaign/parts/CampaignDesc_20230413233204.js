import React from "react";
import classNames from "utils/classNames";

const CampaignDesc = ({ children, className = "text-xs" }) => {
  return <p className={classNames("mb-3 text-text3", className)}>{children}</p>;
};

export default CampaignDesc;
