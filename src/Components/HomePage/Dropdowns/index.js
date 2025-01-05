import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronRight,
  faChevronDown,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";



const Index = () => {





  const [openMenu, setOpenMenu] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  const handleWhatsAppClick = () => {
    const phoneNumber = "+923133960313";
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
    setOpenSubmenu(null);
  };

  const hasSubmenu = (link) => {
    return mainLinks[link]?.submenu && Object.keys(mainLinks[link].submenu).length > 0;
  };
  
  const toggleSubmenu = (submenu) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu);
  };

  // Menu data structure with routes
  const categories = {
    "Vegetables & Fruit": {
      path: "/categories/vegetables-fruit",
      submenu: {
        "Option 1": "/categories/vegetables-fruit/option1",
        "Option 2": "/categories/vegetables-fruit/option2",
        "Option 3": "/categories/vegetables-fruit/option3",
        "Option 4": "/categories/vegetables-fruit/option4",
      },
    },
    "Beverages": {
      path: "/categories/beverages",
      submenu: {
        "Option 1": "/categories/beverages/option1",
        "Option 2": "/categories/beverages/option2",
        "Option 3": "/categories/beverages/option3",
        "Option 4": "/categories/beverages/option4",
      },
    },
    "Meats & Seafood": {
      path: "/categories/meats-seafood",
      submenu: {
        "Option 1": "/categories/meats-seafood/option1",
        "Option 2": "/categories/meats-seafood/option2",
        "Option 3": "/categories/meats-seafood/option3",
        "Option 4": "/categories/meats-seafood/option4",
      },
    },
    "Breakfast & Dairy": {
      path: "/categories/breakfast-dairy",
      submenu: {
        "Option 1": "/categories/breakfast-dairy/option1",
        "Option 2": "/categories/breakfast-dairy/option2",
        "Option 3": "/categories/breakfast-dairy/option3",
        "Option 4": "/categories/breakfast-dairy/option4",
      },
    },
    "Frozen Foods": {
      path: "/categories/frozen-foods",
      submenu: {
        "Option 1": "/categories/frozen-foods/option1",
        "Option 2": "/categories/frozen-foods/option2",
        "Option 3": "/categories/frozen-foods/option3",
        "Option 4": "/categories/frozen-foods/option4",
      },
    },
    "Biscuits & Snacks": {
      path: "/categories/biscuits-snacks",
      submenu: {
        "Option 1": "/categories/biscuits-snacks/option1",
        "Option 2": "/categories/biscuits-snacks/option2",
        "Option 3": "/categories/biscuits-snacks/option3",
        "Option 4": "/categories/biscuits-snacks/option4",
      },
    },
    "Grocery & Staples": {
      path: "/categories/grocery-staples",
      submenu: {
        "Option 1": "/categories/grocery-staples/option1",
        "Option 2": "/categories/grocery-staples/option2",
        "Option 3": "/categories/grocery-staples/option3",
        "Option 4": "/categories/grocery-staples/option4",
      },
    },
  };

  const mainLinks = {
    "Home": "/homepage",
    "Shop": {
      path: "/shop",
      submenu: {
        "Option 1": "/shop/option1",
        "Option 2": "/shop/option2",
        "Option 3": "/shop/option3",
      },
    },
    "Pages": {
      path: "/pages",
      submenu: {
        "Option 1": "/pages/option1",
        "Option 2": "/pages/option2",
        "Option 3": "/pages/option3",
      },
    },
    "Vendors": {
      path: "/vendors",
      submenu: {
        "Option 1": "/vendors/option1",
        "Option 2": "/vendors/option2",
        "Option 3": "/vendors/option3",
      },
    },
    "About": "/about",
    "Contact": "/contact",
  };

  return (
    <nav className="bg-white border-b-2 shadow-3xl" >
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        {/* All Categories */}
        <div className="relative group">
          <button
            className="flex items-center font-semibold text-gray-700 hover:text-[#237da0f8]"
            onClick={() => toggleMenu("categories")}
          >
            <FontAwesomeIcon icon={faBars} className="mr-2" /> All Categories
          </button>
          {/* Dropdown */}
          {openMenu === "categories" && (
            <div className="absolute left-0 w-56 mt-2 bg-white border rounded-lg shadow-lg z-[9999]">
              <ul>
                {Object.entries(categories).map(([category, { path, submenu }]) => (
                  <li
                    key={category}
                    className="relative flex items-center justify-between px-4 py-2 text-gray-700 cursor-pointer z-99999 group hover:bg-gray-100"
                    onClick={() => toggleSubmenu(category)}
                  >
                    <Link to={path} className="flex-grow">
                      {category}
                    </Link>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-[#237da0f8]"
                    />
                    {/* Right-Side Submenu */}
                    {openSubmenu === category && (
                      <div className="absolute top-0 w-48 ml-2 bg-white border rounded-lg shadow-lg left-full">
                        <ul>
                          {Object.entries(submenu).map(([subItem, subPath]) => (
                            <li
                              key={subPath}
                              className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                              <Link to={subPath}>{subItem}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Main Links */}
        <ul className="items-center hidden space-x-6 md:flex">
          {Object.entries(mainLinks).map(([link, value]) => (
            <li key={link} className="relative group">
              <button
                className="font-semibold text-gray-700 hover:text-[#237da0f8]"
                onClick={() => toggleMenu(link)}
              >
                <Link to={typeof value === 'string' ? value : value.path}>
                  {link}
                </Link>
                {/* {link !== "Home" && link !== "About" && link !== "Contact" && (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="ml-1 text-sm"
                  />
                )} */}
                {hasSubmenu(link) && (
  <FontAwesomeIcon
    icon={faChevronDown}
    className="ml-1 text-sm"
  />
)}
              </button>
              {/* Dropdown */}
              {openMenu === link && link !== "Home" && link !== "About" && link !== "Contact" && (
                <div className="absolute left-0 w-48 mt-2 bg-white border rounded-lg shadow-lg z-[99900000]">
                  <ul>
                    {Object.entries(value.submenu).map(([subItem, subPath]) => (
                      <li
                        key={subPath}
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <Link to={subPath}>{subItem}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Section */}
        <div className="hidden px-4 py-2 text-white rounded-full md:block">
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center w-full px-4 py-2 text-white rounded-full bg-[#237da0f8] hover:bg-[#1b5c80] transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
            01-234 567 890
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => toggleMenu("mobile")} className="text-gray-700">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu === "mobile" && (
        <div className="bg-white border-t border-gray-200 md:hidden">
          <ul className="px-6 py-4 space-y-2">
            {Object.entries(mainLinks).map(([link, value]) => (
              <li key={link}>
                <Link
                  to={typeof value === 'string' ? value : value.path}
                  className="block font-semibold text-gray-700 hover:text-[#237da0f8]"
                  onClick={() => toggleMenu(link)}
                >
                  {link}
                </Link>
                {/* Submenus for Mobile */}
                {openMenu === link && typeof value !== 'string' && (
                  <ul className="mt-2 ml-4 space-y-2">
                    {Object.entries(value.submenu).map(([subItem, subPath]) => (
                      <li key={subPath} className="text-gray-600">
                        <Link to={subPath}>{subItem}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Index;