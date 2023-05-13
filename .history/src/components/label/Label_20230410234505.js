import React from "react";
<react-pt></react-pt>;
Label.propTypes = {};

const Label = ({ children, htmlFor = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium capitalize text-text-2"
    >
      {children}
    </label>
  );
};

export default Label;
