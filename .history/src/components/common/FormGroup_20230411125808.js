import React from "react";
import Proptypes from "prop-types";
const FormGroup = ({ children }) => {
  return <div className="flex flex-col gap-[10px]">{children}</div>;
};

export default FormGroup;
