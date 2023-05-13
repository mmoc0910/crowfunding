import React from "react";
import DropdownWrapper from "./DropdownWrapper";

const Dropdown = ({ children, ...props }) => {
  return (
    <DropdownWrapper>
      <div className="relative inline-block w-full">{children}</div>
    </DropdownWrapper>
  );
};

export default Dropdown;
