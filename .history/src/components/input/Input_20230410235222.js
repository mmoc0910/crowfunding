import React from "react";
import { useController } from "react-hook-form";

const Input = ({
  type = "text",
  placeholder = "",
  className = "",
  control,
}) => {
  const { field } = useController();
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className="text-sm font-medium text-text1 placeholder:text-text4 py-[15px] px-[25px] rounded-[10px] border border-solid border-strock w-full"
      />
    </div>
  );
};

export default Input;
