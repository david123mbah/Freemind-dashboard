import React, { useState } from "react";
import { motion } from "framer-motion";

// Example projects data
const projects = [
	{
		image: "/Screenshot (27).png",
		title: "Freemind",
		description:
			"A web app built solely for the purpose of employee pension payment",
		tech: ["React", "Firebase", "Tailwind CSS" , " https://freemind-final-version-website-official.vercel.app"],
	},
	{
		image: "/Screenshot (1536).png",
		title: "Freemind App",
		description:
			"Freemind mental health app for mediation,mood tracking , doctor appiontment and Ai chat bot",
		tech: ["Flutter", "Firebase", "Dart"],
	},
	{
		image: "/image copy 2.png",
		title: "CarePulse",
		description:
			"CarePulse is an AI-driven health application that seamlessly integrates the wisdom of traditional Cameroonian medicine with cutting-edge technology, offering users personalized, culturally relevant healthcare solutions. Designed to bridge the gap between ancestral remedies and modern healthcare, the app provides AI-powered diagnostics, plant identification, and personalized care plans, while connecting users with verified traditional healers for deeper insights.",
		tech: ["Next.js", "Typecript" , "ProgressSQL", "Prisma" , "Gemina AI" , "Firebase"],
	},
	{
		image: "/project4.png",
		title: "Raha",
		description:
			"A payment app that offers a fast, secure, and convenient way to make transactions",
		tech: ["React Native", "Node.js"],
	},
	// ...add more projects as needed
];

const Projects = () => {
	const [showAll, setShowAll] = useState(false);

	const displayedProjects = showAll ? projects : projects.slice(0, 4);

	return (
		<motion.section
			className="w-full py-16 bg-black font-[Montserrat]"
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			<div className="text-center mb-8">
				<span className="text-[#1de9b6] font-bold text-sm tracking-wide uppercase">
					Selected Projects
				</span>
				<h2 className="text-white text-3xl md:text-4xl font-bold mt-4 mb-2">
					Explore some of my projects
				</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
				{displayedProjects.map((proj, idx) => (
					<div
						key={idx}
						className="bg-[#18191C] rounded-2xl overflow-hidden shadow-lg flex flex-col"
					>
						<img
							src={proj.image}
							alt={proj.title}
							className="w-full h-56 object-cover"
						/>
						<div className="p-6 flex-1 flex flex-col justify-between">
							<div>
								<h3 className="text-white text-xl font-bold mb-2">
									{proj.title}
								</h3>
								<p className="text-gray-400 text-base mb-4">
									{proj.description}
								</p>
							</div>
							<div className="mt-2">
								<span className="text-[#1de9b6] font-semibold text-xs">
									Tech Stack:
								</span>
								<div className="flex flex-wrap gap-2 mt-2">
									{proj.tech.map((tech, tIdx) => (
										<span
											key={tIdx}
											className="px-3 py-1 rounded-full bg-[#23242A] text-[#1de9b6] text-xs font-semibold"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			{!showAll && (
				<div className="flex justify-center mt-10">
					<button
						className="px-8 py-3 rounded-full bg-[#1de9b6] text-black text-lg font-semibold font-[Montserrat] shadow-lg hover:bg-[#00bfae] transition"
						onClick={() => setShowAll(true)}
					>
						More
					</button>
				</div>
			)}
		</motion.section>
	);
};

export default Projects;
