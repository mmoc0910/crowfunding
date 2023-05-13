import LayoutDashboard from "layouts/LayoutDashboard";
import React from "react";

const CampaignPage = () => {
  return (
    <LayoutDashboard>
      <div className="flex items-center justify-between px-10 py-8">
        <div className="flex items-start gap-[25px]">
          <button className="flex items-center justify-center bg-secondary40 rounded-full w-[54px] h-[54px]"></button>
        </div>
      </div>
    </LayoutDashboard>
  );
};

export default CampaignPage;
