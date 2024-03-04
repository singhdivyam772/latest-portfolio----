import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import SocialMedia from "./components/SocialMedia";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
   
      <div className="overflow-hidden">
        <NavBar />
        <HeroSection/>
        <About/>
        <Projects/>
        <Contact/>
        {/* <Routes>
          <Route path="/home" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
        <Footer />
        <SocialMedia />
      </div>
    
  );
}

export default App;
