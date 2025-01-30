// Filters.jsx
import React, { useState, useEffect } from 'react';

// Custom Filters //

import FilterByCategory from './FilterByCategory/index'
import FilterByPrice from './FilterByPrice';
import FilterByRating from './FilterByRatings';
import FilterByBrand from './FilterByBrands';
import Cookies from 'js-cookie';

const Filters = ({ categories}) => {

  const [filterData, setFilterData] = useState(null);
  const [activeCategory, setActiveCategory] = useState('both');
  const localUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const category = Cookies.get('dealscracker-category') || 'both';
    setActiveCategory(category);
    fetchFilterDetails(category);
  }, []);

  const fetchFilterDetails = async (category) => {
    try {
      const response = await fetch(`${localUrl}/clothingAndFood/getProductFilterDetails?category=${category}`);
      const data = await response.json();
      console.log("Data: ",data);
      setFilterData(data);
    } catch (error) {
      console.error('Error fetching filter details:', error);
    }
  };

  if (!filterData) return null;

  const brands = activeCategory === 'both' 
    ? [...(filterData.clothing?.brands || []), ...(filterData.food?.brands || [])]
    : filterData[activeCategory]?.brands || [];

  const maxPrice = activeCategory === 'both'
    ? Math.max(filterData.clothing?.maxPrice || 0, filterData.food?.maxPrice || 0)
    : filterData[activeCategory]?.maxPrice || 0;

  return (

<>

<div className='flex flex-col gap-12'>
{activeCategory === 'food' && filterData.food?.foodCategories && (
          <FilterByCategory categories={filterData.food.foodCategories} />
        )}

<FilterByPrice maxPrice={maxPrice} />
        <FilterByBrand brands={brands} />

</div>
    </>  
  );
};

export default Filters;

