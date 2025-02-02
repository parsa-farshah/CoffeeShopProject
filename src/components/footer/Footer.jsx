import React from "react";
import { FaMountainCity } from "react-icons/fa6";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full bg-amber-100 py-8">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid grid-cols-4 p-8 gap-4"
      >
        {/* Coffee Cafe */}
        <div>
          <h1 className="playwrite text-sm  md:text-4xl text-amber-800">
            Coffee Cafe
          </h1>
          <p className="mt-8 text-sm md:text-xl text-amber-900/80 font-bebas">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ab!
            Lorem ipsum dolor sit amet.
          </p>
          <button className="bg-amber-900 text-white hidden md:flex  md:p-3 rounded-full mt-5 cursor-pointer hover:bg-amber-800 hover:scale-105 duration-300">
            Visit Our Youtube Channel
          </button>
          <button className="bg-amber-900 text-white md:hidden px-6  py-3 rounded-xl mt-3 cursor-pointer hover:bg-amber-800 hover:scale-105 duration-300">
            Visit
          </button>
        </div>
        {/* Footer links  */}
        <div>
          <h1 className="text-sm md:text-4xl text-amber-900/80 font-bebas hover:text-amber-950/80 duration-300 cursor-pointer">
            Footer Links
          </h1>
          <ul className="mt-5 text-lg md:text-2xl text-amber-900/80 font-bebas">
            <li className="hover:text-amber-950/90 duration-300 cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="mt-1 hover:text-amber-950/90 duration-300 cursor-pointer">
              <a href="#">About</a>
            </li>
            <li className="mt-1 hover:text-amber-950/90 duration-300 cursor-pointer">
              <a href="#">Contacts</a>
            </li>
            <li className="mt-1 hover:text-amber-950/90 duration-300 cursor-pointer">
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <h1 className="text-sm md:text-4xl text-amber-900/80 font-bebas hover:text-amber-950/80 duration-300 cursor-pointer">
            Quick Links
          </h1>
          <ul className="mt-5 text-lg md:text-2xl text-amber-900/80 font-bebas">
            <li className="hover:text-amber-950/90 duration-300 cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="mt-1 hover:text-amber-950/90 duration-300 cursor-pointer">
              <a href="#">About</a>
            </li>
            <li className="mt-1 hover:text-amber-950/90 duration-300 cursor-pointer">
              <a href="#">Contacts</a>
            </li>
            <li className="mt-1 hover:text-amber-950/90 duration-300 cursor-pointer">
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        {/* Address */}
        <div>
          <h1 className="text-sm md:text-4xl text-amber-900/80 font-bebas hover:text-amber-950/80 duration-300 cursor-pointer">
            Address
          </h1>
          <ul className="mt-5 text-xs md:text-2xl text-amber-900/80 font-bebas">
            <li className="hover:text-amber-950/90 duration-300 cursor-pointer">
              <a className="flex gap-1" href="#">
                <FaMountainCity />
                Tehran Iran
              </a>
            </li>
            <li className="mt-1 hover:text-amber-950/90 duration-300 cursor-pointer">
              <a className="flex gap-1" href="#">
                <MdOutlinePhonelinkRing />
                09372440469
              </a>
            </li>
            <li className="mt-2 md:mt-4 hover:text-amber-950/90 duration-300 cursor-pointer">
              <a className="flex gap-4" href="#">
                <FiInstagram />
                <FaTelegram />
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
