import React from "react";

import "./App.css";

import Home from "./Pages/Home/Home";
import Signup from "./components/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import Location from "./components/Location/Location";
import VehiclesDetails from "./components/VehiclesDetails/VehiclesDetails";
import Login from "./components/Login/Login";
import ReportAd from "./components/ReportAd/ReportAd";
import OtpVerify from "./components/OtpVerify/OtpVerify";

export default function App() {
  return (
    <>
      {/* <Navbar /> */}

      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/vehicle/:_id' element={<VehiclesDetails />} />
          <Route path="/location" element={<Location />} />
          <Route path="/report" element={<ReportAd/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/verify-otp" element={<OtpVerify/>}/>
          
        </Routes>
      </>
    </>
  );
}