import React from "react";

const CheckoutPage = () => {
  return (
    <div className="flex gap-[135px]">
      <div className="">
        <h1 className="text-text1 font-bold text-[30px] mb-10">Payment</h1>
        <div className="flex items-center gap-[30px]">
          <div className="w-[132px] h-[102px] bg-white rounded-[15px] shadow-[-10px_15px_20px_rgba(231,_228,_228,_0.15),_10px_10px_20px_rgba(231,_228,_228,_0.15)] cursor-pointer overflow-hidden">
            <label
              htmlFor="paypal"
              className="flex items-center justify-center w-full h-full"
            >
              <img src="/SeekPng 1.svg" alt="paypal" />
            </label>
            <input
              type="checkbox"
              name="payment_method"
              id="paypal"
              className="hidden"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};
const IconPaypalVerified = () => {
    return Paypal Verified
}
export default CheckoutPage;
