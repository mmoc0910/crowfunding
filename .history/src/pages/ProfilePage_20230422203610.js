import PersonalInformation from "modules/profile/PersonalInformation";
import React from "react";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const ProfilePage = () => {
  return (
    <div className="pt-[25px] px-5 pb-20 md:px-10 md:py-10 xl:pt-[50px] xl:pb-[60px] xl:px-52 dark:bg-dark-secondary rounded-[15px] xl:rounded-[10px]">
      <div className="mb-[55px]">
        <h1 className="text-text1 font-bold text-[25px] mb-1">
          Account Information
        </h1>
        <p className="text-sm text-text3">Update your account information</p>
      </div>
      <PersonalInformation />
    </div>
  );
};

export default ProfilePage;
