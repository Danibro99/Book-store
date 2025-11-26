import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Foooter() {
  return (
    <footer className="bg-[#0d1721] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ABOUT US */}
        <div>
          <h2 className="font-bold text-lg mb-4 tracking-wide">ABOUT US</h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            We are a modern online bookstore dedicated to making reading accessible, affordable, and enjoyable for everyone. Our mission is to bring readers closer to the stories, knowledge, and inspiration they love. From timeless classics to the latest bestsellers, we offer a curated selection designed to suit every reader's taste.
          </p>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h2 className="font-bold text-lg mb-4 tracking-wide">NEWS LETTER</h2>
          <p className="text-gray-300 mb-4 text-sm">
            Stay updated with our latest trends
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Email ID"
              className="w-full p-3 rounded-l-md outline-none text-black bg-white"
            />
            <button className="bg-yellow-500 px-4 flex items-center justify-center rounded-r-md">
              <FaArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* FOLLOW US */}
        <div>
          <h2 className="font-bold text-lg mb-4 tracking-wide">FOLLOW US</h2>
          <p className="text-gray-300 mb-4 text-sm">Let us be social</p>

          <div className="flex gap-4 text-xl">
            <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
            <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-yellow-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        Copyright © 2023 All rights reserved |
        This website is made with <span className="text-pink-500">❤</span> By Dani
      </div>
    </footer>
  );
}
