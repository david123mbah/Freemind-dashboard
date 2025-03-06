import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage";
import AboutMe from "./components/Navbar/Aboutme";
import Projects from "./components/Navbar/projects";
import Blog from "./components/Blog";
import Photos from "./components/Photos";
import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen bg-cool-gradient">
      <div className="py-6 bg-cool-white bg-opacity-80">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
