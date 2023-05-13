import React from "react";

const CampaignMeta = (info, desc, size = "small") => {
  return (
    <div className="">
      <h4 className="mb-1 font-semibold text-text2 dark:text-text4">$2,000</h4>
      <p className="text-xs text-text4 dark:text-text3">Raised of $1,900</p>
    </div>
  );
};

export default CampaignMeta;
