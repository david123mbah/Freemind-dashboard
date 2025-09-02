import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Use Montserrat font for text
const navFont = "font-[Montserrat]";

// Navbar links
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const NavbarHero = () => (
  <motion.nav
    className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-6 md:py-8 bg-black"
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {/* Logo */}
    <div className="flex items-center mb-4 md:mb-0">
      <img
        src="/Star 1.png" // Place your PNG logo in public/star-logo.png or adjust path
        alt="Logo"
        className="w-10 h-10 md:w-12 md:h-12"
        style={{ minWidth: 40, minHeight: 40 }}
      />
    </div>
    {/* Center nav links */}
    <div className="flex items-center mb-4 md:mb-0">
      <div className="flex gap-4 md:gap-8 px-4 md:px-8 py-2 rounded-full bg-[#18191c] border border-[#23242a] font-[Montserrat]">
        {navLinks.map(link => (
          <Link
            key={link.name}
            to={link.href}
            className="text-white text-base md:text-lg font-medium hover:text-gray-300 transition"
            style={{ letterSpacing: "0.01em" }}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
    {/* Right CTA button */}
    <div>
      <Link
        to="/contact"
        className="px-6 md:px-8 py-2 rounded-full bg-[#18191c] border border-[#23242a] text-white text-base md:text-lg font-medium hover:bg-[#23242a] transition font-[Montserrat]"
        style={{ letterSpacing: "0.01em" }}
      >
        Let's Talk
      </Link>
    </div>
  </motion.nav>
);

export default NavbarHero;
