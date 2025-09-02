import React from "react";
import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    className="w-full bg-black py-6 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between font-[Montserrat] text-white text-base"
    style={{ minHeight: "60px" }}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {/* Left: Logo */}
    <div className="flex items-center mb-4 md:mb-0">
      <img src="/Star 1.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10" />
    </div>
    {/* Center: Nav links */}
    <nav className="flex gap-6 md:gap-10 items-center mb-4 md:mb-0">
      <a href="#about" className="hover:text-[#1de9b6] transition">About</a>
      <a href="#projects" className="hover:text-[#1de9b6] transition">Projects</a>
      <a href="#contact" className="hover:text-[#1de9b6] transition">Contact</a>
    </nav>
    {/* Right: Credit */}
    <div className="flex items-center gap-2">
      <span>Made with love</span>
      <span className="text-red-500 text-lg">❤️</span>
      <span>by David</span>
    </div>
  </motion.footer>
);

export default Footer;
