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
      <div className="">
        <PaymentCard />
      </div>
    </div>
  );
};
const PaymentCard = () => {
  return <div className="p-[25px] pt-[35px]"></div>;
};
export default PaymentsPage;
