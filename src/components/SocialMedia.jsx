import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className=' relative'>
      
      <ul className=' hidden fixed md:flex flex-col justify-around items-center min-w-8 px-2 h-[42vh] py-2 shadow-xl rounded-md bg-white top-[13.5rem] left-0 '>
         <li className=' uppercase text-3xl hover:bg-slate-400 rounded-md w-auto h-auto p-2 cursor-pointer'><FaLinkedin /></li>
         <li className=' uppercase text-3xl hover:bg-slate-400 rounded-md w-auto h-auto p-2 cursor-pointer'><FaGithub /></li>
         <li className=' uppercase text-3xl hover:bg-slate-400 rounded-md w-auto h-auto p-2 cursor-pointer'><BsInstagram /></li>
         <li className=' uppercase text-3xl hover:bg-slate-400 rounded-md w-auto h-auto p-2 cursor-pointer'><FaLinkedin /></li>
      </ul>

    </div>
  )
}

export default SocialMedia
