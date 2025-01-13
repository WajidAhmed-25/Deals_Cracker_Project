import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { z } from "zod";

const localUrl = process.env.REACT_APP_API_URL;
const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const defaultImage = "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";

const profileSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  latitude: z.number({ invalid_type_error: "Latitude is required" }),
  longitude: z.number({ invalid_type_error: "Longitude is required" }),
});

const CreateProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [fullName, setFullName] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`;
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 25.276987, lng: 55.296249 }, // Default location (Dubai)
        zoom: 12,
      });

      const searchBox = new window.google.maps.places.SearchBox(
        document.getElementById("searchBox")
      );

      map.addListener("click", (e) => {
        const { lat, lng } = e.latLng.toJSON();
        setLatitude(lat);
        setLongitude(lng);

        if (markerRef.current) {
          markerRef.current.setPosition(e.latLng);
        } else {
          markerRef.current = new window.google.maps.Marker({
            position: e.latLng,
            map,
          });
        }
      });

      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
        if (places && places.length > 0) {
          const place = places[0];
          const location = place.geometry.location;
          const lat = location.lat();
          const lng = location.lng();

          map.setCenter(location);
          map.setZoom(14);
          setLatitude(lat);
          setLongitude(lng);

          if (markerRef.current) {
            markerRef.current.setPosition(location);
          } else {
            markerRef.current = new window.google.maps.Marker({
              position: location,
              map,
            });
          }
        }
      });
    };

    loadGoogleMaps();
  }, []);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePicture(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!profilePicture) {
        toast.error("Please select a profile picture.");
        return;
      }

    const validationResult = profileSchema.safeParse({
      fullName,
      latitude,
      longitude,
    });

    // if (!validationResult.success) {
    //   validationResult.error.errors.forEach((err) => {
    //     if ((err.message === "Longitude is required" || err.message === "Latitude is required") && !locationErrorShown) {
    //         toast.error("Please provide your location.");
    //         locationErrorShown = true; // Set flag to true after showing the message
    //       } else {
    //         toast.error(err.message);
    //       }
    //     }
    //   );
    //   return;
    // }

    let locationErrorShown = false; // Flag to check if location error has been shown
  let locationMissing = false;

    if (!validationResult.success) {
        validationResult.error.errors.forEach((err) => {
          if (err.message === "Longitude is required" || err.message === "Latitude is required") {
            locationMissing = true; // Set flag if location is missing
          } else {
            toast.error(err.message);
          }
        });
    
        // Show a single "Please provide your location" message if location is missing
        if (locationMissing && !locationErrorShown) {
          toast.error("Please provide your location.");
          locationErrorShown = true;
        }
    
        return;
      }

    const formData = new FormData();
    formData.append("username", fullName);
    formData.append("longitude", longitude);
    formData.append("latitude", latitude);
    formData.append("profilePicture", profilePicture);

    try {
      const token = Cookies.get("dealscracker-token");
      await axios.post(`${localUrl}/user/create_profile`, formData, {
        headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${token}` },
      });
      toast.success("Profile created successfully!");
      setTimeout(() => {
        navigate("/homepage"); // Navigate after 1 second
      }, 1000);
    } catch (error) {
      toast.error(error.response?.data?.detail || "Failed to create profile.");
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-gray-50">
      <Toaster />
      <div className="absolute top-12 left-2 w-[500px] h-[500px] bg-[#4daed5c4] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob"></div>
      <div className="absolute top-20 right-32 w-[500px] h-[500px] bg-[#479dc0c4] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-32 w-[500px] h-[500px] bg-[#459fc3c4] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-10 right-52 w-[500px] h-[500px] bg-[#CAEEF580] rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob animation-delay-4000"></div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg p-8 w-[500px]">
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32">
              <img
                src={profilePicture ? URL.createObjectURL(profilePicture) : defaultImage}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-2 border-gray-300"
              />
              <label
                htmlFor="profilePicture"
                className="absolute bottom-0 right-0 bg-[#2d789d] text-white p-2 rounded-full cursor-pointer"
              >
                <FontAwesomeIcon icon={faCamera} />
              </label>
              <input
                id="profilePicture"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePictureChange}
              />
            </div>
            <form className="mt-6 w-full space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-[#267fa2da]"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border-2 border-[#267fa2aa] px-3 py-2 placeholder-gray-400 bg-white shadow-sm focus:border-[#6499b4e0] focus:outline-none focus:ring-[#2d789d] sm:text-md"
                />
              </div>
              <div>
                <label
                  htmlFor="searchBox"
                  className="block text-sm font-medium text-[#267fa2da]"
                >
                  Search Location
                </label>
                <input
                  id="searchBox"
                  type="text"
                  placeholder="Search your location"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="mt-1 block w-full rounded-md border-2 border-[#267fa2aa] px-3 py-2 placeholder-gray-400 bg-white shadow-sm focus:border-[#6499b4e0] focus:outline-none focus:ring-[#2d789d] sm:text-md"
                />
              </div>
              <div
                id="map"
                ref={mapRef}
                className="mt-2 h-60 w-full rounded-lg border"
              ></div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-[#2d789d] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#2d789d] focus:outline-none focus:ring-2 focus:ring-[#2d789d] focus:ring-offset-2"
              >
                Create Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
