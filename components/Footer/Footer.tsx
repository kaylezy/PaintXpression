"use client";

import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { SlideUp } from "@/app/animation/animation";

function Footer() {
  return (
    <footer>
      <div className="container py-11 bg-gray-900 text-white">
        <motion.div
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView={"animate"}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* company info section */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={120}
                height={40}
              />
            </div>
            <p>Agric Bus-stop, Ikorodo</p>
            <p> &copy; 2024 All right reserved</p>
          </div>
          {/* footer link */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">About Us</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Designer</a>
                </li>
                <li>
                  <a href="#">Craftmanship</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Supports</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">FAQ&apos;s</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Care Guide</a>
                </li>
                <li>
                  <a href="#">Guaranty</a>
                </li>
              </ul>
            </div>
          </div>

          {/* contact section  */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact Us</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <span>
                  <FaPhone />
                </span>
                <a href="#">+234 705 887 5911</a>
              </li>
              <li className="flex items-center space-x-3">
                <span>
                  <MdEmail />
                </span>
                <a href="mailto:paintxpression.com">Email Us</a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
