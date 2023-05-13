import { Button } from "components/button";
import React from "react";
import classNames from "utils/classNames";

const PaymentsPage = () => {
  return (
    <div className="lg:w-[624px] mx-auto pt-[66px]">
      <h1 className="text-text1 font-bold text-[25px] mb-[10px] text-center">
        Connect Your Payment Processor
      </h1>
      <p className="text-center text-text3 pb-[60px]">
        To Start Processing credit card payments and donations, you will need to
        select either Paypal or Payoneer
      </p>
      <div className="flex space-x-10">
        <PaymentCard value={"paypal"} />
        <PaymentCard value={"payoneer"} />
      </div>
    </div>
  );
};
const PaymentCard = ({
  image,
  children,
  name = "payments",
  value,
  defaultChecked = false,
}) => {
  // const [checked, setchecked] = React.useState(defaultChecked);
  // const handleOnChange = (e) => {
  //   console.log(e.target);
  //   console.log(e.target.checked);
  //   e.target.checked == true ? setchecked(true) : setchecked(false);
  // };
  return (
    <div className="p-[25px] pt-[35px] w-[292px] h-[279px] rounded-[20px] shadow-[-10px_15px_20px_rgba(231,_228,_228,_0.15),_10px_10px_20px_rgba(231,_228,_228,_0.15)]">
      <div className="flex flex-col items-center">
        <img
          src="/SeekPng 1.svg"
          alt="paypal"
          className="w-[80px] h-[80px] object-cover mb-10"
        />
        <p className="text-sm text-text3 mb-[25px]">
          Get paid directly via Paypal.
        </p>
        <div className="w-full">
          <label
            htmlFor={value}
            className={classNames(
              "font-semibold py-3 rounded-[10px] min-h-[52px] flex items-center justify-center select-none w-full cursor-pointer"
              // checked
              //   ? "bg-secondary20 text-white"
              //   : "bg-[#EEEAFD] text-secondary"
            )}
          >
            <span className="text-white bg-secondary20">Connected</span>
            <span className="bg-[#EEEAFD] text-secondary">Connect</span>
          </label>
          <input
            type="radio"
            name={name}
            id={value}
            value={value}
            className="hidden"
            defaultChecked={defaultChecked}
            // onChange={handleOnChange}
          />
        </div>
      </div>
    </div>
  );
};
export default PaymentsPage;
