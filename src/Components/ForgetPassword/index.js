import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { z } from "zod";
import Cookies from "js-cookie";

const localUrl = process.env.REACT_APP_API_URL;

// Zod schema for email validation
const emailSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setFade(true), 100);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email using Zod
    const validation = emailSchema.safeParse({ email });
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }

    try {
      const response = await axios.post(`${localUrl}/user/forget-password`, {
        email,
        role: "User",
      });
      toast.success(response.data.message || "Recovery OTP sent!");
      Cookies.set("dealscracker-token", response.data.access_token, {
              secure: true,
              sameSite: "strict",
            });
            setTimeout(() => {
                navigate("/otpVerification");
              }, 1000);
    } catch (error) {
      toast.error(error.response?.data?.detail || "Failed to send recovery OTP.");
    }
  };

  return (
    <div
      className={`relative h-screen overflow-hidden bg-gray-50 transition-opacity duration-1000 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      <Toaster />
      <div className="absolute top-12 left-2 w-[500px] h-[500px] bg-[#4daed5c4] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob"></div>
      <div className="absolute top-20 right-32 w-[500px] h-[500px] bg-[#479dc0c4] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-2000"></div>
      <div className="hidden xl:block absolute bottom-10 left-32 w-[500px] h-[500px] bg-[#459fc3c4] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-10 right-52 w-[500px] h-[500px] bg-[#CAEEF580] rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob animation-delay-4000"></div>
      <div className="flex flex-col justify-center min-h-full py-2 sm:px-6 lg:px-8">
        <div className="p-4 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="border-4 mx-auto border-[#267fa2da] rounded-full bg-white flex items-center justify-center h-36 w-36">
            <img
              className="object-contain h-28 w-28"
              src="/assets/logo.png"
              alt="Your Company"
            />
          </div>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-[#237da0f8]">
            Reset Password
          </h2>
        </div>
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 shadow bg-white/50 sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#267fa2da]"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full appearance-none rounded-md border-2 border-[#267fa2aa] px-3 py-2 placeholder-gray-400 bg-white shadow-sm focus:border-[#6499b4e0] focus:outline-none focus:ring-[#2d789d] sm:text-md text-black"
                  />
                </div>
              </div>
              <div className="hover:scale-110 hover:transition-all hover:cursor-pointer">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-[#2d789d] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#2d789d] focus:outline-none focus:ring-2 focus:ring-[#2d789d] focus:ring-offset-2"
                >
                  Send recovery OTP
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <button
                onClick={() => navigate("/")}
                className="text-sm font-medium text-[#2d789d] hover:scale-110 hover:transition-all hover:cursor-pointer"
              >
                Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
