import React from 'react';


import clothes_center from './images/Clothing/cloth_center-modified.png'
import clothes_alkaram from './images/Clothing/alkaram_studio.png'
import clothes_dhanak from './images/Clothing/dhanak.png';
import clothes_j from './images/Clothing/J(junaid_jamshed).png';
import clothes_khaddi from './images/Clothing/khaddi.png';
import clothes_outfitters from './images/Clothing/outfitters.png';
import clothes_saya from './images/Clothing/saya.png';
import clothes_zeen from './images/Clothing/zeen.png';



import food_center from './images/Food/food_center.png';
import food_angeethi from './images/Food/angeethi.png';
import food_delizia from './images/Food/delizia.png';
import food_foodsinn from './images/Food/foodsinn.png';
import food_ginsoy from './images/Food/ginsoy.png';
import food_hotnspicy from './images/Food/hotnspicy.png';
import food_kfc from './images/Food/kababjees_fried_chicken.png';
import food_karachibroast from './images/Food/karachi_broast.png';
import food_kaybees from './images/Food/kaybees.png';
import food_pp from './images/Food/pizza_point.png';
import food_tooso from './images/Food/tosso.png';
import food_uk from './images/Food/united_king.png';







const RotatingIconsCircle = ({ icons, centerImage, label, categoryName, textClass, hasStroke }) => {
  return (
    <div>
      <div className="relative flex items-center justify-center w-96 h-96">
        {/* Rotating container for all icons */}
        <div className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
          {icons.map((icon, index) => {
            const degree = (360 / icons.length) * index;
            return (
              <div
                key={icon.label}
                className="absolute flex items-center justify-center w-16 h-16 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${degree}deg) translate(140px) rotate(-${degree}deg)`,
                }}
              >
                <div
                  className={`w-full h-full rounded-full ${icon.color} flex items-center justify-center border-[#237da0f8] p-[1px]`}
                >
                  <img
                    src={icon.imageUrl}
                    alt={icon.label}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Center logo - stays static */}
        <div className="absolute inset-0 z-10 flex items-center justify-center w-40 h-40 m-auto overflow-hidden bg-white rounded-full shadow-lg">
          <div className="w-full h-full overflow-hidden rounded-full">
            <img
              src={centerImage}
              alt={`${label} Center Logo`}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
 
      <div className='pt-8 mb-6 text-center'>
        <p 
          className={textClass}
          style={hasStroke ? { WebkitTextStroke: '2px #237da0f8' } : {}}
        > 
          {categoryName}
        </p>
      </div>
   </div>
  );
};




const DualRotatingCircles = () => {
  // First circle data
  const firstCircleIcons = [
    { color: 'bg-white', label: 'Vimeo', imageUrl:clothes_alkaram  },
    { color: 'bg-white', label: 'Adobe', imageUrl:  clothes_dhanak},
    { color: 'bg-white', label: 'Reddit', imageUrl: clothes_j },
    { color: 'bg-white', label: 'Salesforce', imageUrl: clothes_khaddi },
    { color: 'bg-white', label: 'Patreon', imageUrl: clothes_outfitters },
    { color: 'bg-white', label: 'Facebook', imageUrl: clothes_saya },
    { color: 'bg-white', label: 'YouTube', imageUrl: clothes_zeen},
  ];



  // Second circle data
  const secondCircleIcons = [
    { color: 'bg-white', label: 'Spotify', imageUrl: food_angeethi },
    { color: 'bg-white', label: 'Snapchat', imageUrl:food_delizia },
    { color: 'bg-white', label: 'Discord', imageUrl: food_foodsinn },
    // { color: 'bg-white', label: 'Twitch', imageUrl: food_ginsoy },
    // { color: 'bg-white', label: 'Pinterest', imageUrl: food_hotnspicy },
    // { color: 'bg-white', label: 'Twitter', imageUrl: food_kfc },
    { color: 'bg-white', label: 'Instagram', imageUrl: food_karachibroast },
    // { color: 'bg-white', label: 'Instagram', imageUrl: food_kaybees },
    { color: 'bg-white', label: 'Instagram', imageUrl: food_tooso },
    { color: 'bg-white', label: 'Instagram', imageUrl: food_pp },
    { color: 'bg-white', label: 'Instagram', imageUrl: food_uk },
  ];

  return (
    <div className="flex flex-row items-center justify-center gap-32 mt-64">
      <RotatingIconsCircle 
        icons={secondCircleIcons}
        centerImage={food_center}
        label="First"
        categoryName="FOOD"
        textClass="text-[#237da0f8] text-7xl font-black tracking-wide"
        hasStroke={false}
      />
      <p className="text-5xl font-bold text-transparent stroke-2 bg-clip-text stroke-[#237da0f8]" style={{ WebkitTextStroke: '2px #237da0f8' }}>
        {/* OR */}
      </p>
      <RotatingIconsCircle 
        icons={firstCircleIcons}
        centerImage={clothes_center}
        label="Second"
        categoryName="CLOTHING"
        textClass="font-bold text-transparent stroke-2 text-7xl bg-clip-text stroke-[#237da0f8]"
        hasStroke={true}
      />
    </div>
  );
};

export default DualRotatingCircles;