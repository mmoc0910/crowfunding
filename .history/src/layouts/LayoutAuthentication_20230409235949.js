import React from "react";
import { Link } from "react-router-dom";

const LayoutAuthentication = ({ children }) => {
  return (
    <div className="">
      {" "}
      <div className="relative w-full min-h-screen m-10 bg-lite">
        <Link className="inline-block mb-5 md:mb-16">
          <img src="/Logo.svg" alt="logo" />
        </Link>
        <div className="w-[327px] sm:w-[556px] rounded-xl bg-white px-[20px] py-[30px] sm:px-[60px] sm:py-[50px] mx-auto">
          {children}
        </div>
        <div className="absolute ">
          <img src="/Ellipse.png" alt="background" />
        </div>
      </div>
    </div>
  );
};

export default LayoutAuthentication;
