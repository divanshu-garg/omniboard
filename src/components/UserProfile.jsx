import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { userProfileData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { Button } from "./index";
import avatar from "../assets/avatar.jpg";

const UserProfile = () => {
  const { setIsClicked, currentColor } = useStateContext();
  return (
    <div className="nav-item shadow-2xl absolute right-1 md:right-10 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="justify-between flex items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2">
          User Profile
        </h2>
        <button
          onClick={() =>
            setIsClicked((prev) => ({ ...prev, userProfile: false }))
          }
        >
          <MdOutlineCancel />
        </button>
      </div>
      {/* <div>logo and stuff below</div> */}
      <div className="flex my-3">
        <img
          src={avatar}
          alt="profile image"
          className="rounded-xl mr-4 object-cover"
          style={{ width: "80px", height: "80px" }}
        />
        <div className="items-center justify-center">
          <p className="text-2md font-bold">Michael Roberts</p>
          <p className="text-gray-600 text-sm">Administrator</p>
          <p className="text-gray-500 text-sm font-semibold">info@shop.com</p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div
            className="flex mb-4 border-gray-100 border-t-1 pt-4 dark:border-gray-700"
            key={index}
          >
            <button
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="flex mr-10 w-[20%] justify-center items-center rounded-[25%]"
            >
              {item.icon}
            </button>
            <div className="flex-1">
              <p className="text-md font-semibold text-gray-800 dark:text-gray-200">
                {item.title}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  );
};

export default UserProfile;