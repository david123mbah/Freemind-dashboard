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
import Portfolio from "./components/Profoloio/profolio";


const App = () => {


  return (
    <div className="">
      <Portfolio/>
     
    </div>
  );
};

export default App;
