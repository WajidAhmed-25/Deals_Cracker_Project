import React from 'react'

// Components Import //

import Navbar from '../Navbar/index'
import Dropdown from './Dropdowns/index'
import Slider from './SwipperSliderMain/index'
import BrandSlider from './BrandsSlider/index'
import DealsSlider from './DealsSlider'


const index = () => {
  return (
    <div className='bg-white'>
      
<Navbar/>
<Dropdown/>
<Slider/>
<BrandSlider/>
<br/>
<DealsSlider/>



    </div>
  )
}

export default index
