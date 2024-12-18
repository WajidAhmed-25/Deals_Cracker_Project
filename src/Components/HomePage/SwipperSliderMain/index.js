

// ____________________________________________________________________________________________________________________________________


import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './swiper.css';


const Index = () => {

  
const imageUrls = [
  "https://angeethipk.com//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1662114496-Header-02.jpg%3Fver%3D10&w=3840&q=90",
  "https://angeethipk.com//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1662114503-Header-03.jpg%3Fver%3D10&w=3840&q=90",

  "https://www.delizia.pk//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1673694005-1.png%3Fver%3D10&w=3840&q=90",
  "https://www.delizia.pk//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1673694012-2-(1).png%3Fver%3D10&w=3840&q=90",

  "https://foodsinn.co//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1728387899-Foods-Inn-Banner-(1)Artboard-1-copy-2.jpg%3Fver%3D10&w=3840&q=90",
  "https://foodsinn.co//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1728387909-Foods-Inn-Banner-(1)Artboard-1.jpg%3Fver%3D10&w=3840&q=90",
  "https://hot-nspicy.com//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1693313374-2.jpg%3Fver%3D10&w=3840&q=90",
  "https://hot-nspicy.com//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1693313378-3.jpg%3Fver%3D10&w=3840&q=90",  
  "https://www.kaybees.com.pk//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1729153473-Header-1.jpg%3Fver%3D10&w=3840&q=90",
  "https://www.kaybees.com.pk//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1729150539-Header-2.jpg%3Fver%3D10&w=3840&q=90",
  "https://www.kaybees.com.pk//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1729153477-Header-3.jpg%3Fver%3D10&w=3840&q=90",
 
  "https://www.pizzapoint.com.pk//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1728632547-Main-Banner-2.jpg%3Fver%3D10&w=3840&q=90",
  "https://www.pizzapoint.com.pk//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1731072975-Pizza-Point.jpg%3Fver%3D10&w=3840&q=90",
  "https://jhr.tooso.pk//_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1727443445-20-BANNER.jpg%3Fver%3D10&w=3840&q=90"
];

const [randomizedImages, setRandomizedImages] = useState([]);

useEffect(() => {
  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  setRandomizedImages(shuffleArray(imageUrls));
}, []);

  return (
    <div className="w-full">
      <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {randomizedImages.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <img 
            src={imageUrl} 
            alt={`Slide ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  </div>
  )
}

export default Index;



