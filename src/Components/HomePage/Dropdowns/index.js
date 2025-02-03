// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import Cookies from "js-cookie";

// const Index = () => {
//   const [openMenu, setOpenMenu] = useState(null);
//   const [openSubmenu, setOpenSubmenu] = useState(null);
//   const [brandsData, setBrandsData] = useState({ clothingBrands: [], foodBrands: [] });
//   const [category, setCategory] = useState("both"); // Default: Show both categories

//   const localUrl = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     // Get category from cookies
//     const storedCategory = Cookies.get("dealscracker-category") || "both";
//     setCategory(storedCategory);

//     // Fetch brands based on stored category
//     fetchBrands(storedCategory);
//   }, []);

//   const handleCategoryToggle = (newCategory) => {
//     setCategory(newCategory);
//     Cookies.set("dealscracker-category", newCategory);
//     window.location.reload();
//   };

//   const toggleMenu = (menu) => {
//     setOpenMenu(openMenu === menu ? null : menu);
//     setOpenSubmenu(null);
//   };

//   const fetchBrands = async (category) => {
//     try {
//       const response = await axios.get(`${localUrl}/clothingAndFood/getAllBrands?category=${category}`);
//       setBrandsData(response.data);
//     } catch (error) {
//       console.error("Error fetching brands:", error);
//     }
//   };

//   const toggleSubmenu = (submenu) => {
//     setOpenSubmenu(openSubmenu === submenu ? null : submenu);
//   };

//   const mainLinks = {
//     Home: "/homepage",
//     Products: "/pp",
//     About: "/about",
//     Contact: "/contact",
//   };

//   return (
//     <nav className="bg-white border-b-2 shadow-3xl">
//       <div className="container flex items-center justify-between px-6 py-4 mx-auto">
//         {/* All Categories */}
//         <div className="relative group">
//           <button
//             className="flex items-center font-semibold text-gray-700 hover:text-[#237da0f8]"
//             onClick={() => toggleMenu("categories")}
//           >
//             <FontAwesomeIcon icon={faBars} className="mr-2" /> All Categories
//           </button>
//           {openMenu === "categories" && (
//             <div className="absolute left-0 w-72 mt-2 bg-white border rounded-lg shadow-lg z-[9999]">
//               <ul>
//                 {/* Conditionally render Food category */}
//                 {(category === "food" || category === "both") && (
//                   <li
//                     className="relative flex items-center justify-between px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
//                     onClick={() => toggleSubmenu("Food")}
//                   >
//                     <span>Food</span>
//                     <FontAwesomeIcon
//                       icon={openSubmenu === "Food" ? faChevronDown : faChevronRight}
//                       className="text-[#237da0f8]"
//                     />
//                     {openSubmenu === "Food" && (
//                       <div className="absolute top-0 w-64 ml-2 bg-white border rounded-lg shadow-lg left-full">
//                         <ul>
//                           {brandsData.foodBrands.length > 0 ? (
//                             brandsData.foodBrands.map((brand) => (
//                               <li
//                                 key={brand._id}
//                                 className="px-4 py-2 text-gray-700 hover:bg-gray-100"
//                               >
//                                 <Link to={`/categories/food/${brand.brand_name}`}>
//                                   {brand.brand_name} ({brand.products_count})
//                                 </Link>
//                               </li>
//                             ))
//                           ) : (
//                             <li className="px-4 py-2 text-gray-500">No brands available</li>
//                           )}
//                         </ul>
//                       </div>
//                     )}
//                   </li>
//                 )}

//                 {/* Conditionally render Clothing category */}
//                 {(category === "clothing" || category === "both") && (
//                   <li
//                     className="relative flex items-center justify-between px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
//                     onClick={() => toggleSubmenu("Clothing")}
//                   >
//                     <span>Clothing</span>
//                     <FontAwesomeIcon
//                       icon={openSubmenu === "Clothing" ? faChevronDown : faChevronRight}
//                       className="text-[#237da0f8]"
//                     />
//                     {openSubmenu === "Clothing" && (
//                       <div className="absolute top-0 w-64 ml-2 bg-white border rounded-lg shadow-lg left-full">
//                         <ul>
//                           {brandsData.clothingBrands.length > 0 ? (
//                             brandsData.clothingBrands.map((brand) => (
//                               <li
//                                 key={brand._id}
//                                 className="px-4 py-2 text-gray-700 hover:bg-gray-100"
//                               >
//                                 <Link to={`/categories/clothing/${brand.brand_name}`}>
//                                   {brand.brand_name} ({brand.products_count})
//                                 </Link>
//                               </li>
//                             ))
//                           ) : (
//                             <li className="px-4 py-2 text-gray-500">No brands available</li>
//                           )}
//                         </ul>
//                       </div>
//                     )}
//                   </li>
//                 )}
//               </ul>
//             </div>
//           )}
//         </div>

//         {/* Main Links */}
//         <ul className="items-center hidden space-x-6 md:flex">
//           {Object.entries(mainLinks).map(([link, value]) => (
//             <li key={link} className="relative group">
//               <Link
//                 to={typeof value === "string" ? value : value.path}
//                 className="font-semibold text-gray-700 hover:text-[#237da0f8]"
//               >
//                 {link}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Category Toggle Buttons */}
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={() => handleCategoryToggle("both")}
//             className={`px-4 py-2 rounded-full ${
//               category === "both" ? "bg-[#237da0f8] text-white" : "bg-white text-gray-700 border"
//             }`}
//           >
//             Both
//           </button>
//           <button
//             onClick={() => handleCategoryToggle("clothing")}
//             className={`px-4 py-2 rounded-full ${
//               category === "clothing" ? "bg-[#237da0f8] text-white" : "bg-white text-gray-700 border"
//             }`}
//           >
//             Clothing
//           </button>
//           <button
//             onClick={() => handleCategoryToggle("food")}
//             className={`px-4 py-2 rounded-full ${
//               category === "food" ? "bg-[#237da0f8] text-white" : "bg-white text-gray-700 border"
//             }`}
//           >
//             Food
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => toggleMenu("mobile")} className="text-gray-700">
//             <FontAwesomeIcon icon={faBars} />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Index;


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Cookies from "js-cookie";
import "./dd.css"

const Index = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [brandsData, setBrandsData] = useState({ clothingBrands: [], foodBrands: [] });
  const [category, setCategory] = useState("both");
  const navigate = useNavigate();

  const localUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Get category from cookies
    const storedCategory = Cookies.get("dealscracker-category") || "both";
    setCategory(storedCategory);

    // Fetch brands based on stored category
    fetchBrands(storedCategory);
  }, []);

  const handleCategoryToggle = (newCategory) => {
    setCategory(newCategory);
    Cookies.set("dealscracker-category", newCategory);
    window.location.reload();
  };

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
    setOpenSubmenu(null);
  };

  const fetchBrands = async (category) => {
    try {
      const response = await axios.get(`${localUrl}/clothingAndFood/getAllBrands?category=${category}`);
      setBrandsData(response.data);
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  const toggleSubmenu = (submenu) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu);
  };

  const handleBrandClick = (brandName) => {
    navigate(`/pp?brand_name=${encodeURIComponent(brandName)}`);
  };

  const mainLinks = {
    Home: "/homepage",
    Products: "/pp",
    About: "/about",
    Contact: "/contact",
  };

  return (
    <nav className="bg-white border-b-2 shadow-3xl ">
      <div className="w-[93%] mx-auto flex items-center justify-between py-4">
        {/* All Categories */}
        <div className="relative group">
          {/* <button
            className="flex py-4 p-2 border-[#237da0f8] border-2 shadow-2xl rounded-md items-center font-semibold text-gray-700 hover:text-[#237da0f8]"
            onClick={() => toggleMenu("categories")}
          >
            <FontAwesomeIcon icon={faBars} className="mr-2 text-lg" /> All Categories
          </button> */}

<button
            className="w-[150px] bg-white hover:text-white hover:font-semibold h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#237da0f8] before:to-[#237da0f8] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#237da0f8]"
            onClick={() => toggleMenu("categories")}
          >
            <FontAwesomeIcon icon={faBars} className="mr-2 text-lg" /> All Categories
          </button>


          {openMenu === "categories" && (
            <div className="absolute left-0 w-72 mt-2 bg-white border rounded-lg shadow-lg z-[9999]">
              <ul>
                {/* Conditionally render Food category */}
                {(category === "food" || category === "both") && (
                  <li
                    className="relative flex items-center justify-between px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                    onClick={() => toggleSubmenu("Food")}
                  >
                    <span>Food</span>
                    <FontAwesomeIcon
                      icon={openSubmenu === "Food" ? faChevronDown : faChevronRight}
                      className="text-[#237da0f8]"
                    />
                    {openSubmenu === "Food" && (
                      <div className="absolute top-0 w-64 ml-2 bg-white border rounded-lg shadow-lg left-full">
                        <ul>
                          {brandsData.foodBrands.length > 0 ? (
                            brandsData.foodBrands.map((brand) => (
                              <li
                                key={brand._id}
                                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleBrandClick(brand.brand_name)}
                              >
                                {brand.brand_name} ({brand.products_count})
                              </li>
                            ))
                          ) : (
                            <li className="px-4 py-2 text-gray-500">No brands available</li>
                          )}
                        </ul>
                      </div>
                    )}
                  </li>
                )}

                {/* Conditionally render Clothing category */}
                {(category === "clothing" || category === "both") && (
                  <li
                    className="relative flex items-center justify-between px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                    onClick={() => toggleSubmenu("Clothing")}
                  >
                    <span>Clothing</span>
                    <FontAwesomeIcon
                      icon={openSubmenu === "Clothing" ? faChevronDown : faChevronRight}
                      className="text-[#237da0f8]"
                    />
                    {openSubmenu === "Clothing" && (
                      <div className="absolute top-0 w-64 ml-2 bg-white border rounded-lg shadow-lg left-full">
                        <ul>
                          {brandsData.clothingBrands.length > 0 ? (
                            brandsData.clothingBrands.map((brand) => (
                              <li
                                key={brand._id}
                                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleBrandClick(brand.brand_name)}
                              >
                                {brand.brand_name} ({brand.products_count})
                              </li>
                            ))
                          ) : (
                            <li className="px-4 py-2 text-gray-500">No brands available</li>
                          )}
                        </ul>
                      </div>
                    )}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Main Links */}
        <ul className="items-center hidden space-x-16 text-lg md:flex">
          {Object.entries(mainLinks).map(([link, value]) => (
            <li key={link} className="relative group hover:scale-120 hover:transition-all hover:duration-300 hover:text-xl">
              <Link
                to={typeof value === "string" ? value : value.path}
                className="font-semibold text-gray-700 hover:text-[#237da0f8]"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Category Toggle Buttons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleCategoryToggle("both")}
            className={`px-4 py-2 rounded-full ${
              category === "both" ? "bg-[#237da0f8] shadow-3xl text-white" : "bg-white text-gray-700 border shadow-3xl"
            }`}
          >
            Both
          </button>
          {/* <button
            onClick={() => handleCategoryToggle("both")}
            className={`px-6 py-2 rounded-full  ${
              category === "both" ? "bg-[#237da0f8] hover:bg-[#217595] text-white font-bold py-2 px-4 rounded-full animate-pulse" : "bg-white text-gray-700 border shadow-3xl"
            }`}
          >
            Both
          </button> */}
          <button
            onClick={() => handleCategoryToggle("clothing")}
            className={`px-6 py-2 rounded-full ${
              category === "clothing" ? "bg-[#237da0f8] shadow-3xl text-white" : "bg-white text-gray-700 border shadow-3xl"
            }`}
          >
            Clothing
          </button>
          <button
            onClick={() => handleCategoryToggle("food")}
            className={`px-6 py-2 rounded-full ${
              category === "food" ? "bg-[#237da0f8] shadow-3xl text-white" : "bg-white text-gray-700 border shadow-3xl"
            }`}
          >
            Food
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => toggleMenu("mobile")} className="text-gray-700">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Index;
