import React from "react";
import { useDropdown } from "./dropdown-context";

const Search = ({ placeholder, ...props }) => {
  // const { onChange } = useDropdown();
  return (
    <div className="sticky top-0 z-10 p-2 bg-white">
      <input
        type="text"
        placeholder={placeholder}
        className="text-sm font-medium placeholder:text-text4 py-[10px] px-[25px] rounded-[10px] border border-solid w-full bg-inherit peer dark:placeholder:text-text2 border-strock dark:border-dark-strock text-text1 dark:text-white"
        // onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Search;
