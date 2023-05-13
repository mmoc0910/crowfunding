import React from "react";
import Proptypes from "prop-types";
import classNames from "utils/classNames";

const Checkbox = ({ checked = true, onClick = () => {}, children }) => {
  return (
    <div className="flex items-start gap-5">
      <div
        className={classNames(
          "w-5 h-5 rounded-[4px] border flex items-center justify-center transition-all duration-75",
          checked
            ? "border-primary bg-primary text-white"
            : "border-text4 text-white dark:bg-dark-secondary dark:border-text3 dark:text-dark-secondary"
        )}
        onClick={onClick}
      >
        <input type="checkbox" className="hidden" />
        <span className="">
          <IconCheck />
        </span>
      </div>
      {children && (
        <div className="flex-1 cursor-pointer select-none" onClick={onClick}>
          {children}
        </div>
      )}
    </div>
  );
};

const IconCheck = () => {
  return (
    <svg
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4.5L4.33333 8L11 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Checkbox.propTypes = {
  checked: Proptypes.bool,
  children: Proptypes.node,
  onClick: Proptypes.func,
};
export default Checkbox;
