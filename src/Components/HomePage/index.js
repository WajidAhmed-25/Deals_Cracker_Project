import React,{useEffect} from 'react'


// Navbar , Footer , Dropdown

import Navbar from '../Navbar/index'
import Dropdown from './Dropdowns/index'
import Footer from '../Footer/index'

// Components Import //


import Slider from './SwipperSliderMain/index'
import BrandSlider from './BrandsSlider/index'
import DealsSlider from './DealsSlider'
import ProductCards from './ProductCards/index'
import CardsShufftler from './CardsShufftler/index'
import WeeklyTopVendors from './MappingCards'
import DeliveryBanner from './BannerDiv'
import OrganicFoodGrid from './MovingCards'
import ProductShowcase from './FourProductsDiv'
import FeaturesSection from './Banners'


// ----- Scroll Top ----//

import ScrollToTop from '../ScrollArrow'




// ---------- AOS Animation ---------------//

import AOS from 'aos';
import 'aos/dist/aos.css';



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


  return (
    <div className='bg-white'>

{/* <Navbar/>  
<Dropdown/>    
      

<Slider/> */}

  <Navbar />

<div data-aos="zoom-in">
  <Dropdown />
</div>
<div data-aos="fade-up">
  <Slider />
</div>

<BrandSlider/>



<DealsSlider/>
<ProductCards/>
<CardsShufftler/>
<WeeklyTopVendors/>
<DeliveryBanner/>
<OrganicFoodGrid/>
<ProductShowcase/>
<FeaturesSection/>


<ScrollToTop/>
<Footer/>
    </div>
  )
}

export default Index
