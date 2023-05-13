import React from "react";
import classNames from "utils/classNames";

const DashboardFund = ({ inTopBar = true }) => {
  return (
    <div className="relative">
      <div
        className={classNames(
          "items-center gap-2 cursor-pointer text-icon-color dark:text-text3 py-2",
          inTopBar ? "hidden lg:flex" : "flex lg:hidden px-5 pt-6 pb-2"
        )}
      >
        {inTopBar ? <IconUpBig /> : <IconUpSmall />}
        <span className="font-semibold text-text2">Fundrising for</span>
        {inTopBar ? <IconDownBig /> : <IconDownSmall />}
      </div>
      {inTopBar && (
        <div className="flex items-stretch w-[1170px] absolute top-[calc(100%+35px)] right-1/2 translate-x-1/3 rounded-[20px] bg-white">
          <div className="w-390px p-[40px_40px_103px] bg-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            sint, officia aperiam accusantium excepturi ipsum saepe nostrum
            earum error doloribus dignissimos ducimus corporis expedita ratione
            magnam porro. Voluptas, modi adipisci.
          </div>
          <div className="w-390px"></div>
          <div className="w-390px"></div>
        </div>
      )}
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
const IconDownSmall = () => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L6 6L11 1" stroke="currentcolor" strokeWidth="2" />
    </svg>
  );
};
const IconDownBig = () => {
  return (
    <svg
      width={10}
      height={7}
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.25 1.5L5 5.25L8.75 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};
export default DashboardFund;
