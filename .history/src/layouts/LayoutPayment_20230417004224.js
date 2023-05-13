import { defaultImg } from "constants/global";
import React from "react";
import { Link } from "react-router-dom";

const LayoutPayment = () => {
  return (
    <div className="bg-lite">
      <div className="max-w-[1110px] mx-auto px-[30px] pt-10 pb-28">
        <div className="flex items-center justify-between mb-10">
          <Link>
            <img src="/Logo.svg" alt="" />
          </Link>
          <Link>
            <img
              src={defaultImg}
              alt="avatar"
              className="w-[52px] h-[52px] object-cover rounded-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LayoutPayment;
