import React from 'react';
import HamBurger from './HamBurger'
const NavBar = () => {
  return (
   <div className=' relative'>
     <div className=' w-[100vw] h-[15vh]  flex justify-between px-4 fixed top-0 bottom-0 right-0 bg-white items-center'>

<div className=' flex justify-around items-center gap-3 max-w-[460px]'>
   <p className='md:text-lg font-bold text-md uppercase text-slate-500'>Divyam Singh</p>
  <img 
   src={"https://ik.imagekit.io/x5uuebk4v/dashboard/divyam-image-removebg.png?updatedAt=1709478705775"}
   className=' max-h-[2.5rem] max-w-[2.5rem] rounded-full'
   alt="" />
</div>
<ul className=' md:flex font-bold hidden justify-around items-center  gap-6 text-slate-500'>
   <li>Home</li>
   <li>About</li>
   <li>Projects</li>
   <li>Contact</li>
   <li>Resume</li>
</ul>
<HamBurger/>
 </div>
   </div>
  )
}

export default NavBar
