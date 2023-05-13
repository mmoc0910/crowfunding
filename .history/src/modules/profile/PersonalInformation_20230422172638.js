import React from "react";
import { useForm } from "react-hook-form";

const PersonalInformation = () => {
  const { control } = useForm();
  return (
    <div>
      <h2 className="text-xl font-bold text-text1">Personal Information</h2>
    </div>
  );
};

export default PersonalInformation;
