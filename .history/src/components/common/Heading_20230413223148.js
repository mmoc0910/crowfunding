import React from "react";

const Heading = ({ children }) => {
  return (
    <h2 className="mb-5 text-lg font-semibold text-text1 dark:text-white">
      {children}
    </h2>
  );
};

export default Heading;
