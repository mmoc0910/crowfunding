import React from "react";

const Search = ({ placeholder, ...props }) => {
  return (
    <div className="fixed top-0 p-2 bg-inherit">
      <input
        type="text"
        placeholder={placeholder}
        className="text-sm font-medium placeholder:text-text4 py-[12px] px-[25px] rounded-[10px] border border-solid w-full bg-inherit peer dark:placeholder:text-text2 border-strock dark:border-dark-strock text-text1 dark:text-white bg-inherit"
        {...props}
      />
    </div>
  );
};

export default Search;
