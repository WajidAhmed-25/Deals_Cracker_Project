import React from "react";

const WishlistPage = ({ onClose }) => {
  return (
    <div className="absolute p-4 z-[9999] -ml-64 bg-white rounded-lg shadow-lg top-24 sm:right-32 w-80 ">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b">
        <h2 className="text-lg font-bold text-[#237da0f8]">Wishlist</h2>
        <button
          className="text-3xl text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          &times;
        </button>
      </div>

      {/* Wishlist Content */}
      <div className="mt-4">
        <p className="text-[#237da0f8]">Your wishlist is empty.</p>
        {/* Add your wishlist items here */}
      </div>
    </div>
  );
};

export default WishlistPage;
