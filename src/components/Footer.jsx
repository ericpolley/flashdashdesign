import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
    
  return (
     
    <div className='bg-orange-200 shadow-md sticky mt-24 border-b-4 border-t-4 border-orange-500 flex items-center justify-center flex-row'>
        {/* HEADER */}
        
    <div className='w-[70%]  md:w-[60vw]  h-32  '>
   {/* NAV BAR */}
        <div className='w-full flex flex-row items-center justify-center mb-4 font-semibold'>

            {/* NAV BAR LOGO */}
            <div className='mt-4 text-sm lg:text-2xl w-[45%]'>
            <Link to="/" className=' mr-3 focus:text-orange-400 text-orange-700 hover:text-orange-300'>
                <span className=' text-orange-700 hover:text-orange-300'>flashDASHDesign</span>
                <span className=' text-orange-900 hover:text-orange-300'>.com</span>
                </Link>        
                </div> 

  



{/* NAV BAR sm and larger */}

            <p className='mt-8 w-[55%] ml-6 lg:ml-40 text-right'>
                <Link to="/contact" className='md:text-lg  text-xs mr-2 md:mr-4 focus:text-orange-400 text-orange-700 hover:text-orange-300'><span>Contact</span></Link>    
               
                
            </p>
            </div>
            <p className=' w-full text-xs text-orange-400 w-full text-center pt-3 pb-3'>This website and it's content belong to Eric Polley 2023.</p>
        </div>
        
        </div>
  ) }
