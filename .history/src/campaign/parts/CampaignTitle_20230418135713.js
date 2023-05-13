import React from "react";
import { Link } from "react-router-dom";
import classNames from "utils/classNames";

const CampaignTitle = ({ children, className = "mb-1 font-semibold" }) => {
  return (
    <Link
      className={classNames(
        "text-text1 dark:text-white text-sm lg:text-sm",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default CampaignTitle;
