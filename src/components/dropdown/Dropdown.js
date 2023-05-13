import React, { useRef, useState } from "react";
import { DropdownProvider } from "./dropdown-context";
import useOnClickOutside from "hooks/useOnClickOutside";

const Dropdown = ({ children, ...props }) => {
  const ref = useRef();
  const [show, setShow] = useState(false);
  useOnClickOutside(ref, () => setShow(false));
  const toggle = () => {
    setShow(!show);
  };
  return (
    <DropdownProvider {...props} show={show} setShow={setShow} toggle={toggle}>
      <div className="relative inline-block w-full" ref={ref}>
        {children}
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
