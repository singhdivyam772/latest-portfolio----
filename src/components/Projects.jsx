import React from 'react'
import { Link } from 'react-router-dom'
const Projects = () => {

  const projects = [
    {
      id: 1,
      name: 'Weather App',
      description: `Developed a weather application using JavaScript that displays real-time weather data. Utilized a third- 
      party API to fetch weather information based on user input.`,
      image: `https://ik.imagekit.io/x5uuebk4v/portfolio/3366845.jpg?updatedAt=1709554368135`,
      siteLink: 'https://singhdivyam772.github.io/Weather-App/'
    },
    // {
    //   id: 2,
    //   name: 'Ed-Tech',
    //   description: `Welcome to Ed-tech, a React-based edtech platform designed to engage and educate users through interactive quizzes. With a user-friendly interface and a range of subjects to explore`,
    //   image: `https://ik.imagekit.io/x5uuebk4v/portfolio/20944385.jpg?updatedAt=1709631859471`,
    //   siteLink: 'https://singhdivyam772.github.io/edtech-project/',
    // },
    {
      id: 3,
      name: 'DroneServiceCenter',
      description: `Redesigned and developed Drone Service Center's website UI using React.js and Vanilla CSS. 
      Implemented responsive design for multi-device compatibility. Refactored with Next.js and Tailwind CSS for 
      improved performance. Collaborated with design team for mockup translation into visually appealing UI 
      components. `,
      image: `https://ik.imagekit.io/m4aja7hui/DSC/Image/images/icon/Logo_fjopbe.png?updatedAt=1699590305441`,
      siteLink: 'https://www.droneservicecenter.in/'
    },
    {
      id: 4,
      name: 'Digital library',
      description: `Redesigned and developed Drone Service Center's website UI using React.js and Vanilla CSS. 
      Implemented responsive design for multi-device compatibility. Refactored with Next.js and Tailwind CSS for 
      improved performance. Collaborated with design team for mockup translation into visually appealing UI 
      components. `,
      image: `https://ik.imagekit.io/x5uuebk4v/Digital-Library/2143985.jpg?updatedAt=1709649193098`,
      siteLink: 'https://super-lebkuchen-8ea5ac.netlify.app/'
    },
]
  return (
    <div className=' flex justify-center items-center flex-col w-[100vw] min-h-[40rem] bg-slate-100 md:mt-0 py-6'>
      <div className=' flex flex-col justify-center items-center gap-2 '>
        <h2 className=' uppercase font-extrabold md:text-4xl text-2xl text-center'>Projects</h2>
        <div className=' h-2 w-16 bg-[#7843E9] rounded-lg'></div>
        <p className=' md:px-[16rem] px-6 text-center text-slate-600 font-medium md:text-xl text-lg leading-loose py-7'>
          Here you will find some of the personal and clients projects that I created with each project containing its own case study
        </p>
      </div>

      {/* project1 */}
      { projects?.map((data)=>(
         <div 
         key={data?.id}
         className=' flex md:flex-nowrap flex-wrap justify-between min-h-[20rem] w-[100vw] pt-16 '>
         {/* left */}
         <div className=' flex justify-center items-center flex-col md:mt-[-3.3rem] pl-[3rem] md:ml-[5rem]'>
           <img src={data?.image}
             className=' md:w-[30rem] md:h-[30rem] w-[20rem] h-[20rem]'
             loading='lazy' />
         </div>
 
         {/* right */}
         <div className=' flex flex-col md:justify-start justify-center md:items-start items-center md:gap-8 md:w-[30rem] h-[100%] md:pr-[5rem] md:px-0 px-[2rem]  '>
           <h2 className='  text-black text-3xl font-extrabold md:my-0 my-3'>{data?.name}</h2>
           <p className=' flex flex-wrap justify-center items-center text-slate-500 text-lg gap-8'>
             {data?.description}
           </p>
           <button className=' bg-[#7843E9] px-5 py-2 rounded-md uppercase font-bold mb-6 text-white tracking-wider mt-6 '>
             <Link to={`${data?.siteLink}`} target="_blank">visit site</Link>
           </button>
         </div>
       </div>
      ))}   
    </div>
  )
}

export default Projects
