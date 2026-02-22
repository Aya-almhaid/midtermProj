import React from 'react';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingHome from './components/Home/LandingHome.jsx';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/register.jsx';
import { Toaster } from 'react-hot-toast';
import UserDashboard from './components/Users/UserDashboard.jsx';
import Foot from "./components/Foot.jsx";
import Nav from "./components/Nav.jsx";
import Home from "./components/pages/Home.jsx";
import UserDashboard1 from "./components/pages/AdminDashboard1.jsx";
import AdminDashboard1 from "./components/pages/AdminDashboard1.jsx";
import Products from "../src/components/pages/Product.jsx";
import AdminDashboard from './components/Admin/AdminDashboard.jsx'; // make sure this exists
import './App.css';

function App() {

  const appStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh"
  };





  return (
    <>
      <BrowserRouter>





        <Toaster /> {/* Toast notifications */}
        <Routes>
          <Route path="/" element={<LandingHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/User/UserDashboard" element={<UserDashboard />} />
          <Route path="/Admin/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/products" element={<Products />} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

