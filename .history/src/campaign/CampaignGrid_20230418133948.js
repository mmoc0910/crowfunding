import React from "react";

const CampaignGrid = ({ children }) => {
  return (
    <div className="lg:grid lg:grid-cols-4 lg:gap-[30px] section">
      {children}
    </div>
  );
};

export default CampaignGrid;
