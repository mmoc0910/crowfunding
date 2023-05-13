import React from "react";

const CampaignGrid = ({ children }) => {
  return <div className="grid grid-cols-4 gap-[30px] section">{children}</div>;
};

export default CampaignGrid;
