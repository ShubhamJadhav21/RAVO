import React from "react";

import "./App.css";

import Home from "./Pages/Home/Home";
import Signup from "./components/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import VehicleComponent from "./components/VehicleComponent/VehicleComponent";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      
      <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </>
    </>
  );
}
