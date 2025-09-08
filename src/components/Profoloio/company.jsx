import React from "react";
import { motion } from "framer-motion";

// Example logo src paths (replace with your actual logo paths)
const logos = [
  "/WhatsApp Image 2024-05-03 at 08.23.05_3d4d58eb.jpg",
  "/WhatsApp Image 2024-06-20 at 09.41.56_fd756803.jpg",
  "/Plan de travail 3@4x-100 copy 2.jpeg",
  "/myyiel.png",
  "/WhatsApp Image 2024-05-03 at 08.23.05_3d4d58eb.jpg",
  "/WhatsApp Image 2024-06-20 at 09.41.56_fd756803.jpg",
  "/Plan de travail 3@4x-100 copy 2.jpeg",
  "/myyiel.png",

];

const marqueeVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 18,
        ease: "linear",
      },
    },
  },
};

const CompanySection = () => (
  <section className="w-full py-12 flex flex-col items-center bg-black">
    <h2 className="text-center text-lg md:text-xl font-medium text-gray-300 mb-8 font-[Montserrat]">
      Companies I've worked with 
    </h2>
    <div className="relative w-full flex justify-center items-center overflow-x-hidden" style={{ height: 90 }}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#18191C] via-transparent to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#18191C] via-transparent to-transparent pointer-events-none z-10" />
      {/* Marquee logos */}
      <motion.div
        className="flex gap-16 items-center"
        style={{ minWidth: "1800px" }}
        variants={marqueeVariants}
        animate="animate"
      >
        {[...logos, ...logos].map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`Company logo ${idx + 1}`}
            className={`h-16 w-auto object-contain grayscale opacity-80 hover:opacity-100 transition
              ${idx === 0 || idx === logos.length - 1 ? "bg-[#23242A] px-6 py-2 rounded-xl" : ""}`}
            style={{
              filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.18))",
              borderRadius: idx === 0 || idx === logos.length - 1 ? "12px" : "0",
              background: idx === 0 || idx === logos.length - 1 ? "#23242A" : "transparent",
            }}
          />
        ))}
      </motion.div>
    </div>
  </section>
);

export default CompanySection;
