import React from 'react'
import HamBurger from './HamBurger'

const NavBar = () => {
  return (
    <div className=' w-[100vw] h-[10vh] border-2 border-red-950 flex justify-between px-4 items-center'>

   <div className=' flex justify-around items-center gap-3 max-w-[460px] border-2 '>
      <p>this is image side</p>
      <p className='md:text-2xl md:font-extrabold text-sm'>Divyam Singh</p>
   </div>
   <ul className=' md:flex hidden justify-center border-2 border-red-400 items-center  gap-3'>
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
