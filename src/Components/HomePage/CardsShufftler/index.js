import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// Importing images
import clothes_center from './images/Clothing/cloth_center-modified.png';
import clothes_alkaram from './images/Clothing/alkaram_studio.png';
import clothes_dhanak from './images/Clothing/dhanak.png';
import clothes_j from './images/Clothing/J(junaid_jamshed).png';
import clothes_khaddi from './images/Clothing/khaddi.png';
import clothes_outfitters from './images/Clothing/outfitters.png';
import clothes_saya from './images/Clothing/saya.png';
import clothes_zeen from './images/Clothing/zeen.png';

import food_center from './images/Food/food_center.png';
import food_angeethi from './images/Food/angeethi.png';
import food_delizia from './images/Food/delizia.png';
import food_foodsinn from './images/Food/foodsinn.png';
import food_ginsoy from './images/Food/ginsoy.png';
import food_hotnspicy from './images/Food/hotnspicy.png';
import food_kfc from './images/Food/kababjees_fried_chicken.png';
import food_karachibroast from './images/Food/karachi_broast.png';
import food_kaybees from './images/Food/kaybees.png';
import food_pp from './images/Food/pizza_point.png';
import food_tooso from './images/Food/tosso.png';
import food_uk from './images/Food/united_king.png';

const localUrl = process.env.REACT_APP_API_URL;

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('both'); // Default to 'clothing'
  const [trendingBrands, setTrendingBrands] = useState([]);

  useEffect(() => {
    const category = Cookies.get('dealscracker-category') || 'both'; // Get category from cookies (default to 'clothing')
    setActiveCategory(category);
    fetchTrendingBrands(category);
  }, []);

  const fetchTrendingBrands = async (category) => {
    try {
      const response = await fetch(`${localUrl}/clothingAndFood/getTopTrendingBrands?category=${category}`);
      const data = await response.json();
      setTrendingBrands(data);
    } catch (error) {
      console.error('Error fetching trending brands:', error);
    }
  };

  const getBrandImage = (brandName, category) => {
    // First check if it's a food brand
    const foodBrands = [
      'Kababjees Fried Chicken',
      'Angeethi',
      'Delizia',
      'Foods Inn',
      'Ginsoy',
      'Hot n Spicy',
      'Karachi Broast',
      'Kaybees',
      'Pizza Point',
      'Tooso',
      'United King'
    ];
  
    // Then check if it's a clothing brand
    const clothingBrands = [
      'Alkaram',
      'J.',
      'Saya',
      'Khaadi',
      'Zeen',
      'Dhanak',
      'Outfitters'
    ];
  
    // If it's a food brand, return food image
    if (foodBrands.includes(brandName)) {
      switch (brandName) {
        case 'Kababjees Fried Chicken':
          return food_kfc;
        case 'Angeethi':
          return food_angeethi;
        case 'Delizia':
          return food_delizia;
        case 'Foods Inn':
          return food_foodsinn;
        case 'Ginsoy':
          return food_ginsoy;
        case 'Hot n Spicy':
          return food_hotnspicy;
        case 'Karachi Broast':
          return food_karachibroast;
        case 'Kaybees':
          return food_kaybees;
        case 'Pizza Point':
          return food_pp;
        case 'Tooso':
          return food_tooso;
        case 'United King':
          return food_uk;
        default:
          return food_center;
      }
    }
  
    // If it's a clothing brand, return clothing image
    if (clothingBrands.includes(brandName)) {
      switch (brandName) {
        case 'Alkaram':
          return clothes_alkaram;
        case 'J.':
          return clothes_j;
        case 'Saya':
          return clothes_saya;
        case 'Khaadi':
          return clothes_khaddi;
        case 'Zeen':
          return clothes_zeen;
        case 'Dhanak':
          return clothes_dhanak;
        case 'Outfitters':
          return clothes_outfitters;
        default:
          return clothes_center;
      }
    }
  
    // Default fallback image
    return category === 'food' ? food_center : clothes_center;
  };

  return (
    <div className="w-[90%] px-4 py-8 mx-auto">
      {/* Header section remains the same */}
      <div className="flex flex-col items-center justify-between mb-8 md:flex-row">
        <h2 className="mb-4 text-3xl font-bold md:mb-0 text-[#237da0f8]">Top Trending Brands</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {['both', 'clothing', 'food'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors
                ${activeCategory === category
                  ? 'bg-[#237da0f8] hover:bg-[#217595] text-white font-bold py-2 px-4 rounded-full animate-pulse'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Modified Brand Grid */}
      <div className="grid grid-cols-1 mt-4 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {trendingBrands.map((brand) => (
          <div key={brand._id} className="relative p-4 bg-white rounded-md shadow-2xl hover:cursor-pointer hover:scale-125 hover:duration-300 hover:transition-all border border-[#237da0f8]">
            <div className="flex items-center justify-center w-full h-40"> {/* Added container with fixed height */}
              <img
                src={getBrandImage(brand.brand_name, activeCategory)}
                alt={brand.brand_name}
                className="object-contain w-full h-full max-h-32" /* Modified image styling */
              />
            </div>
            <div className="mt-2 text-center">
              <h3 className="font-semibold">{brand.brand_name}</h3>
              {activeCategory === 'clothing' || (activeCategory === 'both' && ['Alkaram', 'J.', 'Saya', 'Khaadi', 'Zeen', 'Dhanak', 'Outfitters'].includes(brand.brand_name)) ? (
                <p className="text-sm text-gray-600">Avg Discount: {brand.avg_discount}%</p>
              ) : (
                <p className="text-sm text-gray-600">Avg Deal: {brand.avg_deal_percentage}%</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;

