import React from 'react'
import '../style/HeroSection.css'
import { Link } from 'react-router-dom'
import { FaFileDownload } from "react-icons/fa";


const HeroSection = (props) => {
  const scrollToProject = props.scrollToProject
  return (
    <div className=' w-full md:h-[100vh] h-[60rem] hero-section flex flex-wrap justify-center '>  
      
        <div className=' min-w-[30vw] flex flex-col justify-center md:gap-8 md:pt-12 items-center'>
          <h2 className=' uppercase font-extrabold md:text-5xl text-3xl text-center py-2'>
            hey, i'am a mern stack developer
          </h2>
          <h5 className=' md:px-10 px-6 py-5 leading-89 font-normal text-center text-2xl md:w-[70vw] text-slate-800'>
          I'm a Frontend(React) developer and here is my portfolio website. Here you'll learn about myself as a frontend(React) developer.
          </h5>
          <button 
          onClick={scrollToProject}
          className=' bg-[#7843E9] md:px-16 px-10 py-3 rounded-md uppercase font-bold text-white tracking-wider mt-6'
          >
            Projects
          </button>
        </div>

        <a
        href="\src\assets\DivyamResume.pdf"
        download="DivyamResume.pdf"
        className='  md:flex hidden flex-col  justify-center items-center
         max-w-[3rem] max-h-[3rem] rounded-full download-resume'
      >
       {/* <p>Resume</p>  */}
        <FaFileDownload className=' text-2xl text-white font-medium'/>
      </a>
    </div>
  )
}

export default HeroSection
