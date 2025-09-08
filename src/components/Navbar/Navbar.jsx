import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// Update path if needed
import "../../index.css";

const navItems = [
	{ name: "HOME", path: "/" },
	{ name: "TOP NEWS", path: "/top-news" },
	{ name: "AI", path: "/ai-news" },
	{ name: "APPLE", path: "/apple" },
	{ name: "ANDRIOD", path: "/android" },
	{ name: "TECHNOLOGY", path: "/technology" },
	{ name: "GADGETS", path: "/gadgets" },
	{ name: "DEALS", path: "/deals" },
	{ name: "ABOUT", path: "/about" },
];

const Navbar = () => {
	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="w-full bg-white shadow-sm px-4 py-3 flex items-center justify-between relative">
			<div className="flex items-center gap-3">
				<img src="/ions/Logos.png" alt="TCOLTECH Logo" className="h-10 w-10" />
				<span className="font-bold text-xl text-yellow-400 tracking-wide">TCOLTECH</span>
			</div>

			{/* Desktop Nav */}
			<div className="hidden md:flex gap-6 items-center">
				{navItems.map((item) => (
					<Link
						key={item.name}
						to={item.path}
						className={`text-gray-500 font-medium hover:text-yellow-400 transition px-2 py-1 rounded-lg ${location.pathname === item.path ? "bg-black text-white" : ""}`}
					>
						{item.name}
					</Link>
				))}
			</div>
			<Link
				to="/contact"
				className="hidden md:inline-block ml-8 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
			>
				Contact Us
			</Link>

			{/* Hamburger Icon */}
			<button
				className="md:hidden flex items-center text-3xl text-yellow-400 z-20"
				onClick={() => setMenuOpen(!menuOpen)}
				aria-label="Toggle menu"
			>
				<svg width="32" height="32" fill="currentColor" viewBox="0 0 20 20">{menuOpen ? (<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />) : (<path fillRule="evenodd" d="M3 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 4a1 1 0 100 2h12a1 1 0 100-2H4z" clipRule="evenodd" />)}</svg>
			</button>

			{/* Mobile Menu */}
			<div
				className={`fixed top-0 left-0 w-full h-full bg-white z-10 flex flex-col items-center pt-24 transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
				style={{ boxShadow: menuOpen ? "0 0 0 100vmax rgba(0,0,0,0.2)" : "none" }}
			>
				{navItems.map((item) => (
					<Link
						key={item.name}
						to={item.path}
						className={`w-3/4 text-center my-2 py-3 text-lg font-semibold rounded-lg transition ${location.pathname === item.path ? "bg-black text-white" : "text-gray-700 hover:bg-yellow-100 hover:text-yellow-500"}`}
						onClick={() => setMenuOpen(false)}
					>
						{item.name}
					</Link>
				))}
				<Link
					to="/contact"
					className="w-3/4 text-center my-4 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
					onClick={() => setMenuOpen(false)}
				>
					Contact Us
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
