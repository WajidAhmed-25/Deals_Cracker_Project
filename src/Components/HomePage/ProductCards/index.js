

import React from 'react';

const plantData = [
  {
    id: 1,
    name: "Peace Lily",
    type: "Indoor",
    price: 36.00,
    image: "https://zeenwoman.com/cdn/shop/files/WOM34118.jpg?v=1717570202&width=600",
    bgColor: "bg-[#237da0f8]",
    priceColor: "text-[#237da0f8]"
  },
  {
    id: 2,
    name: "Monstera",
    type: "Outdoor",
    price: 45.00,
    image: "https://bagallery.com/cdn/shop/products/0PREDAY22V22_3.jpg?v=1657115865",
    bgColor: "bg-[#237da0f8]",
    priceColor: "text-[#237da0f8]"
  },
  {
    id: 3,
    name: "Oak Tree",
    type: "Outdoor",
    price: 68.50,
    image: "https://outfitters.com.pk/cdn/shop/files/F0278107901M_2.jpg?v=1700132756",
    bgColor: "bg-[#237da0f8]",
    priceColor: "text-[#237da0f8]"
  },
  {
    id: 4,
    name: "Oak Tree",
    type: "Outdoor",
    price: 68.50,
    image: "https://tse3.mm.bing.net/th?id=OIP.llaHtgrXAu1abgIspIT4DQHaLH&pid=Api&P=0&h=220",
    bgColor: "bg-[#237da0f8]",
    priceColor: "text-[#237da0f8]"
  },
  {
    id: 5,
    name: "Oak Tree",
    type: "Outdoor",
    price: 68.50,
    image: "https://www.alkaramstudio.com/cdn/shop/files/RB24-7-013_C_2_b4517b84-9972-4acd-8b20-2a8e9ee8744f.jpg?v=1722420220&width=600",
    bgColor: "bg-[#237da0f8]",
    priceColor: "text-[#237da0f8]"
  },

];

const PlantCard = ({ plant }) => {
  return (
    <div className={`flex-shrink-0 m-6 relative overflow-hidden ${plant.bgColor} rounded-lg max-w-xs shadow-lg group `}>
      <svg 
        className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
        viewBox="0 0 375 283" 
        fill="none"
      />
      <div className="relative flex items-center justify-center px-10 pt-10 transition-transform group-hover:scale-110">
        <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-20" />
        <img className="relative w-40 rounded-md hover:cursor-pointer hover:transition-all hover:duration-300" src={plant.image} alt={plant.name} />
      </div>
      <div className="relative px-6 pb-6 mt-6 text-white">
        <span className="block -mb-1 opacity-75">{plant.type}</span>
        <div className="flex justify-between">
          <span className="block text-xl font-semibold">{plant.name}</span>
          <span className={`bg-white rounded-full ${plant.priceColor} text-xs font-bold px-3 py-2 leading-none flex items-center`}>
            ${plant.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function PlantCards() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center p-1">
        {plantData.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}