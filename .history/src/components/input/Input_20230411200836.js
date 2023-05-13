import React from "react";
import { useController } from "react-hook-form";
import Proptypes from "prop-types";
const Input = ({
  type = "text",
  className = "",
  control,
  name,
  placeholder = "",
  error = "",
  ...rest
}) => {
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <div className="relative">
      <input
        autoComplete="off"
        name
        type={type}
        className={`text-sm font-medium text-text1 placeholder:text-text4 py-[15px] px-[25px] rounded-[10px] border border-solid  w-full peer ${className} ${
          error.length > 0 ? "border-error" : "border-strock"
        }`}
        placeholder={error.length > 0 ? "" : placeholder}
        id={name}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <div className="peer-focus:hidden font-medium text-error absolute pointer-events-none py-[15px] px-[25px] top-0 left-0">
          <p className="bg-white">{error}</p>
        </div>
      )}
    </div>
  );
};
Input.propTypes = {
  name: Proptypes.string.isRequired,
  type: Proptypes.string,
  className: Proptypes.string,
  control: Proptypes.any.isRequired,
  placeholder: Proptypes.string,
  error: Proptypes.string,
};
export default Input;
