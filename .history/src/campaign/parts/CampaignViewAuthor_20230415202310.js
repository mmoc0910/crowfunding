import { defaultImg } from "constants/global";
import React from "react";
import { Link } from "react-router-dom";

const CampaignViewAuthor = () => {
  return (
    <div className="flex items-center gap-5">
      <Link>
        <img
          src={defaultImg}
          alt="author"
          className="w-[60px] h-[60px] rounded-full object-cover"
        />
      </Link>
    </div>
  );
};

export default CampaignViewAuthor;
