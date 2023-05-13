import React from "react";
import Proptypes from "prop-types";
import classNames from "utils/classNames";

const Button = ({
  children,
  type = "button",
  className = "",
  href,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={classNames(
        "font-semibold text-white py-3 rounded-[10px] min-h-[52px] flex items-center justify-center select-none",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  type: Proptypes.string,
  children: Proptypes.node,
  className: Proptypes.string,
  href: Proptypes.string,
};

export default Button;
