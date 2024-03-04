
import React from "react"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import SocialMedia from "./components/SocialMedia"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
function App() {

  return (
    <div className=" overflow-hidden relative">
    <NavBar/>
    <HeroSection/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    <SocialMedia/>

    </div>
  )
}

export default App
