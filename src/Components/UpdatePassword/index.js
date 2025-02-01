import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


const localUrl = process.env.REACT_APP_API_URL;

// Define validation schema using Zod for password validation
const PasswordSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setFade(true);
    }, 100);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs using Zod
    const validation = PasswordSchema.safeParse({ password, confirmPassword });
    if (!validation.success) {
      const errorMessages = validation.error.errors.map((err) => err.message);
      errorMessages.forEach((message) => toast.error(message));
      return;
    }

    try {
        const token = Cookies.get("dealscracker-token");

      const response = await axios.put(`${localUrl}/user/reset-password`, {
        password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Send token as bearer token
        },
      }
    );
      toast.success("Password updated successfully!");
      setPassword("");
      setConfirmPassword("");
      Cookies.remove("dealscracker-token");
      setTimeout(() => {
        navigate("/"); // Navigate to login or home page after 1 second
      }, 1000);
    } catch (error) {
      toast.error(error.response?.data?.detail || "Failed to update password.");
    }
  };

  return (
    <div
      className={`relative h-screen overflow-hidden bg-gray-50 transition-opacity duration-1000 ${fade ? "opacity-100" : "opacity-0"}`}
    >
      <Toaster />
      <div className="absolute top-12 left-2 w-[500px] h-[500px] bg-[#4daed5c4] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob"></div>
      <div className="absolute top-20 right-32 w-[500px] h-[500px] bg-[#479dc0c4] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-2000"></div>
      <div className="hidden xl:block absolute bottom-10 left-32 w-[500px] h-[500px] bg-[#459fc3c4] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-10 right-52 w-[500px] h-[500px] bg-[#CAEEF580] rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob animation-delay-4000"></div>
      <div className="flex flex-col justify-center min-h-full py-2 sm:px-6 lg:px-8">
        <div className="p-4 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="border-4 mx-auto border-[#267fa2da] rounded-full bg-white flex items-center justify-center h-32 w-32">
            <img
              className="object-contain w-24 h-24"
              src="/assets/logo.png"
              alt="Your Company"
            />
          </div>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-[#237da0f8]">
            Update Your Password
          </h2>
        </div>
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-4 bg-white shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#267fa2da]"
                >
                  New Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full appearance-none rounded-md border-2 border-[#267fa2aa] px-3 py-2 placeholder-gray-400 bg-white shadow-sm focus:border-[#6499b4e0] focus:outline-none focus:ring-[#2d789d] sm:text-md text-black"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-[#267fa2da]"
                >
                  Confirm New Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full appearance-none rounded-md border-2 border-[#267fa2aa] px-3 py-2 placeholder-gray-400 bg-white shadow-sm focus:border-[#6499b4e0] focus:outline-none focus:ring-[#2d789d] sm:text-md text-black"
                  />
                </div>
              </div>
              <div className="hover:scale-110 hover:transition-all hover:cursor-pointer">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-[#2d789d] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#2d789d] focus:outline-none focus:ring-2 focus:ring-[#2d789d] focus:ring-offset-2"
                >
                  Update Password
                </button>
              </div>
            </form>
            <div className="mt-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 rounded-md text-[#2d789d] font-semibold">
                    Remembered your password?
                  </span>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => navigate("/")}
                  className="flex items-center justify-center w-32 h-10 rounded-full font-bold bg-white border border-[#267fa2da] shadow-sm hover:bg-[#2d789d] hover:text-white group transition-colors duration-300"
                >
                  <span className="text-[#2d789d] group-hover:text-white transition-colors duration-300">
                    Sign In
                  </span>
                  <FontAwesomeIcon
                    icon={faSignIn}
                    className="ml-2 w-5 h-5 text-[#2d789d] group-hover:text-white transition-colors duration-300"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
