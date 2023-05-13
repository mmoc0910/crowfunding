import IconCategory from "icons/IconCategory";
import React from "react";
import Proptypes from "prop-types";
import classNames from "utils/classNames";

const CampaignCategory = ({ size = "small", children }) => {
  return (
    <div
      className={classNames(
        "flex items-baseline gap-3 mb-3 font-medium text-text3",
        size === "small" ? "text-xs" : "text-sm"
      )}
    >
      <span>
        <IconCategory size={size}></IconCategory>
      </span>
      <span className="-translate-y-[2px]">{children}</span>
    </div>
  );
};

CampaignCategory.propTypes = {
  size: Proptypes.oneOf(["small", "big"]),
  children: Proptypes.node,
};

export default CampaignCategory;
