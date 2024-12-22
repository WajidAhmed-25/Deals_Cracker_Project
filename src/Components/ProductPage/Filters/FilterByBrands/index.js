import React from 'react';

const FilterByBrands = () => {
  const brands = [
    'Apple',
    'Samsung',
    'Microsoft',
    'Apple',
    'HP',
    'DELL',
    'Redmi'
  ];

  return (
    <div className="w-full p-4 mt-6 bg-white rounded-lg shadow-lg">
      <div className="pb-2 text-center">
        <h2 className="text-lg font-semibold fontColor">Filter by Brand</h2>
      </div>
      <div className="w-full h-px mb-4 bg-gray-200" />
      <div className="space-y-3">
        {brands.map((brand, index) => (
          <div key={`${brand}-${index}`} className="flex items-center">
            <input
              type="radio"
              id={`${brand}-${index}`}
              name="brand"
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <label
              htmlFor={`${brand}-${index}`}
              className="ml-2 text-sm font-medium fontColor"
            >
              {brand}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterByBrands;