import React from "react";

const CampaignPaymentMethod = ({ name, id, image }) => {
  return (
    <div className="w-[100px] h-[76px] md:w-[132px] md:h-[102px] shadow-[-10px_15px_20px_rgba(231,_228,_228,_0.15),_10px_10px_20px_rgba(231,_228,_228,_0.15)] bg-white dark:bg-dark-secondary dark:shadow-[0px_16px_30px_rgba(33,_25,_25,_0.17),_0px_30px_60px_rgba(1,_2,_9,_0.2)] rounded-[10px] md:rounded-[15px]">
      <input
        type="radio"
        name="payment_method"
        id="paypal"
        className="hidden paypal payment_method"
        defaultChecked={true}
      />
      <label
        htmlFor="paypal"
        className="relative flex items-center justify-center w-full h-full border border-transparent bg-white dark:bg-dark-secondary rounded-[10px] md:rounded-[15px] cursor-pointer"
      >
        <img src="/SeekPng 1.svg" alt="paypal" />
        <span className="absolute top-2 right-2 md:top-[10px] md:right-[10px] hidden">
          <IconPaypalVerified />
        </span>
      </label>
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
export default CampaignPaymentMethod;
