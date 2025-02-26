import React from 'react';

const WorkExperience = () => {
  // Work experience data
  const experiences = [
    {
      id: 1,
      company: "Yeil",
      position: "Frontend Developer",
      dateRange: "OCT 16, 2024 - PRESENT",
      description: "As a Frontend developer, I craft sleek web Apps, solve UI/UX challenges, and implement features that delight users. Intergrating Resful backend api with frontend",
      icon: "/Plan de travail 3@4x-100 copy 2.jpeg"
    },
    {
      id: 2,
      company: "Vtc International Cameroon",
      position: "Full Stack | Mobile Dev",
      dateRange: "Sep 12, 2023 - Feb 14, 2025",
      description: "Develop and Deploy web apps, and Mobile apps work with react,node.js ,flutter ,firebase and also intergrated restfull Api",
      icon: "/WhatsApp Image 2024-05-03 at 08.23.05_3d4d58eb.jpg"
    },
    {
      id: 3,
      company: "CITs",
      position: "Mobile Developer",
      dateRange: "MAY 3, 2024",
      description: "Participated in The regitional Hackton and built Innovative solution",
      icon: "/WhatsApp Image 2024-06-20 at 09.41.56_fd756803.jpg"
    },
    
  ];

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Work Experience</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp) => (
          <div 
            key={exp.id} 
            className="flex border-l-2 border-gray-200 pl-4 pb-6 relative"
          >
            <div className="absolute -left-3 top-0">
              <div className="bg-white p-1 rounded-lg shadow-md border border-gray-200">
                <img 
                  src={exp.icon} 
                  alt={`${exp.company} icon`} 
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/icons/default-company.png";
                  }}
                />
              </div>
            </div>
            
            <div className="ml-4 pt-1 px-10">
              <h3 className="text-xl font-semibold text-gray-800">{exp.company}</h3>
              <h4 className="text-md text-gray-600">{exp.position}</h4>
              <p className="text-sm text-gray-500 mb-2">{exp.dateRange}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;