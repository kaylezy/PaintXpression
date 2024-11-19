import React from "react";
import Link from "next/link";
import { SiSquarespace } from "react-icons/si";
import { TbSquaresSelected } from "react-icons/tb";
import { PiExcludeSquareBold } from "react-icons/pi";

const ServiceCard = [
  {
    id: 1,
    title: "Luxury Facilities",
    description:
      "We provide the best luxury facilities for your home and office",
    icon: <SiSquarespace />,
    link: "/pages/Services",
  },
  {
    id: 2,
    title: "Luxury Facilities",
    description:
      "We provide the best luxury facilities for your home and office",
    icon: <TbSquaresSelected />,
    link: "/pages/Services",
  },
  {
    id: 3,
    title: "Luxury Facilities",
    description:
      "We provide the best luxury facilities for your home and office",
    icon: <PiExcludeSquareBold />,
    link: "/pages/Services",
  },
];
function Services() {
  return (
    <div className="flex-1">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* card section */}
          {ServiceCard.map((card) => (
            <div
              key={card.id}
              className="bg-gray-100 p-4 rounded-lg shadow-md space-y-4"
            >
              <span className="inline-block text-xl border-[1px] border-black rounded-full p-3">
                {card.icon}
              </span>
              <h1 className="text-2xl font-bold">{card.title}</h1>
              <p className="text-gray-500 text-xs">{card.description}</p>
              <button className="secondary-btn">
                <Link href={card.link}>Learn More</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
