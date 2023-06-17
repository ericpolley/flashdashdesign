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
        <img src="https://cdn0.iconfinder.com/data/icons/work-from-home-and-jobs-outline-style/512/animation-cartoon-design-character-Animator-3-256.png"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover object-center hover:bg-orange-400 rounded-full cursor-pointer  border-4 border-t-8 border-black'
         alt="Linkedin"></img></Link>
         {/* ICON End */}
         <p className=" lg-text-xl md-text-sm  font-semibold">Animation</p> </div>
                          {/* ICON */}
      {/* ICON */}
      <div class="flex-col">
      <Link to="/game">
        <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-game-controller-b-256.png"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover hover:bg-orange-400 rounded-full cursor-pointer border-4 border-t-8 border-black'
         alt="Linkedin"></img></Link>
         {/* ICON End */}
         <p className=" lg-text-xl md-text-sm  font-semibold">Games</p> </div>
         {/* ICON */}
         <div class="flex-col">
      <Link to="/software">
        <img src="https://cdn1.iconfinder.com/data/icons/jumpicon-marketing-glyph/32/-_Web-Page-Internet-Website-Browser-Window-256.png"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover object-center hover:bg-orange-400 rounded-full cursor-pointer  border-4 border-t-8 border-black'
         alt="Linkedin"></img></Link>
         {/* ICON End */}
         <p className=" lg-text-xl md-text-sm font-semibold">Web Dev</p> </div>

         {/* ICON */}
         <div class="flex-col justify-center">
                                   <Link to="/blog">
        <img src="https://cdn1.iconfinder.com/data/icons/internet-of-things-24/160/blog-256.png"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover object-center hover:bg-orange-400 rounded-full cursor-pointer  border-4 border-t-8 border-black'
         alt="Linkedin"></img></Link>
         {/* ICON End */}
         <p className=" lg-text-xl md-text-sm  font-semibold">Blog</p> </div>
              {/* ICON */}   
                          <div class="flex-col">
      <Link to="/tutorials">
        <img src="https://cdn1.iconfinder.com/data/icons/education-1-42/48/26-256.png"
        className='lg:w-32 lg:h-32 sm:w-28 w-16 h-auto object-cover object-center hover:bg-orange-400 rounded-full cursor-pointer  border-4 border-t-8 border-black'
         alt="Linkedin"></img></Link>
         {/* ICON End */}
         <p className=" lg-text-xl md-text-sm  font-semibold">Tutorials</p> </div>









         </div>
<div className='flex flex-col md:flex-row'>
         
        
         </div>


   
   
     
    </div>
  )
}
