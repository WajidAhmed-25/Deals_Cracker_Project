import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    <div className="grid w-full grid-cols-1 gap-12 mt-6 mb-12 md:grid-cols-2 lg:grid-cols-4 ">
      {product.map((plant) => (
        <div
          key={plant.id}
        data-aos="fade-up" // Add AOS attribute for animation
       className={` overflow-hidden ${plant.bgColor} rounded-lg shadow-lg group  transition-transform duration-300 hover:scale-105`}
        >
          <BackgroundSvg />
          <div className="relative flex items-center justify-center px-10 pt-10 transition-transform duration-300 group-hover:scale-110">
            <div
              className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            />
            <img
              className="relative object-contain w-40 h-40"
              src={plant.imagePath}
              alt={plant.name}
            />
          </div>
          <div className="relative px-6 pb-6 mt-6 text-white">
            <span className="block -mb-1 opacity-75">{plant.type}</span>
            <div className="flex items-center justify-between mt-2">
              <span className="block text-xl font-semibold">{plant.name}</span>
              <span
                className={`block bg-white ${plant.priceColor} text-xs font-bold px-3 py-2 leading-none flex items-center rounded-full`}
              >
                ${plant.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
