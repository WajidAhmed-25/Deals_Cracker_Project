import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductCard = ({ product }) => (
  <div
    className={`flex-shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg max-w-xs shadow-lg group`}
  >
    <div className="relative flex items-center justify-center px-10 pt-10 transition-transform group-hover:scale-110">
      <img
        className="relative w-56 rounded-md hover:cursor-pointer hover:transition-all hover:duration-300"
        src={product.image}
        alt={product.title}
      />
    </div>
    <div className="relative px-6 pb-6 mt-6 text-white">
      <span className="block -mb-1 opacity-75">{product.type}</span>
      <div className="flex justify-between">
        <span className="block text-xl font-semibold">{product.title}</span>
        <span
          className={`bg-white rounded-full ${product.priceColor} text-xs font-bold px-3 py-2 leading-none flex items-center`}
        >
          {product.sale_price ? `PKR ${product.sale_price}` : `PKR ${product.original_price}`}
        </span>
      </div>
    </div>
  </div>
);

export default function AnimatedDealsCards() {
  const [deals, setDeals] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
      return null;
    };

    const category = getCookie("dealscracker-category") || "both";
    const apiUrl = `${process.env.REACT_APP_API_URL}/clothingAndFood/getTop5Products?category=${category}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setDeals(response.data);
      })
      .catch((err) => {
        setError("Failed to fetch deals. Please try again.");
        console.error(err);
      });
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!deals) {
    return <div>Loading deals...</div>;
  }

  const transformData = (data, type) => {
    return data.map((item) => ({
      title: item.title,
      image: item.image_url,
      type: type,
      original_price: item.original_price,
      sale_price: item.sale_price,
      bgColor: "bg-[#237da0f8]",
      priceColor: "text-[#237da0f8]",
    }));
  };

  const clothingDeals = deals.clothing_deals ? transformData(deals.clothing_deals, "Clothing") : [];
  const foodDeals = deals.food_deals ? transformData(deals.food_deals, "Food") : [];

  return (
    <div className="relative w-full bg-white">
      <h1 className="text-4xl font-bold fontColor pb-4 pl-4">Top Money-Saving Deals</h1>
      {/* Scrolling container for Clothing Deals */}
      <div className="overflow-hidden">
        <div className="flex animate-scroll">
          {[...clothingDeals, ...clothingDeals].map((deal, index) => (
            <ProductCard key={index} product={deal} />
          ))}
        </div>
      </div>

      {/* Scrolling container for Food Deals */}
      <div className="overflow-hidden">
        <div className="flex animate-scroll">
          {[...foodDeals, ...foodDeals].map((deal, index) => (
            <ProductCard key={index} product={deal} />
          ))}
        </div>
      </div>

      {/* Tailwind animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

