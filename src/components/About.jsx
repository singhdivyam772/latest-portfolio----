import React from 'react'


const About = () => {

  const imageDetail = [
    {
    id: 1,
    image: 'https://ik.imagekit.io/x5uuebk4v/portfolio/HTML.png?updatedAt=1709531511134',
    name: 'html',
    width: 4,
    height: 4
    },
    {
      id: 2,
      image: 'https://ik.imagekit.io/x5uuebk4v/portfolio/CSS.png?updatedAt=1709531511315',
      name: 'css',
      width: 4,
      height: 4
      },
    {
      id: 3,
      image: 'https://ik.imagekit.io/x5uuebk4v/portfolio/Javascript.svg?updatedAt=1709531511079',
      name: 'javascript',
      width: 4,
      height: 4
    },
    {
      id: 4,
      image: 'https://ik.imagekit.io/x5uuebk4v/portfolio/React.png?updatedAt=1709531511010',
      name: 'react',
      width: 4,
      height: 4
    },
    {
      id: 5,
      image: 'https://ik.imagekit.io/x5uuebk4v/portfolio/Redux.svg?updatedAt=1709531511097',
      name: 'redux',
      width: 4,
      height: 4
    },
    {
      id: 6,
      image: 'https://ik.imagekit.io/x5uuebk4v/portfolio/Tailwind.png?updatedAt=1709531514149',
      name: 'tailwind',
      width: 4,
      height: 4
    },
    {
      id: 7,
      image: 'https://ik.imagekit.io/x5uuebk4v/portfolio/MaterialUI.svg?updatedAt=1709531511057',
      name: 'materialui',
      width: 4,
      height: 4
    },
    {
      id: 7,
      image: 'https://ik.imagekit.io/x5uuebk4v/portfolio/Github.svg?updatedAt=1709531510881',
      name: 'git',
      width: 4,
      height: 4
    }
]

  return (
    <div className=' flex justify-center items-center flex-col w-[100vw] min-h-[40rem] bg-slate-100 md:mt-0 '>
      <div className=' flex flex-col justify-center items-center gap-2 '>
        <h2 className=' uppercase font-extrabold md:text-4xl text-2xl text-center'>About Me</h2>
        <div className=' h-2 w-16 bg-[#7843E9] rounded-lg'></div>
        <p className=' md:px-[10rem] px-6 text-center text-slate-500 text-lg'>
          Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
        </p>
      </div>     

      <div className=' flex md:flex-nowrap flex-wrap justify-between min-h-[30rem] w-[100vw] '>
        
        {/* left */}
        <div className=' flex flex-col gap-2 md:w-[35rem] md:pl-[5rem] md:px-0 px-[2rem] md:mx-[5rem]'>
          <h2 className='  text-black text-xl font-bold'>Get To know More!!</h2>
          <p className=' text-slate-500 text-lg'>
            Hello everyone! I'm Divyam Singh, a passionate fresher in web development. Proficient in JavaScript, HTML, CSS (Tailwind), and modern frontend stack. Ready to dive into exciting projects!
          </p>
          <p className='  text-slate-500 text-lg'>
            I'm skilled in JavaScript, proficient in ES6 essentials like arrow functions, destructuring, and promises. Experienced in DOM manipulation for creating dynamic web apps responsive to user interactions.
          </p>
          <p className='  text-slate-500 text-lg'>
            Experienced in React, proficient in functional components, state management, and React Hooks for optimized component logic. Familiar with Redux for global state management, ensuring data consistency and simplifying debugging.
          </p>
        </div>

        {/* right */}
        <div className=' flex flex-col justify-start items-start md:gap-8 md:w-[30rem] min-h-[20rem] md:pr-[5rem] md:px-0 px-[2rem]  '>
        <h2 className='  text-black text-xl font-bold md:pl-5 md:my-0 my-3'>My Tech Skill!!</h2>
        <div className=' flex flex-wrap justify-center items-center gap-8'>
          
          {imageDetail?.map((data)=>(
            <div
              key={data?.id} 
              className=' flex flex-col  items-center'>
            <img 
                src={data?.image} 
                loading='lazy'
                className={`max-w-[4rem] h-[4rem]`}  />
            <p className=' text-sm font-bold text-slate-500 uppercase'>{data?.name}</p>
          </div>
          ))}
        </div>
        </div>
       
      </div> 
    </div>
  )
}

export default About
