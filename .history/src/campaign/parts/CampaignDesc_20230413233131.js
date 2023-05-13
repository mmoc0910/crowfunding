import React from "react";
import classNames from "utils/classNames";

const CampaignDesc = ({ children, className = "" }) => {
  return (
    <p className={classNames("mb-3 text-xs text-text3", className)}>
      {children}
    </p>
  );
};

export default CampaignDesc;
