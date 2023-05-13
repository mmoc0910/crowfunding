import { defaultImg } from "constants/global";
import React from "react";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";

const CampaignAuthor = ({ image = defaultImg, author = "" }) => {
  return (
    <div className="flex gap-[10px] items-center">
      <Link>
        <img
          src={image}
          alt={author}
          className="object-cover w-[30px] h-[30px] rounded-full"
        />
      </Link>
      <p className="text-xs text-text3">
        by{" "}
        <Link className="inline text-xs font-semibold text-text2 dark:text-text4">
          {author}
        </Link>
      </p>
    </div>
  );
};
CampaignAuthor.propTypes = {
  image: Proptypes.string,
  author: Proptypes.string,
};
export default CampaignAuthor;
