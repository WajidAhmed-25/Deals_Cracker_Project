import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DealsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timeoutRef = useRef(null);

  const deals = [
    {
      id: 1,
      type: "burger",
      title: "SUPER SAVOR DEALS",
      image: "https://d2liqplnt17rh6.cloudfront.net/coverImages/Covertooso_b35370fa-c600-40b9-a1a7-a99e1ad36345-53.jpeg",
      description: "1 Fire Bird Burger with 1 Soft Drink",
      price: "Rs. 749",
      originalPrice: "Rs. 875",
    },
    {
      id: 2,
      type: "food",
      title: "KARACHI LOVES TOOSO",
      image: "https://foodoplanet.com/wp-content/uploads/2019/12/Tooso-Karachi-6_yg2saf.webp",
      description: "20% DISCOUNT ON ENTIRE MENU",
      bgColor: "bg-sky-400",
    },
    {
      id: 3,
      type: "burger",
      title: "Any One Wrap",
      image: "https://foodoplanet.com/wp-content/uploads/2019/12/Tooso-Karachi-4_yxqk0p.webp",
      description: "with 1 Soft Drink",
      price: "Rs. 649",
      originalPrice: "Rs. 775",
    },
    {
      id: 4,
      type: "pizza",
      title: "Pizza Deals",
      image: "/api/placeholder/400/320",
      description: "20% Off on Large Pizzas",
      bgColor: "bg-red-600",
    }
  ];

  const totalSlides = Math.ceil(deals.length / 2);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      resetTimeout();
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }

    return () => {
      resetTimeout();
    };
  }, [currentIndex, isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full px-4 py-6 mx-auto mt-8 mb-6 max-w-8xl">
      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-4xl font-bold fontColor">Today's Best Deals</h2>
          <button className="fontColor hover:text-[#237da0f8]">View All Deals</button>
        </div>

        {/* Slider container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
     
            {Array(totalSlides).fill().map((_, slideIndex) => (
              <div key={slideIndex} className="flex flex-shrink-0 w-full gap-4 mt-4">
                {deals.slice(slideIndex * 2, slideIndex * 2 + 2).map((deal) => (
                  <div key={deal.id} className="w-1/2">
                    {deal.type === "burger" ? (
                      // Burger deal card
                      <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                        <div className="relative p-4">
                          <img 
                            src={deal.image} 
                            alt={deal.title}
                            className="object-cover w-full h-48 rounded-lg"
                          />
                          <div className="mt-4">
                            <h3 className="text-xl text-[#237da0f8] font-bold">{deal.title}</h3>
                            <p className="text-[#237da0f8]">{deal.description}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-xl text-[#237da0f8] font-bold">{deal.price}</span>
                              <span className="text-sm text-gray-500 line-through">{deal.originalPrice}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Menu discount card
                      <div className={`${deal.bgColor} rounded-lg shadow-lg overflow-hidden h-full`}>
                        <div className="flex flex-col items-center justify-center h-full p-6 text-white">
                          <h3 className="mb-4 text-3xl font-bold text-center">{deal.title}</h3>
                          <p className="text-xl text-center">{deal.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
 

          {/* Dots indicator */}
          <div className="absolute flex space-x-2 -translate-x-1/2 bottom-4 left-1/2">
 
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsSlider;