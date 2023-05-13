import { Button } from "components/button";
import React from "react";
const WithdrawPage = () => {
  return (
    <div className="flex gap-10">
      <div className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maiores aut
        dolores et dicta temporibus ab dolorem earum dolore aperiam, ad
        obcaecati quam ut repellat ipsa perspiciatis voluptas reiciendis
        voluptatibus!
      </div>
      <div className="relative max-w-[407px] w-full shrink-0 rounded-[10px] overflow-hidden dark:bg-dark-secondary">
        <div className="absolute top-0 right-0 w-full overflow-hidden h-[260px] bg-[linear-gradient(to_right,#7EF54D,#E7F561,#92EBFF)]">
          <div className="absolute z-[3] inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,1))] dark:bg-[linear-gradient(to_bottom,rgba(28,28,36,0),rgba(28,28,36,0.8))]"></div>
          <img
            src="/background.svg"
            alt=""
            className="absolute inset-0 z-[2]"
          />
        </div>
        <div className="relative z-[4] pt-10 pl-5 pr-1 pb-6 bg-transparent">
          <div className="mx-[76px] mb-[58px] flex flex-col items-center">
            <div className="w-[100px] h-[100px] rounded-full bg-[#DBFCD0] backdrop-blur-[100px] flex items-center justify-center mb-[15px]">
              <span className="text-text2">
                <IconUnion />
              </span>
            </div>
            <p className="text-sm font-medium text-text2 mb-[10px] dark:text-white">
              Your Balance
            </p>
            <p className="text-text1 text-[40px] leading-normal font-bold mb-2 dark:text-white">
              1,206.89
            </p>
            <div className="flex items-center gap-2 mb-5 max-w-max">
              <img
                src="https://flagcdn.com/vn.svg"
                alt="vietnam"
                className="object-cover w-4 h-4 rounded-full"
              />
              <p className="pt-1 text-sm font-medium uppercase text-text2 dark:text-white">
                Vietnam
              </p>
            </div>
            <Button className="bg-primary text-white gap-[10px] px-[60px]">
              <IconDown />
              <span>Withdraw</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
const IconUnion = () => {
  return (
    <svg
      width={43}
      height={46}
      viewBox="0 0 43 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.9117 13.3804V4.83213C27.9117 2.37963 25.8867 0.557129 23.6367 0.557129C23.1417 0.557129 22.6242 0.647128 22.1292 0.827128L4.26421 7.57713C1.76671 8.52213 0.124207 10.9071 0.124207 13.5846V21.8404V21.8422V36.9829C0.124207 41.6404 3.92671 45.4429 8.58421 45.4429H34.4142C39.0717 45.4429 42.8742 41.6404 42.8742 36.9829V36.5554C42.8742 35.3179 41.8617 34.3054 40.6242 34.3054H38.6667C36.5067 34.3054 34.4367 32.9779 33.8742 30.8854C33.4017 29.1754 33.9642 27.5329 35.0892 26.4304C35.9217 25.5754 37.0692 25.0804 38.3292 25.0804H40.6242C41.8617 25.0804 42.8742 24.0679 42.8742 22.8304V21.8404C42.8742 17.1829 39.0717 13.3804 34.4142 13.3804H27.9117ZM24.5367 13.3804V4.83213C24.5367 4.22463 23.9967 3.93213 23.6367 3.93213C23.5242 3.93213 23.4117 3.95463 23.2992 3.99963L5.45671 10.7271C4.2642 11.1771 3.49921 12.3021 3.49921 13.5846L3.49921 15.0904C4.91671 14.0104 6.67171 13.3804 8.58421 13.3804H24.5367ZM42.8758 30.8179V28.5679C42.8758 27.9604 42.4033 27.4654 41.7508 27.4429H38.3533C37.7458 27.4429 37.1833 27.6679 36.7783 28.0954C36.3283 28.5454 36.0583 29.1979 36.1258 29.8954C36.2158 31.0654 37.2958 31.9429 38.4883 31.9429H41.7733C42.4033 31.9204 42.8758 31.4254 42.8758 30.8179ZM10.2492 24.6304H25.9992C26.9217 24.6304 27.6867 23.8654 27.6867 22.9429C27.6867 22.0204 26.9217 21.2554 25.9992 21.2554H10.2492C9.3267 21.2554 8.5617 22.0204 8.5617 22.9429C8.5617 23.8654 9.3267 24.6304 10.2492 24.6304Z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconDown = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 15.9286C11 16.5203 11.4477 17 12 17C12.5523 17 13 16.5203 13 15.9286L13 3.07143C13 2.4797 12.5523 2 12 2C11.4477 2 11 2.47969 11 3.07143L11 15.9286Z"
        fill="currentColor"
      />
      <path
        d="M17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3285 17.0857 11.7189 17.0989 11.3243 16.7372L5.32428 11.2372C4.91716 10.864 4.88965 10.2314 5.26285 9.82427C5.63604 9.41715 6.26861 9.38965 6.67573 9.76284L11.9699 14.6159L17.2929 9.29289Z"
        fill="currentColor"
      />
      <path
        d="M4 21L20 21C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19L4 19C3.44772 19 3 19.4477 3 20C3 20.5523 3.44772 21 4 21Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default WithdrawPage;
