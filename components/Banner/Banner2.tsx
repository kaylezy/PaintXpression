"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlideUp } from "@/app/animation/animation";

function Banner2() {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 py-14">
          {/* Text section */}
          <div className="space-y-5 flex justify-center flex-col">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView={"animate"}
              className="text-3xl font-bold max-w-[400px] font-serif"
            >
              Simple way to make stylish living room
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView={"animate"}
              className="text-gray-500 text-lg text-center md:text-left leading-7"
            >
              Discover the simple way to make a stylish living room with our new
              collection of furniture. Our furniture is designed to make your
              home look beautiful. We have a wide range of furniture that will
              suit your style and budget. Our furniture is made from
              high-quality materials and is built to last. We have a team of
              experts who will help you choose the perfect furniture for your
              home. So why wait? Visit our store today and start making your
              living room stylish.
            </motion.p>
            <motion.div
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView={"animate"}
              className="flex gap-10"
            >
              <div className="max-w-[100px] space-y-2">
                <p className="text-2xl font-bold font-serif">5</p>
                <p className="text-gray-500 text-sm">Years of Experience</p>
              </div>
              <div className="max-w-[100px] space-y-2">
                <p className="text-2xl font-bold font-serif">100</p>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>
              <div className="max-w-[100px] space-y-2">
                <p className="text-2xl font-bold font-serif">10</p>
                <p className="text-gray-500 text-sm">Awards Gained</p>
              </div>
            </motion.div>
            <motion.div
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView={"animate"}
            >
              <button className="primary-btn bg-black text-white shadow-[#6c6c6c]">
                Contact Us
              </button>
            </motion.div>
          </div>

          {/* Image section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col "
          >
            <Image
              src="/image-3.jpg"
              alt="Paint Xpression"
              width={200}
              height={200}
              className="h-[400px] w-[500px] rounded-lg lg:ml-16"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
