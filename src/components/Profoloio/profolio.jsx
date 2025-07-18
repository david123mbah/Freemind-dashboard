import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Eye } from 'lucide-react';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);

  const techStack = [
    { name: 'HTML', icon: '/ions/css.png' },
    { name: 'CSS', icon: '/ions/css.png' },
    { name: 'JavaScript', icon: '/ions/Js.svg' },
    { name: 'Tailwind', icon: '/ions/Tailwincss.png' },
    { name: 'Flutter', icon: '/ions/flutter.png' },
    { name: 'Python', icon: '/ions/python.png' },
    { name: 'C++', icon: '/ions/c++.svg' },
    { name: 'Dart', icon: '/ions/dart.png' },
    { name: 'Git', icon: '/ions/git.png' },
    { name: 'Kotlin', icon: '/ions/kotlin.png' },
    { name: 'MongoDB', icon: '/ions/mongodb.png' },
    { name: 'MySQL', icon: '/ions/mysql.png' },
    { name: 'Node.js', icon: '/ions/nodejs.svg' },
    { name: 'PHP', icon: '/ions/php.svg' },
  ];

  const experience = [
    { title: 'Software Engineer', company: 'Dhamira', period: 'Jun 2024 - Present' },
    { title: 'Full Stack Developer', company: 'Nybble Group', period: 'Apr 2021 - Jan 2024' },
    { title: 'Full Stack Developer', company: 'Workana', period: 'Feb 2018 - Dec 2020' },
  ];

  const Card = ({ children, className = '' }) => (
    <div className={`
      ${isDark ? 'bg-card border-lightBorder' : 'bg-white/90 border-gray-200'}
      border rounded-3xl p-6 backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );

  return (
    <div className={`min-h-screen font-sans ${isDark ? 'bg-primary text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-500 p-8`}>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>

      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-12 gap-8">

          {/* Left Column */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">

            {/* Profile Card */}
            <Card>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <img src="/mbah.jpg" alt="Luis Naveda" className="w-20 h-20 rounded-full" />
                  <h1 className="text-3xl font-bold">Luis Naveda</h1>
                </div>
                <p className={`${isDark ? 'text-grayText' : 'text-gray-600'} text-base leading-relaxed`}>
                  Innovative software engineer with 6 years of experience, specializing in creating elegant solutions and seamless user experiences. Passionate about technology and committed to excellence.
                </p>
              </div>
            </Card>

            {/* Tech Stack - Continuous Scrolling */}
            <div className="relative">
              <Card className="overflow-hidden">
                <div className="flex animate-marquee w-max">
                  {[...techStack, ...techStack].map((tech, index) => (
                    <div key={index} className={`flex-shrink-0 w-24 h-24 mx-2 ${isDark ? 'bg-cardSoft' : 'bg-gray-100'} rounded-2xl flex items-center justify-center`}>
                      <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                    </div>
                  ))}
                </div>
              </Card>
              <div className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-primary via-transparent to-primary' : 'from-gray-50 via-transparent to-gray-50'} pointer-events-none`} />
            </div>

            {/* Socials */}
            <Card>
              <div className="grid grid-cols-2 gap-4 h-full">
                <button className={`${isDark ? 'bg-buttonBg hover:bg-cardSoft' : 'bg-gray-100 hover:bg-gray-200'} rounded-2xl flex items-center justify-center aspect-square transition-colors`}>
                  <img src="/ions/Type=Github.png" alt="Github" className="w-12 h-12" />
                </button>
                <button className={`${isDark ? 'bg-buttonBg hover:bg-cardSoft' : 'bg-gray-100 hover:bg-gray-200'} rounded-2xl flex items-center justify-center aspect-square transition-colors`}>
                  <img src="/figma.png" alt="Mail" className="w-12 h-12" />
                </button>
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">

            {/* Marquee Section */}
            <Card className="overflow-hidden h-full">
              <div className="relative h-full flex items-center">
                <div className="absolute inset-0 w-full h-full flex items-center">
                  <div className="animate-marquee whitespace-nowrap flex items-center">
                    <span className={`${isDark ? 'text-grayText' : 'text-gray-600'} mx-4`}>PERSONAL PORTFOLIO</span>
                    <span className="text-accent text-xl mx-4">*</span>
                    <span className={`${isDark ? 'text-grayText' : 'text-gray-600'} mx-4`}>PERSONAL PORTFOLIO</span>
                    <span className="text-accent text-xl mx-4">*</span>
                    <span className={`${isDark ? 'text-grayText' : 'text-gray-600'} mx-4`}>PERSONAL PORTFOLIO</span>
                    <span className="text-accent text-xl mx-4">*</span>
                    <span className={`${isDark ? 'text-grayText' : 'text-gray-600'} mx-4`}>PERSONAL PORTFOLIO</span>
                    <span className="text-accent text-xl mx-4">*</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Resume Card */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-7">
                <Card>
                  <p className={`${isDark ? 'text-mutedText' : 'text-gray-500'} text-sm uppercase tracking-widest`}>2024 CV</p>
                  <h2 className="text-2xl font-bold mt-1 mb-4">RESUME</h2>
                  <div className="flex space-x-3">
                    <button className={`${isDark ? 'bg-buttonBg hover:bg-cardSoft' : 'bg-gray-100 hover:bg-gray-200'} p-3 rounded-full transition-colors`}>
                      <Download className="w-6 h-6" />
                    </button>
                    <button className={`${isDark ? 'bg-buttonBg hover:bg-cardSoft' : 'bg-gray-100 hover:bg-gray-200'} p-3 rounded-full transition-colors`}>
                      <Eye className="w-6 h-6" />
                    </button>
                  </div>
                </Card>
              </div>

              {/* Theme Toggle - FIXED */}
              <div className="col-span-12 lg:col-span-5">
                <Card className="flex items-center justify-center h-full">
                  <div className={`${isDark ? 'bg-background' : 'bg-white/80'} rounded-full p-1 flex items-center space-x-1 shadow-lg`}>
                    <button onClick={() => setIsDark(false)} className={`p-3 rounded-full transition-all duration-300 ${!isDark ? 'bg-white shadow-md' : 'hover:bg-gray-100/10'}`}>
                      <Sun className={`w-7 h-7 ${!isDark ? 'text-gray-800' : 'text-softGray'}`} />
                    </button>
                    <button onClick={() => setIsDark(true)} className={`p-3 rounded-full transition-all duration-300 ${isDark ? 'bg-white shadow-md' : 'hover:bg-gray-100/10'}`}>
                      <Moon className={`w-7 h-7 ${isDark ? 'text-gray-800' : 'text-softGray'}`} />
                    </button>
                  </div>
                </Card>
              </div>
            </div>

            {/* Experience */}
            <Card>
              <p className={`${isDark ? 'text-mutedText' : 'text-gray-500'} text-sm uppercase tracking-widest`}>6 YEARS OF</p>
              <h2 className="text-2xl font-bold mt-1 mb-4">EXPERIENCE</h2>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="flex justify-between items-end">
                    <div>
                      <h3 className="font-bold text-xl">{exp.title}</h3>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${isDark ? 'text-grayText' : 'text-gray-700'}`}>{exp.company}</p>
                      <p className={`${isDark ? 'text-mutedText' : 'text-gray-500'} text-sm`}>{exp.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Project Preview */}
            <Card className="h-full bg-cover bg-center" style={{ backgroundImage: "url('/app.jpg')" }}>
              <div className="flex justify-end">
                <button className="bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Dashboard &rarr;</button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
