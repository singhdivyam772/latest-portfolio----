import React from 'react'

const Projects = () => {
  return (
    <div className=' flex justify-center items-center flex-col w-[100vw] min-h-[40rem] bg-slate-100 md:mt-0 py-6'>
      <div className=' flex flex-col justify-center items-center gap-2 '>
        <h2 className=' uppercase font-extrabold md:text-4xl text-2xl text-center'>Projects</h2>
        <div className=' h-2 w-16 bg-[#7843E9] rounded-lg'></div>
        <p className=' md:px-[10rem] px-6 text-center text-slate-500 text-lg'>
          Here you will find some of the personal and clients projects that I created with each project containing its own case study
        </p>
      </div>

      {/* project1 */}
      <div className=' flex md:flex-nowrap flex-wrap justify-between min-h-[20rem] w-[100vw] pt-16 '>
        {/* left */}
        <div className=' flex justify-center items-center flex-col md:mt-[-3.3rem] pl-[5rem] md:ml-[5rem]'>
          <img src="https://ik.imagekit.io/x5uuebk4v/portfolio/3366845.jpg?updatedAt=1709554368135"
            className=' md:w-[30rem] md:h-[30rem] w-[20rem] h-[20rem]'
            loading='lazy' />
        </div>

        {/* right */}
        <div className=' flex flex-col md:justify-start justify-center md:items-start items-center md:gap-8 md:w-[30rem] h-[100%] md:pr-[5rem] md:px-0 px-[2rem]  '>
          <h2 className='  text-black text-3xl font-extrabold md:my-0 my-3'>Dopefolio</h2>
          <p className=' flex flex-wrap justify-center items-center text-slate-500 text-lg gap-8'>
            Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech
            sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally
          </p>
          <button className=' bg-[#7843E9] px-5 py-2 rounded-md uppercase font-bold mb-6 text-white tracking-wider mt-6 transform transition-transform hover:scale-110 '>
            know more
          </button>
        </div>
      </div>

      {/* project2 */}
      <div className=' flex md:flex-nowrap flex-wrap justify-between min-h-[20rem] w-[100vw] pt-16 '>
        {/* left */}
        <div className=' flex justify-center items-center flex-col md:mt-[-3.3rem] pl-[5rem] md:ml-[5rem]'>
          <img src="https://ik.imagekit.io/x5uuebk4v/portfolio/3366845.jpg?updatedAt=1709554368135"
            className=' md:w-[30rem] md:h-[30rem] w-[20rem] h-[20rem]'
            loading='lazy' />
        </div>

        {/* right */}
        <div className=' flex flex-col md:justify-start justify-center md:items-start items-center md:gap-8 md:w-[30rem] h-[100%] md:pr-[5rem] md:px-0 px-[2rem]  '>
          <h2 className='  text-black text-3xl font-extrabold md:my-0 my-3'>Dopefolio</h2>
          <p className=' flex flex-wrap justify-center items-center text-slate-500 text-lg gap-8'>
            Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech
            sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally
          </p>
          <button className=' bg-[#7843E9] px-5 py-2 rounded-md uppercase font-bold mb-6 text-white tracking-wider mt-6 transform transition-transform hover:scale-110 '>
            know more
          </button>
        </div>
      </div>

      {/* project3 */}
      <div className=' flex md:flex-nowrap flex-wrap justify-between min-h-[20rem] w-[100vw] pt-16 '>
        {/* left */}
        <div className=' flex justify-center items-center flex-col md:mt-[-3.3rem] pl-[5rem] md:ml-[5rem]'>
          <img src="https://ik.imagekit.io/x5uuebk4v/portfolio/3366845.jpg?updatedAt=1709554368135"
            className=' md:w-[30rem] md:h-[30rem] w-[20rem] h-[20rem]'
            loading='lazy' />
        </div>

        {/* right */}
        <div className=' flex flex-col md:justify-start justify-center md:items-start items-center md:gap-8 md:w-[30rem] h-[100%] md:pr-[5rem] md:px-0 px-[2rem]  '>
          <h2 className='  text-black text-3xl font-extrabold md:my-0 my-3'>Dopefolio</h2>
          <p className=' flex flex-wrap justify-center items-center text-slate-500 text-lg gap-8'>
            Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech
            sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally
          </p>
          <button className=' bg-[#7843E9] px-5 py-2 rounded-md uppercase font-bold mb-6 text-white tracking-wider mt-6 transform transition-transform hover:scale-110 '>
            know more
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects
