import React from "react";
import { motion } from "framer-motion";
import CompanySection from "./company";

// Concentric shadow lines background
const ShadowLines = () => (
  <div className="absolute left-1/2 top-0 -translate-x-1/2 z-0 pointer-events-none w-full flex justify-center" style={{ height: "700px" }}>
    <div className="relative" style={{ width: 900, height: 700 }}>
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: "50%",
            top: "0",
            transform: "translateX(-50%)",
            width: 900 - i * 70,
            height: 700 - i * 55,
            borderRadius: "50%",
            boxShadow: `0 0 ${24 + i * 8}px ${8 + i * 8}px rgba(255,255,255,${0.13 - i * 0.01})`,
            border: "1px solid rgba(255,255,255,0.08)",
            opacity: 0.7 - i * 0.06,
            background: "transparent",
            zIndex: i,
          }}
        />
      ))}
    </div>
  </div>
);

const MyHero = () => (
  <section className="relative w-full h-[700px] flex flex-col items-center justify-center bg-black overflow-hidden">
    <ShadowLines />
    <motion.div
      className="relative z-10 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="text-center font-[Montserrat] font-bold text-[2.8rem] md:text-[4.2rem] leading-[1.1] text-gray-100"
        style={{ opacity: 0.92 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Mobile App & Web Developer<br />
      </motion.h1>
      <motion.p
        className="mt-6 text-center text-[1.15rem] md:text-[1.35rem] text-gray-300 max-w-2xl font-[Montserrat] font-medium"
        style={{ opacity: 0.7 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        I'm Mbah David A passionate developer with experience building modern mobile and web applications.<br />
        I love crafting intuitive and engaging digital experiences that make a difference.
      </motion.p>
      <motion.button
        className="mt-12 px-10 py-4 rounded-full bg-[#1de9b6] text-black text-xl font-semibold font-[Montserrat] shadow-lg hover:bg-[#00bfae] transition"
        style={{ boxShadow: "0 4px 32px 0 #1de9b6" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        Get started
      </motion.button>
    </motion.div>
    <CompanySection />
  </section>
);

export default MyHero;

