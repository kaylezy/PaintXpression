"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlideUp } from "../../app/animation/animation";

function Hero() {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[500px]">
          {/* Text section */}
          <div className="flex flex-col justify-center gap-5 text-center md:text-left pt-6 md:pt-0">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-3xl font-bold uppercase font-serif"
            >
              Paint Xpression and Interiors
            </motion.h1>
            <motion.p
              variants={SlideUp(0.5)}
              initial="initial"
              animate="animate"
              className="text-sm text-gray-500"
            >
              Bring your dream design to life with one-on-one design help &
              handpicked products tailored to your style, space and budget with
              our experience interior and exterior designer{" "}
            </motion.p>

            <div className="space-x-4">
              <motion.button
                variants={SlideUp(0.8)}
                initial="initial"
                animate="animate"
                className="secondary-btn bg-black text-white shadow-[5px_5px_0_0_#6c6c6c]"
              >
                Get Started
              </motion.button>
              <motion.button
                variants={SlideUp(1.1)}
                initial="initial"
                animate="animate"
                className="secondary-btn"
              >
                Learn More
              </motion.button>
            </div>
          </div>
          {/* Image section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col justify-center items-center pt-10 md:pt-0"
          >
            <Image
              src="/image-7.jpg"
              alt="Paint Xpression"
              width={200}
              height={200}
              className="h-[400px] w-[500px] md:ml-20 rounded-lg "
              priority
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero;
