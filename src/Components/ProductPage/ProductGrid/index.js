// ProductGrid.jsx
import React from 'react';
import ProductCard from '../Products/index';
import ViewToggleButtons from './ViewToggleButtons';
import CustomSelect from './CustomSelectOptions';

const ProductGrid = ({ products }) => {
  return (
    <div className="w-full ">
      <div className="flex items-center justify-between mb-6 ">
        <p></p>
 <div className="flex items-center mb-8 space-x-4 " >
   
<ViewToggleButtons/> 

 <CustomSelect/>
        </div>
        
      </div>
      <div className="flex flex-row mx-10 ">
     
          <ProductCard product={products} />
    
      </div>
    </div>
  );
};

export default ProductGrid;