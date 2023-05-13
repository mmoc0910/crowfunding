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
      <div className="relative max-w-[407px] w-full shrink-0 rounded-[10px] overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-[303px] bg-[linear-gradient(to_right,#7EF54D,#E7F561,#92EBFF)] bg-contain">
          <div className="absolute z-[3] inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,1))]"></div>
          <img
            src="/background.svg"
            alt=""
            className="absolute inset-0 z-[2]"
          />
        </div>
      </div>
    </div>
  );
};

export default WithdrawPage;
