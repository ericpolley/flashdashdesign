import React from 'react'
import { Link } from 'react-router-dom'
import ImgCar from '../components/imgcar'

export default function Home() {
  return (
    <div className='w-full text-center flex flex-col items-center justify-center '>
      <h1 className='text-2xl font-medium mt-4 hidden'>Eric Polley - Software Engineer, Animator, Game Designer, Jack of all hats</h1>

       
<div className='flex flex-col lg:flex-row justify-center items-center w-full'>
      <iframe className="shadow-xl mb-4 w-[85vw] h-[290px] md:h-[350px] md:w-[70vw] lg:w-[50vw] lg:h-[28vw] border-8 rounded-xl border-orange-600" width="560" height="235" src="https://www.youtube.com/embed/LMcQgn61gfE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
     
      <ImgCar />
   
      </div>
      <div className='flex flex-row justify-center items-center md:space-x-6 space-x-2 mb-4 mt-4'>



             {/* ICON LINKS TO PORTFOLIOS */}

          {/* ICON */}
          <div class="flex-col">
      <Link to="/animation">
        <img src="https://github.com/ericpolley/flashdashdesign/blob/main/src/images/1motion.png?raw=true"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover object-center hover:bg-orange-400 rounded-full cursor-pointer  border-4 border-t-8 border-orange-600'
         alt="Linkedin"></img></Link>
         {/* ICON End */}
         <p className=" lg-text-xl md-text-sm  font-semibold">Animation</p> </div>
         {/* ICON */}
         <div class="flex-col">
      <Link to="/graphics">
        <img src="https://github.com/ericpolley/flashdashdesign/blob/main/src/images/1art.png?raw=true"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover object-center hover:bg-orange-400 rounded-full cursor-pointer  border-4 border-t-8 border-orange-600'
         alt="Linkedin"></img></Link>
         {/* ICON End */}
         <p className=" lg-text-xl md-text-sm  font-semibold">Illustration</p> </div>
                          {/* ICON */}
      {/* ICON */}
      <div class="flex-col">
      <Link to="/game">
        <img src="https://github.com/ericpolley/flashdashdesign/blob/main/src/images/1game.png?raw=true"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover hover:bg-orange-400 rounded-full cursor-pointer border-4 border-t-8 border-orange-600'
         alt="Linkedin"></img></Link>
         {/* ICON End */}
         <p className=" lg-text-xl md-text-sm  font-semibold">Games</p> </div>
         {/* ICON */}
         <div class="flex-col">
      <Link to="/software">
        <img src="https://github.com/ericpolley/flashdashdesign/blob/main/src/images/1web.png?raw=true"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover object-center hover:bg-orange-400 rounded-full cursor-pointer  border-4 border-t-8 border-orange-600'
         alt="Linkedin"></img></Link>
         {/* ICON End */}
         <p className=" lg-text-xl md-text-sm font-semibold">Web Dev</p> </div>

         {/* ICON */}
         <div class="flex-col justify-center">
                                   <Link to="/blog">
        <img src="https://github.com/ericpolley/flashdashdesign/blob/main/src/images/1blog.png?raw=true"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover object-center hover:bg-orange-400 rounded-full cursor-pointer  border-4 border-t-8 border-orange-600'
         alt="Linkedin"></img></Link>
         {/* ICON End */}
         <p className=" lg-text-xl md-text-sm  font-semibold">Blog</p> </div>
              {/* ICON */}   
                          <div class="flex-col">
      <Link to="/tutorials">
        <img src="https://github.com/ericpolley/flashdashdesign/blob/main/src/images/1tutorial.png?raw=true"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover object-center hover:bg-orange-400 rounded-full cursor-pointer  border-4 border-t-8 border-orange-600'
         alt="Linkedin"></img></Link>
         {/* ICON End */}
         <p className=" lg-text-xl md-text-sm  font-semibold">Tutorials</p> </div>









         </div>
<div className='flex flex-col md:flex-row'>
         
        
         </div>


   
   
     
    </div>
  )
}
