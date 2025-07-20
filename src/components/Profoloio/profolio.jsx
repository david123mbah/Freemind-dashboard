import React, { useState } from 'react';
import { Moon, Sun, Download, Eye } from 'lucide-react';

// Use Montserrat for geometric, modern look
const font = "font-[Montserrat], font-sans";

// Project data moved to top for easy editing
const projectsLeft = [
  {
    image: "/project1.png",
    title: "Station UI – Component Library",
    tags: ["Design System", "100+ Components", "Storybook", "Typescript", "SCSS"],
    description: "A modern React component library for rapid UI development."
  },
  {
    image: "/project3.png",
    title: "Alliance DAO",
    tags: ["NFT Gallery", "React", "Typescript"],
    description: "NFT platform for digital assets and collectibles."
  }
];

const projectsRight = [
  {
    image: "/project2.png",
    title: "Station Landing Page",
    tags: ["Solo Developer", "Next.js", "Typescript", "Figma", "SCSS"],
    description: "A sleek landing page for Station, built with Next.js and Figma."
  },
  {
    image: "/project4.png",
    title: "Station Wallet Setup",
    tags: ["UX/UI", "React", "Typescript"],
    description: "Wallet onboarding and setup experience."
  }
];

const techStack = [
  { name: 'Ruby', icon: '/ions/python.png' },
  { name: 'HTML', icon: '/ions/html.svg' },
  { name: 'CSS', icon: '/ions/css.png' },
  { name: 'Sass', icon: '/ions/git.png' },
  { name: 'Sass', icon: '/ions/kotlin.png' },
  { name: 'Styled', icon: '/ions/Tailwincss.png' },
  { name: 'Framer', icon: 'ions/dart.png' },
  { name: 'Sass', icon: '/ions/flutter.png' },
];

const experience = [
  {
    title: 'Frontend Web Developer Lead',
    company: 'Yiel',
    period: 'Mar 2024 - Present',
    main: true,
   
  },
  {
    title: 'Mobile Application Developer',
    company: 'VTC',
    period: 'Jun 2023 - Feb 2024',
    main: false,
  
  },
  {
    title: 'Full Stack Developer',
    company: 'Nybble Group',
    period: 'Apr 2021 - Jan 2024',
    main: false,
   
  }
];

const socials = [
  { name: 'Github', icon: '/ions/Type=Github.png' },
  { name: 'Message', icon: '/figma.png' },
];

const Portfolio = () => {
  const [isDark, setIsDark] = useState(false);

  const Card = ({ children, className = '', style }) => (
    <div
      className={`
        ${isDark ? 'bg-card border-lightBorder text-white' : 'bg-[#23242a] border-[#23242a] text-white'}
        border rounded-3xl shadow-lg ${className}
      `}
      style={{
        ...style,
        boxShadow: isDark
          ? '0 4px 32px 0 rgba(0,0,0,0.18)'
          : '0 4px 32px 0 rgba(0,0,0,0.18)',
        background: isDark ? undefined : 'rgba(35,36,42,0.95)',
        borderRadius: "1.5rem"
      }}
    >
      {children}
    </div>
  );

  return (
    <div className={`min-h-screen ${font} ${isDark ? 'bg-primary text-white' : 'bg-[#18191c] text-white'} transition-colors duration-500 py-12 px-2 md:px-0`}>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left column */}
        <div className="flex flex-col gap-8">
          {/* Profile Card */}
          <Card className="flex flex-col px-12 py-10" style={{ minHeight: 230 }}>
            <div className="flex items-center gap-8 mb-4">
              <img src="/mbah.jpg" alt="Mbah Atangana David" className="w-24 h-24 rounded-full object-cover bg-[#bdbdbd]" />
              <div>
                <h1 className="text-[2.2rem] font-bold tracking-tight font-[Montserrat]">Mbah Atangana David</h1>
                
              </div>
            </div>
            <p className="text-base leading-relaxed text-grayText font-[Montserrat]">
              Passionate Software Engineer and Mobile Developer (Flutter, React.js, Node.js) with a strong AI/ML background. 
              Experienced in building scalable web and mobile apps, leading teams, and architecting robust solutions. 
              Fluent in English and French.  BSc in Software Engineering, ICTU Yaounde, 2025.
            </p>
          </Card>

        

          {/* Tech Stack */}
          <Card className="flex flex-col justify-between px-12 py-8" style={{ minHeight: 140 }}>
            <div className="relative w-full overflow-hidden mb-4">
              <div className="flex animate-marquee w-max gap-4">
                {[...techStack, ...techStack, ...techStack].map((tech, i) => (
                  <div key={i} className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#23242a]">
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                  </div>
                ))}
              </div>
              {/* Gradient fade on left/right for better UX */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#23242a] via-transparent to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#23242a] via-transparent to-transparent z-10" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.1em] text-mutedText font-[Montserrat]">CURRENTLY USING</span>
              <span className="block text-xl font-semibold mt-1 font-[Montserrat]">
                TECH I <span className="text-[#F15A2B]">♥</span>
              </span>
            </div>
          </Card>

          {/* Socials */}
          <div className="flex gap-8">
            <Card className="flex items-center justify-center w-full py-8" style={{ height: 100 }}>
              <img src={socials[0].icon} alt={socials[0].name} className="w-12 h-12" />
            </Card>
            <Card className="flex items-center justify-center w-full py-8" style={{ height: 100 }}>
              <img src={socials[1].icon} alt={socials[1].name} className="w-12 h-12" />
            </Card>
          </div>

          {/* Project Cards (left column, two stacked) */}
          {projectsLeft.map((proj, idx) => (
            <Card key={proj.title} className="flex flex-col items-start justify-between p-0 w-full" style={{
              minHeight: 480,
              height: 480,
              padding: 0,
              borderRadius: "1.5rem",
              marginTop: "0.5rem"
            }}>
              <div className="w-full h-[210px] rounded-t-3xl overflow-hidden bg-[#23242a] flex items-center justify-center">
                <img src={proj.image} alt={proj.title} className="object-cover w-full h-full" />
              </div>
              <div className="flex-1 flex flex-col justify-between px-6 py-6 w-full">
                <h3 className="text-xl font-bold mb-2 tracking-tight leading-tight">{proj.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {proj.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-transparent text-mutedText text-xs px-2 py-1 rounded font-semibold border border-mutedText"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-2 text-base text-mutedText font-medium">{proj.description}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-8">
          {/* Marquee Portfolio Header */}
          <Card className="flex items-center justify-center px-10 py-4 overflow-hidden" style={{ minHeight: 60 }}>
            <div className="relative w-full overflow-hidden">
              <div className="flex animate-marquee w-max gap-8 whitespace-nowrap">
                {Array(3).fill(0).map((_, idx) => (
                  <span key={idx} className="uppercase text-mutedText font-semibold tracking-widest text-xl font-[Montserrat] mx-8">
                    PERSONAL <span className="text-white font-bold">PORTFOLIO</span>
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* Resume and Theme Toggle */}
          <div className="flex gap-8">
            <Card className="flex-1 flex flex-col justify-between px-8 py-6" style={{ minHeight: 90 }}>
              <p className="text-xs text-mutedText uppercase tracking-widest mb-1 font-[Montserrat]">2024 CV</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold font-[Montserrat]">RESUME</span>
                <div className="flex gap-2">
                  <a
                    href="/DavidmbahCv.pdf"
                    download
                    className="bg-card hover:bg-cardSoft p-3 rounded-full flex items-center"
                    title="Download CV"
                  >
                    <Download className="w-6 h-6" />
                  </a>
                  <a
                    href="/DavidmbahCv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-cardSoft p-3 rounded-full flex items-center"
                    title="View CV"
                  >
                    <Eye className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </Card>
            <Card className="flex-1 flex items-center justify-center px-8 py-6" style={{ minHeight: 90 }}>
              <div className="flex w-full gap-4">
                <button
                  onClick={() => setIsDark(false)}
                  className={`flex-1 flex items-center justify-center rounded-[18px] py-3 transition-all duration-300 ${!isDark ? 'bg-white shadow' : 'bg-card'}`}
                >
                  <Sun className={`w-7 h-7 ${!isDark ? 'text-[#232323]' : 'text-mutedText'}`} />
                </button>
                <button
                  onClick={() => setIsDark(true)}
                  className={`flex-1 flex items-center justify-center rounded-[18px] py-3 transition-all duration-300 ${isDark ? 'bg-white shadow' : 'bg-card'}`}
                >
                  <Moon className={`w-7 h-7 ${isDark ? 'text-[#232323]' : 'text-mutedText'}`} />
                </button>
              </div>
            </Card>
          </div>

          {/* Experience */}
          <Card className="flex flex-col px-10 py-8" style={{ minHeight: 220 }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-mutedText uppercase tracking-widest font-[Montserrat]">EXPERIENCE</span>
            </div>
            {experience.map((exp, idx) => (
              <div
                key={exp.company}
                className={`mb-5 ${!exp.main ? 'line-through opacity-60' : ''}`}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold font-[Montserrat] mb-1">{exp.title} — {exp.company}</h2>
                  <div className="text-mutedText text-sm">{exp.period}</div>
                </div>
              
              </div>
            ))}
          </Card>

          {/* Project Cards (right column, two stacked) */}
          {projectsRight.map((proj, idx) => (
            <Card key={proj.title} className="flex flex-col items-start justify-between p-0 w-full" style={{
              minHeight: 480,
              height: 480,
              padding: 0,
              borderRadius: "1.5rem",
              marginTop: "0.5rem"
            }}>
              <div className="w-full h-[210px] rounded-t-3xl overflow-hidden bg-[#23242a] flex items-center justify-center">
                <img src={proj.image} alt={proj.title} className="object-cover w-full h-full" />
              </div>
              <div className="flex-1 flex flex-col justify-between px-6 py-6 w-full">
                <h3 className="text-xl font-bold mb-2 tracking-tight leading-tight">{proj.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {proj.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-transparent text-mutedText text-xs px-2 py-1 rounded font-semibold border border-mutedText"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-2 text-base text-mutedText font-medium">{proj.description}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
