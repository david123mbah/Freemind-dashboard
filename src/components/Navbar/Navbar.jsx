import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Initialize dark mode based on user's system preference
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  // Toggle dark mode and update document class
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Update HTML classes when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full border-b border-gray-200/80 dark:border-gray-700/80 dark:bg-gray-900/95 backdrop-blur-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="group flex items-center">
              <div className="h-9 w-9 flex items-center justify-center bg-[#222d55] dark:bg-gray-800 rounded-lg transform transition-transform group-hover:scale-105">
                <span className="font-mono text-base text-white">{"{M}"}</span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex items-center justify-between space-x-8">
              {[
                { path: "/about", label: "About" },
                { path: "/projects", label: "Projects" },
                { path: "/blog", label: "Experience" },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative px-2 py-1 text-[#222d55] dark:text-gray-300 hover:text-black dark:hover:text-white text-base font-medium transition-all duration-200
                    ${location.pathname === path ? "font-semibold" : ""}
                    before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                    before:bg-[#222d55] dark:before:bg-white before:scale-x-0 hover:before:scale-x-100
                    before:transition-transform before:duration-300 before:origin-left
                    ${location.pathname === path ? "before:scale-x-100" : ""}`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 transition-all duration-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 transition-all duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-3 space-y-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
          {[
            { path: "/about", label: "About" },
            { path: "/projects", label: "Projects" },
            { path: "/blog", label: "Experience" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`block px-3 py-2 rounded-lg text-lg font-medium text-gray-600 dark:text-gray-300 
                ${
                  location.pathname === path
                    ? "bg-gray-100 dark:bg-gray-800"
                    : ""
                }
                hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
