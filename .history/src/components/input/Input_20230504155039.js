import React from "react";
import { useController } from "react-hook-form";
import Proptypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
import classNames from "utils/classNames";

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
        className={classNames(
          "text-sm font-medium placeholder:text-text4 py-[15px] px-[25px] rounded-[10px] border border-solid w-full bg-inherit peer dark:placeholder:text-text2",
          error.length > 0
            ? "border-error text-error"
            : "border-strock dark:border-dark-strock text-text1 dark:text-white",
          children ? "pr-16" : "",
          className
        )}
        placeholder={error.length > 0 ? "" : placeholder}
        id={name}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <div className="peer-focus:hidden w-full font-medium text-error absolute pointer-events-none h-full px-[25px] top-0 left-0">
          <p className="text-sm bg-white dark:bg-dark-secondary">{error}</p>
        </div>
      )}
      {children}
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
