import React from "react";
import { DropdownProvider } from "./dropdown-context";

const DropdownWrapper = ({ ...props }) => {
  return <DropdownProvider {...props}></DropdownProvider>;
};

export default DropdownWrapper;
