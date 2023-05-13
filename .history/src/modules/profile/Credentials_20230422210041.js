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

const schema = yup
  .object({
    firstname: yup.string().required("This field is required"),
    lastname: yup.string().required("This field is required"),
    mobileNumber: yup.string().required("This field is required"),
  })
  .required();
const Credentials = () => {
  const {
    control,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "Mahfuzul Islam",
      lastname: "Last",
      mobileNumber: "+123 456 7890",
      dateOfBirth: new Date(),
    },
    resolver: yupResolver(schema),
  });
  const watchAllFields = watch();
  const onSubmit = (value) => {
    console.log(value);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="mb-[35px] flex items-center justify-between">
        <h2 className="text-xl font-bold text-text1">Credentials</h2>
        <button
          type="submit"
          className="flex items-center gap-[10px] text-secondary20"
        >
          <IconEdit />
          <p className="text-xl font-semibold">Edit</p>
        </button>
      </div>
      <div className="space-y-[35px]">
        <FormRow>
          <FormGroup>
            <Label htmlFor="firstname">First Name</Label>
            <Input
              control={control}
              name="firstname"
              error={errors?.firstname?.message}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastname">Last</Label>
            <Input
              control={control}
              name="lastname"
              error={errors?.lastname?.message}
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
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="mobileNumber">Mobile Number</Label>
            <Input
              control={control}
              name="mobileNumber"
              error={errors?.mobileNumber?.message}
            ></Input>
          </FormGroup>
        </FormRow>
      </div>
    </form>
  );
};

export default Credentials;