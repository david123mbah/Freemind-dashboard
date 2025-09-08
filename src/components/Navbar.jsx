import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";

const navIcons = [
  { name: "Home", icon: "/home-02.png", href: "#" },
  { name: "Notes", icon: "/door-01.png", href: "#notes" },
  { name: "WhatsApp", icon: "/Platform=WhatsApp, Color=Original.png", href: "https://wa.me/652892452" },
  { name: "GitHub", icon: "/gfgfg.png", href: "https://github.com/david123mbah" },
  { name: "YouTube", icon: "/Platform=YouTube, Color=Original.png", href: "https://youtube.com/" },
  { name: "LinkedIn", icon: "/Platform=LinkedIn, Color=Original.svg", href: "https://linkedin.com/in/david123mbah" },
  { name: "X", icon: "/Platform=X (Twitter), Color=Original.png", href: "https://x.com/" },
];

const Navbar = ({ isDark, setIsDark }) => {
  const [activeTab, setActiveTab] = useState(-1);

  // Switch theme and background when theme button is clicked
  const handleThemeSwitch = () => {
    setIsDark((prev) => !prev);
    // Optionally, you can add logic here to persist theme or update <body> background if needed
    document.body.classList.toggle('dark', !isDark);
    document.body.style.backgroundColor = !isDark ? "#18191c" : "#fff";
  };

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center">
      <div className={`flex items-center border rounded-full shadow-lg px-4 py-2 gap-2
        ${isDark ? "bg-[#23242a] border-[#23242a]" : "bg-white border-[#e5e5e5]"}`}
        style={{
          boxShadow: "0 4px 32px 0 rgba(0,0,0,0.10)",
          minWidth: 340,
          backdropFilter: "blur(8px)",
        }}
      >
        {navIcons.map((nav, idx) => (
          <a
            key={nav.name}
            href={nav.href}
            target={nav.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#f5f5f5] dark:hover:bg-[#18191c] transition ${activeTab === idx ? "animate-bounce" : ""}`}
            tabIndex={0}
            onFocus={() => setActiveTab(idx)}
            onBlur={() => setActiveTab(-1)}
            onClick={() => setActiveTab(idx)}
            aria-label={nav.name}
          >
            <img src={nav.icon} alt={nav.name} className="w-6 h-6" />
          </a>
        ))}
        {/* Divider */}
        <div className="mx-2 w-[1px] h-8 bg-[#e5e5e5] dark:bg-[#23242a]" />
        {/* Theme Switcher */}
        <button
          onClick={handleThemeSwitch}
          className={`flex items-center justify-center w-10 h-10 rounded-full bg-[#f5f5f5] dark:bg-[#18191c] transition-all duration-500 relative ${activeTab === navIcons.length ? "animate-bounce" : ""}`}
          aria-label="Toggle theme"
          onFocus={() => setActiveTab(navIcons.length)}
          onBlur={() => setActiveTab(-1)}
        >
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500"
            style={{
              transform: isDark ? "rotate(360deg)" : "rotate(0deg)",
              transition: "transform 0.5s cubic-bezier(.68,-0.55,.27,1.55)",
            }}
          >
            {isDark ? (
              <Moon className="w-6 h-6 text-[#F7E924]" />
            ) : (
              <Sun className="w-6 h-6 text-[#23242a]" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
