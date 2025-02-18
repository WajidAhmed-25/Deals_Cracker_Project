// import React, { useState, useEffect } from 'react';
// import food from './food.png';
// import clothes from './clothes.png';
// import Homepage from '../HomePage/index';

// const Index = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [countdown, setCountdown] = useState(10);

//   useEffect(() => {
//     const showTimer = setTimeout(() => {
//       setShowModal(true);
//       // Add a small delay before starting the fade-in animation
//       setTimeout(() => setIsVisible(true), 50);
//     }, 100);

//     return () => clearTimeout(showTimer);
//   }, []);

//   useEffect(() => {
//     let timer;
//     if (showModal && countdown > 0) {
//       timer = setInterval(() => {
//         setCountdown((prev) => prev - 1);
//       }, 1000);
//     } else if (countdown === 0) {
//       handleClose();
//     }

//     return () => clearInterval(timer);
//   }, [showModal, countdown]);

//   const handleClose = () => {
//     setIsVisible(false);
//     // Wait for the fade-out animation to complete before removing from DOM
//     setTimeout(() => setShowModal(false), 300);
//   };

//   return (
//     <div className="relative min-h-screen">
//       {/* Background text */}
//       <div className="p-0">
//         <Homepage />
//       </div>

//       {/* Modal Backdrop */}
//       {showModal && (
//         <div
//           className={`fixed inset-0 z-40 flex items-center justify-center bg-black transition-all duration-300 ease-in-out ${
//             isVisible ? 'bg-opacity-50 backdrop-blur-sm' : 'bg-opacity-0'
//           }`}
//           onClick={handleClose}
//         >
//           {/* Modal Content */}
//           <div
//             className={`bg-white rounded-xl p-8 w-auto min-w-[40%] relative transition-all duration-300 ease-in-out shadow-2xl transform ${
//               isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
//             }`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close button */}
//             <button
//               onClick={handleClose}
//               className="absolute text-gray-500 transition-colors duration-200 top-4 right-4 hover:text-gray-700"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>

//             {/* Title */}
//             <h2 className="mb-10 text-[30px] font-semibold tracking-wider text-center fontColor font-sans">
//               Make Your Choice
//             </h2>

//             {/* Modal content */}
//             <div className="space-y-8">
//               {/* Category buttons in a row with "or" */}
//               <div className="flex items-center justify-center mt-4 space-x-16">
//                 <button
//                   onClick={handleClose}
//                   className="flex flex-col items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-ThemeColor to-ThemeColor/70 hover:from-ThemeColor/70 hover:to-ThemeColor hover:scale-110 hover:shadow-xl"
//                 >
//                   <div className="w-16 h-16 p-2 mb-2 bg-white rounded-full">
//                     <img 
//                       src={food} 
//                       alt="Food icon" 
//                       className="object-contain w-full h-full"
//                     />
//                   </div>
//                   Food
//                 </button>

//                 <div className="flex flex-col items-center">
//                   <span className="text-lg font-medium text-gray-500">or</span>
//                   {/* Timer Circle */}
//                   <div className="flex items-center justify-center w-10 h-10 mt-2 text-white rounded-full bg-ThemeColor">
//                     <span className="text-sm font-medium">{countdown}</span>
//                   </div>
//                 </div>

//                 <button
//                   onClick={handleClose}
//                   className="flex flex-col items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-ThemeColor/70 to-ThemeColor hover:from-ThemeColor hover:to-ThemeColor/70 hover:scale-110 hover:shadow-xl"
//                 >
//                   <div className="w-16 h-16 p-2 mb-2 bg-white rounded-full">
//                     <img 
//                       src={clothes} 
//                       alt="Clothes icon" 
//                       className="object-contain w-full h-full"
//                     />
//                   </div>
//                   Clothing
//                 </button>
//               </div>

//               {/* Skip link */}
//               <div className="pt-4 text-right">
//                 <a
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleClose();
//                   }}
//                   className="text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-[#237da0f8] hover:underline hover:underline-offset-4"
//                 >
//                   Skip for now
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Index;


// import React, { useState, useEffect } from 'react';
// import food from './food.png';
// import clothes from './clothes.png';
// import Homepage from '../HomePage/index';
// import Cookies from 'js-cookie'; // Import js-cookie

// const Index = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [countdown, setCountdown] = useState(10);

//   useEffect(() => {
//     const showTimer = setTimeout(() => {
//       setShowModal(true);
//       setTimeout(() => setIsVisible(true), 50);
//     }, 100);

//     return () => clearTimeout(showTimer);
//   }, []);

//   useEffect(() => {
//     let timer;
//     if (showModal && countdown > 0) {
//       timer = setInterval(() => {
//         setCountdown((prev) => prev - 1);
//       }, 1000);
//     } else if (countdown === 0) {
//       handleClose('both'); // Set both if timer ends
//     }

//     return () => clearInterval(timer);
//   }, [showModal, countdown]);

//   const handleCategorySelection = (category) => {
//     // Save selected category in cookie and update immediately
//     Cookies.set('dealscracker-category', category, { expires: 7 });
//     handleClose(category); // Close modal after category selection
//   };

//   const handleClose = (category) => {
//     setIsVisible(false);
//     // Wait for the fade-out animation to complete before removing from DOM
//     setTimeout(() => {
//       setShowModal(false);
//       // If no category was selected (meaning 'both'), save both as value
//       if (!category) {
//         Cookies.set('dealscracker-category', 'both', { expires: 7 });
//       }
//     }, 300);
//   };

//   const handleSkip = (e) => {
//     e.preventDefault();
//     // Save 'both' in cookie if user skips
//     Cookies.set('dealscracker-category', 'both', { expires: 7 });
//     handleClose('both');
//   };

//   return (
//     <div className="relative min-h-screen">
//       {/* Background text */}
//       <div className="p-0">
//         <Homepage />
//       </div>

//       {/* Modal Backdrop */}
//       {showModal && (
//         <div
//           className={`fixed inset-0 z-40 flex items-center justify-center bg-black transition-all duration-300 ease-in-out ${
//             isVisible ? 'bg-opacity-50 backdrop-blur-sm' : 'bg-opacity-0'
//           }`}
//           onClick={() => handleClose('both')} // Default to both if clicked outside
//         >
//           {/* Modal Content */}
//           <div
//             className={`bg-white rounded-xl p-8 w-auto min-w-[40%] relative transition-all duration-300 ease-in-out shadow-2xl transform ${
//               isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
//             }`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close button */}
//             <button
//               onClick={() => handleClose('both')} // Default to both if clicked
//               className="absolute text-gray-500 transition-colors duration-200 top-4 right-4 hover:text-gray-700"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>

//             {/* Title */}
//             <h2 className="mb-10 text-[30px] font-semibold tracking-wider text-center fontColor font-sans">
//               Make Your Choice
//             </h2>

//             {/* Modal content */}
//             <div className="space-y-8">
//               {/* Category buttons in a row with "or" */}
//               <div className="flex items-center justify-center mt-4 space-x-16">
//                 <button
//                   onClick={() => handleCategorySelection('food')} // Save 'food' in cookie
//                   className="flex flex-col items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-ThemeColor to-ThemeColor/70 hover:from-ThemeColor/70 hover:to-ThemeColor hover:scale-110 hover:shadow-xl"
//                 >
//                   <div className="w-16 h-16 p-2 mb-2 bg-white rounded-full">
//                     <img
//                       src={food}
//                       alt="Food icon"
//                       className="object-contain w-full h-full"
//                     />
//                   </div>
//                   Food
//                 </button>

//                 <div className="flex flex-col items-center">
//                   <span className="text-lg font-medium text-gray-500">or</span>
//                   {/* Timer Circle */}
//                   <div className="flex items-center justify-center w-10 h-10 mt-2 text-white rounded-full bg-ThemeColor">
//                     <span className="text-sm font-medium">{countdown}</span>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => handleCategorySelection('clothing')} // Save 'clothing' in cookie
//                   className="flex flex-col items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-ThemeColor/70 to-ThemeColor hover:from-ThemeColor hover:to-ThemeColor/70 hover:scale-110 hover:shadow-xl"
//                 >
//                   <div className="w-16 h-16 p-2 mb-2 bg-white rounded-full">
//                     <img
//                       src={clothes}
//                       alt="Clothes icon"
//                       className="object-contain w-full h-full"
//                     />
//                   </div>
//                   Clothing
//                 </button>
//               </div>

//               {/* Skip link */}
//               <div className="pt-4 text-right">
//                 <a
//                   href="#"
//                   onClick={handleSkip}
//                   className="text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-[#237da0f8] hover:underline hover:underline-offset-4"
//                 >
//                   Skip for now
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Index;



import React, { useState, useEffect } from 'react';
import food from './food.png';
import clothes from './clothes.png';
import Homepage from '../HomePage/index';
import Cookies from 'js-cookie'; // Import js-cookie

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(10);

  // Function to check if 24 hours have passed since last modal display
  const checkIfModalShouldShow = () => {
    const lastShown = Cookies.get('modal-last-shown');
    if (!lastShown) return true; // If there's no record, show the modal
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - parseInt(lastShown);
    return elapsedTime > 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  };

  useEffect(() => {
    // Only show modal if 24 hours have passed since last display
    if (checkIfModalShouldShow()) {
      const showTimer = setTimeout(() => {
        setShowModal(true);
        setTimeout(() => setIsVisible(true), 50);
        // Save the timestamp of when the modal was shown
        Cookies.set('modal-last-shown', new Date().getTime().toString(), { expires: 1 }); // Expires in 1 day
      }, 100);

      return () => clearTimeout(showTimer);
    }
  }, []);

  useEffect(() => {
    let timer;
    if (showModal && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      handleClose('both'); // Set both if timer ends
    }

    return () => clearInterval(timer);
  }, [showModal, countdown]);

  const handleCategorySelection = (category) => {
    // Save selected category in cookie and update immediately
    Cookies.set('dealscracker-category', category, { expires: 7 });
    handleClose(category); // Close modal after category selection
  };

  const handleClose = (category) => {
    // Ensure the cookie is updated to 'both' if no category is passed
    if (!category) {
      Cookies.set('dealscracker-category', 'both', { expires: 7 });
    }

    setIsVisible(false);
    // Wait for the fade-out animation to complete before removing from DOM
    setTimeout(() => {
      setShowModal(false);
      // Refresh the page after closing modal
      window.location.reload();
    }, 300);
  };

  const handleSkip = (e) => {
    e.preventDefault();
    // Save 'both' in cookie if user skips
    Cookies.set('dealscracker-category', 'both', { expires: 7 });
    handleClose('both');
  };

  return (
    <div className="relative min-h-screen">
      {/* Background text */}
      <div className="p-0">
        <Homepage />
      </div>

      {/* Modal Backdrop */}
      {showModal && (
        <div
          className={`fixed inset-0 z-40 flex items-center justify-center bg-black transition-all duration-300 ease-in-out ${
            isVisible ? 'bg-opacity-50 backdrop-blur-sm' : 'bg-opacity-0'
          }`}
        >
          {/* Modal Content */}
          <div
            className={`bg-white rounded-xl p-8 w-auto min-w-[40%] relative transition-all duration-300 ease-in-out shadow-2xl transform ${
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Close button */}
            <button
              onClick={() => handleClose('both')} // Default to both if clicked
              className="absolute text-gray-500 transition-colors duration-200 top-4 right-4 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Title */}
            <h2 className="mb-10 text-[30px] font-semibold tracking-wider text-center fontColor font-sans">
              Make Your Choice
            </h2>

            {/* Modal content */}
            <div className="space-y-8">
              {/* Category buttons in a row with "or" */}
              <div className="flex items-center justify-center mt-4 space-x-16">
                <button
                  onClick={() => handleCategorySelection('food')} // Save 'food' in cookie
                  className="flex flex-col items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-ThemeColor to-ThemeColor/70 hover:from-ThemeColor/70 hover:to-ThemeColor hover:scale-110 hover:shadow-xl"
                >
                  <div className="w-16 h-16 p-2 mb-2 bg-white rounded-full">
                    <img
                      src={food}
                      alt="Food icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                  Food
                </button>

                <div className="flex flex-col items-center">
                  <span className="text-lg font-medium text-gray-500">or</span>
                  {/* Timer Circle */}
                  <div className="flex items-center justify-center w-10 h-10 mt-2 text-white rounded-full bg-ThemeColor">
                    <span className="text-sm font-medium">{countdown}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleCategorySelection('clothing')} // Save 'clothing' in cookie
                  className="flex flex-col items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-ThemeColor/70 to-ThemeColor hover:from-ThemeColor hover:to-ThemeColor/70 hover:scale-110 hover:shadow-xl"
                >
                  <div className="w-16 h-16 p-2 mb-2 bg-white rounded-full">
                    <img
                      src={clothes}
                      alt="Clothes icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                  Clothing
                </button>
              </div>

              {/* Skip link */}
              <div className="pt-4 text-right">
                <a
                  href="#"
                  onClick={handleSkip}
                  className="text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-[#237da0f8] hover:underline hover:underline-offset-4"
                >
                  Skip for now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;

