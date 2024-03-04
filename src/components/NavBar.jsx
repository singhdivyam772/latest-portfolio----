import React from 'react';
import HamBurger from './HamBurger'
import { Link } from 'react-router-dom';
const NavBar = () => {

  const scrollToHome = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }

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
    <div className=' relative'>
      <div className=' w-[100vw] h-[15vh]  flex justify-between px-4 fixed top-0 bottom-0 right-0 bg-white items-center'>

        <div 
        onClick={scrollToHome}
        className=' flex justify-around items-center gap-3 max-w-[460px] cursor-pointer'>
          <p className='md:text-lg font-bold text-md uppercase text-slate-500 pl-2'>Divyam Singh</p>
          <img
            src={"https://ik.imagekit.io/x5uuebk4v/dashboard/divyam-image-removebg.png?updatedAt=1709478705775"}
            className=' max-h-[2.5rem] max-w-[2.5rem] rounded-full'
            alt="" />
        </div>
        <ul className=' md:flex font-bold hidden justify-around items-center  gap-6 text-slate-500'>
          <li
            className=' cursor-pointer' 
            onClick={scrollToHome}>Home</li>
          <li 
           className=' cursor-pointer' 
          onClick={scrollToAbout}>About</li>
          <li 
           className=' cursor-pointer' 
          onClick={scrollToProject}>Project</li>
          <li 
           className=' cursor-pointer' 
          onClick={scrollToContact}>Contact</li>
          
        </ul>
        <HamBurger />
      </div>
    </div>
  )
}

export default NavBar
