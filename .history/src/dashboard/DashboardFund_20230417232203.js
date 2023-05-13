import React from "react";
import classNames from "utils/classNames";

const DashboardFund = ({ inTopBar = true }) => {
  return (
    <div
      className={classNames(
        "items-center gap-2 cursor-pointer text-icon-color dark:text-text3",
        inTopBar ? "hidden lg:flex" : "flex lg:hidden"
      )}
    >
      {inTopBar ? <IconUpBig /> : <IconUpSmall />}
      <span className="font-semibold text-text2">Fundrising for</span>
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L6 6L11 1" stroke="currentcolor" strokeWidth="2" />
      </svg>
    </div>
  );
};
const IconUpBig = () => {
  return (
    <svg
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 2.293L11.707 6.586L7.707 2.586L0 10.293L1.414 11.707L7.707 5.414L11.707 9.414L17.414 3.707L19.707 6V0H13.707L16 2.293Z"
        fill="currentcolor"
      />
    </svg>
  );
};
const IconUpSmall = () => {
  return (
    <svg
      width={16}
      height={10}
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 2.21975L9.28025 5.4395L6.28025 2.4395L0.5 8.21975L1.5605 9.28025L6.28025 4.5605L9.28025 7.5605L13.5605 3.28025L15.2803 5V0.5H10.7803L12.5 2.21975Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default DashboardFund;
