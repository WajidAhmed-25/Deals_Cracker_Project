import React, { useState } from 'react';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('Fruits');

  const categories = [
    'All',
    'Kurta Shalwar',
    'Tie & Dye Suit',
    'Juices',
    'Vegetables',
    'Snacks',
    'Organic Foods'
  ];

  // Sample product data - you can replace with your actual data
  const products = {
    All: [
      { id: 1, image: 'http://www.muraqshman.com/cdn/shop/products/black-on-navy-blue-3pc-161808.jpg?v=1689242954&width=2048', badge: '' },
      { id: 2, image: 'https://cdn.shopify.com/s/files/1/0549/0730/6073/products/Sahiba_Cotton_Embroidered_3-Piece_Kurta_Set_-_02_900x.jpg?v=1678716364', badge: '' },
      { id: 3, image: 'https://www.stylesgap.com/wp-content/uploads/2016/05/Latest-Eid-Men-Kurta-Shalwar-Kameez-Designs-Collection-2017-2018-5.jpeg', badge: 'Sale 50%' },
      { id: 4, image: 'https://i.pinimg.com/originals/46/10/19/4610198399397f463cdbffa71e840af2.png', badge: 'New' },
    ],
    Fruits: [
      { id: 5, image: 'https://cdn.shopify.com/s/files/1/0549/0730/6073/products/Sahiba_Cotton_Embroidered_3-Piece_Kurta_Set_-_02_900x.jpg?v=1678716364', badge: 'New' },
      { id: 6, image: 'https://i.pinimg.com/originals/46/10/19/4610198399397f463cdbffa71e840af2.png', badge: 'Sale 50%' },
    ],
    // Add more category-specific products as needed
  };

  const displayProducts = products[activeCategory] || products.All;

  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center justify-between mb-8 md:flex-row">
        <h2 className="mb-4 text-3xl font-bold md:mb-0 text-[#237da0f8]">Recommended For You</h2>
        
        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors
                ${activeCategory === category 
                  ? 'bg-[#237da0f8] text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {displayProducts.map((product) => (
          <div key={product.id} className="relative p-4 bg-white rounded-lg shadow-sm">
            {product.badge && (
              <span className={`absolute top-2 right-2 px-2 py-1 text-xs text-white rounded
                ${product.badge.includes('Sale') ? 'bg-red-500' : 'bg-orange-400'}`}>
                {product.badge}
              </span>
            )}
            <img
              src={product.image}
              alt="Product"
              className="object-cover w-full rounded-md h-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;