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
			<main className="bg-white min-h-screen w-full px-2 md:px-8 pt-8">
				{/* Hero Section with Banner and Top Reviews */}
				<section className="w-full mb-8">
					<div className="w-full flex flex-col md:flex-row gap-8">
						{/* Banner Left */}
						<div className="flex-1 rounded-lg overflow-hidden shadow-sm bg-[#262229] flex items-center min-h-[420px]">
							<div className="flex-1 flex flex-col justify-center md:pl-16 pl-6 py-12">
								<span className="text-gray-400 text-base md:text-lg font-medium mb-2">Pro.Beyond.</span>
								<h2 className="text-4xl md:text-6xl font-light leading-tight text-white mb-2" style={{fontFamily:'Montserrat, Arial, sans-serif'}}>iPhone 14 <br /><span className="font-bold">Pro</span></h2>
								<p className="text-gray-300 text-base md:text-lg mt-2">Created to change everything for the better. For everyone</p>
							</div>
							<div className="flex-1 flex items-center justify-center py-8 md:py-0">
								<img src="/ions/homeImages/Iphone Image.png" alt="iPhone 14 Pro" className="w-full max-w-[520px] h-[380px] md:h-[520px] object-cover rounded-lg" style={{background:'#262229'}} />
							</div>
						</div>
						{/* Top Reviews Right */}
						<div className="w-full md:w-[340px] flex-shrink-0">
							<div className="mb-6">
								<div className="flex items-center justify-between mb-4">
									<h4 className="font-semibold text-gray-900 tracking-wide">TOP REVIEWS</h4>
									<a href="#" className="text-xs text-gray-500 hover:text-yellow-400">ALL REVIEWS &rarr;</a>
								</div>
								<div className="space-y-8">
									<div className="flex flex-col">
										<img src="/ions/homeImages/airports.png" alt="Watch" className="w-full h-[120px] object-cover rounded-lg mb-2" />
										<span className="text-xs text-gray-500 uppercase">REVIEWS</span>
										<h5 className="font-semibold text-gray-900 text-base mb-1">10 Things That Make The iPhone And iPod</h5>
										<div className="text-xs text-gray-400">by Jenny Matt &bull; Feb 12, 2022</div>
									</div>
									<div className="flex flex-col">
										<img src="/ions/homeImages/sssssssssssssss.png" alt="Tablet" className="w-full h-[120px] object-cover rounded-lg mb-2" />
										<span className="text-xs text-gray-500 uppercase">REVIEWS</span>
										<h5 className="font-semibold text-gray-900 text-base mb-1">10 Things That Make The iPhone And iPod</h5>
										<div className="text-xs text-gray-400">by Jenny Matt &bull; Feb 12, 2022</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Featured Article */}
				<section className="mb-8">
					<div className="border-b pb-4 mb-4 max-w-3xl mx-auto">
						<span className="uppercase text-xs text-gray-500 tracking-widest">Robotics</span>
						<h3 className="text-xl md:text-2xl font-semibold mt-2 mb-2 text-gray-900">The Most Powerful Small Sized Robots In The World</h3>
						<p className="text-gray-600 mb-2">Non enim amet gravida rutrum, sit odio. Libero, ornare id amet, cursus libero diam rutrum et nunc pharetra. Vestibulum gravida risus, ultrices et nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
						<div className="flex items-center gap-2 text-xs text-gray-400">
							<span>By Jenny Matt</span>
							<span>•</span>
							<span>Feb 13, 2025</span>
						</div>
					</div>
				</section>

				{/* Latest Posts - full width, 3 columns */}
				<section className="mb-12">
					<div className="flex items-center justify-between mb-5">
						<h4 className="font-semibold text-gray-900">LATEST POSTS</h4>
						<a href="#" className="text-xs text-gray-500 hover:text-yellow-400">ALL NEWS &rarr;</a>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{latestPosts.map((post, idx) => (
							<div key={idx} className="bg-white rounded-xl  p-5 flex flex-col items-start">
								<img src={post.img} alt={post.title} className="w-full h-43 object-cover rounded-lg mb-4 border border-gray-200" />
								<span className="text-xs text-gray-500 uppercase mb-1 tracking-wide">{post.category}</span>
								<h5 className="font-semibold text-gray-900 text-base mb-2 leading-tight line-clamp-2">{post.title}</h5>
								<div className="text-xs text-gray-400 mt-auto">By {post.author} &bull; {post.date}</div>
							</div>
						))}
					</div>
				</section>

				{/* Popular Posts - full width, 3 columns */}
				<section className="mb-12">
					<div className="flex items-center justify-between mb-5">
						<h4 className="font-semibold text-gray-900">POPULAR POSTS</h4>
						<a href="#" className="text-xs text-gray-500 hover:text-yellow-400">ALL NEWS &rarr;</a>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{popularPosts.map((post, idx) => (
							<div key={idx} className="bg-white rounded-xl  p-5 flex flex-col items-start">
								<img src={post.img} alt={post.title} className="w-full h-43 object-cover rounded-lg mb-4 border border-gray-200" />
								<span className="text-xs text-gray-500 uppercase mb-1 tracking-wide">{post.category}</span>
								<h5 className="font-semibold text-gray-900 text-base mb-2 leading-tight line-clamp-2">{post.title}</h5>
								<div className="text-xs text-gray-400 mt-auto">By {post.author} &bull; {post.date}</div>
							</div>
						))}
					</div>
				</section>

				{/* Carousel Section - centered, visually separated */}
				<section className="mb-12">
					<div className="w-full flex items-center justify-center">
						<button className="text-gray-400 text-2xl px-2">&#60;</button>
						<div className="w-full max-w-4xl mx-4 rounded-2xl overflow-hidden shadow-lg">
							<img src="/ions/homeImages/Image 1as.png" alt="Tech carousel" className="w-full h-[320px] md:h-[420px] object-cover" />
						</div>
						<button className="text-gray-400 text-2xl px-2">&#62;</button>
					</div>
				</section>

						{/* More Reviews */}
				<section className="mb-8">
					<div className="flex items-center justify-between mb-4">
						<h4 className="font-semibold text-gray-900">Top Reviews</h4>
						<a href="#" className="text-xs text-gray-500 hover:text-yellow-400">All Reviews &rarr;</a>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
						{reviews.map((post, idx) => (
							<div key={idx} className="flex flex-col">
								<img src={post.img} alt={post.title} className="w-full h-40 object-cover rounded-lg mb-2" />
								<span className="text-xs text-gray-500 uppercase">{post.category}</span>
								<h5 className="font-medium text-gray-900 text-sm mb-1">{post.title}</h5>
								<div className="text-xs text-gray-400">By {post.author} • {post.date}</div>
							</div>
						))}
					</div>
				</section>
			</main>
		);
};

export default Homepage;
