import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import { Input, Textarea } from "components/input";
import { Label } from "components/label";
import { useForm } from "react-hook-form";
import ImageUploader from "quill-image-uploader";
import ReactQuill, { Quill } from "react-quill";
import React, { useMemo, useState } from "react";
import "react-quill/dist/quill.snow.css";
Quill.register("modules/imageUploader", ImageUploader);
const CampaignStartNew = () => {
  const { control } = useForm({});
  const [category, setCategory] = useState("");
  console.log(category);
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
          <Dropdown>
            <Dropdown.Select
              placeholder={category ? category : "Select a category"}
            ></Dropdown.Select>
            <Dropdown.List>
              <Dropdown.Option
                onClick={() => setCategory("Podcust, Blogs & Vlogs")}
              >
                Podcust, Blogs & Vlogs
              </Dropdown.Option>
              <Dropdown.Option onClick={() => setCategory("Tablet Games")}>
                Tablet Games
              </Dropdown.Option>
              <Dropdown.Option onClick={() => setCategory("Video Games")}>
                Video Games
              </Dropdown.Option>
            </Dropdown.List>
          </Dropdown>
        </FormGroup>
      </FormRow>
      <FormGroup>
        <Label>Short Description *</Label>
        <Textarea
          name="email"
          placeholder={"Write a short description...."}
          control={control}
        ></Textarea>
      </FormGroup>
    </form>
  );
};

export default CampaignStartNew;
