import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import toast, { Toaster } from 'react-hot-toast';

const localUrl = process.env.REACT_APP_API_URL;
const defaultImage = "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(defaultImage);
  const fileInputRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const token = Cookies.get("dealscracker-token");
      const response = await axios.get(`${localUrl}/user/get_profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const profile = response.data.profile;
      setName(profile.username);
      setLatitude(profile.location.latitude);
      setLongitude(profile.location.longitude);
      setLocation(`${profile.location.latitude}, ${profile.location.longitude}`);
      setImagePreview(profile.profilePicture || defaultImage);
    } catch (error) {
      toast.error(error.response?.data?.detail || "Failed to fetch profile.");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: latitude || 25.276987, lng: longitude || 55.296249 },
        zoom: 12,
      });

      const searchBox = new window.google.maps.places.SearchBox(document.getElementById("searchBox"));

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
  }, [latitude, longitude]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', name);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    if (image) formData.append('profilePicture', image);

    try {
      const token = Cookies.get('dealscracker-token');
      await axios.put(`${localUrl}/user/update_profile`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Profile updated successfully!");
      setTimeout(() => {
        navigate("/homepage_Without_popup");
        window.location.reload(); // This will force a page reload
      }, 1000);
    } catch (error) {
      toast.error(error.response?.data?.detail || "Failed to update profile.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 mt-24 mb-24 bg-white">
      <Toaster />
      <div className="w-full max-w-3xl p-6 bg-[#237da0] rounded-lg shadow-xl md:p-8">
        <div className="flex items-start justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Update Profile</h1>

          <div className="relative group">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />
            <div
              className="w-20 h-20 overflow-hidden border-4 border-white rounded-full shadow-lg cursor-pointer md:w-32 md:h-32"
              onClick={handleImageClick}
            >
              <img
                src={imagePreview}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
            <button
              type="button"
              onClick={handleImageClick}
              className="absolute bottom-0 right-0 p-2 border-white border-2 text-white transition-colors bg-[#237da0] rounded-full shadow-lg hover:bg-[#237da0]"
            >
              <Camera size={20} />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-white">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#237da0] focus:border-[#237da0]"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-white">Search Location</label>
              <input
                type="text"
                id="searchBox"
                placeholder="Search your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#237da0] focus:border-[#237da0]"
              />
            </div>
            <div
              ref={mapRef}
              className="mt-2 h-60 w-full rounded-lg border"
            ></div>
          </div>

          <div className="flex justify-end pt-4 space-x-4">
            {/* <button
              type="button"
              className="px-4 py-2 text-gray-700 transition-colors bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button> */}
            <button
              type="submit"
              className="px-4 py-2 text-[#237da0] hover:border-white hover:text-white transition-colors bg-white rounded-md hover:bg-[#237da0] border-[#237da0] border-2 font-semibold"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;

