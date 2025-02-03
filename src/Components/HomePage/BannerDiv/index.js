import React from 'react';
import { useNavigate } from 'react-router-dom';


const DeliveryBanner = () => {

  const navigate = useNavigate();


  return (


    <div className="relative w-full p-4 pt-20 pb-12 overflow-hidden ThemeColor mt-6">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="grid h-full grid-cols-6 gap-4">
      {Array(12).fill(null).map((_, index) => (
        <div key={index} className="w-8 h-8 transform rotate-45 border-2 border-white rounded-full" />
      ))}
    </div>
  </div>

  {/* Main Content Container */}
  <div className="relative z-10 flex flex-col items-center justify-center mx-auto max-w-7xl text-center text-white">
    <h1 className="mb-2 text-5xl font-semibold">
      DealsCracker
    </h1>
    <h3 className="mb-6 mt-4 text-2xl">Crack the Best Deals, Every Time!</h3>
    <button 
        onClick={() => navigate('/about')}
  className="flex items-center px-6 py-2 text-white bg-orange-500 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer"
>
  Read More
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
</div>



  );
};

export default DeliveryBanner;