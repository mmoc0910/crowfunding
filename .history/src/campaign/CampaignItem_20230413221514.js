import IconCategory from "icons/IconCategory";
import React from "react";
import { Link } from "react-router-dom";

const CampaignItem = () => {
  return (
    <div className="w-full bg-white shadow-[0px_2px_4px_rgba(184,184,184,0.03),0px_6px_12px_rgba(184,184,184,0.02),0px_12px_20px_rgba(184,184,184,0.03)] rounded-[15px]">
      <Link className="block w-full h-[175px] rounded-[15px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1612898800042-f6278e97aff9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt=""
          className="object-cover w-full h-full"
        />
      </Link>
      <div className="py-4 pl-5 pr-9">
        <div className="flex items-baseline gap-3 mb-3 text-xs font-medium text-text3">
          <span>
            <IconCategory></IconCategory>
          </span>
          <span>Education</span>
        </div>
        <Link className="mb-2 font-semibold text-text1">
          Powered Kits Learning Boxes
        </Link>
        <p className="mb-3 text-xs text-text3">
          Fun, durable and reusable boxes with eco-friendly options.
        </p>
        <div className="flex items-start justify-between gap-[50px] mr-3 mb-4">
          <div className="">
            <h4 className="mb-1 font-semibold text-text2">$2,000</h4>
            <p className="text-xs text-text4">Raised of $1,900</p>
          </div>
          <div className="">
            <h4 className="mb-1 font-semibold text-text2">173</h4>
            <p className="text-xs text-text4">Total backers</p>
          </div>
        </div>
        <div className="flex gap-[10px] items-center">
          <Link>
            <img
              src="https://images.unsplash.com/photo-1612898800042-f6278e97aff9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt=""
              className="object-cover w-[30px] h-[30px] rounded-full"
            />
          </Link>
          <p className="text-xs text-text3">
            by{" "}
            <Link className="text-xs font-semibold text-text2">
              Mahfuzul Nabil
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignItem;
