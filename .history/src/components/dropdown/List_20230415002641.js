import React from "react";
import { useDropdown } from "./dropdown-context";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div className="absolute left-0 z-20 w-full bg-white dark:bg-dark-secondary dark:border dark:border-dark-strock rounded-lg shadow-[10px_10px_20px_rgba(218,213,213,0.15)] top-full max-h-[300px] overflow-y-auto">
          {children}
        </div>
      )}
    </>
  );
};

export default List;
