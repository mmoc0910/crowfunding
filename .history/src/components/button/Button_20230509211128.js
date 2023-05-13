import React from "react";
import Proptypes from "prop-types";
import classNames from "utils/classNames";
import { Link } from "react-router-dom";

const Button = ({
  children,
  type = "button",
  className = "text-white",
  href,
  ...rest
}) => {
  if (href)
    return (
      <Link
        to={href}
        type={type}
        className={classNames(
          "font-semibold lg:py-3 rounded-[10px] lg:min-h-[52px] flex items-center justify-center select-none text-sm lg:text-base min-h-[40px] py-2",
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
        "font-semibold lg:py-3 rounded-[10px] lg:min-h-[52px] flex items-center justify-center select-none text-sm lg:text-base min-h-[40px] py-2",
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
