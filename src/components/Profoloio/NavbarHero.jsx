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
    className={`w-full flex items-center justify-between px-16 py-8 bg-black`}
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {/* Logo */}
    <div className="flex items-center">
      <img
        src="/Star 1.png" // Place your PNG logo in public/star-logo.png or adjust path
        alt="Logo"
        className="w-12 h-12"
        style={{ minWidth: 48, minHeight: 48 }}
      />
    </div>
    {/* Center nav links */}
    <div className={`flex items-center`}>
      <div className={`flex gap-8 px-8 py-2 rounded-full bg-[#18191c] border border-[#23242a] ${navFont}`}>
        {navLinks.map(link => (
          <Link
            key={link.name}
            to={link.href}
            className="text-white text-lg font-medium hover:text-gray-300 transition"
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
        className={`px-8 py-2 rounded-full bg-[#18191c] border border-[#23242a] text-white text-lg font-medium hover:bg-[#23242a] transition ${navFont}`}
        style={{ letterSpacing: "0.01em" }}
      >
        Let's Talk
      </Link>
    </div>
  </motion.nav>
);

export default NavbarHero;
