import React from 'react'

export default function Videos() {
  return (
    <div className='w-full text-center'>
      <h1 className='text-2xl font-medium'>News</h1>

      <div className='flex flex-col lg:flex-row w-full justify-center items-center'>
        {/* CARD START */}
      <div className='flex flex-col w-full items-center text-black bg-slate-400  rounded-xl border-4 border-slate-500  mt-4'>
        <p className='text-2xl mb-4 lg:mt-4'>Game News and New Games</p>
        <iframe className="shadow-xl mb-4 w-[82vw] h-[280px] md:h-[350px] lg:w-[35vw] lg:h-[32vh] border-8 rounded-xl border-slate-500" width="560" height="235" src="https://www.youtube.com/embed/videoseries?list=PLce5_YZyrUw46a7s0tvvKl7MOXa89EOd3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
        <p className='text-md lg:mb-12 mt-4 pt-2 pr-5 pl-5 pb-5 h-[100px]'>
        These are games I have created and/or am creating. <br />
         Videos include Game Play and Behind The Scenes explaining <br /> 'How it's made'
         </p>
      </div>
      {/* CARD END */}

{/* CARD START */}
      <div className='flex flex-col w-full  items-center text-black bg-slate-400 lg:mr-6 rounded-xl border-4 border-slate-500 mt-4'>
        <p className='text-2xl mb-4 mt-4'>Vlog Videos</p>
        <iframe className="shadow-xl mb-4 w-[85vw] h-[280px] md:h-[350px] md:w-[82vw] lg:w-[35vw]  lg:h-[32vh] border-8 rounded-xl border-slate-500" width="560" height="235" src="https://www.youtube.com/embed/videoseries?list=PLce5_YZyrUw7dNEL7F1T4kxAp0mMuattO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
        <p className='text-md lg:mb-12 mt-4 pt-2 pr-5 pl-5 pb-5 h-[100px]'>This is my monthly video update on my progress. <br />
         The focus of these videos has 
        been on <br /> Software Development.</p>
      </div>
      {/* CARD END */}



      

      </div>

    </div>
  )
}
