import React from 'react'

export default function Tutorials() {
  return (
    <div className='w-full text-center'>
      <h1 className='text-2xl font-medium'>Tutorial Videos</h1>

      <div className='flex flex-col lg:flex-row w-full justify-center items-center'>

{/* CARD START */}
      <div className='flex flex-col w-full  items-center text-black bg-orange-400 lg:mr-6 rounded-xl border-4 border-orange-500 mt-4'>
        <p className='text-2xl mb-4 mt-4'>Blender Tutorials</p>
        <iframe className="shadow-xl mb-4 w-[85vw] h-[280px] md:h-[350px] md:w-[82vw] lg:w-[35vw]  lg:h-[32vh] border-8 rounded-xl border-orange-500" width="560" height="235" src="https://www.youtube.com/embed/videoseries?list=PLce5_YZyrUw5UZ4t0586vz3p1RqTKTJPP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
        <p className='text-md lg:mb-12 mt-4 pt-2 pr-5 pl-5 pb-5 h-[100px]'>How to use Blender! Tutorials for Beginner to Advanced users. <br /> Follow along with me as I explain step by step how to: <br /> Use Blender</p>
      </div>
      {/* CARD END */}
{/* CARD START */}
      <div className='flex flex-col w-full items-center text-black bg-orange-400  rounded-xl border-4 border-orange-500  mt-4'>
        <p className='text-2xl mb-4 lg:mt-4'>Software Development Tutorials</p>
        <iframe className="shadow-xl mb-4 w-[82vw] h-[280px] md:h-[350px] lg:w-[35vw] lg:h-[32vh] border-8 rounded-xl border-orange-500" width="560" height="235" src="https://www.youtube.com/embed/videoseries?list=PLce5_YZyrUw7cHSt2HV5esEjQJKOG2GHG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
        <p className='text-md lg:mb-12 mt-4 pt-2 pr-5 pl-5 pb-5 h-[100px]'>
        <a href="http://javascript.ericpolley.com" className='md:text-lg font-medium text-xs mr-2 md:mr-4 focus:text-blue-400 text-blue-700 hover:text-blue-300' target="_blank" rel="noopener noreferrer">Check out the full Javascript Tutorial Page</a>
     <br />
        Some of my tutorials are very long, and some tutorials are 80 seconds. <br />
        I decided to create 80 second tutorials in order to challenge myself by relaying useful information quickly that may be indexed for others and my own future use. <br />
    </p>
      </div>
      {/* CARD END */}



      

      </div>

    </div>
  )
}
