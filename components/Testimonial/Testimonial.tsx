"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../app/animation/animation";

const TestimonialData = [
  {
    id: 1,
    name: "John Doe",
    designation: "Designer",
    image: "/testimonial-image/man1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Jane Dowen",
    designation: "Developer",
    image: "/testimonial-image/man2.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.4,
  },
  {
    id: 3,
    name: "Mack Johnson",
    designation: "Product Manager",
    image: "/testimonial-image/man3.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.6,
  },
];

function Testimonial() {
  return (
    <div className="py-14">
      <div className="space-y-2 text-center max-w-[520px] mx-auto mb-8">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView={"animate"}
          className="text-4xl font-bold font-serif"
        >
          Words from our Customers
        </motion.h1>
        <motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView={"animate"}
          className="text-gray-500 text-sm max-w-[350px] mx-auto mb-8"
        >
          What our customers had to say concerning our product and services
        </motion.p>
      </div>
      {/* testimonial card */}
      <div className="bg-black p-12">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-10">
          {TestimonialData.map((testimonial) => {
            return (
              <motion.div
                variants={SlideLeft(testimonial.delay)}
                initial="initial"
                whileInView="animate"
                key={testimonial.id}
                className="border-[1px] border-gray-500 p-5 text-white group hover:bg-white duration-300"
              >
                <div className="flex flex-row items-center gap-5 ">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h1 className="text-sm font-bold group-hover:text-black">
                      {testimonial.name}
                    </h1>
                    <p className="text-gray-400 text-xs group-hover:text-black">
                      {testimonial.designation}
                    </p>
                    <div className="mt-2">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <div className="mt-5 border-t-2 border-gray-500/40 pt-5">
                  <p className="text-gray-300 text-sm group-hover:text-black duration-300">
                    {testimonial.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
          ;
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
