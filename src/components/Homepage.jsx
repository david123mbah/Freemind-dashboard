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
    <div className="min-h-screen bg-gray-900 dark:bg-black transition-colors duration-300 overflow-hidden relative">
      {/* Stars Background */}
      <div className="absolute inset-0">
        <Stars />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 flex items-center relative z-10">
        {/* Left content section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1
            className={`text-4xl md:text-5xl font-bold text-white transition-all duration-1000 ${
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
            className={`text-lg text-gray-300 max-w-xl transition-all duration-1000 delay-300 ${
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
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                aria-label={link.name}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Stars component with shooting stars
const Stars = () => {
  return (
    <div className="absolute inset-0">
      {/* Static stars */}
      {[...Array(100)].map((_, i) => {
        const top = `${Math.random() * 100}%`;
        const left = `${Math.random() * 100}%`;
        const size = Math.random() * 2 + 1;
        const animationDelay = `${Math.random() * 10}s`;

        return (
          <div
            key={i}
            className="absolute bg-white dark:bg-gray-300 rounded-full animate-twinkle"
            style={{
              top,
              left,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay,
            }}
          />
        );
      })}

      {/* Shooting stars */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute h-0.5 w-0.5 bg-white dark:bg-gray-300 animate-shooting-star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Add styles for animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes shooting {
          0% {
            transform: rotate(45deg) translateX(0);
            opacity: 1;
            width: 0;
          }
          50% {
            width: 100px;
          }
          100% {
            transform: rotate(45deg) translateX(1000px);
            opacity: 0;
          }
        }

        .animate-twinkle {
          animation: twinkle 4s infinite;
        }

        .animate-shooting-star {
          animation: shooting 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default Homepage;
