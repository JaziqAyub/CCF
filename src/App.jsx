import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";

const App = () => {
  const username = "Welcome to Calligraphy Corner! We’re thrilled to have you here. Explore our handcrafted calligraphy pieces, each one crafted with care and passion."
  const happy = "Let the beauty of words inspire your space.";

  return (
    <BrowserRouter>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home user={username} happy={happy} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/register" element={<Register />}/>
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
};
export default App;
