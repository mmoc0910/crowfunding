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
import IconBold from "icons/icon/IconBold";
import { icon } from "constants/global";
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
  var icons = ReactQuill.Quill.import("ui/icons");
  icons["italic"] = icon.italic;
  // icons["italic"] = '<i class="fa fa-italic" aria-hidden="true"></i>';
  // icons["underline"] = '<i class="fa fa-underline" aria-hidden="true"></i>';
  // icons["link"] = '<i class="fa fa-link" aria-hidden="true"></i>';

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
      </div>
    </form>
  );
};

export default CampaignStartNew;
