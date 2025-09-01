import React from "react";
import { motion } from "framer-motion";

// List all tech logo filenames found in your public folder
const techLogos = [
  "/gfgfg.png",
  "/figma.png",
  "/ions/c++.svg",
  "/ions/css.png",
  "/ions/flutter.png",
  "/ions/git.png",
  "/ions/html.svg",
  "/ions/Js.svg",
  "/ions/kotlin.png",
  "/ions/mongodb.png",
  "/ions/mysql.png",
  "/ions/nodejs.svg",
  "/ions/python.png",
  "/ions/Tailwincss.png",
  "/ions/tpesrpriy.png",
  // Add more as needed, use exact filenames from public folder
];

const About = () => (
  <motion.section
    className="w-full flex flex-col items-center pt-20 pb-8 bg-black font-[Montserrat]"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {/* Star icon + ABOUT ME */}
    <div className="flex items-center gap-2 mb-8 outline-none">
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1de9b6]">
        <svg width="18" height="18" fill="none">
          <circle cx="9" cy="9" r="8" stroke="#18191C" strokeWidth="2"/>
          <path d="M9 4v5l3 2" stroke="#18191C" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </span>
      <span className="text-[#1de9b6] font-bold text-base tracking-wide">ABOUT ME</span>
    </div>
    {/* Main text */}
    <div className="max-w-3xl text-center">
      <h1 className="text-[1.5rem] md:text-[2rem] font-normal text-gray-100 leading-tight mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
        Hi! I'm Mbah David, <span className="font-normal text-gray-100">a software engineer with a career</span>
      </h1>
      <h2 className="text-[1.5rem] md:text-[2rem] font-normal text-white leading-tight mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
        spanning over 2 years in the digital industry,
      </h2>
      <h3 className="text-[1.5rem] md:text-[2rem] font-normal text-gray-400 leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
        creating intuitive and engaging digital experiences that<br />
        meet user's needs and business goals
      </h3>
    </div>
    {/* Tech Stack heading */}
    <div className="mt-10 mb-4 text-[#1de9b6] font-bold text-lg tracking-wide font-[Montserrat]">
      Tech Stack
    </div>
    {/* Tech logos row under main text */}
    <div className="flex flex-wrap justify-center gap-8">
      {techLogos.map((logo, idx) => (
        <img
          key={idx}
          src={logo}
          alt={`Tech logo ${idx + 1}`}
          className="h-12 w-12 object-contain rounded-lg bg-[#23242A] p-2 shadow"
          style={{ background: "#23242A" }}
        />
      ))}
    </div>
  </motion.section>
);

export default About;
