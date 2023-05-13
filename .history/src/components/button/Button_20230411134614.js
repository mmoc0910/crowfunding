import React from "react";

const Button = ({ children, type = "button", className = "", ...rest }) => {
  return (
    <button type={type} className={`${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
