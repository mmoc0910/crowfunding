import React from "react";
import LayoutAuthentication from "layouts/LayoutAuthentication";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "components/label";
import { useForm } from "react-hook-form";
import { Input } from "components/input";
import FormGroup from "components/common/FormGroup";
import { Button, ButtonGoogle } from "components/button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import IconEyeToogle from "icons/IconEyeToogle";
import { useToogleValue } from "hooks/useToogleValue";
import { useDispatch, useSelector } from "react-redux";
import { login } from "store/auth/auth-slice";
import { getToken } from "utils/auth";

const schema = yup
  .object({
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
const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const { user } = useSelector((state) => state.auth);

  React.useEffect(() => {
    const { refreshToken } = getToken();
    if (user && refreshToken) {
      navigate("/");
    }
  }, [navigate, user]);

  const onSubmit = (data) => {
    try {
      dispatch(login(data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  if (user) return null;
  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="mb-[25px] md:mb-[30px] text-xs font-normal text-center md:text-sm md:font-medium text-text3">
        Dont have an account?{" "}
        <Link
          to={"/sign-up"}
          className="inline font-medium underline text-primary"
        >
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with google"></ButtonGoogle>
      <form
        className="space-y-[15px] md:space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
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
            placeholder={"Enter Password"}
            control={control}
          >
            <IconEyeToogle
              className="absolute -translate-y-1/2 cursor-pointer right-5 top-1/2"
              open={tooglePassword}
              onClick={handleTooglePassword}
            ></IconEyeToogle>
          </Input>
        </FormGroup>
        <div className="flex justify-end">
          <p className="text-sm font-medium cursor-pointer select-none text-primary">
            Forgot password
          </p>
        </div>
        <Button type="submit" className="w-full text-white bg-primary">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
