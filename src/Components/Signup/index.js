import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const localUrl = process.env.REACT_APP_API_URL

// Define validation schema using Zod
const SignupSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const socialIcons = [
  {
    name: "Facebook",
    icon: faFacebook,
  },
  {
    name: "Twitter",
    icon: faTwitter,
  },
  {
    name: "GitHub",
    icon: faGithub,
  },
];

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setFade(true);
    }, 100);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs using Zod
    const validation = SignupSchema.safeParse({ email, password, confirmPassword });
    if (!validation.success) {
      const errorMessages = validation.error.errors.map((err) => err.message);
      errorMessages.forEach((message) => toast.error(message));
      return;
    }

    try {
      const response = await axios.post(`${localUrl}/user/signup`, {
        email,
        password,
        role: "User",
      });
      toast.success("User registered successfully!");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        navigate("/"); // Navigate after 1 second
      }, 1000); 
    } catch (error) {
      toast.error(error.response?.data?.detail || "Failed to register user.");
    }
  };

  return (
    <div
      className={`relative h-screen overflow-hidden bg-gray-50 transition-opacity duration-1000 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      <Toaster/>
      <div className="absolute top-12 left-2 w-[500px] h-[500px] bg-[#4daed5c4] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob"></div>
      <div className="absolute top-20 right-32 w-[500px] h-[500px] bg-[#479dc0c4] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-2000"></div>
      <div className="hidden xl:block absolute bottom-10 left-32 w-[500px] h-[500px] bg-[#459fc3c4] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-10 right-52 w-[500px] h-[500px] bg-[#CAEEF580] rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob animation-delay-4000"></div>
      <div className="flex flex-col justify-center min-h-full py-2 sm:px-6 lg:px-8">
        <div className="p-4 sm:mx-auto sm:w-full sm:max-w-md ">
          <div className="border-4 mx-auto border-[#267fa2da] rounded-full bg-white flex items-center justify-center h-32 w-32">
            <img
              className="object-contain w-24 h-24"
              src="/assets/logo.png"
              alt="Your Company"
            />
          </div>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-[#237da0f8]">
            SignUp to Continue
          </h2>
        </div>
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-4 bg-white shadow sm:rounded-lg sm:px-10">
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
      <div className="mt-1 relative">
        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full appearance-none rounded-md border-2 border-[#267fa2aa] px-3 py-2 pr-10 placeholder-gray-400 bg-white shadow-sm focus:border-[#6499b4e0] focus:outline-none focus:ring-[#2d789d] sm:text-md text-black"
        />
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 cursor-pointer"
        />
      </div>
    </div>
              <div>
              <label
        htmlFor="confirmPassword"
        className="block text-sm font-medium text-[#267fa2da] mt-4"
      >
        Confirm Password
      </label>
      <div className="mt-1 relative">
        <input
          id="confirmPassword"
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          autoComplete="current-password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="block w-full appearance-none rounded-md border-2 border-[#267fa2aa] px-3 py-2 pr-10 placeholder-gray-400 bg-white shadow-sm focus:border-[#6499b4e0] focus:outline-none focus:ring-[#2d789d] sm:text-md text-black"
        />
        <FontAwesomeIcon
          icon={showConfirmPassword ? faEyeSlash : faEye}
          onClick={() => setShowConfirmPassword((prev) => !prev)}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 cursor-pointer"
        />
      </div>
              </div>
              <div className="hover:scale-110 hover:transition-all hover:cursor-pointer">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-[#2d789d] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#2d789d] focus:outline-none focus:ring-2 focus:ring-[#2d789d] focus:ring-offset-2"
                >
                  Register Now
                </button>
              </div>
            </form>
            <div className="mt-4" >
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span
                    className="bg-white px-2 rounded-md text-[#2d789d] font-semibold"
               
                  >
                    Already have an account?
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

export default Index;
