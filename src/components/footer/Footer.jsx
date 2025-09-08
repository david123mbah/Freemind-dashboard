import React from "react";

const footerLinks = [
	{
		title: "Home",
		links: [
			{ name: "Features" },
			{ name: "Blogs" },
			{ name: "Resources", badge: "New" },
			{ name: "Testimonials" },
			{ name: "Contact Us" },
			{ name: "Newsletter" },
		],
	},
	{
		title: "News",
		links: [
			{ name: "Trending Stories" },
			{ name: "Featured Videos" },
			{ name: "Technology" },
			{ name: "Health" },
			{ name: "Politics" },
			{ name: "Environment" },
		],
	},
	{
		title: "Blogs",
		links: [
			{ name: "Quantum Computing" },
			{ name: "AI Ethics" },
			{ name: "Space Exploration" },
			{ name: "Biotechnology", badge: "New" },
			{ name: "Renewable Energy" },
			{ name: "Biohacking" },
		],
	},
];

const resources = [
	"Whitepapers",
	"Ebooks",
	"Reports",
	"Research Papers",
];

const Footer = () => {
	return (
		<footer className="bg-neutral-900 text-gray-400 pt-12 pb-6 px-4 md:px-12">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
					{/* Main Columns */}
					{footerLinks.map((col) => (
						<div key={col.title}>
							<h3 className="text-white text-lg font-semibold mb-4">{col.title}</h3>
							<ul>
								{col.links.map((link) => (
									<li key={link.name} className="mb-3 flex items-center gap-2">
										<span className="hover:text-yellow-400 cursor-pointer transition">{link.name}</span>
										{link.badge && (
											<span className="bg-neutral-800 border border-yellow-400 text-xs text-white px-2 py-1 rounded">{link.badge}</span>
										)}
									</li>
								))}
							</ul>
						</div>
					))}
					{/* Resources Column */}
					<div>
						<h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
						<ul className="space-y-3">
							{resources.map((r) => (
								<li key={r}>
									<a href="#" className="flex items-center justify-between bg-neutral-800 border border-neutral-700 rounded px-4 py-2 text-white hover:bg-neutral-700 transition">
										{r}
										<span className="text-yellow-400 ml-2">↗</span>
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				<hr className="border-neutral-800 mb-6" />

				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					<div className="flex gap-4 text-sm">
						<a href="#" className="hover:text-yellow-400">Terms & Conditions</a>
						<span className="mx-2">|</span>
						<a href="#" className="hover:text-yellow-400">Privacy Policy</a>
					</div>
					<div className="flex gap-6 text-white text-xl">
						<a href="#" aria-label="Twitter" className="hover:text-yellow-400"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.543.929-.855 2.01-.855 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.418A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z"/></svg></a>
						<a href="#" aria-label="Medium" className="hover:text-yellow-400"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 6.13c-.01-.13.03-.26.12-.36l1.64-1.98c.14-.13.36-.13.5 0l6.36 7.74 6.36-7.74c.14-.13.36-.13.5 0l1.64 1.98c.09.1.13.23.12.36v11.74c.01.13-.03.26-.12.36l-1.64 1.98c-.14.13-.36.13-.5 0l-6.36-7.74-6.36 7.74c-.14.13-.36.13-.5 0l-1.64-1.98c-.09-.1-.13-.23-.12-.36V6.13z"/></svg></a>
						<a href="#" aria-label="LinkedIn" className="hover:text-yellow-400"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.25c.41-.59 1.09-1.25 2.25-1.25 1.66 0 3 1.34 3 3v7z"/></svg></a>
					</div>
					<div className="text-xs text-gray-500 text-center md:text-right w-full md:w-auto">© 2025   TcolTech. All rights reserved.</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
