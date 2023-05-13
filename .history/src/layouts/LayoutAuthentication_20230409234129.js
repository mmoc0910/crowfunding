import React from "react";
import { Link } from "react-router-dom";

const LayoutAuthentication = ({ children }) => {
  return (
    <div className="w-full min-h-screen p-10 bg-lite">
      <Link className="inline-block mb-5 md:mb-16">
        <img src="/Logo.svg" alt="logo" />
      </Link>
      <div className="w-[556px]"></div>
      {children}
    </div>
  );
};

export default LayoutAuthentication;
