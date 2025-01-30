import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Heart } from 'lucide-react';

const ProductCard = ({ product }) => {


  const BackgroundSvg = () => (
    <svg
      className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
      viewBox="0 0 375 283"
      fill="none"
      style={{ opacity: 0.1 }}
    >
      <rect
        x="159.52"
        y="175"
        width="152"
        height="152"
        rx="8"
        transform="rotate(-45 159.52 175)"
        fill="white"
      />
      <rect
        y="107.48"
        width="152"
        height="152"
        rx="8"
        transform="rotate(-45 0 107.48)"
        fill="white"
      />
    </svg>
  );

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {product.map((item) => (
        <div key={item._id} className="relative group">
          <div className="relative overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-1">
            <div className="relative h-64">
              <img
                src={item.image_url}
                alt={item.title}
                className="object-cover w-full h-full"
              />
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                <Heart
                  className={`w-6 h-6 ${
                    item.isWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'
                  }`}
                />
              </button>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {item.title}
              </h3>
              
              <div className="mt-2 space-y-1">
                {item.category === 'clothing' ? (
                  <div className="flex items-center gap-2">
                    {item.discount_price ? (
                      <>
                        <span className="text-xl font-bold text-[#237da0f8]">
                          ${item.discount_price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ${item.original_price}
                        </span>
                      </>
                    ) : (
                      <span className="text-xl font-bold text-[#237da0f8]">
                        ${item.original_price}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    {item.sale_price ? (
                      <>
                        <span className="text-xl font-bold text-[#237da0f8]">
                          ${item.sale_price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ${item.original_price}
                        </span>
                      </>
                    ) : (
                      <span className="text-xl font-bold text-[#237da0f8]">
                        ${item.original_price}
                      </span>
                    )}
                  </div>
                )}
                
                {item.brand_name && (
                  <p className="text-sm text-gray-600">
                    Brand: {item.brand_name}
                  </p>
                )}
                {item.food_category && (
                  <p className="text-sm text-gray-600">
                    Category: {item.food_category}
                  </p>
                )}
              </div>
              
              <a
                href={item.category === "clothing" ? item.product_page : item.product_url}
                className="block w-full mt-4 px-4 py-2 text-center text-white bg-[#237da0f8] rounded-md hover:bg-[#1b6180] transition-colors"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
