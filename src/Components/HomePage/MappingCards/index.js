// import React from 'react';

// const WeeklyTopVendors = () => {
//   // Sample vendor data - replace with your actual data
//   const vendors = [
//     {
//       id: 1,
//       name: 'Organic Market',
//       logo: 'assets/logo.png',
//       deliveryTime: '6:15am',
//       discount: '$5 off Snack & Candy',
//       bgColor: 'bg-yellow-50',
//       products: [
//         { id: 1, image: 'assets/logo.png' },
//         { id: 2, image: 'assets/logo.png' },
//         { id: 3, image: 'assets/logo.png' },
//         { id: 4, image: 'assets/logo.png' },
//         { id: 5, image: 'assets/logo.png' },
//       ]
//     },
//     {
//       id: 2,
//       name: 'Safeway',
//       logo: 'assets/logo.png',
//       deliveryTime: '6:15am',
//       discount: '$5 off Snack & Candy',
//       bgColor: 'bg-cyan-50',
//       products: [
//         { id: 1, image: 'assets/logo.png' },
//         { id: 2, image: 'assets/logo.png' },
//         { id: 3, image: 'assets/logo.png' },
//         { id: 4, image: 'assets/logo.png' },
//         { id: 5, image: 'assets/logo.png' },
//       ]
//     },
//     {
//       id: 3,
//       name: 'Food Max',
//       logo: 'assets/logo.png',
//       deliveryTime: '6:15am',
//       discount: '$5 off Snack & Candy',
//       bgColor: 'bg-pink-50',
//       products: [
//         { id: 1, image: 'assets/logo.png' },
//         { id: 2, image: 'assets/logo.png' },
//         { id: 3, image: 'assets/logo.png' },
//         { id: 4, image: 'assets/logo.png' },
//         { id: 5, image: 'assets/logo.png' },
//       ]
//     },
//     {
//       id: 4,
//       name: 'HRmart',
//       logo: 'assets/logo.png',
//       deliveryTime: '6:15am',
//       discount: '$5 off Snack & Candy',
//       bgColor: 'bg-orange-50',
//       products: [
//         { id: 1, image: 'assets/logo.png' },
//         { id: 2, image: 'assets/logo.png' },
//         { id: 3, image: 'assets/logo.png' },
//         { id: 4, image: 'assets/logo.png' },
//         { id: 5, image: 'assets/logo.png' },
//       ]
//     },
//     {
//       id: 5,
//       name: 'Lucky Supermarket',
//       logo: 'assets/logo.png',
//       deliveryTime: '6:15am',
//       discount: '$5 off Snack & Candy',
//       bgColor: 'bg-red-50',
//       products: [
//         { id: 1, image: 'assets/logo.png' },
//         { id: 2, image: 'assets/logo.png' },
//         { id: 3, image: 'assets/logo.png' },
//         { id: 4, image: 'assets/logo.png' },
//         { id: 5, image: 'assets/logo.png' },
//       ]
//     },
//     {
//       id: 6,
//       name: 'Arico Farmer',
//       logo: 'assets/logo.png',
//       deliveryTime: '6:15am',
//       discount: '$5 off Snack & Candy',
//       bgColor: 'bg-indigo-50',
//       products: [
//         { id: 1, image: 'assets/logo.png' },
//         { id: 2, image: 'assets/logo.png' },
//         { id: 3, image: 'assets/logo.png' },
//         { id: 4, image: 'assets/logo.png' },
//         { id: 5, image: 'assets/logo.png' },
//       ]
//     },
//     {
//       id: 7,
//       name: 'Farmer Market',
//       logo: 'assets/logo.png',
//       deliveryTime: '6:15am',
//       discount: '$5 off Snack & Candy',
//       bgColor: 'bg-green-50',
//       products: [
//         { id: 1, image: 'assets/logo.png' },
//         { id: 2, image: 'assets/logo.png' },
//         { id: 3, image: 'assets/logo.png' },
//         { id: 4, image: 'assets/logo.png' },
//         { id: 5, image: 'assets/logo.png' },
//       ]
//     },
//     {
//       id: 8,
//       name: 'Foodsco',
//       logo: 'assets/logo.png',
//       deliveryTime: '6:15am',
//       discount: '$5 off Snack & Candy',
//       bgColor: 'bg-yellow-50',
//       products: [
//         { id: 1, image: 'assets/logo.png' },
//         { id: 2, image: 'assets/logo.png' },
//         { id: 3, image: 'assets/logo.png' },
//         { id: 4, image: 'assets/logo.png' },
//         { id: 5, image: 'assets/logo.png' },
//       ]
//     },
//   ];

//   return (
//     <div className="container px-4 py-8 mx-auto">
//     <div className="flex items-center justify-between mb-6">
//       <h2 className="text-3xl font-bold text-[#237da0f8]">Weekly Top Vendors</h2>
//       <a href="#" className="text-[#237da0f8] hover:text-[#237da0f8]">All Vendors</a>
//     </div>

//     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//       {vendors.map((vendor) => (
//         <div key={vendor.id} className="relative pt-12">
//           {/* Main card container with custom shape */}
//           <div className={`${vendor.bgColor} rounded-2xl pt-12 pb-6 px-4 relative`}>
//             {/* Logo container positioned above the card */}
//             <div className="absolute transform -translate-x-1/2 -top-6 left-1/2">
//               <div className="flex items-center justify-center w-16 h-16 bg-white border-[#237da0f8] border-2 rounded-badge">
//                 <img
//                   src={vendor.logo}
//                   alt={`${vendor.name} logo`}
//                   className="object-cover w-full h-full "
//                 />
//               </div>
//             </div>

//             {/* Content */}
//             <div className="text-center">
//               <h3 className="mb-2 text-lg font-semibold text-[#237da0f8]">{vendor.name}</h3>
//               <p className="mb-2 text-sm text-[#237da0f8]">
//                 Delivery by {vendor.deliveryTime}
//               </p>
//               <div className="inline-block px-3 py-1 mb-4 text-sm text-white bg-[#237da0f8] rounded-full">
//                 {vendor.discount}
//               </div>
//             </div>

//             {/* Product Images */}
//             <div className="flex justify-center gap-4 mt-4">
//               {vendor.products.map((product) => (
//                 <div 
//                   key={product.id} 
//                   className="flex items-center justify-center w-12 h-12 overflow-hidden bg-white rounded-full"
//                 >
//                   <img
//                     src={product.image}
//                     alt="Product thumbnail"
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
//   );
// };

// export default WeeklyTopVendors;

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// Import the same images as in the trending brands component
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

const WeeklyTopVendors = () => {
  const [activeCategory, setActiveCategory] = useState('both');
  const [nearbyOutlets, setNearbyOutlets] = useState([]);

  useEffect(() => {
    const category = Cookies.get('dealscracker-category') || 'both';
    setActiveCategory(category);
    fetchNearbyOutlets(category);
  }, []);

  const fetchNearbyOutlets = async (category) => {
    try {
      const token = Cookies.get("dealscracker-token");
      const response = await fetch(`${localUrl}/clothingAndFood/getNearbyOutlets?category=${category}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setNearbyOutlets(data.nearby_outlets || []);
    } catch (error) {
      console.error('Error fetching nearby outlets:', error);
    }
  };

  const getBrandImage = (brandName, category) => {
    const foodBrands = {
      'Kababjees Fried Chicken': food_kfc,
      'Angeethi': food_angeethi,
      'Delizia': food_delizia,
      'Foods Inn': food_foodsinn,
      'Ginsoy': food_ginsoy,
      'Hot n Spicy': food_hotnspicy,
      'Karachi Broast': food_karachibroast,
      'Kaybees': food_kaybees,
      'Pizza Point': food_pp,
      'Tooso': food_tooso,
      'United King': food_uk
    };

    const clothingBrands = {
      'Alkaram': clothes_alkaram,
      'J.': clothes_j,
      'Saya': clothes_saya,
      'Khaadi': clothes_khaddi,
      'Zeen': clothes_zeen,
      'Dhanak': clothes_dhanak,
      'Outfitters': clothes_outfitters
    };

    if (category === 'food') {
      return foodBrands[brandName] || food_center;
    }
    return clothingBrands[brandName] || clothes_center;
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col items-center justify-between mb-8 md:flex-row">
        <h2 className="mb-4 text-3xl font-bold md:mb-0 text-[#237da0f8]">Nearby Outlets</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {['clothing', 'food', 'both'].map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                fetchNearbyOutlets(category);
              }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors
                ${activeCategory === category
                  ? 'bg-[#237da0f8] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
  {nearbyOutlets.map((outlet, index) => (
    <div
      key={index}
      className="relative pt-12 h-full"
    >
      {/* Card Container */}
      <div
        className={`${
          index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'
        } rounded-2xl pt-12 pb-6 px-4 flex flex-col justify-between min-h-[210px] relative`}
      >
        {/* Logo Container */}
        <div className="absolute transform -translate-x-1/2 -top-6 left-1/2">
          <div className="flex items-center justify-center w-16 h-16 bg-white border-[#237da0f8] border-2 rounded-full overflow-hidden">
            <img
              src={getBrandImage(outlet.brand_name, outlet.category)}
              alt={`${outlet.brand_name} logo`}
              className="object-contain w-full h-full" // Ensures the logo is responsive
            />
          </div>
        </div>

        {/* Card Content */}
        <div className="text-center">
          <h3 className="mb-2 text-lg font-semibold text-[#237da0f8]">
            {outlet.brand_name}
          </h3>
          <p className="mb-4 text-sm text-gray-600 line-clamp-2">
            {outlet.address}
          </p>
          <a
            href={outlet.locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-sm text-white transition-colors bg-[#237da0f8] rounded-full hover:bg-[#1b6180]"
          >
            View on Maps
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default WeeklyTopVendors;