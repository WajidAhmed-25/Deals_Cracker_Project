import React, { useState } from 'react';

const ViewToggleButtons = () => {
  const [activeView, setActiveView] = useState('grid');

  return (
    <div className="flex items-center space-x-2">
      {/* List View Button */}
      <button 
        onClick={() => setActiveView('list')}
        className={`p-2 rounded-md transition-colors ${
          activeView === 'list' 
            ? 'ThemeColor text-white' 
            : 'border border-[#237da0f8] text-gray-600 hover:bg-gray-50'
        }`}
      >
        <svg 
          className="w-5 h-5" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Grid View Button */}
      <button 
        onClick={() => setActiveView('grid')}
        className={`p-2 rounded-md transition-colors ${
          activeView === 'grid' 
            ? 'ThemeColor text-white' 
            : 'border border-[#237da0f8] text-gray-600 hover:bg-gray-50'
        }`}
      >
        <svg 
          className="w-5 h-5" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ViewToggleButtons;