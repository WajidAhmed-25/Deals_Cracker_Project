import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const InfoCards = () => {
  const cards = [
    {
      icon: <FontAwesomeIcon icon={faLocationDot} />,
      title: "Our Address",
      content: (
        <>
          1230 Maecenas Street Donec Road<br />
          New York, EEUU
        </>
      ),
    },
    {
      icon: <FontAwesomeIcon icon={faPhone} />,
      title: "Contact",
      content: (
        <>
          Mobile: +1 (123) 456-7890<br />
          Mail: tailnext@gmail.com
        </>
      ),
    },
    {
      icon: <FontAwesomeIcon icon={faClock} />,
      title: "Working hours",
      content: (
        <>
          Monday - Friday: 08:00 - 17:00<br />
          Saturday & Sunday: 08:00 - 12:00
        </>
      ),
    },
  ];

  return (
    <div className="py-2 pb-12 text-white bg-white ">
      <div className="container grid gap-8 px-4 mx-auto md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex items-start p-6 bg-white rounded-lg shadow-xl"
          >
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-2xl text-white rounded-lg ThemeColor">
              {card.icon}
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold tracking-wide fontColor">{card.title}</h3>
              <p className="mt-2 font-normal text-md text-black/70">{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;