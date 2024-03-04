import React from 'react'

const Contact = () => {
  return (
    <div className=' flex justify-start items-center flex-col w-[100vw] h-[40rem] bg-slate-100 md:mt-0 py-6'>
      <div className=' flex flex-col justify-center items-center gap-2 '>
        <h2 className=' uppercase font-extrabold md:text-4xl text-2xl text-center'>Contact</h2>
        <div className=' h-2 w-16 bg-[#7843E9] rounded-lg'></div>
        <p className=' md:px-[10rem] px-6 text-center text-slate-500 text-xl'>
        Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
        </p>
      </div> 
      <div className=' flex flex-col justify-evenly  w-[74vw] h-[100%] px-[1.5rem] shadow-xl mt-4 bg-white rounded-lg'>
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
      </div> 

      
    </div>
  )
}

export default Contact
