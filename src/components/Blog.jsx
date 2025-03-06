import React from "react";
import { motion } from "framer-motion";

const WorkExperience = () => {
  // Work experience data
  const experiences = [
    {
      id: 1,
      company: "Yeil",
      position: "Frontend Developer",
      dateRange: "OCT 16, 2024 - PRESENT",
      description:
        "As a Frontend developer, I craft sleek web Apps, solve UI/UX challenges, and implement features that delight users. Intergrating Resful backend api with frontend",
      icon: "/Plan de travail 3@4x-100 copy 2.jpeg",
    },
    {
      id: 2,
      company: "Vtc International Cameroon",
      position: "Full Stack | Mobile Dev",
      dateRange: "Sep 12, 2023 - Feb 14, 2025",
      description:
        "Develop and Deploy web apps, and Mobile apps work with react,node.js ,flutter ,firebase and also intergrated restfull Api",
      icon: "/WhatsApp Image 2024-05-03 at 08.23.05_3d4d58eb.jpg",
    },
    {
      id: 3,
      company: "CITs",
      position: "Mobile Developer",
      dateRange: "MAY 3, 2024",
      description:
        "Participated in The regitional Hackton and built Innovative solution",
      icon: "/WhatsApp Image 2024-06-20 at 09.41.56_fd756803.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="py-12 px-4 max-w-6xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-12 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            className="flex border-l-2 border-gray-300 pl-6 pb-8 relative hover:border-blue-500 transition-colors duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute -left-4 top-0"
              whileHover={{ scale: 1.1 }}
            >
              <div className="bg-white p-2 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <img
                  src={exp.icon}
                  alt={`${exp.company} icon`}
                  className="w-20 h-20 object-contain rounded-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/icons/default-company.png";
                  }}
                />
              </div>
            </motion.div>

            <div className="ml-6 pt-2 px-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-1 px-2">
                {exp.company}
              </h3>
              <h4 className="text-lg font-semibold text-[#222d55] mb-2 px-4">
                {exp.position}
              </h4>
              <p className="text-sm text-gray-500 mb-3 font-medium px-4">
                {exp.dateRange}
              </p>
              <p className="text-gray-700 leading-relaxed backdrop-blur-sm bg-white/50 p-4 rounded-lg shadow-sm">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
