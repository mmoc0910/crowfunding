import React from "react";

const FormRow = ({ children }) => {
  return (
    <div className="grid grid-cols-2 gap-[45px] mb-[35px]">{children}</div>
  );
};

export default FormRow;
