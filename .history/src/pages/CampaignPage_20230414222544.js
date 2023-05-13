import LayoutDashboard from "layouts/LayoutDashboard";
import React from "react";

const CampaignPage = () => {
  return (
    <LayoutDashboard>
      <div className="flex items-center justify-between px-10 py-8">
        <div className="flex items-start gap-[25px]">
          <button className="flex items-center justify-center bg-secondary40 rounded-full w-[54px] h-[54px]">
            <IconPlus />
          </button>
        </div>
      </div>
    </LayoutDashboard>
  );
};
const IconPlus = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V19"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12H19"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default CampaignPage;
