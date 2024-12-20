import React from 'react';

// Import Images //

import food from './food.png'
import clothes from './clothes.png'

const CategoryCard = ({ text,image, outlined = false, direction = 'left' }) => (
  <div className="relative h-64 w-80">
    <div 
      className="absolute inset-0 transition-transform ThemeColor hover:scale-105"
      style={{
        clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)'
      }}
    >
      <div className="absolute flex items-center justify-center -translate-x-1/2 bg-white rounded-full h-36 w-36 top-6 left-1/2">
        <img src={image} className=' w-[70%] h-[70%]  '/>
      </div>
      <div className="absolute w-full text-center -translate-x-1/2 bottom-8 left-1/2">
        <span 
          className={`text-3xl font-bold tracking-wide ${outlined ? 'text-transparent bg-clip-text' : 'text-white'}`}
          style={outlined ? {
            WebkitTextStroke: '2px white',
            letterSpacing: '0.1em'
          } : {}}
        >
          {text}
        </span>
      </div>
    </div>
  </div>
);

const DDCategories = () => {
  return (
    <div className="items-center justify-center gap-16 p-8 ">
       <div className='w-full mt-8 mb-16 text-xl text-center '>
        <p className='text-4xl font-bold fontColor'>Select your Desired Choice</p>
       </div>
       <div className='flex flex-row items-center justify-center gap-64 mt-4'>
      <CategoryCard text="FOOD" image={food} direction="left" />
      <CategoryCard text="CLOTHING" image={clothes} outlined={true} direction="right" />
      </div>
    </div>
  );
};

export default DDCategories;