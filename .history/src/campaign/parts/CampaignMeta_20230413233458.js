import React from "react";
import classNames from "utils/classNames";

const CampaignMeta = (info, desc, size = "small") => {
  return (
    <div className="">
      <h4
        className={classNames(
          "mb-1 font-semibold text-text2 dark:text-text4",
          size === "small" ? "" : ""
        )}
      >
        {info}
      </h4>
      <p
        className={classNames(
          "text-xs text-text4 dark:text-text3",
          size === "small" ? "" : ""
        )}
      >
        {desc}
      </p>
    </div>
  );
};

export default CampaignMeta;
