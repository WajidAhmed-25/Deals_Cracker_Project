import React, { useEffect } from 'react';
import { motion } from 'framer-motion';



// Existing imports

import Slider from './SwipperSliderMain/index';
import BrandSlider from './BrandsSlider/index';
import Categories from './Categories/index'
import DualPlanetsWithImages from '../Animations';
import DealsSlider from './DealsSlider';
import ProductCards from './ProductCards/index';
import CardsShufftler from './CardsShufftler/index';
import WeeklyTopVendors from './MappingCards';
import DeliveryBanner from './BannerDiv';
import OrganicFoodGrid from './MovingCards';
import ProductShowcase from './FourProductsDiv';
import FeaturesSection from './Banners';
import ScrollToTop from '../ScrollArrow';
import Animation from '../Animations/index'
import AOS from 'aos';
import 'aos/dist/aos.css';
import MostWishlistedBrands from './MostWishlistedBrands';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const staggerItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className='relative w-full -z-10'>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={staggerItem}>
          <Slider />
        </motion.div>
      </motion.div>
   
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={staggerItem}>
          <BrandSlider />
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={staggerItem}>
       {/* <Animation/> */}
        </motion.div>
      </motion.div>

      

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={staggerItem}>
          <DealsSlider />
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={staggerItem}>
          <ProductCards />
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={staggerItem}>
          <CardsShufftler />
        </motion.div>
      </motion.div>

      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={staggerItem}>
          <WeeklyTopVendors />
        </motion.div>
      </motion.div> */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={staggerItem}>
          <MostWishlistedBrands />
        </motion.div>
      </motion.div>

      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={staggerItem}>
          <DeliveryBanner />
        </motion.div>
      </motion.div> */}

      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={staggerItem}>
          <OrganicFoodGrid />
        </motion.div>
      </motion.div> */}

      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={staggerItem}>
          <ProductShowcase />
        </motion.div>
      </motion.div> */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={staggerItem}>
          <FeaturesSection />
        </motion.div>
      </motion.div>

      <ScrollToTop />
   
    </div>
  );
};

export default Index;