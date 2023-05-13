import { defaultImg } from "constants/global";
import React from "react";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";

const CampaignImage = ({ image = defaultImg, alt = "", to = "" }) => {
  return (
    <Link
      to={to}
      className="block w-full h-[180px] rounded-[15px] overflow-hidden"
    >
      <img src={image} alt={alt} className="object-cover w-full h-full" />
    </Link>
  );
};

export default CampaignImage;
