import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCircle, faShoppingCart, faSignIn, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

import ProfileDropdown from './ProfileIcon/index';
import WishlistPage from './Whishlist/index';

const Index = () => {
  const [isWishlistOpen, setWishlistOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [profile, setProfile] = useState(null);  // State to store profile data
  
  // Create refs for the dropdown containers
  const wishlistRef = useRef(null);
  const profileRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch profile data on component mount
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/get_profile`, {
          headers: {
            Authorization: `Bearer ${Cookies.get("dealscracker-token")}`, // Assuming the token is in the cookies
          },
        });
        setProfile(response.data.profile); // Set profile data
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    // Function to handle clicks outside
    const handleClickOutside = (event) => {
      // Check if click is outside both dropdowns
      if (
        wishlistRef.current && 
        !wishlistRef.current.contains(event.target) &&
        profileRef.current && 
        !profileRef.current.contains(event.target)
      ) {
        setWishlistOpen(false);
        setDropdownOpen(false);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleWishlist = () => {
    setWishlistOpen(!isWishlistOpen);
    if (isDropdownOpen) {
      setDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    if (isWishlistOpen) {
      setWishlistOpen(false);
    }
  };

  return (
    <div className="w-full p-2 ThemeColor" data-aos="fade-down" data-aos-delay="200">
      <div className="flex flex-col items-center justify-between sm:flex-row bg-ThemeColor rounded-xl">
        {/* First Section: Logo */}
        <div className="flex items-center justify-center sm:justify-start w-full sm:w-[25%] px-4 sm:px-12 py-4 sm:py-0">
          <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg sm:w-24 sm:h-24">
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
          <div ref={wishlistRef}>
            <FontAwesomeIcon
              icon={faHeart}
              className="text-3xl text-white cursor-pointer sm:text-5xl"
              onClick={toggleWishlist}
            />
            {isWishlistOpen && <WishlistPage onClose={toggleWishlist} />}
          </div>

          {/* <div ref={profileRef}>
            <FontAwesomeIcon
              icon={faCircle}
              className="text-3xl text-white cursor-pointer sm:text-5xl"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && <ProfileDropdown onClose={toggleDropdown} profile={profile} />}
          </div> */}
          <div ref={profileRef}>
            {/* Display Profile Picture in the Icon */}
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg cursor-pointer">
              <img
                src={profile ? profile.profilePicture : "https://via.placeholder.com/64"} // Default to placeholder if no profile
                alt="Profile"
                className="rounded-full w-10 h-10"
                onClick={toggleDropdown}
              />
            </div>
            {isDropdownOpen && <ProfileDropdown onClose={toggleDropdown} profile={profile} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
