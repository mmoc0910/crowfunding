import React from "react";
import img from "/Rectangle(1).svg";
const WithdrawPage = () => {
  console.log(img);
  return (
    <div className="flex gap-10">
      <div className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maiores aut
        dolores et dicta temporibus ab dolorem earum dolore aperiam, ad
        obcaecati quam ut repellat ipsa perspiciatis voluptas reiciendis
        voluptatibus!
      </div>
      <div className="max-w-[407px] w-full shrink-0 rounded-[10px] overflow-hidden">
        <div className="relative w-full h-[303px] bg-[linear-gradient(to_right,#7EF54D,#E7F561,#92EBFF)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,1))] bg-opacity-[0.05]"></div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawPage;
