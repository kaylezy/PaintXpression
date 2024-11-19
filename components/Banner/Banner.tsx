"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlideUp } from "@/app/animation/animation";

function Banner() {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col "
          >
            <Image
              src="/image-2.jpg"
              alt="Paint Xpression"
              width={200}
              height={200}
              className="h-[400px] w-[500px] rounded-lg "
              priority
            />
          </motion.div>
          {/* Text section */}
          <div className="space-y-5 flex justify-center flex-col">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView={"animate"}
              className="text-3xl font-bold max-w-[400px] font-serif"
            >
              We believe that a team makes any project better
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView={"animate"}
              className="text-gray-500 text-lg text-center md:text-left leading-7"
            >
              We are a team of creative and experienced professionals who are
              passionate about design and dedicated to delivering the best
              results for our clients. Our team is made up of talented
              designers, architects, and project managers who work together to
              create beautiful spaces that are both functional and stylish. We
              believe that collaboration is key to success, and we work closely
              with our clients to ensure that their vision is brought to life.
              Whether you are looking to renovate your home, office, or
              commercial space, we have the expertise and creativity to make
              your project a success. Let us help you bring your dream design to
              life!
            </motion.p>
            <motion.div
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView={"animate"}
            >
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                className="primary-btn bg-black text-white shadow-[#6c6c6c]"
              >
                Discover Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
