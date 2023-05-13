import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Input } from "components/input";
import { Label } from "components/label";
import React from "react";
import { useForm } from "react-hook-form";

const CampaignStartNew = () => {
  const { control } = useForm({});
  return (
    <form className="py-10 pr-16 pl-28 dark:bg-dark-secondary rounded-[10px]">
      <button className="text-text2 font-bold text-[25px] flex items-center gap-[10px] bg-text4 bg-opacity-[0.08] py-4 px-[60px] rounded-[10px] mx-auto mb-[50px] dark:bg-dark-strock dark:text-white">
        Start a Campaign <img src="/Rectangle.svg" alt="Rectangle.svg" />
      </button>
      <FormRow>
        <FormGroup>
          <Label>Campaign Title *</Label>
          <Input
            name="email"
            placeholder={"Write a titel"}
            control={control}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Select a category *</Label>
          <Input
            name="email"
            placeholder={"Select a category"}
            control={control}
          ></Input>
        </FormGroup>
      </FormRow>
      <FormGroup>
        <Label>Short Description *</Label>
        <Input
          name="email"
          placeholder={"Write a short description...."}
          control={control}
        ></Input>
      </FormGroup>
    </form>
  );
};

export default CampaignStartNew;
