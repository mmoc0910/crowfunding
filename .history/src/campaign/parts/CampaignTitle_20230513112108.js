import React from "react";
import { Link } from "react-router-dom";
import classNames from "utils/classNames";

const CampaignTitle = ({
  children,
  className = "mb-1 font-semibold",
  to = "/",
}) => {
  return (
    <Link
      to={to}
      className={classNames(
        "text-text1 dark:text-white text-sm lg:text-sm line-clamp-2",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default CampaignTitle;
