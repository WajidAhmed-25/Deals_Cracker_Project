import React from 'react';

const DeliveryBanner = () => {
  return (
    <div className="relative w-full p-4 pt-20 pb-12 overflow-hidden ThemeColor">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid h-full grid-cols-6 gap-4">
          {Array(12).fill(null).map((_, index) => (
            <div key={index} className="w-8 h-8 transform rotate-45 border-2 border-white rounded-full" />
          ))}
        </div>
      </div>
      
      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-between mx-auto max-w-7xl">
        {/* Left Placeholder */}
        <div className="flex items-center justify-center w-32 h-24 bg-gray-300 md:w-40 md:h-32">
          <span className="text-gray-600">296X311</span>
        </div>

        {/* Center Content */}
        <div className="px-4 text-center text-white">
          <h2 className="mb-2 text-lg font-semibold md:text-2xl lg:text-3xl">
            We Delivery on Next Day from 10:00 AM to 08:00 PM
          </h2>
          <p className="mb-4 text-sm md:text-base">For Orders starts from $100</p>
          <button className="flex items-center px-6 py-2 mx-auto text-white transition-colors duration-300 bg-orange-500 rounded-md hover:bg-orange-600">
            Shop Now
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Right Placeholder */}
        <div className="flex items-center justify-center w-32 h-16 bg-gray-300 md:w-40 md:h-20">
          <span className="text-gray-600">511X250</span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryBanner;