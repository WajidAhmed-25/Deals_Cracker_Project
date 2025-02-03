import React,{useEffect} from "react";

import Projects from "./projects/index";
import Work from "./work/index";
import Team from "./team/index";

export default function MainPage(){

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

return(

<div className="">

<Projects/>

{/* <section class="bg-ThemeColor text-white text-lg py-12 px-4">
        <h2 class="text-3xl font-bold text-center">Our Vision</h2>
        <p class="mt-6 text-center max-w-3xl mx-auto tracking-wide ">
          Healthcare anytime, anywhere. We aim to revolutionize the healthcare industry by making quality healthcare accessible to everyone.
        </p>
</section> */}


<section className="bg-ThemeColor text-white text-lg py-12 px-4">
  <h2 className="text-3xl font-bold text-center">Our Vision</h2>
  <p className="mt-6 text-center max-w-3xl mx-auto tracking-wide">
    Bringing the best deals to your fingertips. Our goal is to revolutionize the shopping experience by providing real-time discounts and promotions from top local brands in Pakistan, ensuring you never miss a great offer.
  </p>
</section>


<Work/>

{/* <section class="bg-ThemeColor text-white text-lg py-12 px-4">
        <h2 class="text-3xl font-bold text-center">Deal Crackers</h2>
        <p class="mt-6 text-center max-w-3xl mx-auto tracking-wide">
          Healthcare anytime, anywhere. We aim to revolutionize the healthcare industry by making quality healthcare accessible to everyone.
        </p>
</section> */}

<section className="bg-ThemeColor text-white text-lg py-12 px-4">
  <h2 className="text-3xl font-bold text-center">Deal Crackers</h2>
  <p className="mt-6 text-center max-w-3xl mx-auto tracking-wide">
    Unlock the best deals and promotions in real-time. At <b>Deals Cracker</b>, we connect you with exclusive discounts from top local brands in Pakistan, ensuring you get the best value for your money.
  </p>
</section>


<Team/>


</div>


)
}