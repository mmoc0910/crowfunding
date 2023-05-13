import React from "react";

export const useToogleValue = (initialValue = false) => {
  const [value, setValue] = React.useState(false);
  const handleToogleValue = () => {
    setValue(!value);
  };

  return {
    value,
    handleToogleValue,
  };
};
