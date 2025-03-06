import React from "react";

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      name: "Carepulse",
      tagline: "AI-Powered Healthcare Assistant",
      description:
        "An intelligent healthcare chatbot that provides 24/7 medical assistance, symptom checking, and healthcare recommendations. Built with advanced NLP and machine learning algorithms to understand and respond to user health queries accurately.",
      technologies: ["React", "Python", "TensorFlow", "OpenAI API"],
      image: "/Screenshot (760).png",
      url: "/projects/togeva",
      status: "Live",
    },
    {
      id: 2,
      name: "Quickbite Mobile",
      tagline: "Seamless Food Delivery Experience",
      description:
        "A comprehensive food delivery platform that connects users with local restaurants. Features include real-time order tracking, scheduled deliveries, and a reward system for loyal customers. The app processes thousands of orders daily.",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
      image: "/images/flavrr-logo.png",
      url: "/projects/flavrr",
      status: "Live",
    },
    {
      id: 3,
      name: "Flutter Widget Hub",
      tagline: "Custom Widget Library for Flutter",
      description:
        "A comprehensive collection of custom Flutter widgets and UI components. Includes animated widgets, responsive layouts, and material design implementations. Used by over 5000 developers worldwide.",
      technologies: ["Flutter", "Dart", "Firebase"],
      image: "/kyda_logo.png",
      url: "/projects/flutter-widget-hub",
      status: "Open Source",
    },
    {
      id: 4,
      name: "Freemind AI Mental App",
      tagline: "Complete Mental Wellness Platform",
      description:
        "An all-in-one mental wellness application featuring guided meditation, AI therapy chatbot, mood tracking, and professional counselor appointments. Includes a unique poetry and music therapy module.",
      technologies: ["React Native", "Node.js", "MongoDB", "TensorFlow"],
      image: "/images/flutter-open-uis-logo.png",
      url: "/projects/flutter-open-uis",
      status: "Beta",
    },
  ];

  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Featured Projects
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Showcasing my journey through technology and innovation. Each project
          represents a unique challenge and solution in the world of software
          development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900 truncate">
                    {project.name}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === "Live"
                        ? "bg-green-100 text-green-800"
                        : project.status === "Beta"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-sm font-medium text-indigo-600 mb-2">
                  {project.tagline}
                </p>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
                  <a href={project.url} className="hover:underline">
                    {project.url}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
