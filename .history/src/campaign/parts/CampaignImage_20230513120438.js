import { defaultImg } from "constants/global";
import React from "react";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";
import classNames from "utils/classNames";

const CampaignImage = ({
  image = defaultImg,
  alt = "",
  to = "",
  className = "h-[180px]",
}) => {
  return (
    <Link
      to={to}
      className={classNames(
        "block w-full rounded-[15px] overflow-hidden",
        className
      )}
    >
      <img src={image} alt={alt} className="object-cover w-full h-full" />
    </Link>
  );
};
CampaignImage.propTypes = {
  image: Proptypes.string,
  alt: Proptypes.string,
  to: Proptypes.string,
};
export default CampaignImage;
