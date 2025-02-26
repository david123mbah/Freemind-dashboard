import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/SideBar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage";
import AboutMe from "./components/Navbar/Aboutme";
import WorkExperience from "./components/Navbar/Work";
import Projects from "./components/Navbar/projects";
import ContactMe from "./components/Navbar/Contactme";

const App = () => {
  return (
    <div className="py-6">
      <Navbar />
      <Homepage />
      <AboutMe />
      <WorkExperience/>
      <Projects/>
      <ContactMe/>
      <div>
      </div>
    </div>
  );
};

export default App;
