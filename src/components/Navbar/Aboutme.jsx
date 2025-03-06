import React from "react";
import { motion } from "framer-motion";

const LeftSection = () => {
  return (
    <motion.div
      className="lg:w-3/5 font-['Lato'] space-y-6"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-teal-500 text-lg font-bold mb-2">About Me</h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
          I'm Mbah Atangana David, a Tech Enthusiast from Yaounde, Cameroon
        </h1>
      </motion.div>

      <motion.p
        className="text-gray-600 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        I'm a passionate developer specializing in Flutter and web development.
        My journey in tech is driven by a singular mission: to harness
        technology's power for Africa's advancement.
      </motion.p>

      <motion.p
        className="text-gray-600 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        With extensive experience in coding and software development, I create
        innovative solutions that address real-world challenges. My commitment
        extends beyond coding – I'm actively involved in community initiatives
        and STEM education advocacy, believing in their potential to transform
        lives across Africa.
      </motion.p>

      <motion.div
        className="flex gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <button className="px-6 py-3 bg-[#222d55] text-white rounded-lg  hover:bg-[#222d55] transition-colors">
          Download CV
        </button>
        <button className="px-6 py-3 border-2 border-[#222d55] text-[#222d55] rounded-lg hover:bg-[#222d55] transition-colors">
          Contact Me
        </button>
      </motion.div>
    </motion.div>
  );
};

const RightSection = () => {
  return (
    <motion.div
      className="lg:w-2/5 flex flex-col items-center font-['Lato']"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="relative w-full mb-6"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-[#222d55] rounded-lg transform rotate-3"></div>
        <img
          src="/WhatsApp Image 2025-02-22 at 15.12.37_9d9ddfac.jpg"
          alt="Mbah Atangana David"
          className="relative rounded-lg shadow-lg w-full h-auto object-cover transform -rotate-3 transition-transform hover:rotate-0"
        />
      </motion.div>

      <motion.div
        className="w-full bg-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="space-y-4">
          <div className="flex items-center text-gray-700">
            <svg
              className="w-5 h-5 text-[#222d55] mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="hover:text-[#222d55] transition-colors">
              davidmbah1234@gmail.com
            </span>
          </div>
          <div className="flex items-center text-gray-700">
            <svg
              className="w-5 h-5 text-[#222d55] mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Yaounde, Cameroon</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AboutMe = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto p-8 md:p-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
