import React from 'react';
import Navbar from '../Navbar';

const Footer = () => (
  <footer className="w-full bg-black py-6 px-8 flex items-center justify-between font-[Montserrat] text-white text-base" style={{ minHeight: "60px" }}>
    {/* Left: Logo */}
    <div className="flex items-center">
      <img src="/star-logo.png" alt="Logo" className="w-10 h-10" />
    </div>
    {/* Center: Nav links */}
    <nav className="flex gap-10 items-center">
      <a href="#about" className="hover:text-[#1de9b6] transition">About</a>
      <a href="#projects" className="hover:text-[#1de9b6] transition">Projects</a>
      <a href="#contact" className="hover:text-[#1de9b6] transition">Contact</a>
    </nav>
    {/* Right: Credit */}
    <div className="flex items-center gap-2">
      <span>Made with love</span>
      <span className="text-red-500 text-lg">❤️</span>
      <span>by David </span>
    </div>
  </footer>
);

const Portfolio = () => {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <div className={`${isDark ? 'dark bg-[#18191c] text-white' : 'bg-white text-[#23242a]'} min-h-screen font-sans transition-colors duration-500`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <div className="max-w-5xl mx-auto px-4">
        {/* ...existing code... */}
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;

