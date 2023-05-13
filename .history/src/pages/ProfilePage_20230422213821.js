import PersonalInformation from "modules/profile/PersonalInformation";
import React from "react";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import Credentials from "modules/profile/Credentials";

const ProfilePage = () => {
  return (
    <div className="pt-[25px] px-5 pb-20 md:px-10 md:py-10 xl:pt-[50px] xl:pb-[60px] xl:px-52 dark:bg-dark-secondary rounded-[15px] xl:rounded-[10px]">
      <div className="mb-10 md:mb-[55px]">
        <h1 className="text-text1 font-bold text-lg md:text-[25px] mb-1 dark:text-white ">
          Account Information
        </h1>
        <p className="text-xs md:text-sm text-text3">
          Update your account information
        </p>
      </div>
      <div className="space-y-[50px]">
        <PersonalInformation />
        <Credentials />
      </div>
    </div>
  );
};

export default ProfilePage;
