import React from "react";
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
        <PaymentCard
          value={"paypal"}
          defaultChecked={true}
          image={"/SeekPng 1.svg"}
        >
          Get paid directly via Paypal.
        </PaymentCard>
        <PaymentCard value={"payoneer"}>
          Get paid worldwide your Work.
        </PaymentCard>
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
  return (
    <div className="p-[25px] pt-[35px] w-[292px] h-[279px] rounded-[20px] shadow-[-10px_15px_20px_rgba(231,_228,_228,_0.15),_10px_10px_20px_rgba(231,_228,_228,_0.15)]">
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={value}
          className="w-[80px] h-[80px] object-cover mb-10"
        />
        <p className="text-sm text-text3 mb-[25px]">{children}</p>
        <div className="w-full">
          <input
            type="radio"
            name={name}
            id={value}
            value={value}
            className="hidden payment-option"
            defaultChecked={defaultChecked}
          />
          <label
            htmlFor={value}
            className="font-semibold py-3 rounded-[10px] min-h-[52px] flex items-center justify-center select-none w-full cursor-pointer"
          >
            <span className="text-white bg-secondary20 connected">
              Connected
            </span>
            <span className="bg-[#EEEAFD] text-secondary connect">Connect</span>
          </label>
        </div>
      </div>
    </div>
  );
};
export default PaymentsPage;
