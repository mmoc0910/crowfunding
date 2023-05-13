import { defaultImg } from "constants/global";
import React from "react";
import { Link } from "react-router-dom";

const CampaignViewAuthor = () => {
  return (
    <div className="flex items-center gap-5 mb-[25px]">
      <Link>
        <img
          src={defaultImg}
          alt="author"
          className="w-[60px] h-[60px] rounded-full object-cover"
        />
      </Link>
      <div className="">
        <div className="flex items-baseline gap-4">
          <Link className="text-lg font-medium text-text1">Saiful Islam</Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignViewAuthor;
