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
		<nav className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
			<div className="flex items-center gap-3">
				<div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
					<span className="text-white font-bold text-lg">T</span>
				</div>
				<span className="font-bold text-2xl text-gray-900 tracking-tight">TcolTech</span>
			</div>

			{/* Desktop Nav */}
			<div className="hidden lg:flex gap-6 items-center">
				{navItems.map((item) => (
					<Link
						key={item.name}
						to={item.path}
						className={`text-gray-600 font-medium hover:text-gray-900 transition-colors relative text-sm ${
							location.pathname === item.path ? "text-gray-900" : ""
						}`}
					>
						{item.name}
						{location.pathname === item.path && (
							<div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full"></div>
						)}
					</Link>
				))}
			</div>
			<div className="hidden lg:flex items-center gap-4">
				<Link
					to="/contact"
					className="px-6 py-2.5 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
				>
					Contact
				</Link>
			</div>

			{/* Mobile Menu Button */}
			<button
				className="lg:hidden flex items-center text-gray-700 z-20 p-2 hover:bg-gray-100 rounded-lg transition-colors"
				onClick={() => setMenuOpen(!menuOpen)}
				aria-label="Toggle menu"
			>
				<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{menuOpen ? (
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					) : (
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
					)}
				</svg>
			</button>

			{/* Mobile Menu */}
			<div
				className={`fixed top-0 left-0 w-full h-full bg-white/95 backdrop-blur-md z-10 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
			>
				<div className="flex flex-col items-center space-y-8">
					{navItems.map((item) => (
						<Link
							key={item.name}
							to={item.path}
							className={`text-2xl font-medium transition-colors ${
								location.pathname === item.path ? "text-yellow-400" : "text-gray-700 hover:text-gray-900"
							}`}
							onClick={() => setMenuOpen(false)}
						>
							{item.name}
						</Link>
					))}
					<Link
						to="/contact"
						className="mt-8 px-8 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
						onClick={() => setMenuOpen(false)}
					>
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
