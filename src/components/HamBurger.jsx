import React, { useState } from 'react'

const HamBurger = (props) => {
   const scrollToProject = props.scrollToProject
   const scrollToAbout = props.scrollToAbout
   const scrollToHome = props.scrollToHome
   const scrollToContact = props.scrollToContact
   const [hamburgerState, setHamburgerState] = useState(true);
   const navData = props.navData;
   const openCloseHamburger = () => {
      setHamburgerState(!hamburgerState);
   }
   return (
      <div className=' md:hidden relative'>
         <div
            className=' flex flex-col gap-1 md:hidden relative'
            onClick={openCloseHamburger}>
            {hamburgerState ? (
               <div className={`flex flex-col gap-1 md:hidden cursor-pointer transition-all
             `}
               >
                  <div className='w-[30PX] h-1 bg-blue-950'></div>
                  <div className='w-[30PX] h-1 bg-blue-950'></div>
                  <div className='w-[30PX] h-1 bg-blue-950'></div>
               </div>
            ) : (
               <div className=' flex flex-col gap-1 md:hidden cursor-pointer  transition-all'
               >
                  <div className='w-[30PX] h-1 bg-red-950 rotate-45 absolute top-0 right-1'></div>
                  <div className='w-[30PX] h-1 bg-red-950 -rotate-45 absolute right-1 transition-all'></div>
               </div>
            )}
         </div>
         <div className={`${hamburgerState ? 'hidden' : 'flex'} absolute flex-col justify-center items-center w-[47rem] h-[14rem] bg-white top-[3.8rem] bottom-0 left-[-46rem]
            border-[1px] border-slate-500 transition-all `}>
            {navData?.map((data) => (
               <div key={data?.id}
                  className='w-full h-[25%] border-[1px] flex justify-end items-center pr-6'>

                  <p onClick={data?.click}>
                     {data?.id === 5 ? '' : data?.name}
                  </p>
                  <a className={`${data?.id === 5 ? 'flex' : 'hidden'}`}
                     download={data?.download}
                     href={data?.download}>{data?.name}</a>
               </div>
            ))}
         </div>
      </div>

   )
}

export default HamBurger
