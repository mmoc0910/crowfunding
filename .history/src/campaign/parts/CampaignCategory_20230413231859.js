import IconCategory from "icons/IconCategory";
import React from "react";

const CampaignCategory = ({ size = "small" }) => {
  return (
    <div className="flex items-baseline gap-3 mb-3 text-xs font-medium text-text3">
      <span>
        <IconCategory size="size"></IconCategory>
      </span>
      <span>Education</span>
    </div>
  );
};

export default CampaignCategory;
