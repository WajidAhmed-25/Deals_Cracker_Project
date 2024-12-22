import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DualPlanetsWithImages = () => {
  const imagesShape1 = [
    "https://tse4.mm.bing.net/th?id=OIP.PikUdeXdPP5f3FAwKZYtlQHaJQ&pid=Api&P=0&h=220",
    "https://tse4.mm.bing.net/th?id=OIP.PikUdeXdPP5f3FAwKZYtlQHaJQ&pid=Api&P=0&h=220",
    "https://tse4.mm.bing.net/th?id=OIP.PikUdeXdPP5f3FAwKZYtlQHaJQ&pid=Api&P=0&h=220",
    "https://tse4.mm.bing.net/th?id=OIP.PikUdeXdPP5f3FAwKZYtlQHaJQ&pid=Api&P=0&h=220",
    "https://via.placeholder.com/100x100?text=5",
  ];

  const imagesShape2 = [
    "https://via.placeholder.com/100x100?text=A",
    "https://tse4.mm.bing.net/th?id=OIP.PikUdeXdPP5f3FAwKZYtlQHaJQ&pid=Api&P=0&h=220",
    "https://tse4.mm.bing.net/th?id=OIP.PikUdeXdPP5f3FAwKZYtlQHaJQ&pid=Api&P=0&h=220",
    "https://tse4.mm.bing.net/th?id=OIP.PikUdeXdPP5f3FAwKZYtlQHaJQ&pid=Api&P=0&h=220",
    "https://tse4.mm.bing.net/th?id=OIP.PikUdeXdPP5f3FAwKZYtlQHaJQ&pid=Api&P=0&h=220",
  ];

  const [currentPattern, setCurrentPattern] = useState(0);

  const animationPatterns = [
    { entry: { x: -200, y: 0 }, exit: { x: 200, y: 0 } },
    { entry: { x: 200, y: 0 }, exit: { x: -200, y: 0 } },
    { entry: { x: 0, y: -200 }, exit: { x: 0, y: 200 } },
    { entry: { x: 0, y: 200 }, exit: { x: 0, y: -200 } },
    { entry: { x: -200, y: -200 }, exit: { x: 200, y: 200 } },
    { entry: { x: 200, y: -200 }, exit: { x: -200, y: 200 } },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPattern((prev) => (prev + 1) % animationPatterns.length);
    }, Math.max(imagesShape1.length, imagesShape2.length) * 500);

    return () => clearInterval(interval);
  }, [imagesShape1.length, imagesShape2.length]);

  const Trapezoid = ({ images, offset = 0, shapeIndex = 0, heading = "" }) => {
    const shapes = [
      "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
      "polygon(23% 100%, 0 0, 100% 0, 75% 100%)",
    ];

    return (
      <div className="relative mx-8">
        <div className="absolute inset-0">
          {images.map((imageUrl, index) => (
            <motion.div
              key={`${index}-${currentPattern}-${offset}`}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              initial={{
                x: animationPatterns[currentPattern].entry.x,
                y: animationPatterns[currentPattern].entry.y,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: [
                  animationPatterns[currentPattern].entry.x,
                  0,
                  animationPatterns[currentPattern].exit.x,
                ],
                y: [
                  animationPatterns[currentPattern].entry.y,
                  0,
                  animationPatterns[currentPattern].exit.y,
                ],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.8],
              }}
              transition={{
                duration: 3,
                delay: index * 0.5 + offset,
                repeat: Infinity,
                repeatDelay: images.length * 0.5,
                times: [0, 0.5, 1],
                ease: "easeInOut",
              }}
            >
              <img
                src={imageUrl}
                alt={`Animation ${index}`}
                className="object-cover w-20 h-20 rounded-full"
              />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10">
          <div className="absolute inset-0 -m-20">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
          </div>

          <motion.div
            className="shadow-xl w-80 h-80 bg-gradient-to-r from-[#529ebc] to-ThemeColor"
            style={{
              clipPath: shapes[shapeIndex],
            }}
            initial={{ scale: 0.9 }}
            animate={{
              scale: [1, 0.95, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />


          <h2 className="absolute text-4xl font-bold text-center text-white transform -translate-x-1/2 bottom-32 left-1/2">
            {heading}
          </h2>

   


          
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden bg-white">

<div className='w-full mb-24 text-xl text-center '>
        <p className='text-4xl font-bold fontColor'>Select your Desired Choice</p>
       </div>
        
      <div className="flex flex-row items-center justify-center gap-20">
        <Trapezoid
          images={imagesShape1}
          offset={0}
          shapeIndex={0}
          heading="Food"
        />
        <Trapezoid
          images={imagesShape2}
          offset={1}
          shapeIndex={1}
          heading="Clothing"
        />
      </div>
    </div>
  );
};

export default DualPlanetsWithImages;