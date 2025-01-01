import React from 'react'

const FilterByCategory = ({categories}) => {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg" >

    <div className="pb-2 text-center">
        <h2 className="text-lg font-semibold fontColor">Product Category</h2>
      </div>
      <div className="w-full h-px mb-4 bg-gray-200" />
    <div className="space-y-3">
      {categories.map((category) => (
        <div key={category.name} className="flex items-center justify-between text-gray-700 hover:text-[#237da0f8] hover:scale-100 hover:transition-all hover:duration-300 hover:font-semibold hover:cursor-pointer">
          <span className="text-gray-700 hover:text-[#237da0f8] hover:scale-100 hover:transition-all hover:duration-300 hover:font-semibold hover:cursor-pointer">{category.name}</span>
          <span className="text-sm text-gray-500">({category.count})</span>
        </div>
      ))}
    </div>
  </div>
  )
}

export default FilterByCategory