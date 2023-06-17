import React from 'react'
import ImgCar from '../components/imgcar'

export default function Graphics() {
  return (
    <div className='w-full text-center'>
      <h1 className='text-2xl font-medium'>Graphics</h1>

      <div className='flex flex-col lg:flex-row w-full justify-center items-center'>

{/* CARD START */}
      <div className=' w-[60vw] flex flex-col w-full  items-center text-black bg-orange-400 lg:mr-6 rounded-xl border-4 border-orange-500 mt-4'>
        
      <ImgCar />
        <p className='text-md   pt-2 pr-5 pl-5 pb-5 h-[100px]'>Graphics, illustration, and drawing. <br />
        Everything from 2d Logos to 3d Banners
       </p>
      </div>
      {/* CARD END */}




      

      </div>

    </div>
  )
}
