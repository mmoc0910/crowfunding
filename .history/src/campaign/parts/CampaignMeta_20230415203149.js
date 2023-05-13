import React from "react";
import classNames from "utils/classNames";
import Proptypes from "prop-types";

const CampaignMeta = ({ info = "", desc = "", size = "small" }) => {
  return (
    <div className="">
      <h4
        className={classNames(
          "mb-1 text-text2 dark:text-text4",
          size === "small" ? "font-semibold " : "font-bold text-xl"
        )}
      >
        {info}
      </h4>
      <p
        className={classNames(
          "text-text4 dark:text-text3",
          size === "small" ? "text-xs" : ""
        )}
      >
        {desc}
      </p>
    </div>
  );
};

CampaignMeta.propTypes = {
  info: Proptypes.string,
  desc: Proptypes.string,
  size: Proptypes.oneOf(["small", "big"]),
};

export default CampaignMeta;
