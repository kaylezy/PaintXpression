"use client";

import React from "react";
import Link from "next/link";
import { SiSquarespace } from "react-icons/si";
import { TbSquaresSelected } from "react-icons/tb";
import { PiExcludeSquareBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { SlideUp } from "../../app/animation/animation";

const ServiceCard = [
  {
    id: 1,
    title: "Luxury Facilities",
    description:
      "We provide the best luxury facilities for your home and office",
    icon: <SiSquarespace />,
    link: "/pages/Services",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Luxury Facilities",
    description:
      "We provide the best luxury facilities for your home and office",
    icon: <TbSquaresSelected />,
    link: "/pages/Services",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Luxury Facilities",
    description:
      "We provide the best luxury facilities for your home and office",
    icon: <PiExcludeSquareBold />,
    link: "/pages/Services",
    delay: 0.6,
  },
];
function Services() {
  return (
    <div>
      <div className="container py-20 flex-1">
        <div className="space-y-3 text-center max-w-[450px] mx-auto">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-3xl font-bold font-serif"
          >
            What we provide
          </motion.h1>
          <motion.p
            variants={SlideUp(0.5)}
            initial="initial"
            whileInView={"animate"}
            className="text-gray-500 pb-10"
          >
            Our services are tailored to meet your needs with one-on-one design
            help and hand-picked products
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* card section */}
          {ServiceCard.map((card) => (
            <motion.div
              variants={SlideUp(card.delay)}
              initial="initial"
              whileInView={"animate"}
              key={card.id}
              className="bg-gray-100 p-6 shadow-md space-y-4 hover:bg-black hover:text-white hover:shadow-[7px_7px_0_0_#6c6c6c] duration-300"
            >
              <span className="inline-block text-xl border-[1px] border-black rounded-full p-3">
                {card.icon}
              </span>
              <h1 className="text-2xl font-bold font-serif">{card.title}</h1>
              <p className="text-gray-400 text-xs">{card.description}</p>
              <button className="secondary-btn">
                <Link href={card.link}>Learn More</Link>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
