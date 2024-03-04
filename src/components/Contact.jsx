import React from 'react'

const Contact = () => {
  return (
    <div className=' flex justify-center items-center flex-col w-[100vw] h-[60rem] bg-slate-100 md:mt-0 py-6'>
      <div className=' flex flex-col justify-center items-center gap-2 '>
        <h2 className=' uppercase font-extrabold md:text-4xl text-2xl text-center'>Contact</h2>
        <div className=' h-2 w-16 bg-[#7843E9] rounded-lg'></div>
        <p className=' md:px-[16rem] px-6 text-center text-slate-600 font-medium md:text-xl text-lg leading-loose py-7'>
        Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
        </p>
      </div> 
      <div className=' flex flex-col justify-evenly w-[76vw] h-[100%] md:px-[4.5rem] px-4 shadow-xl mt-4 bg-white rounded-lg'>
        <label htmlFor="name" className='flex flex-col gap-1 '>
          <p className=' capitalize text-md tracking-wider font-semibold text-slate-500 pl-1'>name</p>
        <input type="text" id='name' placeholder='Enter your name' className=' bg-slate-200 capitalize h-12 pl-2 rounded-md'/>
        </label>

        <label htmlFor="email" className='flex flex-col gap-1 '>
          <p className=' capitalize text-md tracking-wider font-semibold text-slate-500 pl-1'>email</p>
        <input type="email" id='email' placeholder='Enter your email' className=' bg-slate-200 capitalize h-12 pl-2 rounded-md'/>
        </label>

        <label htmlFor="message" className='flex flex-col gap-1'>
          <p className='capitalize text-md tracking-wider font-semibold text-slate-500 pl-1'>Message</p>
          <textarea id='message' placeholder='Enter your message' rows='8' className='bg-slate-200 capitalize pl-2 rounded-md' />
        </label>

        <button 
        className=' max-w-[10rem] bg-[#7843E9] px-auto py-3 rounded-md uppercase font-bold text-white tracking-wider mt-6 transform transition-transform hover:scale-110'>
            Contact
        </button>
      </div> 

      
    </div>
  )
}

export default Contact
