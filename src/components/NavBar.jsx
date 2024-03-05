import React from 'react';
import HamBurger from './HamBurger'
const NavBar = (props) => {
  const scrollToProject = props.scrollToProject
  const scrollToAbout = props.scrollToAbout
  const scrollToHome = props.scrollToHome
  const scrollToContact = props.scrollToContact

  const navData = [
    {
      id: 1,
      name: 'Home',
      click: (scrollToHome)
    },
    {
      id: 2,
      name: 'About',
      click: (scrollToAbout)
    },
    {
      id: 3,
      name: 'Project',
      click: (scrollToProject)
    },
    {
      id: 4,
      name: 'Contact',
      click: (scrollToContact)
    },
    {
      id: 5,
      name: 'Resume',
      download: 'https://ik.imagekit.io/x5uuebk4v/portfolio/DivyamResume.pdf?updatedAt=1709634068553'
    }
  ]
  return (
    <div className=' relative'>
      <div className=' w-[100vw] h-[15vh]  flex justify-between px-4 fixed top-0 bottom-0 right-0 bg-white items-center'>

        <div
          onClick={scrollToHome}
          className=' flex justify-around items-center gap-3 max-w-[460px] cursor-pointer'>
          <p className='md:text-lg font-bold text-md uppercase text-slate-500 pl-2'>Divyam Singh</p>
          <img
            src={"https://ik.imagekit.io/x5uuebk4v/dashboard/divyam-image-removebg.png?updatedAt=1709478705775"}
            className=' max-h-[2.5rem] max-w-[2.5rem] rounded-full'
            alt="" />
        </div>
        <ul className=' md:flex font-bold hidden justify-around items-center  gap-6 text-slate-500'>
          {navData?.map((data) => (
          <li
            key={data?.id}
            className=' cursor-pointer'
            onClick={data?.click}>{data?.id === 5 ? '' : data?.name}
          </li>
          ))}
        </ul>
        <HamBurger
          scrollToHome={scrollToHome}
          scrollToAbout={scrollToAbout}
          scrollToProject={scrollToProject}
          scrollToContact={scrollToContact}
          navData={navData}
        />
      </div>
    </div>
  )
}

export default NavBar
