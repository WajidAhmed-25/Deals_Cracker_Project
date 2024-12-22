import React from "react";

import Projects from "./projects/index";
import Work from "./work/index";
import Team from "./team/index";

export default function MainPage(){

return(

<div className="">

<Projects/>

<section class="bg-ThemeColor text-white text-lg py-12 px-4">
        <h2 class="text-3xl font-bold text-center">Our Vision</h2>
        <p class="mt-6 text-center max-w-3xl mx-auto tracking-wide ">
          Healthcare anytime, anywhere. We aim to revolutionize the healthcare industry by making quality healthcare accessible to everyone.
        </p>
</section>

<Work/>

<section class="bg-ThemeColor text-white text-lg py-12 px-4">
        <h2 class="text-3xl font-bold text-center">Deal Crackers</h2>
        <p class="mt-6 text-center max-w-3xl mx-auto tracking-wide">
          Healthcare anytime, anywhere. We aim to revolutionize the healthcare industry by making quality healthcare accessible to everyone.
        </p>
</section>


<Team/>


</div>


)
}