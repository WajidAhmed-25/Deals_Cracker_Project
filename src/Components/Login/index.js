import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

// Define validation schema using Zod
const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const localUrl = process.env.REACT_APP_API_URL

const socialIcons = [
  { name: "Facebook", icon: faFacebook },
  { name: "Twitter", icon: faTwitter },
  { name: "GitHub", icon: faGithub },
];

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    setTimeout(() => setFade(true), 100);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs using Zod
    const validation = LoginSchema.safeParse({ email, password });
    if (!validation.success) {
      const errorMessages = validation.error.errors.map((err) => err.message);
      errorMessages.forEach((message) => toast.error(message));
      return;
    }

    try {
      const response = await axios.post(`${localUrl}/auth/login`, {
        email,
        password,
      });
      
      // Store token in cookies
      Cookies.set("dealscracker-token", response.data.access_token, {
        secure: true,
        sameSite: "strict",
      });
      if(response.data.detail === "Please complete your profile before logging in."){

        toast.success("Please complete your profile before logging in.");
        setTimeout(() => {
          navigate("/createProfile");
        }, 1000);
      }
      else{
        toast.success("Login successful!");
        setTimeout(() => {
          navigate("/homepage_Without_popup");
        }, 1000);
      }
    } catch (error) {
      toast.error(error.response?.data?.detail || "Login failed.");
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
            Login to Continue
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
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#267fa2da]"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full appearance-none rounded-md border-2 border-[#267fa2aa] px-3 py-2 placeholder-gray-400 bg-white shadow-sm focus:border-[#6499b4e0] focus:outline-none focus:ring-[#2d789d] sm:text-md text-black"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => navigate("/forgetPassword")}
                  className="text-sm font-medium text-[#2d789d] hover:scale-110 hover:transition-all hover:cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="hover:scale-110 hover:transition-all hover:cursor-pointer">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-[#2d789d] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#2d789d] focus:outline-none focus:ring-2 focus:ring-[#2d789d] focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>
            </form>
              {/* Continue as Guest Button */}
  <div className="mt-2 hover:scale-110 hover:transition-all hover:cursor-pointer">
    <button
      type="button"
      onClick={() => navigate("/homepage_Without_popup")}
      className="flex w-full justify-center rounded-md border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:text-white focus:ring-offset-2"
    >
      Continue as Guest
    </button>
  </div>
  {/* Signup Prompt */}
  <div className="mt-4 text-center">
    <span className="text-sm text-gray-700">
      Don't have an account?{" "}
      <button
        onClick={() => navigate("/register")}
        className="font-medium text-[#2d789d] hover:scale-110 hover:transition-all hover:cursor-pointer"
      >
        Signup
      </button>
    </span>
  </div>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 rounded-md text-[#2d789d] font-semibold">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-6">
                {socialIcons.map((social) => (
                  <div
                    key={social.name}
                    className="flex items-center justify-center hover:scale-110 hover:transition-all hover:cursor-pointer"
                  >
                    <a
                      href="#"
                      className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white border border-[#267fa2da] shadow-sm hover:bg-[#2d789d] hover:text-white"
                    >
                      <FontAwesomeIcon
                        icon={social.icon}
                        className="text-[#2d789d] hover:text-white text-xl"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
