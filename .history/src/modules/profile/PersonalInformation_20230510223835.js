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
import { Button } from "components/button";
import { useSelector } from "react-redux";

const schema = yup
  .object({
    firstname: yup.string().required("This field is required"),
    lastname: yup.string().required("This field is required"),
    mobileNumber: yup.string().required("This field is required"),
  })
  .required();

const PersonalInformation = () => {
  const { user } = useSelector((state) => state.auth);
  const [edit, setEdit] = React.useState(false);
  const {
    control,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: user.name,
      lastname: "Last",
      mobileNumber: "+123 456 7890",
      dateOfBirth: new Date("09/10/2001"),
    },
    resolver: yupResolver(schema),
  });
  const watchAllFields = watch();
  const onSubmit = (value) => {
    console.log(value);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="mb-[25px] md:mb-[35px] flex items-center justify-between">
        <h2 className="font-bold md:text-xl text-text1 dark:text-white">
          Personal Information
        </h2>
        <button
          className="flex items-baseline gap-[10px] text-secondary20"
          onClick={() => setEdit(true)}
        >
          <IconEdit />
          <p className="text-sm font-semibold md:text-base lg:text-xl -translate-y-[2px]">
            Edit
          </p>
        </button>
      </div>
      <div className="space-y-[15px] md:space-y-[35px]">
        <FormRow>
          <FormGroup>
            <Label htmlFor="firstname">First Name</Label>
            <Input
              control={control}
              name="firstname"
              error={errors?.firstname?.message}
              disabled={!edit}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastname">Last</Label>
            <Input
              control={control}
              name="lastname"
              error={errors?.lastname?.message}
              disabled={!edit}
            ></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Date of Birth</Label>
            <DatePicker
              onChange={(value) => setValue("dateOfBirth", value)}
              value={watchAllFields.dateOfBirth}
              format="dd/MM/yyyy"
              calendarIcon={<IconCalendar />}
              disabled={!edit}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="mobileNumber">Mobile Number</Label>
            <Input
              inputMode="tel"
              control={control}
              name="mobileNumber"
              error={errors?.mobileNumber?.message}
              disabled={!edit}
            ></Input>
          </FormGroup>
        </FormRow>
      </div>
      {edit && (
        <Button
          type="submit"
          className="text-white bg-primary px-[38px] lg:px-[65px] mt-[25px] md:mt-[30px]"
        >
          Update
        </Button>
      )}
    </form>
  );
};

export default PersonalInformation;
