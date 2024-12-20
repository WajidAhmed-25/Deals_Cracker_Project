import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Show button when user scrolls down 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`fixed bottom-8 right-8 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="relative w-12 h-12 text-white rounded-full shadow-lg ThemeColor hover:ThemeColor hover:scale-125 hover:transition-all hover:duration-300 focus:outline-none focus:ring-2 focus:ring-[#237da0f8] focus:ring-offset-2"
      >
        <div className="absolute inset-0">
          <svg className="w-12 h-12 transform -rotate-90">
        
            <circle
              className="text-white"
              strokeWidth="2"
              strokeDasharray={125.6}
              strokeDashoffset={125.6 - (125.6 * scrollProgress) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="20"
              cx="24"
              cy="24"
            />
          </svg>
        </div>
        <ArrowUp className="absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
      </button>
    </div>
  );
};

export default ScrollToTop;