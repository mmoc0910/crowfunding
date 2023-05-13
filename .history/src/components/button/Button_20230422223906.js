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
        reloadDocument
        to={href}
        type={type}
        className={classNames(
          "font-semibold md:py-3 rounded-[10px] md:min-h-[52px] flex items-center justify-center select-none text-sm md:text-base min-h-[40px] py-2",
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
        "font-semibold py-3 rounded-[10px] min-h-[52px] flex items-center justify-center select-none",
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
