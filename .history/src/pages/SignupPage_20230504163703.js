import React from "react";
import LayoutAuthentication from "layouts/LayoutAuthentication";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import { useForm } from "react-hook-form";
import { Input } from "components/input";
import FormGroup from "components/common/FormGroup";
import { Button, ButtonGoogle } from "components/button";
import { Checkbox } from "components/checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import IconEyeToogle from "icons/IconEyeToogle";
import { useToogleValue } from "hooks/useToogleValue";
import { useDispatch } from "react-redux";
import { register } from "store/auth/auth-slice";

const schema = yup
  .object({
    name: yup.string().required("This field is required"),
    email: yup
      .string()
      .required("This field is required")
      .email("Incorrect email format"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "Minimum of 8 characters"),
  })
  .required();
const SignupPage = () => {
  const dispatch = useDispatch();
  const { value: acceptTerm, handleToogleValue: handleToogleTerm } =
    useToogleValue();
  const { value: tooglePassword, handleToogleValue: handleTooglePassword } =
    useToogleValue();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    if (acceptTerm) {
      try {
        dispatch(register(data));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="mb-[25px] md:mb-[30px] text-xs font-normal text-center md:text-sm md:font-medium text-text3">
        Already have an account?{" "}
        <Link
          to={"/sign-in"}
          className="inline font-medium underline text-primary"
        >
          Sign in
        </Link>
      </p>
      <ButtonGoogle text="Sign up with google"></ButtonGoogle>
      <p className="md:mb-[30px] mb-[15px] text-xs md:text-sm text-text2 cursor-pointer block max-w-max mx-auto dark:text-white">
        Or sign up with email
      </p>
      <form
        className="space-y-[15px] md:space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormGroup>
          <Label htmlFor="name">full name*</Label>
          <Input
            error={errors?.name?.message}
            name="name"
            placeholder={"Jhon Doe"}
            control={control}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">email*</Label>
          <Input
            error={errors?.email?.message}
            name="email"
            placeholder={"example@gmail.com"}
            control={control}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">password*</Label>
          <Input
            error={errors?.password?.message}
            type={tooglePassword ? "text" : "password"}
            name="password"
            placeholder={"Create a password"}
            control={control}
          >
            <IconEyeToogle
              className="absolute -translate-y-1/2 cursor-pointer right-5 top-1/2"
              open={tooglePassword}
              onClick={handleTooglePassword}
            ></IconEyeToogle>
          </Input>
        </FormGroup>
        <div className="pr-[14px] md:pr-5">
          <Checkbox
            checked={acceptTerm}
            onClick={handleToogleTerm}
            control={control}
            name={"acceptTerm"}
          >
            <p className="flex-1 text-xs md:text-sm text-text2 dark:text-text3">
              I agree to the{" "}
              <span className="text-secondary">Tearms of Use</span> and have
              read and understand the{" "}
              <span className="text-secondary">Privacy policy</span>.
            </p>
          </Checkbox>
        </div>
        <Button type="submit" className="w-full text-white bg-primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignupPage;
