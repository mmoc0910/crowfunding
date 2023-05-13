import IconEdit from "icons/IconEdit";
import React from "react";
import { useForm } from "react-hook-form";

const PersonalInformation = () => {
  const { control } = useForm();
  return (
    <form>
      <div className="mb-[35px] flex items-center justify-between">
        <h2 className="text-xl font-bold text-text1">Personal Information</h2>
        <div className="flex items-center gap-[10px]">
          <div className="mb-[35px] flex item">
            {" "}
            <h2 className="text-xl font-bold text-text1">
              Personal Information
            </h2>
          </div>
          <IconEdit />
        </div>
      </div>
    </form>
  );
};

export default PersonalInformation;
