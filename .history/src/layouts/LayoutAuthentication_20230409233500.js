import React from "react";
import { Link } from "react-router-dom";

const LayoutAuthentication = ({ children }) => {
  return (
    <div className="w-full min-h-screen p-10 bg-lite">
      <Link className="block mb-5 md:mb-16">
        <img src="/Logo.svg" alt="logo" />
      </Link>
      {children}
    </div>
  );
};

export default LayoutAuthentication;
