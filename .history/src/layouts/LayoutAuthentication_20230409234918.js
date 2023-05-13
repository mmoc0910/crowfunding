import React from "react";
import { Link } from "react-router-dom";
import { imgbg } from "../../public/Ellipse.png";

const LayoutAuthentication = ({ children }) => {
  return (
    <div className={`w-full min-h-screen p-10 bg-lite bg-[url(${imgbg})]`}>
      <Link className="inline-block mb-5 md:mb-16">
        <img src="/Logo.svg" alt="logo" />
      </Link>
      <div className="w-[327px] sm:w-[556px] rounded-xl bg-white px-[20px] py-[30px] sm:px-[60px] sm:py-[50px] mx-auto">
        {" "}
        {children}
      </div>
    </div>
  );
};

export default LayoutAuthentication;
