import React from "react";
import { Link } from "react-router-dom";

const LayoutPayment = () => {
  return (
    <div className="bg-lite">
      <div className="max-w-[1110px] mx-auto px-[30px] pt-10 pb-28">
        <div className="flex items-center justify-between">
          <Link>
            <img src="/Logo.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LayoutPayment;
