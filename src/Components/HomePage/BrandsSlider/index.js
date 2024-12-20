import React, { useEffect } from 'react';

import dhanak from './Feature_Products/dhanak.png';
import alkaram from './Feature_Products/ak2.png';
import zeen from './Feature_Products/zeen2.png';
import saya from './Feature_Products/saya.png';
import khaddi from './Feature_Products/khaddi2.png';
import zelbury from './Feature_Products/zell.png';
import outfitters from './Feature_Products/out2.png';
import junaid from './Feature_Products/junaid2.png';
import sana from './Feature_Products/sanasafinaz.png';
import agha from './Feature_Products/agha2.png';
import noor from './Feature_Products/noor2.png';




const Index = () => {
  // Take only the first 8 logos for initial display
  const logos = [
    { image: junaid },
    { image: sana },
    { image: agha },
    { image: noor },
    { image: dhanak },
    { image: alkaram },
    { image: zeen },
    { image: saya },
    { image: khaddi },
    { image: zelbury },
    { image: outfitters }
  ];

  // Get first 8 logos
  const displayLogos = logos.slice(0, 8);


  return (
    <div className="relative w-full mt-12 overflow-hidden">
      {/* Outer container with fixed width */}
      <div className="flex w-full">
        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of 8 logos */}
          <div className="flex">
            {displayLogos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="w-[12.5%] px-6 flex-shrink-0"
              >
                <div className="relative mx-auto rounded-full w-36 h-36 ThemeColor">
                  <div className="absolute w-[95%] h-[95%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex items-center justify-center">
                    <img
                      src={logo.image}
                      alt={`Logo ${index + 1}`}
                      className="object-contain w-[90%] h-[90%]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop - exact copy */}
          <div className="flex">
            {displayLogos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="w-[12.5%] px-2 flex-shrink-0"
              >
                <div className="relative mx-auto rounded-full w-36 h-36 ThemeColor">
                  <div className="absolute w-[95%] h-[95%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex items-center justify-center">
                    <img
                      src={logo.image}
                      alt={`Logo ${index + 1}`}
                      className="object-contain w-[90%] h-[90%]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;