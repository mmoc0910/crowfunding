import React from "react";

const CheckoutPage = () => {
  return (
    <div className="flex gap-[135px]">
      <div className="">
        <h1 className="text-text1 font-bold text-[30px] mb-10">Payment</h1>
        <div className="flex items-center gap-[30px]">
          <div className="flex items-center justify-center w-[132px] h-[102px] bg-white rounded-[15px] shadow-[-10px_15px_20px_rgba(231,_228,_228,_0.15),_10px_10px_20px_rgba(231,_228,_228,_0.15)] cursor-pointer overflow-hidden">
            <label htmlFor="" className="block w-full h-full bg-black"></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
