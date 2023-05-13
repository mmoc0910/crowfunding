import React from "react";
import Proptypes from "prop-types";

const Label = ({ children, htmlFor = "", className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium capitalize text-text-2 ${className}`}
    >
      {children}
    </label>
  );
};

Label.propTypes = {};

export default Label;
