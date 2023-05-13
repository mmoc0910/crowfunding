import React from "react";
import Proptypes from "prop-types";

const Button = ({ children, type = "button", className = "", ...rest }) => {
  return (
    <button
      type={type}
      className={`font-semibold text-white py-3 rounded-[10px] min-h-[52px] ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  type: Proptypes.string,
  children: Proptypes.node,
  className: Proptypes.string,
};

export default Button;
