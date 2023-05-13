import React from "react";
import Proptypes from "prop-types";
const FormGroup = ({ children }) => {
  return <div className="flex flex-col gap-[10px]">{children}</div>;
};
FormGroup.propTypes = {
  children: Proptypes.node,
};
export default FormGroup;
