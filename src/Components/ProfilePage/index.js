import React, { useState, useRef } from 'react';
import { Camera } from 'lucide-react';

const UpdateProfile = () => {
  const [name, setName] = useState('John Doe');

  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('+1 (555) 123-4567');
  const [location, setLocation] = useState('San Francisco, CA');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('/api/placeholder/80/80');
  
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      // Create a preview URL for the selected image
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with individual states
    const formData = {
      name,
      email,
      phone,
      location,
      image
    };
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 mt-24 mb-24 bg-white">
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
              <label className="block mb-1 text-sm font-medium text-white">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#237da0] focus:border-[#237da0]"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-white">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#237da0] focus:border-[#237da0]"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-white">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#237da0] focus:border-[#237da0]"
              />
            </div>
          </div>

          <div className="flex justify-end pt-4 space-x-4">
            <button
              type="button"
              className="px-4 py-2 text-gray-700 transition-colors bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
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