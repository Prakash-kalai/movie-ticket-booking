import React from "react";
import { FaDownload, FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#100c0e] to-[#310823] text-white px-4 py-16">
      <div className="max-w-7xl mx-auto grid md:flex gap-12 items-center justify-around">

        {/* Left Section - Image + Text */}
        <div className="space-y-6 w-full md:w-1/2">
          <div className="relative">
            <img
              src="/assets/Screenshot.png" // Replace with your screenshot
              alt="Movie Ticket Booking"
              className="rounded-2xl w-full shadow-lg"
            />
            
          </div>

          <div className="">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Prakash K <br />
              <span className="text-yellow-300">Full Stack Developer</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab id consequatur deleniti vitae dolorem impedit soluta laboriosam, consequuntur saepe harum debitis ut incidunt, optio sint dolore quibusdam ipsum. Neque magnam, repudiandae nisi porro aliquid aliquam temporibus illum similique, ipsam reiciendis eius illo deleniti saepe dolorum inventore atque labore accusamus? Dolores.
            </p>
            <div className="flex gap-4">
              <img src="/icons/react.png" alt="React" className="w-8 h-8" />
              <img src="/icons/mongodb.png" alt="MongoDB" className="w-8 h-8" />
              <img src="/icons/node.png" alt="Node.js" className="w-8 h-8" />
              <img src="/icons/stripe.png" alt="Stripe" className="w-8 h-8" />
              <img src="/icons/cloudinary.png" alt="Cloudinary" className="w-8 h-8" />
              <img src="/icons/redux.png" alt="Redux" className="w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Right Section - Button Links */}
        <div className="space-y-4 w-100">
          <a href="#" className=" flex items-center justify-between px-6 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition">
            <span className="text-white">About</span>
            <FaDownload className="text-white" />
          </a>
          <a href="#" className="flex items-center justify-between px-6 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition">
            <span className="text-white">Projects</span>
            <FaCode className="text-white" />
          </a>
          <a href="#" className="flex items-center justify-between px-6 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition">
            <span className="text-white">Skills</span>
            <FaExternalLinkAlt className="text-white" />
          </a>
          <a href="#" className="flex items-center justify-between px-6 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition">
            <span className="text-white">F</span>
            <FiFigma className="text-white" />
          </a>
          <a href="#" className="flex items-center justify-between px-6 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition">
            <span className="text-white">Contacts</span>
            <FaYoutube className="text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
