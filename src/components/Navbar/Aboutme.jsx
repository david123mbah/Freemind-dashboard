import React from 'react';

// Left Content Section Component
const LeftSection = () => {
  return (
    <div className="lg:w-3/5">
      <h1 className="text-4xl font-bold text-gray-700 mb-6">
        I'm Mbah Atangana David . I live in Yaounde, Cameroon, where I build the future.
      </h1>
      
      <p className="text-gray-700 leading-relaxed">
        I'm a tech enthusiast with a keen interest in both Flutter and web development.
        Originating from Africa, I'm deeply passionate about leveraging technology to
        make a difference, particularly in Africa's development. With extensive
        experience in coding and software development, I focus on creating innovative
        solutions that address real-world problems. Beyond coding, I actively engage in
        community initiatives, striving to foster growth and collaboration within the tech
        <p>
        ecosystem. I'm particularly passionate about promoting STEM education in
        Africa, believing in its power to transform lives and drive sustainable
        development. Whether it's through building software, community engagements,
        or advocating for STEM education, I'm dedicated to making a positive impact in
        the world.
        </p>
      </p>
    </div>
  );
};

// Right Profile Section Component
const RightSection = () => {
  return (
    <div className="lg:w-2/5 flex flex-col items-center">
      <div className="w-full mb-6">
        <img
          src="/WhatsApp Image 2025-02-22 at 15.12.37_9d9ddfac.jpg"
          alt="Yunwen Eric"
          className="rounded-lg shadow-md w-full h-auto object-cover"
        />
      </div>
      
      <div className="w-full flex flex-col items-center">
        <a
          href="#"
          className="flex items-center text-blue-600 font-medium mb-6 hover:underline"
        >
          <span>View Résumé</span>
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
        
        <div className="space-y-2 w-full">
          <div className="flex items-center text-gray-700">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>davidmbah1234@gmail.com</span>
          </div>
          <div className="flex items-center text-gray-700">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Yaounde, Cameroon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main AboutMe Component
const AboutMe = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto p-8 md:p-12 bg-white">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default AboutMe;