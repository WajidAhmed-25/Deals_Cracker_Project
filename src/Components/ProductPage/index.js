import React, {useState,useEffect} from 'react';
import Filters from './Filters/index';
import ProductGrid from './ProductGrid/index';
import ProductCard from './Products';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ----- AOS Animation ----- //

// import AOS from 'aos';
// import 'aos/dist/aos.css';
import FeaturesSection from '../HomePage/Banners';


const ProductPage = () => {



  // ------ Animation   -----//



  
  // Condition to Detect SideBar opening or closing //
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const categories = [
    { name: 'Mobile & Accessories', count: 12 },
    { name: 'Laptop', count: 12 },
    { name: 'Electronics', count: 12 },
    { name: 'Smart Watch', count: 12 },
    { name: 'Storage', count: 12 },
    { name: 'Portable Devices', count: 12 },
    { name: 'Action Camera', count: 12 },
    { name: 'Smart Gadget', count: 12 },
    { name: 'Monitor', count: 12 },
    { name: 'Smart TV', count: 12 },
    { name: 'Camera', count: 12 },
  ];

  const products = [
    {
      id: 1,
      name: "Peace Lily",
      type: "Indoor",
      price: 36.0,
      bgColor: "ThemeColor",
      priceColor: "fontColor",
      imagePath: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    },
    {
      id: 2,
      name: "Monstera",
      type: "Outdoor",
      price: 45.0,
      bgColor: "ThemeColor",
      priceColor: "fontColor",
      imagePath: "https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png",
    },
    {
      id: 3,
      name: "Oak Tree",
      type: "Outdoor",
      price: 68.5,
      bgColor: "ThemeColor",
      priceColor: "fontColor",
      imagePath: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    },
    {
      id: 4,
      name: "Fiddle Leaf Fig",
      type: "Indoor",
      price: 50.0,
      bgColor: "ThemeColor",
      priceColor: "fontColor",
      imagePath: "https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png",
    },
    {
      id: 5,
      name: "Snake Plant",
      type: "Indoor",
      price: 30.0,
      bgColor: "ThemeColor",
      priceColor: "fontColor",
      imagePath: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    },
    {
      id: 6,
      name: "Aloe Vera",
      type: "Indoor",
      price: 25.0,
      bgColor: "ThemeColor",
      priceColor: "fontColor",
      imagePath: "https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png",
    },
    {
      id: 7,
      name: "Palm Tree",
      type: "Outdoor",
      price: 75.0,
      bgColor: "ThemeColor",
      priceColor: "fontColor",
      imagePath: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    },
    {
      id: 8,
      name: "Bamboo Plant",
      type: "Indoor",
      price: 40.0,
      bgColor: "ThemeColor",
      priceColor: "fontColor",
      imagePath: "https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png",
    },
    {
      id: 9,
      name: "Cactus",
      type: "Indoor",
      price: 20.0,
      bgColor: "ThemeColor",
      priceColor: "fontColor",
      imagePath: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    },
    {
      id: 10,
      name: "Rubber Plant",
      type: "Indoor",
      price: 35.0,
      bgColor: "ThemeColor",
      priceColor: "fontColor",
      imagePath: "https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png",
    },
    {
      id: 11,
      name: "Fern",
      type: "Outdoor",
      price: 28.0,
      bgColor: "ThemeColor",
      priceColor: "fontColor",
      imagePath: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    },
    {
      id: 12,
      name: "Succulent",
      type: "Indoor",
      price: 15.0,
      bgColor: "ThemeColor",
      priceColor: "fontColor",
      imagePath: "https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png",
    },
    {
      id: 13,
      name: "Cherry Blossom",
      type: "Outdoor",
      price: 100.0,
      bgColor: "ThemeColor",
      priceColor: "fontColor",
      imagePath: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    },
    {
      id: 14,
      name: "Money Plant",
      type: "Indoor",
      price: 18.0,
      bgColor: "ThemeColor",
      priceColor: "fontColor",
      imagePath: "https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png",
    },
    {
      id: 15,
      name: "Maple Tree",
      type: "Outdoor",
      price: 90.0,
      bgColor: "ThemeColor",
      priceColor: "fontColor",
      imagePath: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    },
    {
      id: 16,
      name: "Lavender",
      type: "Outdoor",
      price: 25.0,
      bgColor: "ThemeColor",
      priceColor: "fontColor",
      imagePath: "https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png",
    },
    {
      id: 17,
      name: "Rose Bush",
      type: "Outdoor",
      price: 32.0,
      bgColor: "ThemeColor",
      priceColor: "fontColor",
      imagePath: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    },
    {
      id: 18,
      name: "Sunflower",
      type: "Outdoor",
      price: 12.0,
      bgColor: "ThemeColor",
      priceColor: "fontColor",
      imagePath: "https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png",
    },
    {
      id: 19,
      name: "Basil",
      type: "Indoor",
      price: 10.0,
      bgColor: "ThemeColor",
      priceColor: "fontColor",
      imagePath: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    },
    {
      id: 20,
      name: "Orchid",
      type: "Indoor",
      price: 45.0,
      bgColor: "ThemeColor",
      priceColor: "fontColor",
      imagePath: "https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png",
    },
  ];
  

  return (

    <div className="px-4 py-2 mx-auto bg-white max-w-8xl">
    <div className="flex flex-row gap-4 p-2 ">
      {/* Sidebar Container */}
      <div className="relative flex">
        {/* Sidebar Content */}
        <aside 
          className={`
            transition-all duration-300 ease-in-out
            ${isSidebarOpen ? 'w-[320px] opacity-100' : 'w-0 opacity-0'}
            overflow-hidden 
          `}

        >
          <div className="w-full h-full p-2.5 rounded-lg  bg-white" >
            <Filters categories={categories} />
          </div>
        </aside>

        {/* Toggle Button - Outside the aside but still in the container */}
        <button
          onClick={toggleSidebar}
          className={`
            absolute top-2 z-10 p-1.5
            ThemeColor rounded-full shadow-lg text-white
            hover:bg-gray-100 hover:border-2 border-ThemeColor hover:font-semibold hover:text-[#237da0f8] transition-colors
            ${isSidebarOpen ? '-right-3' : '-right-3 translate-x-full ' }
          `}
       //   data-aos="fade-right" data-aos-delay="200"
      
        >
          {isSidebarOpen ? (
            <ChevronLeft className="w-6 h-6 " />
          ) : (
      
            <ChevronRight className=" h-7 w-7"    />
          )}
        </button>
      </div>

      {/* Main Content */}
      <main 
        className={`
 
          ${isSidebarOpen ? 'w-[79%]' : ' w-[98%] ml-12'}
          p-4 pt-12  shadow-lg rounded-lg 
        `}
   
      >
        <ProductGrid products={products}  />

   
      </main>
    </div>

    <FeaturesSection/>
  </div>
  );
};

export default ProductPage;