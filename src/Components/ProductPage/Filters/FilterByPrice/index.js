// import React, { useState } from 'react';

// const FilterByPrice = ({ maxPrice = 1000 }) => {
//   const [value, setValue] = useState(maxPrice / 2);

//   const handleChange = (e) => {
//     setValue(parseInt(e.target.value));
//   };

//   return (
//     <div className="w-full p-4 mt-6 bg-white rounded-lg shadow-lg">
//       <div className="pb-2 text-center">
//         <h2 className="text-lg font-semibold fontColor">Filter by Price</h2>
//       </div>
//       <div className="w-full h-px mb-4 bg-gray-200" />
//       <div className="relative mb-4">
//         <input
//           type="range"
//           min="0"
//           max={maxPrice}
//           value={value}
//           onChange={handleChange}
//           className="w-full h-2 mb-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//           style={{
//             background: `linear-gradient(to right, #237da0f8 0%, #237da0f8 ${(value/maxPrice)*100}%, #e5e7eb ${(value/maxPrice)*100}%, #e5e7eb 100%)`
//           }}
//         />
//         <div className="flex justify-between">
//           <div className="px-2 py-1 bg-[#237da0f8] text-white rounded text-sm min-w-[4rem] text-center">
//             Rs. 0
//           </div>
//           <div className="px-2 py-1 bg-[#237da0f8] text-white rounded text-sm min-w-[4rem] text-center">
//             Rs. {value}
//           </div>
//         </div>
//       </div>
//       <button className="w-full px-4 py-2 text-white transition-colors bg-[#237da0f8] rounded hover:bg-[#237da0f8]">
//         Filter
//       </button>
//     </div>
//   );
// };

// export default FilterByPrice;


import React, { useState } from 'react';

const FilterByPrice = ({ maxPrice = 1000, applyFilter }) => {
  const [value, setValue] = useState(maxPrice / 2);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
    applyFilter({ maxPrice: newValue });
  };

  return (
    <div className="w-full p-4 mt-6 bg-white rounded-lg shadow-lg">
      <div className="pb-2 text-center">
        <h2 className="text-lg font-semibold fontColor">Filter by Price</h2>
      </div>
      <div className="w-full h-px mb-4 bg-gray-200" />
      <div className="relative mb-4">
        <input
          type="range"
          min="0"
          max={maxPrice}
          value={value}
          onChange={handleChange}
          className="w-full h-2 mb-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between">
          <div className="px-2 py-1 bg-[#237da0f8] text-white rounded text-sm min-w-[4rem] text-center">
            Rs. 0
          </div>
          <div className="px-2 py-1 bg-[#237da0f8] text-white rounded text-sm min-w-[4rem] text-center">
            Rs. {value}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterByPrice;
