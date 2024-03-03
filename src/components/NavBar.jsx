import React from 'react';
import HamBurger from './HamBurger'
const NavBar = () => {
  return (
    <div className=' w-[100vw] h-[15vh]  flex justify-between px-4 items-center'>

   <div className=' flex justify-around items-center gap-3 max-w-[460px]'>
      <p className='md:text-xl font-bold text-md uppercase'>Divyam Singh</p>
     <img 
      src={"https://ik.imagekit.io/x5uuebk4v/dashboard/divyam-image-removebg.png?updatedAt=1709478705775"}
      className=' max-h-[2.5rem] max-w-[2.5rem] rounded-full'
      alt="" />
   </div>
   <ul className=' md:flex font-bold hidden justify-around items-center  gap-12'>
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
   </ul>
   <HamBurger/>
    </div>
  )
}

export default NavBar
