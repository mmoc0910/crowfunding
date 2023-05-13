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
  const [content, setContent] = React.useState("");
  const modules = useMemo(
    () => ({
      toolbar: [
        ["italic", "bold", "underline", "strike"],
        // ["blockquote"],
        // [{ header: 1 }, { header: 2 }], // custom button values
        // [{ list: "ordered" }, { list: "bullet" }],
        // [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" },
        ],
      ],
      // imageUploader: {
      //   // upload: async (file) => {
      //   //   const bodyFormData = new FormData();
      //   //   bodyFormData.append("image", file);
      //   //   const response = await axios({
      //   //     method: "post",
      //   //     url: imgbbAPI,
      //   //     data: bodyFormData,
      //   //     headers: {
      //   //       "Content-Type": "multipart/form-data",
      //   //     },
      //   //   });
      //   //   return response.data.data.url;
      //   // },
      // },
    }),
    []
  );

  const { control } = useForm({});
  const [category, setCategory] = useState("");
  console.log(category);
  return (
    <form className="py-10 pr-16 pl-28 dark:bg-dark-secondary rounded-[10px]">
      <button className="text-text2 font-bold text-[25px] flex items-center gap-[10px] bg-text4 bg-opacity-[0.08] py-4 px-[60px] rounded-[10px] mx-auto mb-[50px] dark:bg-dark-strock dark:text-white">
        Start a Campaign <img src="/Rectangle.svg" alt="Rectangle.svg" />
      </button>
      <div className="space-y-[35px]">
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
        <FormGroup>
          <Label>Story *</Label>
          <ReactQuill
            placeholder="Write your story......"
            modules={modules}
            theme="snow"
            value={content}
            onChange={setContent}
          />
        </FormGroup>
        <div className="flex items-center gap-6 px-[50px] py-10 bg-secondary20 rounded-[10px] text-white">
          <Icon />
        </div>
      </div>
    </form>
  );
};

const Icon = () => {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2289_19109)">
        <path
          d="M26.4997 9.979H13.1663C12.6663 9.979 12.333 10.3123 12.333 10.8123C12.333 11.3123 12.6663 11.6457 13.1663 11.6457H26.4997C26.9997 11.6457 27.333 11.3123 27.333 10.8123C27.333 10.3123 26.9997 9.979 26.4997 9.979Z"
          fill="currentColor"
        />
        <path
          d="M12.4999 7.81266C12.4999 8.146 12.8332 8.31266 13.1666 8.31266H26.4999C26.8332 8.31266 27.1666 8.146 27.1666 7.81266L30.4999 1.146C30.6666 0.812663 30.6666 0.479329 30.3332 0.145996C30.1666 -0.0206706 29.8332 -0.0206706 29.4999 0.145996L23.3332 3.146L20.4999 0.312663C20.1666 -0.0206706 19.6666 -0.0206706 19.3332 0.312663L16.3332 3.146L10.1666 0.145996C9.83324 -0.0206706 9.4999 -0.0206706 9.16657 0.145996C8.83324 0.312663 8.9999 0.812663 9.16657 1.146L12.4999 7.81266Z"
          fill="currentColor"
        />
        <path
          d="M27.1667 13.6456C27 13.4789 26.6667 13.3123 26.5 13.3123H13.1667C13 13.3123 12.6667 13.4789 12.5 13.6456C12.1667 13.9789 4 22.6456 4 27.4789C4 34.3123 11.1667 39.9789 19.8333 39.9789C28.5 39.9789 35.6667 34.3123 35.6667 27.4789C35.6667 22.6456 27.5 13.9789 27.1667 13.6456ZM20.6667 33.3123V34.1456C20.6667 34.6456 20.3333 34.9789 19.8333 34.9789C19.3333 34.9789 19 34.6456 19 34.1456V33.3123C17.1667 32.9789 15.8333 31.8123 15.6667 30.3123C15.6667 29.8123 16 29.4789 16.5 29.4789C17 29.4789 17.3333 29.8123 17.3333 30.3123C17.3333 30.9789 18.1667 31.6456 19 31.8123V28.4789C16.8333 27.9789 15.6667 26.8123 15.6667 25.3123C15.6667 23.6456 17.1667 22.3123 19 21.9789V21.1456C19 20.6456 19.3333 20.3123 19.8333 20.3123C20.3333 20.3123 20.6667 20.6456 20.6667 21.1456V21.6456C22.5 21.9789 23.8333 23.1456 24 24.6456C24 25.1456 23.6667 25.4789 23.1667 25.4789C22.6667 25.4789 22.3333 25.1456 22.3333 24.6456C22.3333 23.9789 21.5 23.3123 20.6667 23.1456V26.4789C22.8333 26.9789 24 28.1456 24 29.6456C24 31.6456 22.5 32.9789 20.6667 33.3123Z"
          fill="currentColor"
        />
        <path
          d="M20.667 28.4785V31.4785C21.667 31.3119 22.3337 30.6452 22.3337 29.9785C22.3337 29.3119 21.8337 28.8118 20.667 28.4785Z"
          fill="currentColor"
        />
        <path
          d="M17.333 24.9788C17.333 25.6454 17.833 26.1454 18.9997 26.4788V23.4788C17.9997 23.6454 17.333 24.3121 17.333 24.9788Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2289_19109">
          <rect
            width="39.6667"
            height="39.9579"
            fill="currentColor"
            transform="translate(0 0.0209961)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CampaignStartNew;
