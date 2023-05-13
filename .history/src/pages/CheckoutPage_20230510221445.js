import CampaignPaymentMethod from "campaign/parts/CampaignPaymentMethod";
import { Button } from "components/button";
import { Checkbox } from "components/checkbox";
import { defaultImg } from "constants/global";
import { useToogleValue } from "hooks/useToogleValue";
import React from "react";
import { Link } from "react-router-dom";
import RequireAuthPage from "./RequireAuthPage";

const CheckoutPage = () => {
  const { value: acceptTerm, handleToogleValue: handleToogleTerm } =
    useToogleValue();
  return (
    <RequireAuthPage>
      <div className="flex flex-col lg:flex-row gap-[30px] md:gap-[50px] lg:gap-[135px]">
        <div className="">
          <h1 className="text-text1 font-bold text-lg md:text-[30px] mb-5 md:mb-10 dark:text-white">
            Payment
          </h1>
          <div className="flex items-center gap-[30px]">
            <CampaignPaymentMethod id="paypal" image={"/SeekPng 1.svg"} />
            <CampaignPaymentMethod id="payoneer" image={"/SeekPng 1 (1).svg"} />
          </div>
        </div>
        <div className="lg:max-w-[462px] md:w-[90%] w-full p-[25px_15px] md:p-[15px_20px_40px] bg-white dark:bg-dark-secondary shadow-[-10px_15px_20px_rgba(231,_228,_228,_0.15),_10px_10px_20px_rgba(231,_228,_228,_0.15)] dark:shadow-[0px_16px_30px_rgba(33,_25,_25,_0.17),_0px_30px_60px_rgba(1,_2,_9,_0.2)] rounded-[20px]">
          <h2 className="text-xs md:text-lg font-semibold text-text2 p-[10px] mb-[15px] dark:text-white">
            Contribution Summury
          </h2>
          <div className="px-[15px] py-[10px] md:px-5 md:py-4 bg-opacity-[0.05] bg-secondary rounded-[10px] flex items-center justify-between mb-[15px] dark:bg-dark-strock dark:bg-opacity-50">
            <Link className="gap-[15px] flex items-center">
              <img
                src={defaultImg}
                alt="...."
                className="object-cover w-[64px] h-[50px] md:w-[90px] md:h-[70px] rounded-[5px]"
              />
              <p className="text-xs font-medium text-text1 dark:text-white md:text-base">
                Special One Camera
              </p>
            </Link>
            <p className="text-xs font-bold text-text1 dark:text-white md:text-base">
              $2,724 USD
            </p>
          </div>
          <div className="pl-5">
            <div className="mb-5 md:mb-[30px]">
              <div className="flex items-center justify-between mb-[10px] text-text2 font-medium dark:text-text3 text-xs md:text-base">
                <p>Subtotal</p>
                <p>$2,724 USD</p>
              </div>
              <div className="flex items-center justify-between mb-5 md:mb-[25px] text-text2 font-medium dark:text-text3 text-xs md:text-base">
                <p>Shipping</p>
                <p>$0 USD</p>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-text1 dark:text-white md:text-base">
                <p>TOTAL</p>
                <p>$2,724 USD</p>
              </div>
            </div>
            <div className="pr-[14px] md:pr-5 mb-5">
              <Checkbox checked={acceptTerm} onClick={handleToogleTerm}>
                <p className="flex-1 text-xs md:text-sm text-text2 dark:text-text3">
                  I agree to the{" "}
                  <span className="text-secondary">Tearms of Use</span> and have
                  read and understand the{" "}
                  <span className="text-secondary">Privacy policy</span>.
                </p>
              </Checkbox>
            </div>
            <Button className="w-full text-white bg-primary">
              Submit Payment
            </Button>
          </div>
        </div>
      </div>
    </RequireAuthPage>
  );
};

export default CheckoutPage;
