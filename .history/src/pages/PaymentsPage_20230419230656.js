import React from "react";
const PaymentsPage = () => {
  return (
    <div className="lg:w-[624px] mx-auto pt-[66px]">
      <h1 className="text-text1 font-bold text-lg md:text-[25px] mb-[10px] text-center dark:text-white">
        Connect Your Payment Processor
      </h1>
      <p className="text-xs md:text-base text-center text-text3 pb-[25px] md:pb-[60px]">
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
        <PaymentCard value={"payoneer"} image={"/SeekPng 1 (1).svg"}>
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
    <div className="p-[25px] pt-[35px] w-[292px] h-[279px] rounded-[20px] shadow-[-10px_15px_20px_rgba(231,_228,_228,_0.15),_10px_10px_20px_rgba(231,_228,_228,_0.15)] dark:bg-dark-secondary dark:shadow-[0px_16px_30px_rgba(33,_25,_25,_0.17),_0px_30px_60px_rgba(1,_2,_9,_0.2)]">
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
            <span className="text-secondary connect dark:text-white">
              Connect
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};
export default PaymentsPage;
