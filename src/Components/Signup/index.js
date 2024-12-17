import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

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
  const [rememberMe, setRememberMe] = useState(false);
  const [fade, setFade] = useState(false);



  useEffect(() => {
    AOS.init();
    
    setTimeout(() => {
      setFade(true); 
    }, 100); 
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted");
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirmed Password: ", confirmPassword);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <div
    className={`relative h-screen overflow-hidden bg-gray-50 transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
  >
      <div className="absolute top-12 left-2 w-[500px] h-[500px] bg-[#4daed5c4] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob"></div>
      <div className="absolute top-20 right-32 w-[500px] h-[500px] bg-[#479dc0c4] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-2000"></div>
      <div className="hidden xl:block absolute bottom-10 left-32 w-[500px] h-[500px] bg-[#459fc3c4] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-10 right-52 w-[500px] h-[500px] bg-[#CAEEF580] rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob animation-delay-4000"></div>
      <div className="flex flex-col justify-center min-h-full py-2 sm:px-6 lg:px-8">
        <div className="p-4 sm:mx-auto sm:w-full sm:max-w-md ">
          <div
            className="border-4 mx-auto border-[#267fa2da] rounded-full bg-white flex items-center justify-center h-32 w-32"
     
          >
            <img
              className="object-contain w-24 h-24"
              src="/assets/logo.png"
              alt="Your Company"
     
            />
          </div>
          <h2
            className="mt-4 text-center text-3xl font-bold tracking-tight text-[#237da0f8]"
    
          >
            SignUp to Continue
          </h2>
        </div>
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-4 bg-white shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              onSubmit={handleSubmit}
    
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#267fa2da]"
             
                >
                  Email address
                </label>
                <div
                  className="mt-1"
             
                >
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
                <div
                  className="mt-1"
             
                >
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
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#267fa2da]"
             
                >
                  {" "}
                  Confirm Password
                </label>
                <div
                  className="mt-1"
             
                >
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full appearance-none rounded-md border-2 border-[#267fa2aa] px-3 py-2 placeholder-gray-400 bg-white shadow-sm focus:border-[#6499b4e0] focus:outline-none focus:ring-[#2d789d] sm:text-md text-black"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center"
             
                >
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 focus:ring-[#267fa2aa] accent-white"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-[#2d789d]"
                    
                  >
                    Remember me
                  </label>
                </div>
                <div
                  className="text-sm hover:scale-110 hover:transition-all hover:cursor-pointer"
             
                >
                  <a
                    href="#"
                    className="font-medium text-[#2d789d] hover:scale-110 hover:transition-all hover:cursor-pointer"
               
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div
                className="hover:scale-110 hover:transition-all hover:cursor-pointer"
         
              >
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
                    Or continue with
                  </span>
                </div>
              </div>
              <div
                className="grid grid-cols-3 gap-3 mt-6"
             
              >
                {socialIcons.map((social, index) => (
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
        className="w-12 h-12 text-[#2d789d] hover:text-white text-lg"
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
