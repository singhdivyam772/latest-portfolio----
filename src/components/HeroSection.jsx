import React from 'react'
import '../style/HeroSection.css'
const HeroSection = () => {
  return (
    <div>
      <div className=' w-full md:h-[82vh] hero-section flex flex-wrap justify-center items-center'>  
        {/* intro */}
        <div className=' min-w-[30vw]  flex flex-col justify-center items-center'>
          <h2 className=' uppercase font-extrabold md:text-5xl text-3xl text-center'>
            hey, i'am a mern stack developer
          </h2>
          <h5 className=' md:px-10 px-6 py-5 leading-89 font-normal text-center text-2xl md:w-[70vw] text-slate-800'>
          I'm a Frontend(React) developer and here is my portfolio website. Here you'll learn about myself as a frontend(React) developer.
          </h5>
          <button className=' bg-[#7843E9] md:px-16 px-10 py-3 rounded-md uppercase font-bold mb-6 text-white tracking-wider mt-6 transform transition-transform hover:scale-110 '>
            Projects
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
