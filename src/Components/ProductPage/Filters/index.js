// Filters.jsx
import React from 'react';

// Custom Filters //

import FilterByCategory from './FilterByCategory/index'
import FilterByPrice from './FilterByPrice';
import FilterByRating from './FilterByRatings';
import FilterByBrand from './FilterByBrands';


const Filters = ({ categories}) => {
  return (

<>
<div className='flex flex-col gap-12'>
    <FilterByCategory categories={categories}/>

    <FilterByPrice />

   <FilterByRating/>

 

<FilterByBrand/>

</div>
    </>  
  );
};

export default Filters;