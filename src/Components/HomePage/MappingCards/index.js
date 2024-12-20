import React from 'react';

const WeeklyTopVendors = () => {
  // Sample vendor data - replace with your actual data
  const vendors = [
    {
      id: 1,
      name: 'Organic Market',
      logo: 'assets/logo.png',
      deliveryTime: '6:15am',
      discount: '$5 off Snack & Candy',
      bgColor: 'bg-yellow-50',
      products: [
        { id: 1, image: 'assets/logo.png' },
        { id: 2, image: 'assets/logo.png' },
        { id: 3, image: 'assets/logo.png' },
        { id: 4, image: 'assets/logo.png' },
        { id: 5, image: 'assets/logo.png' },
      ]
    },
    {
      id: 2,
      name: 'Safeway',
      logo: 'assets/logo.png',
      deliveryTime: '6:15am',
      discount: '$5 off Snack & Candy',
      bgColor: 'bg-cyan-50',
      products: [
        { id: 1, image: 'assets/logo.png' },
        { id: 2, image: 'assets/logo.png' },
        { id: 3, image: 'assets/logo.png' },
        { id: 4, image: 'assets/logo.png' },
        { id: 5, image: 'assets/logo.png' },
      ]
    },
    {
      id: 3,
      name: 'Food Max',
      logo: 'assets/logo.png',
      deliveryTime: '6:15am',
      discount: '$5 off Snack & Candy',
      bgColor: 'bg-pink-50',
      products: [
        { id: 1, image: 'assets/logo.png' },
        { id: 2, image: 'assets/logo.png' },
        { id: 3, image: 'assets/logo.png' },
        { id: 4, image: 'assets/logo.png' },
        { id: 5, image: 'assets/logo.png' },
      ]
    },
    {
      id: 4,
      name: 'HRmart',
      logo: 'assets/logo.png',
      deliveryTime: '6:15am',
      discount: '$5 off Snack & Candy',
      bgColor: 'bg-orange-50',
      products: [
        { id: 1, image: 'assets/logo.png' },
        { id: 2, image: 'assets/logo.png' },
        { id: 3, image: 'assets/logo.png' },
        { id: 4, image: 'assets/logo.png' },
        { id: 5, image: 'assets/logo.png' },
      ]
    },
    {
      id: 5,
      name: 'Lucky Supermarket',
      logo: 'assets/logo.png',
      deliveryTime: '6:15am',
      discount: '$5 off Snack & Candy',
      bgColor: 'bg-red-50',
      products: [
        { id: 1, image: 'assets/logo.png' },
        { id: 2, image: 'assets/logo.png' },
        { id: 3, image: 'assets/logo.png' },
        { id: 4, image: 'assets/logo.png' },
        { id: 5, image: 'assets/logo.png' },
      ]
    },
    {
      id: 6,
      name: 'Arico Farmer',
      logo: 'assets/logo.png',
      deliveryTime: '6:15am',
      discount: '$5 off Snack & Candy',
      bgColor: 'bg-indigo-50',
      products: [
        { id: 1, image: 'assets/logo.png' },
        { id: 2, image: 'assets/logo.png' },
        { id: 3, image: 'assets/logo.png' },
        { id: 4, image: 'assets/logo.png' },
        { id: 5, image: 'assets/logo.png' },
      ]
    },
    {
      id: 7,
      name: 'Farmer Market',
      logo: 'assets/logo.png',
      deliveryTime: '6:15am',
      discount: '$5 off Snack & Candy',
      bgColor: 'bg-green-50',
      products: [
        { id: 1, image: 'assets/logo.png' },
        { id: 2, image: 'assets/logo.png' },
        { id: 3, image: 'assets/logo.png' },
        { id: 4, image: 'assets/logo.png' },
        { id: 5, image: 'assets/logo.png' },
      ]
    },
    {
      id: 8,
      name: 'Foodsco',
      logo: 'assets/logo.png',
      deliveryTime: '6:15am',
      discount: '$5 off Snack & Candy',
      bgColor: 'bg-yellow-50',
      products: [
        { id: 1, image: 'assets/logo.png' },
        { id: 2, image: 'assets/logo.png' },
        { id: 3, image: 'assets/logo.png' },
        { id: 4, image: 'assets/logo.png' },
        { id: 5, image: 'assets/logo.png' },
      ]
    },
  ];

  return (
    <div className="container px-4 py-8 mx-auto">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-3xl font-bold text-[#237da0f8]">Weekly Top Vendors</h2>
      <a href="#" className="text-[#237da0f8] hover:text-[#237da0f8]">All Vendors</a>
    </div>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {vendors.map((vendor) => (
        <div key={vendor.id} className="relative pt-12">
          {/* Main card container with custom shape */}
          <div className={`${vendor.bgColor} rounded-2xl pt-12 pb-6 px-4 relative`}>
            {/* Logo container positioned above the card */}
            <div className="absolute transform -translate-x-1/2 -top-6 left-1/2">
              <div className="flex items-center justify-center w-16 h-16 bg-white border-[#237da0f8] border-2 rounded-badge">
                <img
                  src={vendor.logo}
                  alt={`${vendor.name} logo`}
                  className="object-cover w-full h-full "
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="mb-2 text-lg font-semibold text-[#237da0f8]">{vendor.name}</h3>
              <p className="mb-2 text-sm text-[#237da0f8]">
                Delivery by {vendor.deliveryTime}
              </p>
              <div className="inline-block px-3 py-1 mb-4 text-sm text-white bg-[#237da0f8] rounded-full">
                {vendor.discount}
              </div>
            </div>

            {/* Product Images */}
            <div className="flex justify-center gap-4 mt-4">
              {vendor.products.map((product) => (
                <div 
                  key={product.id} 
                  className="flex items-center justify-center w-12 h-12 overflow-hidden bg-white rounded-full"
                >
                  <img
                    src={product.image}
                    alt="Product thumbnail"
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default WeeklyTopVendors;