import React, { useState } from "react";
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


  const handleWhatsAppClick = () => {
    const phoneNumber = "03133960313";
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
    setOpenSubmenu(null); // Close submenu on new menu click
  };

  const toggleSubmenu = (submenu) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu);
  };

  return (
    <nav className="bg-white shadow-md">
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
            <div className="absolute left-0 w-56 mt-2 bg-white border rounded-lg shadow-lg z-9999999">
              <ul>
                {[
                  "Vegetables & Fruit",
                  "Beverages",
                  "Meats & Seafood",
                  "Breakfast & Dairy",
                  "Frozen Foods",
                  "Biscuits & Snacks",
                  "Grocery & Staples",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="relative flex items-center justify-between px-4 py-2 text-gray-700 cursor-pointer z-99999 group hover:bg-gray-100"
                    onClick={() => toggleSubmenu(item)}
                  >
                    {item}
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-[#237da0f8]"
                    />
                    {/* Right-Side Submenu */}
                    {openSubmenu === item && (
                      <div className="absolute top-0 w-48 ml-2 bg-white border rounded-lg shadow-lg left-full">
                        <ul>
                          {[
                            "Option 1",
                            "Option 2",
                            "Option 3",
                            "Option 4",
                          ].map((subItem) => (
                            <li
                              key={subItem}
                              className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                              {subItem}
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
          {["Home", "Shop", "Pages", "Vendors", "Blog", "Contact Us"].map(
            (link, index) => (
              <li key={index} className="relative group">
                <button
                  className="font-semibold text-gray-700 hover:text-[#237da0f8]"
                  onClick={() => toggleMenu(link)}
                >
                  {link}{" "}
                  {/* Only show the dropdown arrow if the link is NOT 'Home' */}
                  {link !== "Home" && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="ml-1 text-sm"
                    />
                  )}
                </button>
                {/* Dropdown */}
                {openMenu === link && link !== "Home" && (
                  <div className="absolute left-0 w-48 mt-2 bg-white border rounded-lg shadow-lg">
                    <ul>
                      {["Option 1", "Option 2", "Option 3"].map((subItem) => (
                        <li
                          key={subItem}
                          className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            )
          )}
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
            {["Home", "Shop", "Pages", "Vendors", "Blog", "Contact Us"].map(
              (link, index) => (
                <li key={index}>
                  <button
                    onClick={() => toggleMenu(link)}
                    className="block font-semibold text-gray-700 hover:text-[#237da0f8]"
                  >
                    {link}
                  </button>
                  {/* Submenus for Mobile */}
                  {openMenu === link && (
                    <ul className="mt-2 ml-4 space-y-2">
                      {["Option 1", "Option 2", "Option 3"].map((subItem) => (
                        <li key={subItem} className="text-gray-600">
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Index;
