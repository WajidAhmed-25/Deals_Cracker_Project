import React, { useState } from 'react';
import { ChevronDown, TrendingUp, Clock, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Popular');

  const options = [
    { value: 'popular', label: 'Popular', icon: <TrendingUp className="w-4 h-4" /> },
    { value: 'newest', label: 'Newest', icon: <Clock className="w-4 h-4" /> },
    { value: 'priceAsc', label: 'Price: Low to High', icon: <ArrowUpCircle className="w-4 h-4" /> },
    { value: 'priceDesc', label: 'Price: High to Low', icon: <ArrowDownCircle className="w-4 h-4" /> },
  ];

  const getSelectedIcon = () => {
    return options.find(opt => opt.label === selectedOption)?.icon;
  };

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(!isOpen)}
      className="flex items-center justify-between px-4 py-2 text-gray-700 transition-all duration-200 bg-white border rounded-md shadow-sm border-ThemeColor w-52 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#237da0f8] focus:border-[#237da0f8]"
      >
        <div className="flex items-center space-x-2">
          {getSelectedIcon()}
          <span>{selectedOption}</span>
        </div>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ease-in-out
            ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      {isOpen && (
        <div 
          className={`absolute z-10 w-52 mt-1 bg-white border border-gray-300 rounded-md shadow-lg
            transform transition-all duration-200 ease-out
            opacity-100 translate-y-0
            ${isOpen ? 'scale-100' : 'scale-95 opacity-0 -translate-y-2'}`}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                setSelectedOption(option.label);
                setIsOpen(false);
              }}
              className={`flex items-center space-x-2 px-4 py-2 cursor-pointer
                transition-colors duration-150 ease-in-out
                ${selectedOption === option.label 
                  ? 'bg-gray-200 text-[#237da0f8]' 
                  : 'text-gray-700 hover:bg-[#237da0f8] hover:text-white'}
                ${option.value === options[0].value ? 'rounded-t-md' : ''}
                ${option.value === options[options.length - 1].value ? 'rounded-b-md' : ''}`}
            >
              {option.icon}
              <span className="transition-colors duration-150">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;