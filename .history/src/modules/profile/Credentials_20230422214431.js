import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Input } from "components/input";
import { Label } from "components/label";
import IconCalendar from "icons/IconCalendar";
import IconEdit from "icons/IconEdit";
import React from "react";
import DatePicker from "react-date-picker";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import IconEyeToogle from "icons/IconEyeToogle";
import IconEmail from "icons/IconEmail";
import IconLock from "icons/IconLock";

const schema = yup
  .object({
    email: yup.string().required("This field is required"),
    newPassword: yup.string().required("This field is required"),
    confirmPassword: yup.string().required("This field is required"),
  })
  .required();
const Credentials = () => {
  const [toogleNewPassword, setToogleNewPassword] = React.useState(false);
  const [toogleconfirmPassword, setToogleconfirmPassword] =
    React.useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "hellouihut@gmail.com",
      newPassword: "mmoc010",
      confirmPassword: "mmoc010",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (value) => {
    console.log(value);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="mb-[25px] md:mb-[35px] flex items-center justify-between">
        <h2 className="font-bold md:text-xl text-text1 dark:text-white">
          Credentials
        </h2>
        <button
          type="submit"
          className="flex items-center gap-[10px] text-secondary20"
        >
          <IconEdit />
          <p className="text-sm font-semibold md:text-xl">Edit</p>
        </button>
      </div>
      <div className="space-y-[15px] md:space-y-[35px]">
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            className="pl-[70px]"
            control={control}
            name="email"
            error={errors?.email?.message}
          >
            <span className="absolute -translate-y-1/2 cursor-pointer left-6 top-1/2 text-[#A2A2A8] dark:text-[#4B5264]">
              <IconEmail />
            </span>
          </Input>
        </FormGroup>
        <FormRow>
          <FormGroup>
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              className="pl-[70px]"
              control={control}
              name="newPassword"
              type={toogleNewPassword ? "text" : "password"}
              error={errors?.newPassword?.message}
            >
              <>
                <span className="absolute -translate-y-1/2 cursor-pointer left-6 top-1/2 text-[#A2A2A8] dark:text-[#4B5264]">
                  <IconLock />
                </span>
                <IconEyeToogle
                  className="absolute -translate-y-1/2 cursor-pointer right-5 top-1/2"
                  open={toogleNewPassword}
                  onClick={() => setToogleNewPassword(!toogleNewPassword)}
                ></IconEyeToogle>
              </>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              className="pl-[70px]"
              control={control}
              name="confirmPassword"
              type={toogleconfirmPassword ? "text" : "password"}
              error={errors?.confirmPassword?.message}
            >
              <>
                <span className="absolute -translate-y-1/2 cursor-pointer left-6 top-1/2 text-[#A2A2A8] dark:text-[#4B5264]">
                  <IconLock />
                </span>{" "}
                <IconEyeToogle
                  className="absolute -translate-y-1/2 cursor-pointer right-5 top-1/2"
                  open={toogleconfirmPassword}
                  onClick={() =>
                    setToogleconfirmPassword(!toogleconfirmPassword)
                  }
                ></IconEyeToogle>
              </>
            </Input>
          </FormGroup>
        </FormRow>
      </div>
    </form>
  );
};

export default Credentials;
