import React, { useState, useEffect } from "react";
import { useRive } from "@rive-app/react-canvas";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Homepage = () => {
  const [animate, setAnimate] = useState(false);
  const { RiveComponent } = useRive({
    src: "./little_boy.riv", // Make sure to add your Rive file in the public folder
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  useEffect(() => {
    setAnimate(true);
  }, []);

  // Social links data
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/david123mbah/HouseFinding-website.git",
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      name: "X",
      url: "https://twitter.com",
      icon: <FaTwitter className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      url: "https://github.com/david123mbah/HouseFinding-website.git",
      icon: <FaInstagram className="w-5 h-5" />,
    },
    {
      name: "Gmail",
      url: "davidmbah1234@gmail.com",
      icon: <FaEnvelope className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen  font-['Lato']">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
        {/* Left side - Text content */}
        <div className="w-full md:w-1/2 space-y-8 order-2 md:order-1">
          <h1
            className={`text-4xl md:text-6xl font-bold text-[#222d55] tracking-tight transition-all duration-1000 ${
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
            className={`text-xl text-[#222d55] max-w-xl leading-relaxed transition-all duration-1000 delay-300 ${
              animate
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            I'm a tech enthusiast skilled in Flutter and web development,
            passionate about leveraging technology for Africa's development and
            promoting STEM.
          </p>

          <div
            className={`flex flex-wrap gap-6 transition-all duration-1000 delay-500 ${
              animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="flex items-center gap-2 text-[#2f3542] hover:text-white transition-colors text-lg"
                aria-label={link.name}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right side - Rive animation */}
        <div className="w-[600px] h-[400px] mx-auto md:mx-0 order-1 md:order-2">
          <RiveComponent className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
