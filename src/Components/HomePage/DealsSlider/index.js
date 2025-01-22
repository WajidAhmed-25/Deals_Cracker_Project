import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cookies from 'js-cookie';  // Import js-cookie for handling cookies

const DealsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [deals, setDeals] = useState([]);
  const timeoutRef = useRef(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  // Fetch deals based on category from cookie
  useEffect(() => {
    const category = Cookies.get('dealscracker-category') || 'both'; // Default to 'both' if no category is set
    const fetchDeals = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/clothingAndFood/getTodaysBestDeals?category=${category}`);
        const data = await response.json();

        // Depending on category, set the appropriate deals
        if (category === 'clothing') {
          setDeals(data.clothing_deals);
        } else if (category === 'food') {
          setDeals(data.food_deals);
        } else {
          // Combine both clothing and food deals
          setDeals([...data.clothing_deals, ...data.food_deals]);
        }
      } catch (error) {
        console.error('Error fetching deals:', error);
      }
    };

    fetchDeals();
  }, []);

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
        <div 
          className="flex items-center justify-between mb-4"
          data-aos="fade-down"
          data-aos-delay="100"
        >
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
                {deals.slice(slideIndex * 2, slideIndex * 2 + 2).map((deal, index) => (
                  <div 
                    key={index} 
                    className="w-1/2"
                    data-aos="fade-up"
                    data-aos-delay={200 + (index * 100)}
                  >
                    <div 
                      className="overflow-hidden bg-gray-100 rounded-lg shadow-lg"
                      data-aos="zoom-in"
                      data-aos-delay={300 + (index * 100)}
                    >
                      <div className="relative p-4">
                        <img 
                          src={deal.image_url || "/api/placeholder/400/320"} // Placeholder if no image
                          alt={deal.title}
                          className="object-cover w-full h-48 rounded-lg"
                        />
                        <div className="mt-4">
                          <h3 className="text-xl text-[#237da0f8] font-bold">{deal.title}</h3>
                          <p className="text-[#237da0f8]">{deal.brand_name}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-xl text-[#237da0f8] font-bold">
                              {deal.sale_price ? `Rs. ${deal.sale_price}` : `Rs. ${deal.original_price}`}
                            </span>
                            {deal.sale_price && (
                              <span className="text-sm text-gray-500 line-through">
                                Rs. {deal.original_price}
                              </span>
                            )}
                            {deal.discount_percentage && (
                              <span className="text-sm text-gray-500">
                                {deal.discount_percentage}% Off
                              </span>
                            )}
                          </div>
                          <a href={deal.product_page || deal.product_url} target="_blank" rel="noopener noreferrer" className="text-[#237da0f8] hover:text-[#1d628d] mt-2 inline-block">View Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsSlider;


// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const DealsSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const timeoutRef = useRef(null);

//   // Initialize AOS
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       easing: 'ease-out-cubic'
//     });
//   }, []);

//   const deals = [
//     {
//       id: 1,
//       type: "burger",
//       title: "SUPER SAVOR DEALS",
//       image: "https://d2liqplnt17rh6.cloudfront.net/coverImages/Covertooso_b35370fa-c600-40b9-a1a7-a99e1ad36345-53.jpeg",
//       description: "1 Fire Bird Burger with 1 Soft Drink",
//       price: "Rs. 749",
//       originalPrice: "Rs. 875",
//     },
//     {
//       id: 2,
//       type: "food",
//       title: "KARACHI LOVES TOOSO",
//       image: "https://foodoplanet.com/wp-content/uploads/2019/12/Tooso-Karachi-6_yg2saf.webp",
//       description: "20% DISCOUNT ON ENTIRE MENU",
//       bgColor: "bg-[#237da0f8]",
//     },
//     {
//       id: 3,
//       type: "burger",
//       title: "Any One Wrap",
//       image: "https://foodoplanet.com/wp-content/uploads/2019/12/Tooso-Karachi-4_yxqk0p.webp",
//       description: "with 1 Soft Drink",
//       price: "Rs. 649",
//       originalPrice: "Rs. 775",
//     },
//     {
//       id: 4,
//       type: "pizza",
//       title: "Pizza Deals",
//       image: "/api/placeholder/400/320",
//       description: "20% Off on Large Pizzas",
//       bgColor: "bg-[#237da0f8]",
//     }
//   ];

//   const totalSlides = Math.ceil(deals.length / 2);

//   const resetTimeout = () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   };

//   useEffect(() => {
//     if (isAutoPlaying) {
//       resetTimeout();
//       timeoutRef.current = setTimeout(() => {
//         setCurrentIndex((prevIndex) =>
//           prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
//         );
//       }, 3000);
//     }

//     return () => {
//       resetTimeout();
//     };
//   }, [currentIndex, isAutoPlaying, totalSlides]);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="w-full px-4 py-6 mx-auto mt-8 mb-6 max-w-8xl">
//       <div className="relative">
//         {/* Header */}
//         <div 
//           className="flex items-center justify-between mb-4"
//           data-aos="fade-down"
//           data-aos-delay="100"
//         >
//           <h2 className="text-4xl font-bold fontColor">Today's Best Deals</h2>
//           <button className="fontColor hover:text-[#237da0f8]">View All Deals</button>
//         </div>

//         {/* Slider container */}
//         <div className="relative overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-out"
//             style={{
//               transform: `translateX(-${currentIndex * 100}%)`,
//             }}
//           >
//             {Array(totalSlides).fill().map((_, slideIndex) => (
//               <div key={slideIndex} className="flex flex-shrink-0 w-full gap-4 mt-4">
//                 {deals.slice(slideIndex * 2, slideIndex * 2 + 2).map((deal, index) => (
//                   <div 
//                     key={deal.id} 
//                     className="w-1/2"
//                     data-aos="fade-up"
//                     data-aos-delay={200 + (index * 100)}
//                   >
//                     {deal.type === "burger" ? (
//                       // Burger deal card
//                       <div 
//                         className="overflow-hidden bg-gray-100 rounded-lg shadow-lg"
//                         data-aos="zoom-in"
//                         data-aos-delay={300 + (index * 100)}
//                       >
//                         <div className="relative p-4">
//                           <img 
//                             src={deal.image} 
//                             alt={deal.title}
//                             className="object-cover w-full h-48 rounded-lg"
//                           />
//                           <div className="mt-4">
//                             <h3 className="text-xl text-[#237da0f8] font-bold">{deal.title}</h3>
//                             <p className="text-[#237da0f8]">{deal.description}</p>
//                             <div className="flex items-center gap-2 mt-2">
//                               <span className="text-xl text-[#237da0f8] font-bold">{deal.price}</span>
//                               <span className="text-sm text-gray-500 line-through">{deal.originalPrice}</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ) : (
//                       // Menu discount card
//                       <div 
//                         className={`${deal.bgColor} rounded-lg shadow-lg overflow-hidden h-full`}
//                         data-aos="zoom-in"
//                         data-aos-delay={300 + (index * 100)}
//                       >
//                         <div className="flex flex-col items-center justify-center h-full p-6 text-white">
//                           <h3 className="mb-4 text-3xl font-bold text-center text-white">{deal.title}</h3>
//                           <p className="text-xl text-center text-white">{deal.description}</p>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DealsSlider;