import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import SocialMedia from "./components/SocialMedia";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  const scrollToHome = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }

  useEffect(()=>{
    scrollToHome();
  },[scrollToHome])



  const scrollToAbout = () => {
    window.scrollTo({
      top: 635, 
      behavior: 'smooth'
    });
  }

  const scrollToProject = () => {
    window.scrollTo({
      top: 1435, 
      behavior: 'smooth'
    });
  }
  const scrollToContact = () => {
    window.scrollTo({
      top: 3135, 
      behavior: 'smooth'
    });
  }
  return (
   
      <div className="overflow-hidden">
        <NavBar 
        scrollToHome={scrollToHome} 
        scrollToAbout={scrollToAbout} 
        scrollToProject={scrollToProject} 
        scrollToContact={scrollToContact}
        />
        <HeroSection scrollToProject={scrollToProject}/>
        <About/>
        <Projects />
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
