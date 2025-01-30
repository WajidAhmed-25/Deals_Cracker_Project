import React, {useState, useEffect} from 'react';
import Filters from './Filters/index';
import ProductGrid from './ProductGrid/index';
import ProductCard from './Products';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Cookies from 'js-cookie';
import FeaturesSection from '../HomePage/Banners';

const ProductPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activeCategory, setActiveCategory] = useState('both');
  const [limit, setLimit] = useState(10);
  
  const localUrl = process.env.REACT_APP_API_URL;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Get category from cookies on initial load
    const category = Cookies.get('dealscracker-category') || 'both';
    setActiveCategory(category);
    fetchProducts(1, category, limit);
  }, [limit]);

  const fetchProducts = async (page = 1, category = activeCategory, perPage = limit) => {
    try {
      const response = await fetch(
        `${localUrl}/clothingAndFood/getAllProducts?category=${category}&page=${page}&limit=${perPage}`
      );
      const data = await response.json();
      setProducts(data.products);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleCookieChange = () => {
      const newCategory = Cookies.get("dealscracker-category") || "both";
      if (newCategory !== activeCategory) {
        setActiveCategory(newCategory);
        fetchProducts(1, newCategory, limit);
        setCurrentPage(1);
      }
    };

    const cookieCheckInterval = setInterval(handleCookieChange, 1000);
    return () => clearInterval(cookieCheckInterval);
  }, [activeCategory, limit]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      fetchProducts(newPage, activeCategory, limit);
    }
  };

  return (
    <div className="px-4 py-2 mx-auto bg-white max-w-8xl">
      <div className="flex flex-row gap-4 p-2">
        <div className="relative flex">
          <aside className={`
            transition-all duration-300 ease-in-out
            ${isSidebarOpen ? 'w-[320px] opacity-100' : 'w-0 opacity-0'}
            overflow-hidden`}
          >
            <div className="w-full h-full p-2.5 rounded-lg bg-white">
              <Filters />
            </div>
          </aside>

          <button
            onClick={toggleSidebar}
            className={`
              absolute top-2 z-10 p-1.5
              bg-[#237da0f8] rounded-full shadow-lg text-white
              hover:bg-gray-100 hover:border-2 border-[#237da0f8] hover:font-semibold hover:text-[#237da0f8] 
              transition-colors
              ${isSidebarOpen ? '-right-3' : '-right-3 translate-x-full'}`}
          >
            {isSidebarOpen ? (
              <ChevronLeft className="w-6 h-6" />
            ) : (
              <ChevronRight className="h-7 w-7" />
            )}
          </button>
        </div>

        <main className={`
          ${isSidebarOpen ? 'w-[79%]' : 'w-[98%] ml-12'}
          p-4 pt-12 shadow-lg rounded-lg`}
        >
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-16 h-16 border-t-4 border-[#237da0f8] border-solid rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
            <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Showing {limit} products per page</span>
                <select
                  value={limit}
                  onChange={(e) => setLimit(Number(e.target.value))}
                  className="p-2 border border-gray-300 rounded-md shadow-sm"
                >
                  <option value={10}>10 per page</option>
                  <option value={50}>50 per page</option>
                  <option value={100}>100 per page</option>
                </select>
              </div>
              <ProductGrid products={products} />
              <div className="flex justify-center mt-8 gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </main>
      </div>
      <FeaturesSection />
    </div>
  );
};

export default ProductPage;