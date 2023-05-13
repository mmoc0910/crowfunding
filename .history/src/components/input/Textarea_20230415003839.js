import React from "react";
import { useController } from "react-hook-form";
import Proptypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
import classNames from "utils/classNames";

const Textarea = ({
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
    <textarea
      autoComplete="off"
      name
      type={type}
      className={classNames(
        "text-sm font-medium placeholder:text-text4 py-[15px] px-[25px] rounded-[10px] border border-solid w-full bg-inherit peer dark:placeholder:text-text2 border-strock dark:border-dark-strock text-text1 dark:text-white"
      )}
      placeholder={placeholder}
      id={name}
      {...rest}
      {...field}
    />
  );
};
Textarea.propTypes = {
  name: Proptypes.string.isRequired,
  type: Proptypes.string,
  className: Proptypes.string,
  control: Proptypes.any.isRequired,
  placeholder: Proptypes.string,
  error: Proptypes.string,
  children: Proptypes.node,
};
export default withErrorBoundary(Textarea, {
  FallbackComponent: ErrorComponent,
});
