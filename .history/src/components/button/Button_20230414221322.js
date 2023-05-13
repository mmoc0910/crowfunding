import React from "react";
import Proptypes from "prop-types";
import classNames from "utils/classNames";
import { Link } from "react-router-dom";

const Button = ({
  children,
  type = "button",
  className = "",
  href,
  ...rest
}) => {
  if (href)
    return (
      <Link
        type={type}
        className={classNames(
          "font-semibold text-white py-3 rounded-[10px] min-h-[52px] flex items-center justify-center select-none",
          className
        )}
        {...rest}
      >
        {children}
      </Link>
    );
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
