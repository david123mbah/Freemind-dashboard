import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      name: "Carepulse",
      tagline: "AI-Powered Healthcare Assistant",
      description:
        "An intelligent healthcare chatbot that provides 24/7 medical assistance, symptom checking, and healthcare recommendations. Built with advanced NLP and machine learning algorithms to understand and respond to user health queries accurately.",
      technologies: ["React", "Python", "TensorFlow", "OpenAI API"],
      image: "/image copy 2.png",
      url: "https://carepulse-ai.vercel.app/",
      status: "Live",
    },
    {
      id: 2,
      name: "Quickbite Mobile",
      tagline: "Seamless Food Delivery Experience",
      description:
        "A comprehensive food delivery platform that connects users with local restaurants. Features include real-time order tracking, scheduled deliveries, and a reward system for loyal customers. The app processes thousands of orders daily.",
      technologies: ["flutter ", "Firebase"],
      image: "/images/flavrr-logo.png",
      url: "https://drive.google.com/drive/folders/1F6QsVelrcH7C19Rb_G2Tgvgx1Z7_nWjB?usp=drive_link",

      status: "Live",
    },
    {
      id: 3,
      name: "MOVIN",
      tagline: "HOUSE finder website",
      description:
        "A comprehensive collection of custom houses users can upload search and find houses",
      technologies: ["Flutter", "Dart", "Firebase"],
      image: "/Screenshot (677).png",
      url: "https://github.com/david123mbah/HouseFinding-website.git",
      status: "Open Source",
    },
    {
      id: 4,
      name: "Freemind AI Mental App",
      tagline: "Complete Mental Wellness Platform",
      description:
        "An all-in-one mental wellness application featuring guided meditation, AI therapy chatbot, mood tracking, and professional counselor appointments. Includes a unique poetry and music therapy module.",
      technologies: ["Flutter", "Firebase",],
      image: "/Screenshot (1536).png",
      url: "/projects/flutter-open-uis",
      status: "Beta",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <div className="slick-next" />,
    prevArrow: <div className="slick-prev" />,
    className: "custom-slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 px-4 bg-gray-100">
      <style jsx>{`
        .custom-slider .slick-prev,
        .custom-slider .slick-next {
          width: 60px; /* Increased from 40px */
          height: 60px; /* Increased from 40px */
          z-index: 10;
        }

        .custom-slider .slick-prev {
          left: -70px; /* Adjusted position for larger button */
        }

        .custom-slider .slick-next {
          right: -70px; /* Adjusted position for larger button */
        }

        .custom-slider .slick-prev:before,
        .custom-slider .slick-next:before {
          font-size: 60px; /* Increased from 40px */
          color: #3b82f6;
          opacity: 0.8;
          font-weight: bold;
        }

        .custom-slider .slick-prev:hover:before,
        .custom-slider .slick-next:hover:before {
          opacity: 1;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-gray-800 mb-6"
        >
          Featured Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 mb-12 max-w-3xl"
        >
          Showcasing my journey through technology and innovation.
        </motion.p>

        <Slider {...settings} className="project-carousel">
          {projectsList.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-4">
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/default-image.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-800 truncate">
                        {project.name}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === "Live"
                            ? "bg-green-100 text-green-600"
                            : project.status === "Beta"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-gray-600 mb-2">
                      {project.tagline}
                    </p>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300 hover:underline"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
