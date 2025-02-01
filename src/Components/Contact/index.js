
// import React from "react";
// import Navbar from "../Navbar/index";
// import { Mail, Phone, HelpCircle } from "lucide-react";
// import Dropdown from '../HomePage/Dropdowns/index';

// import ContactDetails from './ContactDetails/index'

// export default function index() {
//   return (
//     <div className="min-h-screen text-gray-100">
   
      
//       <div className="max-w-4xl px-4 py-12 mx-auto mt-4 mb-12">
//         <div className="mb-8 text-center">
//           <h1 className="mb-2 text-5xl font-bold text-ThemeColor">Contact Us</h1>
//           <p className="mt-8 tracking-wide text-black/80">
//             We use an agile approach to test assumptions and connect<br />
//             with the needs of your audience early and often.
//           </p>
//         </div>

//         <div className="p-6 bg-white border-2 border-gray-100 rounded-lg shadow-2xl backdrop-blur-lg">
//           <form className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block mb-1 text-sm font-semibold fontColor">First Name</label>
//                 <input
//                   type="text"
//                   placeholder="Bonnie"
//                   className="w-full p-2 bg-white rounded focus:outline-[#237da0f8] focus:ring-2 border-2 border-[#237da0b2] focus:ring-[#237da0f8];"
//                 />
//               </div>
              
//               <div>
//                 <label className="block mb-1 text-sm font-semibold fontColor">Last Name</label>
//                 <input
//                   type="text"
//                   placeholder="Green"
//                   className="w-full p-2 bg-white rounded focus:outline-[#237da0f8] focus:ring-2 border-2 border-[#237da0b2] focus:ring-[#237da0f8];"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block mb-1 text-sm font-semibold fontColor">Your email</label>
//                 <input
//                   type="email"
//                   placeholder="name@flowbite.com"
//                   className="w-full p-2 bg-white rounded focus:outline-[#237da0f8] focus:ring-2 border-2 border-[#237da0b2] focus:ring-[#237da0f8];"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1 text-sm font-semibold fontColor">Phone Number</label>
//                 <input
//                   type="tel"
//                   placeholder="+12 345 6789"
//                   className="w-full p-2 bg-white rounded focus:outline-[#237da0f8] focus:ring-2 border-2 border-[#237da0b2] focus:ring-[#237da0f8];"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block mb-1 text-sm font-semibold fontColor">Your message</label>
//               <textarea
//                 placeholder="Leave a comment..."
//                 rows={4}
//                 className="w-full p-2 bg-white rounded focus:outline-[#237da0f8] focus:ring-2 border-2 border-[#237da0b2] focus:ring-[#237da0f8];"
//               />
//             </div>

//             <div className="text-sm text-gray-700">
//               By submitting this form you agree to our{" "}
//               <a href="#" className="text-[#237da0f8] hover:underline">
//                 terms and conditions
//               </a>{" "}
//               and our{" "}
//               <a href="#" className="text-[#237da0f8] hover:underline">
//                 privacy policy
//               </a>{" "}
//               which explains how we may collect, use and disclose your personal information including to third parties.
//             </div>

//             <button className="px-6 py-2 font-semibold text-white transition-colors rounded bg-ThemeColor hover:ThemeColor hover:cursor-pointer hover:transition-all hover:duration-300 hover:scale-110">
//               Send message
//             </button>
//           </form>
//         </div>

   
    
//       </div>
//       <ContactDetails/>
//       <br/>
      
//     </div>
//   );
// }


import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import ContactDetails from './ContactDetails/index';

export default function Index() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const localUrl = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // API Request
      await axios.post(`${localUrl}/contactUs/contact-us`, formData);

      // Success Message
      toast.success("Message sent successfully!");

      // Reset Form Fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen text-gray-100">
      <Toaster />

      <div className="max-w-4xl px-4 py-12 mx-auto mt-4 mb-12">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-5xl font-bold text-ThemeColor">Contact Us</h1>
          <p className="mt-8 tracking-wide text-black/80">
            We use an agile approach to test assumptions and connect
            with the needs of your audience early and often.
          </p>
        </div>

        <div className="p-6 bg-white border-2 border-gray-100 rounded-lg shadow-2xl backdrop-blur-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-semibold fontColor">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Bonnie"
                  className="w-full p-2 bg-white rounded focus:outline-[#237da0f8] focus:ring-2 border-2 border-[#237da0b2] focus:ring-[#237da0f8] text-black"
                />
              </div>
              
              <div>
                <label className="block mb-1 text-sm font-semibold fontColor">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Green"
                  className="w-full p-2 bg-white rounded focus:outline-[#237da0f8] focus:ring-2 border-2 border-[#237da0b2] focus:ring-[#237da0f8] text-black"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-semibold fontColor">Your email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@flowbite.com"
                  className="w-full p-2 bg-white rounded focus:outline-[#237da0f8] focus:ring-2 border-2 border-[#237da0b2] focus:ring-[#237da0f8] text-black"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-semibold fontColor">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  placeholder="+12 345 6789"
                  className="w-full p-2 bg-white rounded focus:outline-[#237da0f8] focus:ring-2 border-2 border-[#237da0b2] focus:ring-[#237da0f8] text-black"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold fontColor">Your message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Leave a comment..."
                rows={4}
                className="w-full p-2 bg-white rounded focus:outline-[#237da0f8] focus:ring-2 border-2 border-[#237da0b2] focus:ring-[#237da0f8] text-black"
              />
            </div>

            <div className="text-sm text-gray-700">
              By submitting this form you agree to our{" "}
              <a href="#" className="text-[#237da0f8] hover:underline">
                terms and conditions
              </a>{" "}
              and our{" "}
              <a href="#" className="text-[#237da0f8] hover:underline">
                privacy policy
              </a>{" "}
              which explains how we may collect, use and disclose your personal information including to third parties.
            </div>

            <button
              type="submit"
              className="px-6 py-2 font-semibold text-white transition-colors rounded bg-ThemeColor hover:cursor-pointer hover:transition-all hover:duration-300 hover:scale-110"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <ContactDetails />
      <br />
    </div>
  );
}
