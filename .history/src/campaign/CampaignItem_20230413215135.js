import IconCategory from "icons/IconCategory";
import React from "react";
import { Link } from "react-router-dom";

const CampaignItem = () => {
  return (
    <div className="w-full bg-white shadow-[0px_2px_4px_rgba(184,184,184,0.03),0px_6px_12px_rgba(184,184,184,0.02),0px_12px_20px_rgba(184,184,184,0.03)] rounded-[15px]">
      <div className="w-full h-[175px] rounded-[15px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1612898800042-f6278e97aff9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="px-5 py-4">
        <div className="flex items-baseline gap-3 mb-4 text-xs font-medium text-text3">
          <span>
            <IconCategory></IconCategory>
          </span>
          <span>Education</span>
        </div>
        <Link className="mb-1 font-semibold text-text1">
          Powered Kits Learning Boxes
        </Link>
        <p className="">
          Fun, durable and reusable boxes with eco-friendly options.
        </p>
      </div>
    </div>
  );
};

export default CampaignItem;
