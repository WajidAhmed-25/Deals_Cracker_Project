import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const ProfileDropdown = ({ onClose }) => {
  return (
    <div className="absolute z-[9999] right-0 w-64 p-4 bg-white border border-gray-200 rounded-lg shadow-lg top-24 sm:right-12 ">
      {/* Header */}
      <div className="flex flex-col items-center pb-4 border-b">
        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
          <img
            src="https://via.placeholder.com/64"
            alt="Profile"
            className="rounded-full w-14 h-14"
          />
        </div>
        <h2 className="mt-2 text-lg font-bold text-[#237da0f8]">UserName</h2>
        <p className="text-sm text-[#237da0f8]">example@mail.com</p>
      </div>

      {/* Options */}
      <div className="mt-4">
        <button
          className="flex items-center w-full p-2 text-[#237da0f8] rounded hover:bg-gray-100"
          onClick={() => alert("Profile Settings clicked")}
        >
          <FontAwesomeIcon icon={faCog} className="mr-2 text-[#237da0f8]" />
          Profile Settings
        </button>
        <button
          className="flex items-center w-full p-2 mt-2 text-[#237da0f8] rounded hover:bg-gray-100"
          onClick={() => alert("Logout clicked")}
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-[#237da0f8]" />
          Logout
        </button>
      </div>

      {/* Close Button */}
      <button
        className="absolute text-3xl text-gray-500 top-2 right-2 hover:text-red-500"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  );
};

export default ProfileDropdown;
