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
      id: 8,
      image: 'https://ik.imagekit.io/x5uuebk4v/portfolio/Github.svg?updatedAt=1709531510881',
      name: 'git',
      width: 4,
      height: 4
    },
    {
      id: 9,
      image: 'https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png',
      name: 'Nodejs',
      width: 4,
      height: 4
    },
    {
      id: 9,
      image: 'https://1.bp.blogspot.com/-jkSmywQ57sA/Wer3KKSqgaI/AAAAAAAACc4/07TexMsBBI4v7WlVKo76YvxM3TvrMxIdwCLcBGAs/s640/express.js.png',
      name: 'expressjs',
      width: 4,
      height: 4
    },
    {
      id: 9,
      image: 'https://thesmartinvestor.com.sg/wp-content/uploads/2021/07/MongoDB_Logo.jpg',
      name: 'mongodb',
      width: 4,
      height: 4
    }
]

  return (
    <div className=' flex justify-center items-center flex-col w-[100vw] min-h-[55rem] bg-slate-100 md:mt-0 '>
      <div className=' flex flex-col justify-center items-center gap-2 '>
        <h2 className=' uppercase font-extrabold md:text-4xl text-2xl text-center'>About Me</h2>
        <div className=' h-2 w-16 bg-[#7843E9] rounded-lg'></div>
        <p className=' md:px-[16rem] px-6 text-center text-slate-600 font-medium md:text-xl text-lg leading-loose py-7'>
          Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
        </p>
      </div>     

      <div className=' flex md:flex-nowrap flex-wrap justify-between min-h-[30rem] w-[100vw] '>
        
        {/* left */}
        <div className=' flex flex-col gap-2 md:w-[35rem] md:pl-[6rem] md:px-0 px-[2rem] md:mx-[5rem]'>
          <h2 className='  text-black text-xl font-bold leading-10'>Get To know More!!</h2>
          <p className=' text-slate-500 text-lg leading-8'>
          Hello everyone! I'm Divyam Singh, a MERN Stack Developer at INDIAN ROBOTICS SOLUTION (IRS). With expertise in 
          JavaScript, HTML, CSS (including Tailwind CSS), and React for frontend development, I specialize in crafting modern 
          and responsive user interfaces. On the backend, I excel in Node.js, 
          Express.js, and MongoDB, ensuring efficient data management and robust server-side logic. Eager to tackle projects!
          </p>
         
          <p className='  text-slate-500 text-lg leading-8'>
          Proficient in React with expertise in functional components, state management, and React Hooks for optimized logic. 
          Experienced in Redux for global state management and RTK query for API fetching, ensuring data consistency.
           Skilled in JavaScript, including ES6 essentials, for seamless DOM manipulation in dynamic web applications.
          </p>
          <p className='  text-slate-500 text-lg leading-8'>
            Proficient in Node.js, Express, and MongoDB, I specialize in building robust backend systems. Leveraging my expertise, 
            I ensure efficient data management, create scalable APIs, and ensure robust security with authentication, 
            authorization, and 
            validation mechanisms. My proficiency in these technologies enables the development of high-performance web 
            applications.
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
