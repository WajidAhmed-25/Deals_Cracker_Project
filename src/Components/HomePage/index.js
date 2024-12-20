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



const Index = () => {


  return (
    <div className='bg-white'>

<Navbar/>  
<Dropdown/>    
      

<Slider/>
<BrandSlider/>

<DealsSlider/>
<ProductCards/>

<CardsShufftler/>
<WeeklyTopVendors/>
<DeliveryBanner/>
<OrganicFoodGrid/>
<ProductShowcase/>

<FeaturesSection/>

<Footer/>
    </div>
  )
}

export default Index
