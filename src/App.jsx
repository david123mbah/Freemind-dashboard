import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import TopNews from "./components/News/TopNews";
import NewsDetail from "./components/News/NewsDetail";
import AINews from "./components/AI-News/AINews";
import AINewsDetail from "./components/AI-News/AINewsDetail";


const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
       <Route path="/" element={<Homepage />} />
       <Route path="/top-news" element={<TopNews />} />
       <Route path="/top-news/:id" element={<NewsDetail />} />
        <Route path="/ai-news" element={<AINews />} />
        <Route path="/ai-news/:id" element={<AINewsDetail />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

