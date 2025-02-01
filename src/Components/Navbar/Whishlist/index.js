// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import toast, { Toaster } from "react-hot-toast";
// import { Loader } from "lucide-react";

// const localUrl = process.env.REACT_APP_API_URL;

// const WishlistPage = ({ onClose }) => {
//   const [wishlist, setWishlist] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchWishlist();
//   }, []);

//   const fetchWishlist = async () => {
//     const token = Cookies.get("dealscracker-token");

//     if (!token) {
//       toast.error("First login to view wishlist");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.get(`${localUrl}/wishlist/getUserWishlist`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setWishlist(response.data.wishlist || []);
//     } catch (error) {
//       console.error("Error fetching wishlist:", error);
//       toast.error("Failed to fetch wishlist");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="absolute p-4 z-[9999] -ml-64 bg-white rounded-lg shadow-lg top-24 sm:right-32 w-80">
//       <Toaster />
      
//       {/* Header */}
//       <div className="flex items-center justify-between pb-2 border-b">
//         <h2 className="text-lg font-bold text-[#237da0f8]">Wishlist</h2>
//         <button className="text-3xl text-gray-500 hover:text-red-500" onClick={onClose}>
//           &times;
//         </button>
//       </div>

//       {/* Wishlist Content */}
//       <div className="mt-4 space-y-4">
//         {loading ? (
//           <div className="flex justify-center items-center py-6">
//             <Loader className="animate-spin text-[#237da0f8] w-6 h-6" />
//           </div>
//         ) : wishlist.length === 0 ? (
//           <p className="text-[#237da0f8] text-center">Your wishlist is empty.</p>
//         ) : (
//           wishlist.map((item) => (
//             <div key={item._id} className="flex items-center space-x-4 border-b pb-3">
//               {/* Product Image */}
//               <img
//                 src={item.image_url}
//                 alt={item.title}
//                 className="w-14 h-14 object-cover rounded-lg"
//               />

//               {/* Product Details */}
//               <div className="flex flex-col flex-1">
//                 <a
//                   href={item.product_url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-sm font-semibold text-[#237da0f8] hover:underline"
//                 >
//                   {item.title}
//                 </a>
//                 <span className="text-xs text-gray-500">{item.type}</span>
//                 <span className="text-xs text-gray-500">
//                   {new Date(item.createdAt).toLocaleString()}
//                 </span>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default WishlistPage;


import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";
import { Loader, Trash2 } from "lucide-react";

const localUrl = process.env.REACT_APP_API_URL;

const WishlistPage = ({ onClose }) => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    const token = Cookies.get("dealscracker-token");

    if (!token) {
      toast.error("First login to view wishlist");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${localUrl}/wishlist/getUserWishlist`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setWishlist(response.data.wishlist || []);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      toast.error("Failed to fetch wishlist");
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveWishlistItem = async (productId) => {
    const token = Cookies.get("dealscracker-token");

    if (!token) {
      toast.error("First login to manage wishlist");
      return;
    }

    try {
      await axios.put(
        `${localUrl}/wishlist/toggleWishlist?productId=${productId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success("Removed from wishlist");
      fetchWishlist(); // Refresh wishlist after deletion
    } catch (error) {
      console.error("Error removing wishlist item:", error);
      toast.error("Failed to remove item from wishlist");
    }
  };

  return (
    <div className="absolute p-4 z-[9999] -ml-64 bg-white rounded-lg shadow-lg top-24 sm:right-32 w-80">
      <Toaster />
      
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b">
        <h2 className="text-lg font-bold text-[#237da0f8]">Wishlist</h2>
        <button className="text-3xl text-gray-500 hover:text-red-500" onClick={onClose}>
          &times;
        </button>
      </div>

      {/* Wishlist Content */}
      <div className="mt-4 space-y-4">
        {loading ? (
          <div className="flex justify-center items-center py-6">
            <Loader className="animate-spin text-[#237da0f8] w-6 h-6" />
          </div>
        ) : wishlist.length === 0 ? (
          <p className="text-[#237da0f8] text-center">Your wishlist is empty.</p>
        ) : (
          wishlist.map((item) => (
            <div key={item._id} className="flex items-center space-x-4 border-b pb-3">
              {/* Product Image */}
              <img
                src={item.image_url}
                alt={item.title}
                className="w-14 h-14 object-cover rounded-lg"
              />

              {/* Product Details */}
              <div className="flex flex-col flex-1">
                <a
                  href={item.product_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#237da0f8] hover:underline"
                >
                  {item.title}
                </a>
                <span className="text-xs text-gray-500">{item.type}</span>
                <span className="text-xs text-gray-500">
                  {new Date(item.createdAt).toLocaleString()}
                </span>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => handleRemoveWishlistItem(item.productId)}
                className="text-red-500 hover:text-red-700"
                title="Remove from Wishlist"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
