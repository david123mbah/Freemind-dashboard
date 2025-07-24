import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

// Use Montserrat for geometric, modern look
const font = "font-[Montserrat], font-sans";

// Navigation bar data
const navLinks = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const projects = [
  {
    image: "/project1.png",
    title: "FilmFinder",
    period: "Jun 2023 - Oct 2023",
    description: "FilmFinder is a movie search application that integrates cutting-edge creativity with state-of-the-art technology. Utilizing React.js for its user interface, the app features robust state management, Material UI for interface elements, and Alan AI for voice functionalities.",
  },
  {
    image: "/project2.png",
    title: "Nerala",
    period: "June 2023 - Present",
    description: "Nerala is a mobile application designed to preserve and promote Cameroon's linguistic heritage by providing tools for learning vernacular languages. Features include interactive flashcards, cultural stories, and progress tracking.",
  }
];

const skillsIcons = [
  "/ions/flutter.png", "/ions/dart.png", "/ions/kotlin.png", "/ions/python.png", "/ions/html.svg", "/ions/css.png", "/ions/git.png", "/ions/Tailwincss.png",
  // ...add more as needed for your stack
];

const experience = [
  {
    image: "/icons/alpha.png",
    title: "Alpha Digital Service",
    role: "Intern Mobile Developer",
    period: "Sept 2024 - Dec 2024"
  },
  {
    image: "/icons/mountainhub.png",
    title: "Mountain Hub",
    role: "Secretariat Volunteer",
    period: "Oct 28, 2024 - Oct 30, 2024"
  },
  {
    image: "/icons/uwaco.png",
    title: "UWACO",
    role: "Odoo Developer Intern",
    period: "February 2024 - April 2024"
  },
  {
    image: "/icons/ict.png",
    title: "ICT University",
    role: "WordPress Teacher",
    period: "September 2024 - November 2024"
  },
  {
    image: "/icons/tamla.png",
    title: "Tamla Solutions",
    role: "AI Research Intern",
    period: "October 2024 - Present"
  }
];

const education = [
  {
    image: "/icons/ict.png",
    title: "ICT University",
    degree: "Bachelor's Degree of Computer Science (BCS)",
    period: "2022 - 2025"
  },
  {
    image: "/icons/lycee.png",
    title: "Lycee Bilingue De Nyom",
    degree: "Baccalaureat Scientifique (Serie C)",
    period: "2015 - 2022"
  }
];

// Navigation bar icons and links (update paths to your icons)
const navIcons = [
  { name: "Home", icon: "/icons/home.svg", href: "#" },
  { name: "Notes", icon: "/icons/note.svg", href: "#notes" },
  { name: "WhatsApp", icon: "/icons/whatsapp.svg", href: "https://wa.me/652892452" },
  { name: "GitHub", icon: "/icons/github.svg", href: "https://github.com/david123mbah" },
  { name: "YouTube", icon: "/icons/youtube.svg", href: "https://youtube.com/" },
  { name: "LinkedIn", icon: "/icons/linkedin.svg", href: "https://linkedin.com/in/david123mbah" },
  { name: "X", icon: "/icons/x.svg", href: "https://x.com/" },
];

const Navbar = ({ isDark, setIsDark }) => (
  <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center">
    <div className="flex items-center bg-white dark:bg-[#23242a] border border-[#e5e5e5] dark:border-[#23242a] rounded-full shadow-lg px-4 py-2 gap-2"
      style={{
        boxShadow: "0 4px 32px 0 rgba(0,0,0,0.10)",
        minWidth: 340,
        backdropFilter: "blur(8px)",
      }}
    >
      {navIcons.map((nav, idx) => (
        <a
          key={nav.name}
          href={nav.href}
          target={nav.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#f5f5f5] dark:hover:bg-[#18191c] transition"
        >
          <img src={nav.icon} alt={nav.name} className="w-6 h-6" />
        </a>
      ))}
      {/* Divider */}
      <div className="mx-2 w-[1px] h-8 bg-[#e5e5e5] dark:bg-[#23242a]" />
      {/* Theme Switcher */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f5f5f5] dark:bg-[#18191c] transition-all duration-500 relative"
        aria-label="Toggle theme"
      >
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500"
          style={{
            transform: isDark ? "rotate(360deg)" : "rotate(0deg)",
            transition: "transform 0.5s cubic-bezier(.68,-0.55,.27,1.55)",
          }}
        >
          {isDark ? (
            <Moon className="w-6 h-6 text-[#F7E924]" />
          ) : (
            <Sun className="w-6 h-6 text-[#23242a]" />
          )}
        </span>
      </button>
    </div>
  </div>
);

// ...existing code...

// Skill bar
const SkillBar = () => (
  <div className="w-full flex flex-col items-center mt-24 mb-2">
    <h2 className="text-xl font-bold text-black mb-2">Skills, Languages and Tools</h2>
    <div className="flex flex-wrap justify-center gap-2">
      {skillsIcons.map((icon, idx) => (
        <img key={idx} src={icon} alt="" className="w-10 h-10 rounded-lg bg-[#f5f5f5] border border-[#e5e5e5]" />
      ))}
    </div>
  </div>
);

// Project section
const ProjectSection = () => (
  <section id="projects" className="w-full flex flex-col items-center mt-12">
    <div className="mb-4">
      <button className="bg-black text-white px-5 py-2 rounded-lg font-semibold">My Projects</button>
    </div>
    <h2 className="text-4xl font-bold text-black mb-2">Check out my latest work</h2>
    <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
    <div className="flex flex-wrap justify-center gap-8 w-full">
      {projects.map((proj, idx) => (
        <div key={proj.title} className="bg-white rounded-xl shadow-md overflow-hidden w-[350px]">
          <img src={proj.image} alt={proj.title} className="w-full h-[180px] object-cover" />
          <div className="p-4">
            <div className="font-bold text-lg text-black">{proj.title}</div>
            <div className="text-sm text-gray-500">{proj.period}</div>
            <div className="mt-2 text-gray-700 text-sm">{proj.description}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Experience section
const ExperienceSection = () => (
  <section id="experience" className="w-full flex flex-col items-center mt-16">
    <h2 className="text-2xl font-bold text-black mb-4">Work Experience</h2>
    <div className="w-full max-w-2xl">
      {experience.map((exp, idx) => (
        <div key={exp.title} className="flex items-center justify-between py-4 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <img src={exp.image} alt={exp.title} className="w-12 h-12 rounded-full bg-[#f5f5f5] border border-[#e5e5e5]" />
            <div>
              <div className="font-semibold text-black">{exp.title}</div>
              <div className="text-gray-600 text-sm">{exp.role}</div>
            </div>
          </div>
          <div className="text-gray-500 text-sm">{exp.period}</div>
        </div>
      ))}
    </div>
  </section>
);

// Education section
const EducationSection = () => (
  <section id="education" className="w-full flex flex-col items-center mt-12">
    <h2 className="text-2xl font-bold text-black mb-4">Education</h2>
    <div className="w-full max-w-2xl">
      {education.map((edu, idx) => (
        <div key={edu.title} className="flex items-center justify-between py-4 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <img src={edu.image} alt={edu.title} className="w-12 h-12 rounded-full bg-[#f5f5f5] border border-[#e5e5e5]" />
            <div>
              <div className="font-semibold text-black">{edu.title}</div>
              <div className="text-gray-600 text-sm">{edu.degree}</div>
            </div>
          </div>
          <div className="text-gray-500 text-sm">{edu.period}</div>
        </div>
      ))}
    </div>
  </section>
);

// Main profile header
const ProfileHeader = () => (
  <section className="w-full flex flex-col items-center mt-32 mb-8">
    <h1 className="text-5xl font-bold text-black mb-2">Hi, I'm David <span className="inline-block">👋</span></h1>
    <div className="flex items-center justify-center gap-6 mb-4">
      <p className="text-xl text-gray-700 max-w-xl text-center">
        Full-Stack Developer passionate about bringing ideas to life through the power of code. I aim to bring my client's vision to life and make a lasting impact in the digital realm.
      </p>
      <img src="/mbah.jpg" alt="profile" className="w-24 h-24 rounded-full object-cover bg-[#bdbdbd] shadow-lg" />
    </div>
    <div className="w-full max-w-2xl text-left mt-4">
      <div className="font-bold text-lg text-black mb-1">About</div>
      <p className="text-gray-700 text-base">
        I strive to create web applications that not only meet client goals but also delight users. With a strong attention to detail and a drive for staying updated with the latest trends.
        I am currently pursuing a <span className="underline">Bachelor's degree in computer science</span>, interned at tech companies, and competed in over 3+ hackathons for fun, learning and sharing.
        I also had the pleasure of being a part of the first edition of the Cameroon International Tech Summit 2024 <a href="#" className="underline">CITS</a>.
      </p>
    </div>
    <div className="mt-8">
      <a href="/DavidmbahCv.pdf" download className="bg-black text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-900 transition">My CV</a>
    </div>
  </section>
);

const Portfolio = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`${isDark ? 'dark bg-[#18191c] text-white' : 'bg-white text-[#23242a]'} min-h-screen font-sans transition-colors duration-500`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <div className="max-w-5xl mx-auto px-4">
        <ProfileHeader />
        <ExperienceSection />
        <EducationSection />
        <SkillBar />
        <ProjectSection />
        {/* ...add more sections as needed... */}
      </div>
    </div>
  );
};

export default Portfolio;
