import React from "react";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const LayoutAuthentication = ({ children, heading = "", ...props }) => {
  return (
    <div className="relative">
      <div className="w-full min-h-screen p-10 bg-lite dark:bg-darkbg">
        <Link className="inline-block mb-5 md:mb-16">
          <img src="/Logo.svg" alt="logo" />
        </Link>
        <div className="w-[327px] sm:w-[556px] rounded-xl bg-white px-[20px] py-[30px] sm:px-[60px] sm:py-[50px] mx-auto relative z-[1] dark:bg-dark-secondary">
          <h1 className="text-lg font-semibold md:text-xl text-text1 mb-[5px] md:mb-[10px] text-center">
            {heading}
          </h1>
          {children}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full h-auto z-[0]">
        <img
          src="/Ellipse.png"
          alt="background"
          className="object-cover w-full"
        />
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  heading: Proptypes.string,
  children: Proptypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
