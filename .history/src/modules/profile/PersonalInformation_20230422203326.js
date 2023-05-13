import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Input } from "components/input";
import { Label } from "components/label";
import IconEdit from "icons/IconEdit";
import React from "react";
import { useForm } from "react-hook-form";

const PersonalInformation = () => {
  const { control } = useForm({
    defaultValues: {
      firstname: "Mahfuzul Islam",
      lastname: "Last",
    },
  });
  return (
    <form>
      <div className="mb-[35px] flex items-center justify-between">
        <h2 className="text-xl font-bold text-text1">Personal Information</h2>
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
            <Input control={control} name="firstname"></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastname">Last</Label>
            <Input control={control} name="lastname"></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="firstname">First Name</Label>
            <Input control={control} name="firstname"></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastname">Last</Label>
            <Input control={control} name="lastname"></Input>
          </FormGroup>
        </FormRow>
      </div>
    </form>
  );
};

export default PersonalInformation;
