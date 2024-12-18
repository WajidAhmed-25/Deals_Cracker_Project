import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCircle, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const index = () => {
  return (
   
    <div className="w-full p-2 ThemeColor">
      <div className="flex flex-col items-center justify-between sm:flex-row bg-ThemeColor rounded-xl">
        {/* First Section: Logo */}
        <div className="flex items-center justify-center sm:justify-start w-full sm:w-[25%] px-4 sm:px-12 py-4 sm:py-0">
          {/* Logo Container */}
          <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg sm:w-24 sm:h-24">
            {/* Logo */}
            <img src="/assets/logo.png" alt="Logo" className="object-contain w-[90%] h-[90%]" />
          </div>
        </div>

        {/* Second Section: Search Bar */}
        <div className="flex items-center justify-center sm:justify-center w-full sm:w-[45%] py-4 sm:py-0">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search for Grocery, Stores..."
              className="w-full px-4 py-3 tracking-wider text-center bg-white rounded-full outline-none sm:test-sm text-md"
            />
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="absolute transform -translate-y-1/2 h-7 w-7 text-[#237da0f8] right-6 top-1/2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>

        {/* Third Section: Icons */}
        <div className="flex items-center justify-center sm:justify-end w-full sm:w-[25%] gap-4 sm:gap-6 pr-4 sm:pr-12 py-3">
          {/* Heart Icon */}
          <FontAwesomeIcon icon={faHeart} className="text-3xl text-white sm:text-5xl" />

          {/* Empty Circle Icon */}
          <FontAwesomeIcon icon={faCircle} className="text-3xl text-white sm:text-5xl" />
        </div>
      </div>
    </div>



  )
}

export default index
