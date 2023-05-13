import React from "react";

const Button = ({ children, type = "button", className = "", ...rest }) => {
  return <button type={type} className={`${className}`}></button>;
};

export default Button;
