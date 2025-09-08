import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";

import Dashboard from "./components/Dashboard/Dashboard";

import Doctors from "./components/Doctors/Doctors";
import Login from "./components/login/Login";
import Chats from "./components/Chats/Chats";
import Sidebar from "./components/Doctors/Sidebar";

import NavbarHero from "./components/Profoloio/NavbarHero";
import MyHero from "./components/Profoloio/MyHero";
import CompanySection from "./components/Profoloio/company";
import About from "./components/Profoloio/About";
import ContactMe from "./components/Profoloio/contactme";
import Projects from "./components/Profoloio/projects";
import Portfolio from "./components/Profoloio/profolio";
import Footer from "./components/Profoloio/Footer";


const App = () => {
  return (
    <div className="">
      <NavbarHero />
      <Routes>
        <Route path="/" element={<MyHero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

