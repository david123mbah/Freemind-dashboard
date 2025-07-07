import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";

import Dashboard from "./components/Dashboard/Dashboard";

import Doctors from "./components/Doctors/Doctors";
import Login from "./components/login/Login";
import Chats from "./components/Chats/Chats";
import Sidebar from "./components/Doctors/Sidebar";


const App = () => {
  const location = useLocation();
  const showSidebar = location.pathname !== "/";

  return (
    <div className="flex">
      {showSidebar && <Sidebar/>}
      <div className={`w-full ${showSidebar ? "p-4" : ""}`}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      </div>
    </div>
  );
};

export default App;
