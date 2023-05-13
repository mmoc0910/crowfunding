import { Checkbox } from "components/checkbox";
import { defaultImg } from "constants/global";
import { useToogleValue } from "hooks/useToogleValue";
import React from "react";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { value: acceptTerm, handleToogleValue: handleToogleTerm } =
    useToogleValue();
  return (
    <div className="flex gap-[135px]">
      <div className="">
        <h1 className="text-text1 font-bold text-[30px] mb-10">Payment</h1>
        <div className="flex items-center gap-[30px]">
          <div className="w-[132px] h-[102px] shadow-[-10px_15px_20px_rgba(231,_228,_228,_0.15),_10px_10px_20px_rgba(231,_228,_228,_0.15)]">
            <input
              type="radio"
              name="payment_method"
              id="paypal"
              className="hidden paypal payment_method"
              defaultChecked={true}
            />
            <label
              htmlFor="paypal"
              className="relative flex items-center justify-center w-full h-full border border-transparent bg-white rounded-[15px] cursor-pointer"
            >
              <img src="/SeekPng 1.svg" alt="paypal" />
              <span className="absolute top-[10px] right-[10px] hidden">
                <IconPaypalVerified />
              </span>
            </label>
          </div>
          <div className="w-[132px] h-[102px] shadow-[-10px_15px_20px_rgba(231,_228,_228,_0.15),_10px_10px_20px_rgba(231,_228,_228,_0.15)]">
            <input
              type="radio"
              name="payment_method"
              id="payoneer"
              className="hidden paypal payment_method"
            />
            <label
              htmlFor="payoneer"
              className="relative flex items-center justify-center w-full h-full border border-transparent bg-white rounded-[15px] cursor-pointer"
            >
              <img src="/SeekPng 1 (1).svg" alt="paypal" />
              <span className="absolute top-[10px] right-[10px] hidden">
                <IconPaypalVerified />
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="max-w-[462px] w-full p-[15px_20px_40px] bg-white shadow-[-10px_15px_20px_rgba(231,_228,_228,_0.15),_10px_10px_20px_rgba(231,_228,_228,_0.15)] rounded-[20px]">
        <h2 className="text-lg font-semibold text-text2 p-[10px] mb-[15px]">
          Contribution Summury
        </h2>
        <div className="px-5 py-4 bg-opacity-[0.05] bg-secondary rounded-[10px] flex items-center justify-between mb-[15px]">
          <Link className="gap-[15px] flex items-center">
            <img
              src={defaultImg}
              alt="...."
              className="object-cover w-[90px] h-[70px] rounded-[5px]"
            />
            <p className="font-medium text-text1">Special One Camera</p>
          </Link>
          <p className="font-bold text-text1">$2,724 USD</p>
        </div>
        <div className="pl-5">
          <div className="mb-5">
            <div className="flex items-center justify-between mb-[10px] text-text2 font-medium">
              <p>Subtotal</p>
              <p>$2,724 USD</p>
            </div>
            <div className="flex items-center justify-between mb-[25px] text-text2 font-medium">
              <p>Shipping</p>
              <p>$0 USD</p>
            </div>
            <div className="flex items-center justify-between font-bold text-text1">
              <p>TOTAL</p>
              <p>$2,724 USD</p>
            </div>
          </div>
          <div className="pt-[10px]">
            <div className="pr-[14px] md:pr-5 mb-5">
              <Checkbox checked={acceptTerm} onClick={handleToogleTerm}>
                <p className="flex-1 text-xs md:text-sm text-text2 dark:text-text3 -translate-y-[3px]">
                  I agree to the{" "}
                  <span className="text-secondary">Tearms of Use</span> and have
                  read and understand the{" "}
                  <span className="text-secondary">Privacy policy</span>.
                </p>
              </Checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const IconPaypalVerified = () => {
  return (
    <svg
      width={13}
      height={13}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C10.0906 13 13 10.0906 13 6.5C13 2.90937 10.0906 0 6.5 0ZM9.82812 4.70312L5.65 8.9H5.64687C5.59375 8.95312 5.45 9.07187 5.28438 9.07187C5.16563 9.07187 5.03125 9.00625 4.91875 8.89375L3.16875 7.14375C3.11875 7.09375 3.11875 7.01562 3.16875 6.96562L3.725 6.40938C3.75 6.38438 3.78125 6.37187 3.8125 6.37187C3.84375 6.37187 3.875 6.38438 3.9 6.40938L5.2875 7.79688L9.1 3.95625C9.125 3.93125 9.15625 3.91875 9.1875 3.91875C9.22188 3.91875 9.25312 3.93125 9.275 3.95625L9.82187 4.52187C9.87812 4.575 9.87813 4.65312 9.82812 4.70312V4.70312Z"
        fill="#1DC071"
      />
    </svg>
  );
};
export default CheckoutPage;
