"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center justify-between p-5 ">
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{duration: 0.5}}
        className={`fixed top-0 right-0 h-full text-xl bg-gray-900 bg-opacity-75 z-50 flex flex-col items-center lg:pt-0 pt-10 ${
          isOpen ? "block" : "hidden"
        } lg:relative lg:inset-auto lg:bg-transparent lg:flex lg:items-center lg:w-auto w-52`}
      >
        <ul className="flex flex-col lg:flex-row lg:gap-20 gap-2 font-semibold text-gray-200 sm:text-black md:text-black lg:text-black ">
          <li onClick={closeMenu}>
            <Link
              href="/pages/About"
              className=" p-2  hover:shadow-[5px_5px_0_0]"
            >
              About
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link
              href="/pages/Services"
              className=" p-2  hover:shadow-[5px_5px_0_0]"
            >
              Services
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link
              href="/pages/Projects"
              className=" p-2  hover:shadow-[5px_5px_0_0]"
            >
              Projects
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link
              href="/pages/Contact"
              className=" p-2  hover:shadow-[5px_5px_0_0]"
            >
              Contact Us
            </Link>
          </li>
          <li className="lg:hidden" onClick={closeMenu}>
            <button className="text-white focus:outline-none mt-4">
              Close
            </button>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;


