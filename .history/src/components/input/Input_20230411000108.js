import React from "react";
import { useController } from "react-hook-form";
import Proptypes from "prop-types";
const Input = ({
  type = "text",
  placeholder = "",
  className = "",
  control,
  name,
}) => {
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <div className="relative">
      <input
        autoComplete="off"
        name
        type={type}
        placeholder={placeholder}
        className={`text-sm font-medium text-text1 placeholder:text-text4 py-[15px] px-[25px] rounded-[10px] border border-solid border-strock w-full ${className}`}
        id={name}
        {...field}
      />
    </div>
  );
};
Input.propTypes = {
  name: Proptypes.string.isRequired,
  type: Proptypes.string,
  placeholder: Proptypes.string,
  className: Proptypes.string,
  control: Proptypes.any.isRequired,
};
export default Input;
