import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

// Featured Products Array - Extended to 8 items
const featuredProducts = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: "Taylor Farms Broccoli",
  rating: 4.8,
  reviews: "17k",
  price: 1500.00,
  oldPrice: 1500.00,
  image: "https://foodsinn.co/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1723495914-1649592813-CrispyZungerBurger_02_1.jpg%3Fq%3D10&w=640&q=75"
}));

// Top Selling Products Array - 8 items
const topSellingProducts = Array.from({ length: 8 }, (_, i) => ({
  id: i + 9,
  title: "Taylor Farms Broccoli",
  rating: 4.8,
  reviews: "17k",
  price: 1500.00,
  oldPrice: 1500.00,
  image: "https://foodsinn.co/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1723495914-1649592813-CrispyZungerBurger_02_1.jpg%3Fq%3D10&w=640&q=75"
}));

// On-Sale Products Array - 8 items
const onSaleProducts = Array.from({ length: 8 }, (_, i) => ({
  id: i + 17,
  title: "Taylor Farms Broccoli",
  rating: 4.8,
  reviews: "17k",
  price: 1500.00,
  oldPrice: 1500.00,
  image: "https://foodsinn.co/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1723495914-1649592813-CrispyZungerBurger_02_1.jpg%3Fq%3D10&w=640&q=75"
}));

// Top Rated Products Array - 8 items
const topRatedProducts = Array.from({ length: 8 }, (_, i) => ({
  id: i + 25,
  title: "Taylor Farms Broccoli",
  rating: 4.8,
  reviews: "17k",
  price: 1500.00,
  oldPrice: 1500.00,
  image: "https://foodsinn.co/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1723495914-1649592813-CrispyZungerBurger_02_1.jpg%3Fq%3D10&w=640&q=75"
}));

// Product Card Component
const ProductCard = ({ title, rating, reviews, price, oldPrice, image }) => (
  <div className="flex items-center py-3 space-x-3">
    <div className="relative flex items-center justify-center w-24 h-24 bg-gray-200">
      <img className="w-full h-full" src={image}/>
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center space-x-1">
        <span className="text-sm font-medium fontColor">{rating}</span>
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        <span className="text-xs fontColor">({reviews})</span>
      </div>
      <h3 className="text-sm font-medium text-gray-900 truncate fontColor">{title}</h3>
      <div className="flex items-center space-x-2">
        <span className="text-sm font-bold fontColor">${price.toFixed(2)}</span>
        <span className="text-sm text-gray-400">${oldPrice.toFixed(2)}</span>
      </div>
    </div>
  </div>
);

// Animated Product Section Component
const ProductSection = ({ title, products }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setStartIndex((prev) => (prev + 4) % 8);
        setIsAnimating(false);
      }, 500);
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const visibleProducts = products.slice(startIndex, startIndex + 4);

  return (
    <div className="overflow-hidden bg-white rounded-lg shadow">
      <div className="relative p-4 rounded-t-lg ThemeColor">
        <h2 className="text-xl font-semibold text-white">
          {title}
        </h2>
        <div className="absolute bottom-0 w-32 h-1.5 -mt-2 bg-white rounded-md"></div>
      </div>
      <div className="p-4">
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-x-full' : 'opacity-100 transform translate-x-0'}`}>
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component
const ProductShowcase = () => {
  return (
    <div className="container p-4 mx-auto">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ProductSection title="Featured Products" products={featuredProducts} />
        <ProductSection title="Top Selling Products" products={topSellingProducts} />
        <ProductSection title="On-sale Products" products={onSaleProducts} />
        <ProductSection title="Top Rated Products" products={topRatedProducts} />
      </div>
    </div>
  );
};

export default ProductShowcase;