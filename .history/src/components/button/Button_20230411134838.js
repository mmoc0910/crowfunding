import React from "react";

const Button = ({ children, type = "button", className = "", ...rest }) => {
  return (
    <button
      type={type}
      className={`font-semibold text-white py-13 rounded-[10px] ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
