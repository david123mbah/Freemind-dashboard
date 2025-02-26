import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Homepage = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
  }, []);

  // Social links data
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      name: "X",
      url: "https://twitter.com",
      icon: <FaTwitter className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: <FaInstagram className="w-5 h-5" />,
    },
    {
      name: "Gmail",
      url: "mailto:example@gmail.com",
      icon: <FaEnvelope className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
        {/* Left content section */}
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h1
            className={`text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 transition-all duration-1000 ${
              animate
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            Flutter, Full stack web developer,
            <br />
            Community Lead, Tech Enthusiast
          </h1>

          <p
            className={`text-lg text-gray-600 dark:text-gray-300 max-w-xl transition-all duration-1000 delay-300 ${
              animate
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            I'm a tech enthusiast skilled in Flutter and web development,
            passionate about leveraging technology for Africa's development and
            promoting STEM.
          </p>

          {/* Social links */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${
              animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label={link.name}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right isometric animation */}
        <div className="w-full md:w-1/2 h-96 md:h-[500px] relative">
          <IsometricAnimation animate={animate} />
        </div>
      </div>
    </div>
  );
};

// Isometric animation component
const IsometricAnimation = ({ animate }) => {
  // Define colors for different theme modes
  const colors = {
    primaryLight: "#3B82F6", // blue-500
    primaryDark: "#60A5FA", // blue-400
    secondaryLight: "#10B981", // emerald-500
    secondaryDark: "#34D399", // emerald-400
    accentLight: "#8B5CF6", // violet-500
    accentDark: "#A78BFA", // violet-400
    outlineLight: "#6B7280", // gray-500
    outlineDark: "#9CA3AF", // gray-400
  };

  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Define the isometric grid angle (30° rotated) */}
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Group for the isometric scene */}
      <g transform="translate(200, 150)">
        {/* Base platform */}
        <g
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <path
            d="M-80,-40 L0,-80 L80,-40 L0,0 Z"
            className="fill-blue-100 dark:fill-blue-900 stroke-blue-300 dark:stroke-blue-700"
            style={{ filter: "url(#shadow)" }}
          />
        </g>

        {/* Laptop */}
        <g
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(30px)",
            transition:
              "opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s",
          }}
        >
          {/* Laptop base */}
          <path
            d="M-30,-45 L10,-65 L50,-45 L10,-25 Z"
            className="fill-gray-300 dark:fill-gray-700 stroke-gray-400 dark:stroke-gray-600"
          />

          {/* Laptop screen */}
          <path
            d="M10,-65 L10,-95 L40,-80 L40,-50 Z"
            className="fill-gray-200 dark:fill-gray-800 stroke-gray-400 dark:stroke-gray-600"
          />

          {/* Screen content */}
          <path
            d="M15,-90 L15,-70 L35,-60 L35,-80 Z"
            className="fill-blue-400 dark:fill-blue-600 stroke-blue-500 dark:stroke-blue-500"
          />
        </g>

        {/* Mobile device */}
        <g
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(40px)",
            transition:
              "opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s",
          }}
        >
          <path
            d="M-40,-50 L-20,-60 L-20,-30 L-40,-20 Z"
            className="fill-gray-200 dark:fill-gray-800 stroke-gray-400 dark:stroke-gray-600"
          />
          <path
            d="M-37,-47 L-23,-54 L-23,-35 L-37,-28 Z"
            className="fill-emerald-400 dark:fill-emerald-600 stroke-emerald-500 dark:stroke-emerald-500"
          />
        </g>

        {/* Coffee cup */}
        <g
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(20px)",
            transition:
              "opacity 0.8s ease-out 0.9s, transform 0.8s ease-out 0.9s",
          }}
        >
          <path
            d="M20,-40 L30,-45 L40,-40 L40,-30 L30,-25 L20,-30 Z"
            className="fill-purple-200 dark:fill-purple-900 stroke-purple-400 dark:stroke-purple-700"
          />
          <path
            d="M25,-42 L35,-38 Z"
            className="stroke-purple-500 dark:stroke-purple-400"
            strokeWidth="1"
          />
          <path
            d="M40,-35 L45,-37 L45,-30 L40,-28"
            className="fill-purple-300 dark:fill-purple-800 stroke-purple-400 dark:stroke-purple-700"
          />
        </g>

        {/* Code blocks floating */}
        <g>
          {/* Multiple code blocks with staggered animations */}
          {[
            { x: -60, y: -90, width: 30, height: 20, delay: 1.2 },
            { x: 35, y: -100, width: 25, height: 15, delay: 1.5 },
            { x: -20, y: -110, width: 20, height: 10, delay: 1.8 },
          ].map((block, index) => (
            <g
              key={index}
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(15px)",
                transition: `opacity 0.8s ease-out ${block.delay}s, transform 0.8s ease-out ${block.delay}s`,
              }}
            >
              <path
                d={`M${block.x},${block.y} L${block.x + block.width},${
                  block.y - block.width / 2
                } L${block.x + block.width},${
                  block.y - block.width / 2 + block.height
                } L${block.x},${block.y + block.height} Z`}
                className="fill-gray-100 dark:fill-gray-800 stroke-gray-300 dark:stroke-gray-700"
              />

              {/* Code lines */}
              <path
                d={`M${block.x + 5},${block.y - 2} L${
                  block.x + block.width - 8
                },${block.y - 2 - (block.width - 8) / 2}`}
                className="stroke-blue-400 dark:stroke-blue-500"
                strokeWidth="1"
              />
              <path
                d={`M${block.x + 5},${block.y + 5} L${
                  block.x + block.width - 12
                },${block.y + 5 - (block.width - 12) / 2}`}
                className="stroke-emerald-400 dark:stroke-emerald-500"
                strokeWidth="1"
              />
              <path
                d={`M${block.x + 5},${block.y + 12} L${
                  block.x + block.width - 15
                },${block.y + 12 - (block.width - 15) / 2}`}
                className="stroke-purple-400 dark:stroke-purple-500"
                strokeWidth="1"
              />
            </g>
          ))}
        </g>

        {/* Floating particles/icons */}
        {[
          {
            cx: -50,
            cy: -70,
            r: 4,
            delay: 2.1,
            color: "fill-blue-500 dark:fill-blue-400",
          },
          {
            cx: 60,
            cy: -60,
            r: 3,
            delay: 2.3,
            color: "fill-emerald-500 dark:fill-emerald-400",
          },
          {
            cx: -10,
            cy: -90,
            r: 3.5,
            delay: 2.5,
            color: "fill-purple-500 dark:fill-purple-400",
          },
          {
            cx: 30,
            cy: -75,
            r: 2.5,
            delay: 2.7,
            color: "fill-red-500 dark:fill-red-400",
          },
          {
            cx: -30,
            cy: -100,
            r: 3,
            delay: 2.9,
            color: "fill-yellow-500 dark:fill-yellow-400",
          },
        ].map((particle, index) => (
          <circle
            key={index}
            cx={particle.cx}
            cy={particle.cy}
            r={particle.r}
            className={particle.color}
            style={{
              opacity: animate ? 1 : 0,
              animation: animate
                ? `floatParticle 3s ease-in-out ${particle.delay}s infinite alternate`
                : "",
            }}
          />
        ))}

        {/* Add keyframes animation */}
        <style>
          {`
            @keyframes floatParticle {
              0% { transform: translate(0, 0); }
              100% { transform: translate(5px, -5px); }
            }
          `}
        </style>
      </g>
    </svg>
  );
};

export default Homepage;
