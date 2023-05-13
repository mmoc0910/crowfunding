import React from "react";
import DropdownWrapper from "./DropdownWrapper";
import { useDropdown } from "./dropdown-context";

const Dropdown = ({ children, ...props }) => {
  const { toggle, show } = useDropdown();
  return (
    <DropdownWrapper>
      <div className="relative inline-block w-full">{children}</div>
    </DropdownWrapper>
  );
};

export default Dropdown;
