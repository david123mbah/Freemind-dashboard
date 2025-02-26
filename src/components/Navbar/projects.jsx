import React from 'react';

const Projects = () => {
  // Projects data
  const projectsList = [
    {
      id: 1,
      name: "Carepulse",
      tagline: "AI- assistant chatbot buit",
      image: "/Screenshot (760).png",
      url: "/projects/togeva",
    },
    {
      id: 2,
      name: "Quickbite Mobile",
      tagline: " Food divery App Order, Eat, Repeat",
      image: "/images/flavrr-logo.png",
      url: "/projects/flavrr",
    },
    {
      id: 3,
      name: "Flutter Widget Hub",
      tagline: "Build Stunning Flutter Apps with Ease",
      image: "/images/flutter-widget-hub-logo.png",
      url: "/projects/flutter-widget-hub",
    },
    {
      id: 4,
      name: "Freemind AI mental app",
      tagline: "meditation, peotry ,music, AI chatbot , mental tests and Doctor Appiontent",
      image: "/images/flutter-open-uis-logo.png",
      url: "/projects/flutter-open-uis",
    }
  ];

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Projects</h1>
      
      <p className="text-gray-700 mb-8">
        I've worked on tons of little projects over the years but these are the ones that I'm most
        proud of. Many of them are open-source, so if you see something that piques your
        interest, check out the code and contribute if you have ideas on how it can be improved.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projectsList.map((project) => (
          <a 
            key={project.id}
            href={project.url}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex"
          >
            <div className="w-1/4 p-4 flex items-center justify-center">
              <img 
                src={project.image}
                alt={`${project.name} logo`}
                className="w-44 h-22 object-contain"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "/images/default-project.png";
                }}
              />
            </div>
            <div className="w-3/4 p-4">
              <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
              <p className="text-gray-600">{project.tagline}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;