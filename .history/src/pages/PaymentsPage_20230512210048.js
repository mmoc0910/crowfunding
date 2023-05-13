import React from "react";
import RequireAuthPage from "./RequireAuthPage";
const PaymentsPage = () => {
  return (
    <RequireAuthPage>
      <div className="lg:w-[624px] mx-auto pt-[10px] md:pt-[66px]">
        <h1 className="text-text1 font-bold text-lg md:text-[25px] mb-[10px] text-center dark:text-white">
          Connect Your Payment Processor
        </h1>
        <p className="text-xs md:text-base text-center text-text3 pb-[25px] md:pb-[60px]">
          To Start Processing credit card payments and donations, you will need
          to select either Paypal or Payoneer
        </p>
        <div className="flex flex-col items-center gap-5 mx-auto md:gap-10 md:flex-row max-w-max">
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
    </RequireAuthPage>
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
    <div className="p-5 md:p-[25px] md:pt-[35px] w-[245px] h-[208px] md:w-[292px] md:h-[279px] rounded-[15px] md:rounded-[20px] shadow-[-10px_15px_20px_rgba(231,_228,_228,_0.15),_10px_10px_20px_rgba(231,_228,_228,_0.15)] dark:bg-dark-secondary dark:shadow-[0px_16px_30px_rgba(33,_25,_25,_0.17),_0px_30px_60px_rgba(1,_2,_9,_0.2)]">
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={value}
          className="w-[65px] h-[65px] md:w-[80px] md:h-[80px] object-cover mb-[25px] md:mb-10"
        />
        <p className="text-xs md:text-sm text-text3 mb-[25px]">{children}</p>
        <div className="w-full">
          <input
            type="radio"
            name={name}
            id={value}
            value={value}
            className="hidden payment-option peer"
            defaultChecked={defaultChecked}
          />
          <label
            htmlFor={value}
            className="text-sm md:text-base font-semibold py-[10px] md:py-3 rounded-[5px] md:rounded-[10px] min-h-10 md:min-h-[52px] flex items-center justify-center select-none w-full cursor-pointer peer-checked:before:content-['Connected'] peer-checked:text-white bg-secondary20 before:content-['Connect'] before:text-secondary before:dark:text-white"
          >
            {/* <span className="text-white bg-secondary20 connected">
              Connected
            </span>
            <span className="text-secondary connect dark:text-white">
              Connect
            </span> */}
          </label>
        </div>
      </div>
    </div>
  );
};
export default PaymentsPage;
