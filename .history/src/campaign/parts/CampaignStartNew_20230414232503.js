import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Input } from "components/input";
import { Label } from "components/label";
import React from "react";

const CampaignStartNew = () => {
  return (
    <div className="py-10 pr-16 pl-28">
      <button className="text-text2 font-bold text-[25px] flex items-center gap-[10px] bg-text4 bg-opacity-[0.08] py-4 px-[60px] rounded-[10px] mx-auto mb-[50px]">
        Start a Campaign <img src="/Rectangle.svg" alt="Rectangle.svg" />
      </button>
      <FormRow>
        <FormGroup>
          <Label>Campaign Title *</Label>
          <Input placeholder="Write a titel"></Input>
        </FormGroup>
        <FormGroup></FormGroup>
      </FormRow>
    </div>
  );
};

export default CampaignStartNew;
