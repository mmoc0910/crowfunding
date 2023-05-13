import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import { Input, Textarea } from "components/input";
import { Label } from "components/label";
import { useForm } from "react-hook-form";
import ImageUploader from "quill-image-uploader";
import ReactQuill, { Quill } from "react-quill";
import React from "react";
import "react-quill/dist/quill.snow.css";
import { Button } from "components/button";
import useOnchange from "hooks/useOnchange";
import axios from "axios";
import { v4 } from "uuid";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { imgbbAPI, urlApi } from "config/config";
import { useNavigate } from "react-router-dom";
import IconCalendar from "icons/IconCalendar";

Quill.register("modules/imageUploader", ImageUploader);
const schema = yup
  .object({
    title: yup.string().required("This field is required"),
    category: yup.string().required("This field is required"),
    short_description: yup.string().required("This field is required"),
    goal: yup.string().required("This field is required"),
    amount: yup.string().required("This field is required"),
    country: yup
      .object({
        name: yup.string().required("This field is required"),
        image: yup.string().required("This field is required"),
      })
      .required("This field is required"),
    startDate: yup.string().required("This field is required"),
    endDate: yup.string().required("This field is required"),
  })
  .required();
const categories = [
  "Film",
  "Education",
  "Phone & Accessories",
  "Fashion",
  "Camera Gear",
  "Real Estate",
  "Home",
];
const CampaignStartNew = () => {
  const navigate = useNavigate();
  const modules = React.useMemo(
    () => ({
      toolbar: [
        ["italic", "bold", "underline"],
        ["link", "image"],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" },
        ],
      ],
      imageUploader: {
        upload: async (file) => {
          try {
            const bodyFormData = new FormData();
            bodyFormData.append("image", file);
            const response = await axios({
              method: "post",
              url: imgbbAPI,
              data: bodyFormData,
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            return response.data.data.url;
          } catch (error) {
            console.log(error);
          }
        },
      },
    }),
    []
  );
  const {
    control,
    setValue,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      category: "",
      short_description: "",
      goal: "",
      amount: "",
      prefilled: "",
      video: "",
      country: {
        name: "",
        image: "",
      },
      content: "",
      startDate: new Date(),
      endDate: new Date(),
    },
    resolver: yupResolver(schema),
  });
  const watchAllFields = watch();
  const [fillterCountry, setFillterCountry] = useOnchange();
  const [countries, setCountries] = React.useState([]);
  React.useEffect(() => {
    const getCountry = async () => {
      if (fillterCountry) {
        try {
          const response = await axios.get(
            `https://restcountries.com/v3.1/name/${fillterCountry}`
          );
          setCountries(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getCountry();
  }, [fillterCountry]);
  const onSubmit = async (value) => {
    let campaignImg = [];
    const image = document.querySelectorAll(".ql-editor img");
    [...image].forEach((img) => {
      campaignImg.push(img.getAttribute("src"));
    });
    console.log({ ...value, images: campaignImg });
    try {
      await axios.post(`${urlApi}/campaigns`, {
        ...value,
        images: campaignImg,
      });
      reset({
        title: "",
        category: "",
        short_description: "",
        goal: "",
        amount: "",
        prefilled: "",
        video: "",
        country: {
          name: "",
          image: "",
        },
        content: "",
        startDate: new Date(),
        endDate: new Date(),
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="pt-[25px] px-5 pb-20 md:px-10 md:py-10 xl:py-10 xl:pr-16 xl:pl-28 dark:bg-dark-secondary rounded-[15px] xl:rounded-[10px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <button
        type="button"
        className="text-text2 font-bold lg:text-[25px] flex items-center gap-[10px] bg-text4 bg-opacity-[0.08] px-6 py-3 lg:py-4 lg:px-[60px] rounded-[10px] mx-auto mb-5 lg:mb-[50px] dark:bg-dark-strock dark:text-white"
      >
        Start a Campaign{" "}
        <img
          src="/Rectangle.svg"
          alt="Rectangle.svg"
          className="w-[18px] h-[18px] lg:w-[18px] lg:h-[18px] object-cover"
        />
      </button>
      <div className="space-y-[15px] lg:space-y-[35px]">
        <FormRow>
          <FormGroup>
            <Label>Campaign Title *</Label>
            <Input
              error={errors?.title?.message}
              name="title"
              placeholder={"Write a titel"}
              control={control}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Select a category *</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={
                  watchAllFields.category ? (
                    <span className="text-black dark:text-white">
                      {watchAllFields.category}
                    </span>
                  ) : errors?.category?.message ? (
                    <span className="text-error">
                      {errors?.category?.message}
                    </span>
                  ) : (
                    <span className="text-text4 dark:text-text2">
                      Select a category
                    </span>
                  )
                }
              ></Dropdown.Select>
              <Dropdown.List>
                {categories.length > 0 &&
                  categories.map((category) => (
                    <Dropdown.Option
                      key={v4()}
                      onClick={() => setValue("category", category)}
                    >
                      <span className="capitalize">{category}</span>
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Short Description *</Label>
          <Textarea
            error={errors?.short_description?.message}
            name="short_description"
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
            value={watchAllFields.content}
            onChange={(value) => setValue("content", value)}
          />
        </FormGroup>
        <div className="flex items-center gap-[10px] lg:gap-6 px-5 py-5 lg:px-[50px] lg:py-10 bg-secondary20 rounded-[10px] text-white cursor-pointer !my-[25px] lg:!my-10">
          <Icon />
          <p className="font-bold text-xs lg:text-[25px]">
            You will get 90% of total raised
          </p>
        </div>
        <FormRow>
          <FormGroup>
            <Label>Goal *</Label>
            <Input
              error={errors?.goal?.message}
              name="goal"
              placeholder={"$0.00 USD"}
              control={control}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Raised Amount *</Label>
            <Input
              error={errors?.amount?.message}
              name="amount"
              placeholder={"$0.00 USD"}
              control={control}
            ></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Amount Prefilled *</Label>
            <Input
              name="prefilled"
              placeholder={"Amount Prefilled"}
              control={control}
            ></Input>
            <p className="mt-1 text-xs lg:text-sm text-text3">
              It will help fill amount box by click, place each amount by comma,
              ex: 10,20,30,40
            </p>
          </FormGroup>
          <FormGroup>
            <Label>Video</Label>
            <Input name="video" placeholder={"Video"} control={control}></Input>
            <p className="mt-1 text-xs lg:text-sm text-text3">
              Place Youtube or Vimeo Video URL
            </p>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Campaign End Method</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={
                  watchAllFields.endMethod ? (
                    <span className="text-black dark:text-white">
                      {watchAllFields.endMethod}
                    </span>
                  ) : (
                    <span className="text-text4 dark:text-text2">
                      Select one
                    </span>
                  )
                }
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Podcust, Blogs & Vlogs</Dropdown.Option>
                <Dropdown.Option>Tablet Games</Dropdown.Option>
                <Dropdown.Option>Video Games</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label>Country</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={
                  watchAllFields.country.name ? (
                    <div className="flex items-center gap-3 text-black lg:gap-5 dark:text-white">
                      <img
                        src={watchAllFields.country.image}
                        alt={watchAllFields.country.name}
                        className="w-[26px] h-[18px] object-cover rounded-[2px]"
                      />
                      <span className="translate-y-[1px] line-clamp-1">
                        {watchAllFields.country.name}
                      </span>
                    </div>
                  ) : errors?.country?.message ? (
                    <span className="text-error">
                      {errors?.country?.message}
                    </span>
                  ) : (
                    <span className="text-text4 dark:text-text2">
                      Select a country
                    </span>
                  )
                }
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Search
                  placeholder="Search Country"
                  onChange={setFillterCountry}
                  value={fillterCountry}
                ></Dropdown.Search>
                {countries.length > 0 &&
                  countries.map((country) => (
                    <Dropdown.Option
                      key={v4()}
                      onClick={() =>
                        setValue("country", {
                          name: country.name.common,
                          image: country.flags.svg,
                        })
                      }
                    >
                      <div className="flex items-center gap-3 lg:gap-5">
                        <img
                          src={country.flags.svg}
                          alt={country.flags.svg}
                          className="w-[26px] h-[18px] object-cover rounded-[2px]"
                        />
                        <span className="translate-y-[1px]">
                          {country.name.common}
                        </span>
                      </div>
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Start Date</Label>
            <DatePicker
              onChange={(value) => setValue("startDate", value)}
              value={watchAllFields.startDate}
              format="dd/MM/yyyy"
              calendarIcon={<IconCalendar />}
            />
          </FormGroup>
          <FormGroup>
            <Label>End Date</Label>
            <DatePicker
              onChange={(value) => setValue("endDate", value)}
              value={watchAllFields.endDate}
              calendarIcon={<IconCalendar />}
            />
          </FormGroup>
        </FormRow>
      </div>
      <Button
        className="px-10 mx-auto mt-10 text-white bg-primary"
        type="submit"
      >
        Submit new campaign
      </Button>
    </form>
  );
};

const Icon = () => {
  return (
    <svg
      className="w-5 h-auto lg:w-10"
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
