import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import OtpInput from "react-otp-input";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import Cookies from "js-cookie";
import { z } from "zod"; // Importing Zod
import { useNavigate } from "react-router-dom";


const localUrl = process.env.REACT_APP_API_URL

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60); // Timer in seconds
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendEnabled(true);
    }
  }, [timer]);

  // Define the OTP validation schema with Zod
  const otpSchema = z.string().length(6, "OTP must be 6 digits").regex(/^\d+$/, "OTP must contain only digits");

  const handleResendOTP = async () => {
    try {
      setTimer(60);
      setIsResendEnabled(false);

      const token = Cookies.get("dealscracker-token"); // Get the token from cookies

      const response = await axios.post(
        `${localUrl}/user/generate-otp`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token as bearer token
          },
        }
      );
      toast.success("OTP resent successfully!");
    } catch (error) {
      toast.error(error.response?.data?.detail || "Failed to resend OTP.");
    }
  };

  const handleVerifyOTP = async () => {
    // Validate OTP using Zod schema
    try {
      otpSchema.parse(otp); // Throws error if validation fails
    } catch (error) {
      toast.error(error.errors[0].message); // Display validation error
      return;
    }

    try {
      const token = Cookies.get("dealscracker-token"); // Get the token from cookies

      const response = await axios.post(
        `${localUrl}/user/verify-otp`,
        { code: otp },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token as bearer token
          },
        }
      );
      toast.success("OTP verified successfully!");
      setTimeout(() => {
        navigate("/updatePassword");
      }, 1000);
    } catch (error) {
      toast.error(error.response?.data?.detail || "Invalid OTP. Please try again.");
    }
  };

  return (
    <div
      className={`relative h-screen overflow-hidden bg-gray-50 transition-opacity duration-1000 opacity-100`}
    >
      <Toaster />
      {/* Background Blobs */}
      <div className="absolute top-12 left-2 w-[500px] h-[500px] bg-[#4daed5c4] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob"></div>
      <div className="absolute top-20 right-32 w-[500px] h-[500px] bg-[#479dc0c4] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-2000"></div>
      <div className="hidden xl:block absolute bottom-10 left-32 w-[500px] h-[500px] bg-[#459fc3c4] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-10 right-52 w-[500px] h-[500px] bg-[#CAEEF580] rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob animation-delay-4000"></div>

      {/* Content */}
      <div className="flex flex-col justify-center min-h-full py-2 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="border-4 mx-auto border-[#267fa2da] rounded-full bg-white flex items-center justify-center h-36 w-36">
            <img
              className="object-contain h-28 w-28"
              src="/assets/logo.png"
              alt="Your Company"
            />
          </div>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-[#237da0f8]">
            Verify OTP
          </h2>
        </div>
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white/50 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {/* Circular Progress Bar */}
            <div className="flex justify-center mb-4">
              <div className="w-48 h-48">
                <CircularProgressbar
                  value={(60 - timer) * (100 / 60)} // Calculate progress percentage
                  text={`${timer}s`}
                  styles={buildStyles({
                    textSize: "25px",
                    pathColor: "#2d789d",
                    textColor: "#2d789d",
                    trailColor: "#e0e0e0",
                  })}
                />
              </div>
            </div>

            {/* OTP Input */}
            <div className="mb-4  flex flex-col justify-center items-center">

              <label
                className="block text-sm mb-4 font-medium text-center text-[#267fa2da]"
              >
                Enter 6-digit OTP
              </label>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderInput={(props) => (
                  <input
                    {...props}
                    style={{
                      width: "45px",
                      height: "45px",
                      margin: "0 5px",
                      textAlign: "center",
                      fontSize: "20px",
                      fontWeight: "bold",
                      border: "2px solid #d1d5db",
                      borderRadius: "6px",
                      backgroundColor: "#f3f4f6",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      outline: "none",
                      transition: "all 0.2s ease",
                    }}
                  />
                )}
              />
            </div>

            {/* Buttons */}
            <button
              onClick={handleVerifyOTP}
              className="w-full bg-[#2d789d] text-white py-2 rounded-md text-sm font-medium hover:bg-[#23607a] transition"
            >
              Verify OTP
            </button>
            <button
              onClick={handleResendOTP}
              disabled={!isResendEnabled}
              className={`mt-4 w-full py-2 rounded-md text-sm font-medium ${
                isResendEnabled
                  ? "bg-gray-500 text-white hover:bg-gray-600 transition"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Resend OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
