import React from "react";
import { motion } from "framer-motion";

const ContactMe = () => (
  <motion.section
    className="w-full flex flex-col items-center justify-center py-24 bg-black font-[Montserrat]"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {/* Star icon + CONTACTME */}
    <div className="flex items-center gap-2 mb-8">
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1de9b6]">
        <svg width="18" height="18" fill="none">
          <circle cx="9" cy="9" r="8" stroke="#18191C" strokeWidth="2"/>
          <path d="M9 4v5l3 2" stroke="#18191C" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </span>
      <span className="text-[#1de9b6] font-bold text-base tracking-wide">CONTACTME</span>
    </div>
    {/* Headline */}
    <h1 className="text-center text-white text-[2.2rem] md:text-[2.8rem] font-medium leading-tight mb-10 font-[Montserrat]">
      Let's create something<br />amazing together
    </h1>
    {/* Book a call button */}
    <button
      className="bg-[#1de9b6] text-black text-lg font-semibold font-[Montserrat] px-10 py-4 rounded-full shadow-lg hover:bg-[#00bfae] transition"
      onClick={() => window.open("https://wa.me/652892462", "_blank")}
    >
      Book a call
    </button>
  </motion.section>
);

export default ContactMe;
