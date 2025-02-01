// import React from 'react'

// const FilterByCategory = ({ categories = [] }) => {
//   if (!categories.length) return null;
//   return (
//     <div className="w-full p-6 bg-white rounded-lg shadow-lg">
//       <div className="pb-2 text-center">
//         <h2 className="text-lg font-semibold fontColor">Food Category</h2>
//       </div>
//       <div className="w-full h-px mb-4 bg-gray-200" />
//       <div className="space-y-3">
//         {categories.map((category) => (
//           <div key={category} className="flex items-center justify-between text-gray-700 hover:text-[#237da0f8] hover:scale-100 hover:transition-all hover:duration-300 hover:font-semibold hover:cursor-pointer">
//             <span>{category}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default FilterByCategory


import React, { useState } from 'react';

const FilterByCategory = ({ categories = [], applyFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    applyFilter({ food_category: category });
  };

  if (!categories.length) return null;

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg">
      <div className="pb-2 text-center">
        <h2 className="text-lg font-semibold fontColor">Food Category</h2>
      </div>
      <div className="w-full h-px mb-4 bg-gray-200" />
      <div className="space-y-3">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`flex items-center justify-between text-gray-700 hover:text-[#237da0f8] hover:scale-100 hover:transition-all hover:duration-300 hover:font-semibold hover:cursor-pointer ${
              selectedCategory === category ? 'font-semibold text-[#237da0f8]' : ''
            }`}
          >
            <span>{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterByCategory;
