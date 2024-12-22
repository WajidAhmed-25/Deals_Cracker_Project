import React from "react";

export default function About_Project_Div(){

return(

<div>

<div className="items-center max-w-screen-xl sm:flex ml-60">
      <div className="p-10 sm:w-1/2">
        <div className="object-center text-center image">
          <img src="https://i.imgur.com/WbQnbas.png" alt="About Us" />
        </div>
      </div>
      <div className="p-5 sm:w-1/2">
        <div className="text">
          <span className="text-gray-700 uppercase border-b-2 border-[#237da0f8]">
            About us
          </span>
          <h2 className="my-4 text-3xl font-bold text-black sm:text-4xl">
            About <span className="text-[#237da0f8]">Our Company</span>
          </h2>
          <p className="text-[#237da0f8] text-lg tracking-wider mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            commodi doloremque, fugiat illum magni minus nisi nulla numquam
            obcaecati placeat quia, repellat tempore voluptatum.
          </p>
        </div>
      </div>
    </div>

</div>




)
}