import Overlay from "components/common/Overlay";
import DashboardSidebar from "dashboard/DashboardSidebar";
import DashboardTopbar from "dashboard/DashboardTopbar";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import classNames from "utils/classNames";

const LayoutDashboard = () => {
  const { isOpen } = useSelector((state) => state.menu);
  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="m-6 max-sm:overflow-hidden bg-lite dark:bg-darkbg md:m-10 md:mb-14">
        <div className="w-full">
          <Overlay></Overlay>
          <DashboardTopbar></DashboardTopbar>
          <div
            className={classNames(
              "flex md:gap-10 xl:gap-10 w-[200%] md:w-[calc(100%+350px)] xl:right-0 xl:w-full relative transition-all duration-300 ease-linear",
              isOpen ? "right-0" : "right-full md:right-[350px]"
            )}
          >
            <DashboardSidebar></DashboardSidebar>
            <div className="space-y-[30px] lg:space-y-[40px] w-1/2 md:flex-1">
              <MOutlet></MOutlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const MOutlet = React.memo(() => {
  return <Outlet></Outlet>;
});
export default LayoutDashboard;
