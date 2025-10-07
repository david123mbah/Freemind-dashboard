import React from "react";

const posts = [
	{
		category: "REVIEWS",
		title: "10 Things That Make The iPhone And iPod Stand Out",
		author: "Jenny Matt",
		date: "Feb 13, 2025",
		img: "/ions/homeImages/airports.png",
	},
	{
		category: "REVIEWS",
		title: "10 Things That Make The iPhone And iPod Touch Different",
		author: "Jenny Matt",
		date: "Feb 13, 2025",
		img: "/ions/homeImages/sssssssssssssss.png",
	},
];

const latestPosts = [
	{
		category: "ROBOTICS",
		title: "10 Distinctive Features Of The iPhone And iPod Touch",
		author: "Jenny Matt",
		date: "Feb 13, 2025",
		img: "/ions/homeImages/pjid.png",
	},
	{
		category: "ROBOTICS",
		title: "10 Things That Make The iPhone And iPod Touch Different",
		author: "Jenny Matt",
		date: "Feb 13, 2025",
		img: "/ions/homeImages/kkll.png",
	},
	{
		category: "ROBOTICS",
		title: "10 Things That Make The iPhone And iPod Touch Different",
		author: "Jenny Matt",
		date: "Feb 13, 2025",
		img: "/ions/homeImages/camera.png",
	},
];

const popularPosts = [
	{
		category: "ROBOTICS",
		title: "10 Distinctive Features Of The iPhone And iPod Touch",
		author: "Jenny Matt",
		date: "Feb 13, 2025",
		img: "/ions/homeImages/handsai.png",
	},
	{
		category: "ROBOTICS",
		title: "10 Things That Make The iPhone And iPod Touch Different",
		author: "Jenny Matt",
		date: "Feb 13, 2025",
		img: "/ions/homeImages/mannete.png",
	},
	{
		category: "ROBOTICS",
		title: "10 Things That Make The iPhone And iPod Touch Different",
		author: "Jenny Matt",
		date: "Feb 13, 2025",
		img: "/ions/homeImages/aniks.png",
	},
];

const reviews = [
	{
		category: "REVIEWS",
		title: "10 Things That Make The iPhone And iPod",
		author: "Jenny Matt",
		date: "Feb 13, 2025",
		img: "/ions/homeImages/airports.png",
	},
	{
		category: "REVIEWS",
		title: "10 Things That Make The iPhone And iPod",
		author: "Jenny Matt",
		date: "Feb 13, 2025",
		img: "/ions/homeImages/drone.png",
	},
	{
		category: "REVIEWS",
		title: "10 Things That Make The iPhone And iPod",
		author: "Jenny Matt",
		date: "Feb 13, 2025",
		img: "/ions/homeImages/sssssssssssssss.png",
	},
	{
		category: "REVIEWS",
		title: "10 Things That Make The iPhone And iPod",
		author: "Jenny Matt",
		date: "Feb 13, 2025",
		img: "/ions/homeImages/amkol.png",
	},
];

const Homepage = () => {
		return (
			<main className="bg-white min-h-screen w-full">
				{/* Hero Section - Clean Minimal Design */}
				<section className="w-full px-4 md:px-12 py-16">
					<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
						{/* Left Content */}
						<div className="flex-1 text-center lg:text-left">
							<div className="inline-block bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
								Tech Reviews • Expert Analysis
							</div>
							<h1 className="text-5xl lg:text-7xl font-light text-gray-900 leading-tight mb-6">
								Tech That <br />
								<span className="font-bold text-yellow-400">Matters</span>
							</h1>
							<p className="text-xl text-gray-600 mb-8 max-w-lg">
								In-depth reviews, expert insights, and the latest tech news from TcolTech - your trusted technology companion.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
								<button className="px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
									Explore Reviews
								</button>
								<button className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-colors">
									Watch Videos
								</button>
							</div>
						</div>
						{/* Right Content - iPhone Image */}
						<div className="flex-1 flex justify-center lg:justify-end">
							<div className="relative">
								<div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl transform rotate-6 opacity-20"></div>
								<img 
									src="/ions/homeImages/Iphone Image.png" 
									alt="iPhone 14 Pro" 
									className="relative w-80 lg:w-96 h-auto object-contain drop-shadow-2xl" 
								/>
							</div>
						</div>
					</div>
				</section>				{/* Features Section */}
				<section className="px-4 md:px-12 py-16 bg-gray-50">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
								What We <span className="font-bold text-yellow-400">Review</span>
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								From smartphones to smart homes, we cover the technology that shapes your world.
							</p>
						</div>
						
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
								<div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
									<svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
									</svg>
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">Smartphones</h3>
								<p className="text-gray-600">Latest iPhone, Android, and flagship devices with camera tests and performance analysis.</p>
							</div>
							
							<div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
								<div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
									<svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">Laptops & PCs</h3>
								<p className="text-gray-600">Gaming laptops, ultrabooks, and desktop computers for every budget and use case.</p>
							</div>
							
							<div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
								<div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
									<svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
									</svg>
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Gadgets</h3>
								<p className="text-gray-600">Wearables, earbuds, smart home devices, and the latest tech innovations.</p>
							</div>
						</div>
					</div>
				</section>

				{/* Latest Reviews */}
				<section className="px-4 md:px-12 py-16">
					<div className="max-w-7xl mx-auto">
						<div className="flex items-center justify-between mb-12">
							<h2 className="text-3xl lg:text-4xl font-light text-gray-900">
								Latest <span className="font-bold text-yellow-400">Reviews</span>
							</h2>
							<button className="text-gray-600 hover:text-yellow-400 transition-colors font-medium">
								View All →
							</button>
						</div>
						
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{latestPosts.slice(0, 3).map((post, idx) => (
								<article key={idx} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group">
									<div className="relative overflow-hidden">
										<img 
											src={post.img} 
											alt={post.title} 
											className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
										/>
										<div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
											{post.category}
										</div>
									</div>
									<div className="p-6">
										<h3 className="font-semibold text-gray-900 text-lg mb-3 group-hover:text-yellow-400 transition-colors">
											{post.title}
										</h3>
										<div className="text-sm text-gray-500">
											By {post.author} • {post.date}
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>
			</main>
		);
};

export default Homepage;
