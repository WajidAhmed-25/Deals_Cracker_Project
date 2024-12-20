import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample product data with 14 items
const products = [
  {
    id: 1,
    name: "Taylor Farms Broccoli Florets Vegetables",
    image: "116X160",
    rating: 4.8,
    reviews: "17k",
    originalPrice: 28.99,
    currentPrice: 14.99,
    seller: "Lucky Supermarket"
  },
].concat(Array.from({ length: 13 }, (_, index) => ({
  id: index + 2,
  name: "Taylor Farms Broccoli Florets Vegetables",
  image: "150X160",
  rating: 4.8,
  reviews: "17k",
  originalPrice: 28.99,
  currentPrice: 14.99,
  seller: "Lucky Supermarket"
})));

const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ProductCard = ({ product }) => {
  return (
    <div className="relative w-full p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-center w-full h-64 mb-4 overflow-hidden bg-gray-300">
        <img
          src={`/api/placeholder/${product.image}`}
          alt="Product"
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-125"
        />
      </div>

      <div className="flex items-center mb-2">
        <span className="mr-1 font-semibold text-gray-800">{product.rating}</span>
        <StarIcon />
        <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
      </div>

      <h3 className="mb-2 font-medium text-gray-800 line-clamp-2">
        {product.name}
      </h3>

      <div className="flex items-center mb-2">
        <div className="w-4 h-4 mr-1 rounded-sm bg-[#237da0f8]"></div>
        <span className="text-sm text-gray-600">By {product.seller}</span>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
          <div className="flex items-center">
            <span className="font-bold text-gray-800">${product.currentPrice}</span>
            <span className="ml-1 text-sm text-gray-600">/Qty</span>
          </div>
        </div>
        <button className="px-4 py-1 text-white transition-colors rounded-md bg-[#237da0f8] hover:bg-[#1b6080] hover:text-white">
          Add
        </button>
      </div>
    </div>
  );
};

const OrganicFoodSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) setItemsPerView(1);      // Mobile and small tablet
      else if (width < 1024) setItemsPerView(3); // Large tablet
      else if (width < 1280) setItemsPerView(5); // Small desktop
      else setItemsPerView(7);                   // Large desktop
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const handlePrevClick = () => {
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => {
      if (prevIndex <= 0) {
        // When at the beginning, jump to the end
        return products.length - itemsPerView;
      }
      return prevIndex - 1;
    });
  };

  const handleNextClick = () => {
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => {
      if (prevIndex >= products.length - itemsPerView) {
        // When at the end, jump to the beginning
        return 0;
      }
      return prevIndex + 1;
    });
  };

  // Auto-scroll effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const translateValue = `-${currentIndex * (100 / itemsPerView)}%`;

  return (
    <div className="max-w-full px-4 py-8 mx-auto overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#237da0f8]">Organic Food</h1>
        <a href="#" className="text-[#237da0f8] hover:text-[#1b6080]">All Categories</a>
      </div>

      <div className="relative">
        <button 
          onClick={handlePrevClick}
          className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md top-1/2 md:-left-4 -translate-y-[300%] xl:-translate-y-[270%]"
        >
          <ChevronLeft className="w-6 h-6 text-[#237da0f8]" />
        </button>
        
        <button 
          onClick={handleNextClick}
          className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md -translate-y-[300%] top-1/2 md:-right-4 xl:-translate-y-[270%]"
        >
          <ChevronRight className="w-6 h-6 text-[#237da0f8]" />
        </button>

        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(${translateValue})`,
              transition: isTransitioning ? 'transform 500ms ease' : 'none',
            }}
          >
            {products.map((product, index) => (
              <div 
                key={`${product.id}-${index}`} 
                className={`flex-shrink-0 px-2 w-full md:w-1/3 lg:w-1/5 xl:w-[calc(100%/7)]`}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-1 mt-4 md:hidden">
          {products.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index ? 'bg-[#237da0f8]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganicFoodSlider;