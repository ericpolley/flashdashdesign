import React from 'react'
import ImgCar from '../components/imgcar'
import ImgCarb from '../components/imgcarb'

export default function Graphics() {
  return (
    <div className='w-full text-center'>
      <h1 className='text-2xl font-medium'>Graphics</h1>

      <div className='flex flex-col lg:flex-row w-full justify-center items-center'>

{/* CARD START */}
      <div className=' flex flex-col w-full lg:w-[48%] h-[560px]  items-center justify-center text-black bg-orange-400 lg:mr-6 rounded-xl border-4 border-orange-500 mt-4'>
        
      <ImgCar />

      </div>
      {/* CARD END */}
      {/* CARD START */}
      <div className=' flex flex-col w-full lg:w-[48%] h-[560px]  items-center justify-center text-black bg-orange-400 lg:mr-6 rounded-xl border-4 border-orange-500 mt-4'>
        
      <ImgCarb />
   
      </div>
      {/* CARD END */}




      

      </div>

    </div>
  )
}
