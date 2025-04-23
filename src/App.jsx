import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";

import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import Doctors from "./components/Doctors/Doctors";
import Chats from "./components/Chats/Chats";


const App = () => {
  const location = useLocation();
  const showSidebar = location.pathname !== "/";

  return (
    <div className="flex">
      {showSidebar && <Sidebar />}
      <div className={`w-full ${showSidebar ? "p-4" : ""}`}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Sidebar/>} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
