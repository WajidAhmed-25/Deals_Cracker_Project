import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSignIn, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

import ProfileDropdown from './ProfileIcon/index';
import WishlistPage from './Whishlist/index';

const Index = () => {
  const [isWishlistOpen, setWishlistOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [profile, setProfile] = useState(null); // State to store profile data
  const [token, setToken] = useState(null); // State to track token

  // Create refs for the dropdown containers
  const wishlistRef = useRef(null);
  const profileRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = Cookies.get("dealscracker-token");
    setToken(storedToken);

    if (storedToken) {
      // Fetch profile data if token is available
      const fetchProfile = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/get_profile`, {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });
          setProfile(response.data.profile); // Set profile data
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };

      fetchProfile();
    }
  }, []);

  useEffect(() => {
    // Function to handle clicks outside
    const handleClickOutside = (event) => {
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

    document.addEventListener('mousedown', handleClickOutside);

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
        {/* <div className="flex items-center justify-center sm:justify-center w-full sm:w-[45%] py-4 sm:py-0">
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
        </div> */}

        {/* Third Section: Icons */}
        <div className="flex items-center justify-center sm:justify-end w-full sm:w-[25%] gap-4 sm:gap-6 pr-4 sm:pr-12 py-3">
          {token ? (
            <>
              {/* Wishlist */}
              <div ref={wishlistRef}>
                <div
                  className="cursor-pointer"
                  onClick={toggleWishlist}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    // fill="url(#gradient)"
                    fill="#ffffff"
                    className="w-14 h-14"
                  >
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0284c7" />
                        <stop offset="50%" stopColor="#67e8f9" />
                        <stop offset="100%" stopColor="#bae6fd" />
                      </linearGradient>
                    </defs>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                {isWishlistOpen && <WishlistPage onClose={toggleWishlist} />}
              </div>

              {/* Profile */}
              <div ref={profileRef}>
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg cursor-pointer ">
                  <img
                    src={profile ? profile.profilePicture : "https://via.placeholder.com/64"}
                    alt="Profile"
                    className="rounded-full w-12 h-12"
                    onClick={toggleDropdown}
                  />
                </div>
                {isDropdownOpen && <ProfileDropdown onClose={toggleDropdown} profile={profile} />}
              </div>
            </>
          ) : (
            <>
              {/* Sign In Button */}
              {/* <button
                 className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-[#237da0f8] via-[#237da0f8] to-[#bae6fd] rounded-full hover:bg-[#237da0f8] hover:text-white transition duration-300"
                onClick={() => navigate("/")}
              >
                <FontAwesomeIcon icon={faSignIn} className="text-lg" />
                Sign In
              </button> */}

<button
  className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-[#237da0f8] via-[#237da0f8] to-[#bae6fd] rounded-full hover:bg-[#237da0f8] hover:bg-none hover:text-white transition duration-300"
  onClick={() => navigate("/")}
>
  <FontAwesomeIcon icon={faSignIn} className="text-lg" />
  Sign In
</button>


              {/* Sign Up Button */}
              <button
                className="flex items-center gap-2 px-4 py-2 text-[#237da0f8] bg-white rounded-full hover:bg-[#237da0f8] hover:text-white hover:border-2 hover:border-white transition duration-300"
                onClick={() => navigate("/register")}
              >
                <FontAwesomeIcon icon={faUserPlus} className="text-lg" />
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
