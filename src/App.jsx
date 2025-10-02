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
import Apple from "./components/Apple/Apple";
import AppleProductDetail from "./components/Apple/AppleProductDetail";
import Deals from "./components/Deals/Deals";
import DealDetail from "./components/Deals/DealDetail";
import Gadgets from "./components/Gadgets/Gadgets";
import GadgetDetail from "./components/Gadgets/GadgetDetail";
import Android from "./components/Androids/Android";
import AndroidDetail from "./components/Androids/AndroidDetail";


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
        <Route path="/apple" element={<Apple />} />
        <Route path="/apple/:id" element={<AppleProductDetail />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/deals/:id" element={<DealDetail />} />
        <Route path="/gadgets" element={<Gadgets />} />
        <Route path="/gadgets/:id" element={<GadgetDetail />} />
        <Route path="/android" element={<Android />} />
        <Route path="/android/:id" element={<AndroidDetail />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

