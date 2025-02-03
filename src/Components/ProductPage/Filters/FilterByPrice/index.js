
// import React, { useState } from 'react';

// const FilterByPrice = ({ maxPrice = 1000, applyFilter }) => {
//   const [value, setValue] = useState(maxPrice / 2);
  
//   const handleChange = (e) => {
//     const newValue = parseInt(e.target.value);
//     setValue(newValue);
//     applyFilter({ maxPrice: newValue });
    
//   };

//   return (
//     <div className="w-full p-4 mt-6 bg-white rounded-lg border-2 border:bg-[#237da0f8] shadow-xl">
//       <div className="pb-2 text-center">
//         <h2 className="text-xl font-semibold fontColor">Filter by Price</h2>
//       </div>
//       <div className="w-full h-px mb-4 bg-gray-400" />
//       <div className="relative mb-4">
//         <input
//           type="range"
//           min="0"
//           max={maxPrice}
//           value={value}
//           onChange={handleChange}
//           className="w-full h-2 mb-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//         />
//         <div className="flex justify-between mt-2">
//           <div className="px-2 py-1 bg-[#237da0f8] text-white text-md rounded min-w-[4rem] text-center shadow-xl">
//             Rs. 0
//           </div>
//           <div className="px-2 py-1 bg-[#237da0f8] text-white text-md rounded min-w-[4rem] text-center shadow-xl">
//             Rs. {value}
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default FilterByPrice;



// _________________________________ new code _____________________________________________________

import React, { useState } from 'react';

const FilterByPrice = ({ maxPrice = 1000, applyFilter }) => {
  const [value, setValue] = useState(maxPrice / 2);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
  };

  const handleApplyFilter = () => {
    applyFilter({ maxPrice: value });
  };

  return (
    <div className="w-full p-4 mt-6 bg-white rounded-lg shadow-xl border border-[#237da0f8]/30">
      <div className="pb-2 text-center">
        <h2 className="text-xl font-semibold fontColor">Filter by Price</h2>
      </div>
      <div className="w-full h-px mb-4 bg-gray-400" />
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
          <div className="px-2 py-1 bg-[#237da0f8] text-white rounded text-lg min-w-[4rem] text-center">
            Rs. 0
          </div>
          <div className="px-2 py-1 bg-[#237da0f8] text-white rounded text-lg min-w-[4rem] text-center">
            Rs. {value}
          </div>
        </div>
      </div>
      <button
        onClick={handleApplyFilter}
        className="w-full px-4 py-2 text-lg mt-4 bg-[#237da0f8] text-white rounded-lg shadow-md hover:bg-[#1a5f7f] hover:font-semi-bold transition-colors hover:scale-110 hover:duration-300 hover:transition-all"
      >
        Apply Price Filter
      </button>
    </div>
  );
};

export default FilterByPrice;