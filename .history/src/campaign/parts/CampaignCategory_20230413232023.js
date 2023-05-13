import IconCategory from "icons/IconCategory";
import React from "react";
import Proptypes from "prop-types";
import classNames from "utils/classNames";

const CampaignCategory = ({ size = "small" }) => {
  return (
    <div
      className={classNames(
        "flex items-baseline gap-3 mb-3 text-xs font-medium text-text3",
        size === "small" ? "" : ""
      )}
    >
      <span>
        <IconCategory size="size"></IconCategory>
      </span>
      <span>Education</span>
    </div>
  );
};

CampaignCategory.propTypes = {
  size: Proptypes.oneOf(["small", "big"]),
};

export default CampaignCategory;
