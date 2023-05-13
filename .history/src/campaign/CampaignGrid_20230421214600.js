import React from "react";

const CampaignGrid = ({ children }) => {
  return (
    <div className="xl:grid xl:grid-cols-4 xl:gap-[30px] section">
      {children}
    </div>
  );
};

export default CampaignGrid;
