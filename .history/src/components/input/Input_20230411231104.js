import React from "react";
import { useController } from "react-hook-form";
import Proptypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const Input = ({
  type = "text",
  className = "",
  control,
  name,
  placeholder = "",
  error = "",
  children,
  ...rest
}) => {
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <div className="relative">
      <input
        autoComplete="off"
        name
        type={type}
        className={`text-sm font-medium placeholder:text-text4 py-[15px] px-[25px] rounded-[10px] border border-solid  w-full bg-inherit peer dark:placeholder:text-text2 dark:text-white ${className} ${
          error.length > 0
            ? "border-error text-error"
            : "border-strock dark:border-dark-strock text-text1"
        }`}
        placeholder={error.length > 0 ? "" : placeholder}
        id={name}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <div className="peer-focus:hidden font-medium text-error absolute pointer-events-none py-[15px] px-[25px] top-0 left-0">
          <p className="bg-white dark:bg-dark-secondary">{error}</p>
        </div>
      )}
      {children && (
        <div className="absolute -translate-y-1/2 cursor-pointer right-5 top-1/2">
          {children}
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
  children: Proptypes.node,
};
export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
