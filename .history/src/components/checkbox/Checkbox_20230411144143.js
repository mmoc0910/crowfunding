import React from "react";

const Checkbox = ({ checked = true, onClick = () => {}, children }) => {
  return (
    <div className="flex items-start gap-5 ">
      <div
        className={`w-5 h-5 rounded-[4px] border  flex items-center justify-center transition-all duration-100 ${
          checked ? "border-primary bg-primary" : "border-text4 bg-white"
        }`}
      >
        <input type="checkbox" className="hidden" />
        <span>
          <IconCheck />
        </span>
      </div>
      {children && <div className="flex-1 cursor-pointer">{children}</div>}
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
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Checkbox;
