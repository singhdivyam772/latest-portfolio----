import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <div className=' flex flex-col justify-evenly items-center w-[100vw] min-h-[52vh] bg-black text-white  '>
      <div className=' md:w-[100%] md:flex h-[25vh]  justify-around items-center'>

        <div className=' max-w-[40rem] h-[100%] md:pl-0 pl-6 flex flex-col '>
          <h2 className=' uppercase leading-10 text-xl font-bold'>
            Divyam Singh
          </h2>
          <p className=' text-left max-w-[70%]'>
            As a frontend web developer, I specialize in crafting user-friendly interfaces that drive the success of websites and web applications. With expertise in HTML, CSS, and JavaScript frameworks like React or Vue.js.
          </p>
        </div>

        <div className=' flex flex-col w-[20rem] h-[100%] pb-6 md:pl-0 pl-6'>
          <h2 className=' uppercase leading-10 text-xl font-bold'>
            Social Media
          </h2>
          <ul className='flex mt-2 justify-start gap-10 items-center w-[100%]'>
            <li className=' uppercase text-3xl hover:bg-slate-400 rounded-md w-auto h-auto p-0 cursor-pointer'><FaLinkedin /></li>
            <li className=' uppercase text-3xl hover:bg-slate-400 rounded-md w-auto h-auto p-0 cursor-pointer'><FaGithub /></li>
            <li className=' uppercase text-3xl hover:bg-slate-400 rounded-md w-auto h-auto p-0 cursor-pointer'><BsInstagram /></li>
            <li className=' uppercase text-3xl hover:bg-slate-400 rounded-md w-auto h-auto p-0 cursor-pointer'><FaLinkedin /></li>
          </ul>
        </div>
      </div>

      <div className=' w-[85%] md:flex hidden border-[1px] bg-slate-400 rounded-md'></div>
      <p className=' md:w-full h-8 md:flex md:py-0 py-9 justify-center items-center '>
        © Copyright 2024 . Made by Divyam Singh
      </p>
    </div>
  )
}

export default Footer
