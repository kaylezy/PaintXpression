"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../app/animation/animation";

function Brand() {
  return (
    <div className="container py-10">
      <div className="flex flex-wrap justify-center gap-4 md:-ml-40">
        <motion.div
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView={"animate"}
          className="md:p-0 p-4 "
        >
          <Image
            src="/brands/Berger-paint-Logo.png"
            alt="Paint Xpression"
            width={200}
            height={100}
            className="h-[50px] w-[150px] md:ml-20 rounded-lg "
            priority
          />
        </motion.div>
        <motion.div
          variants={SlideLeft(0.4)}
          initial="initial"
          whileInView={"animate"}
          className="md:p-0 p-4"
        >
          <Image
            src="/brands/Dulux-Logo.png"
            alt="Paint Xpression"
            width={200}
            height={100}
            className="h-[50px] w-[150px] md:ml-20 rounded-lg "
            priority
          />
        </motion.div>
        <motion.div
          variants={SlideLeft(0.6)}
          initial="initial"
          whileInView={"animate"}
          className="md:p-0 p-4"
        >
          <Image
            src="/brands/rivedil.png"
            alt="Paint Xpression"
            width={200}
            height={100}
            className="h-[50px] w-[150px] md:ml-20 rounded-lg "
            priority
          />
        </motion.div>
        <motion.div
          variants={SlideLeft(0.8)}
          initial="initial"
          whileInView={"animate"}
          className="md:p-0 p-4"
        >
          <Image
            src="/brands/plascon.png"
            alt="Paint Xpression"
            width={200}
            height={100}
            className="h-[50px] w-[150px] md:ml-20 rounded-lg "
            priority
          />
        </motion.div>
        <motion.div
          variants={SlideLeft(1.1)}
          initial="initial"
          whileInView={"animate"}
          className="md:p-0 p-4"
        >
          <Image
            src="/brands/revano.jpeg"
            alt="Paint Xpression"
            width={200}
            height={100}
            className="h-[50px] w-[150px] md:ml-20 rounded-lg "
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Brand;
