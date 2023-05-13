import React from "react";
import classNames from "utils/classNames";

const Heading = ({ children, className = "mb-5" }) => {
  return (
    <h2
      className={classNames(
        "text-lg font-semibold text-text1 dark:text-white",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
