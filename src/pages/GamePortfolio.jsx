import React from 'react'


export default function GamePortfolio() {
  return (
    <div>
       <div className='w-full text-center'>
      <h1 className='text-2xl font-medium mb-2'>Games</h1>
      <div className='flex flex-row flex-wrap justify-center'>
                {/* CARD */}
      <div className='lg:w-[30%] w-full shadow-xl border-4 m-2 flex flex-col justify-center items-center text-black bg-orange-400 rounded-xl border-orange-500'>
          <p className=' font-semibold text-lg m-2'>Diputs - Demo</p>
          <a rel="noreferrer" className="flex justify-center "  target="_blank" href="https://erpolley.itch.io/diputs-demo">
         <img src="https://img.itch.zone/aW1hZ2UvMTkyNTk1Mi8xMTMyMjM0OC5wbmc=/original/uSBukV.png" className=" shadow-lg w-[95%] h-[340px] border-4 rounded-md border-orange-500 object-cover" alt="frank" />
         </a>
          <p className='mb-2 mt-2 text-sm'>
            
            Platform side scroller PC Game. <br /> Created with UPBGE and Python. 
            </p>
          <div className='mb-2 mt-2'>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://erpolley.itch.io/diputs-demo">Download Now </a>
          
          </div></div> 
        {/*Card end*/}
        {/* CARD */}
      <div className='lg:w-[30%] w-full shadow-xl border-4 m-2 flex flex-col justify-center items-center text-black bg-orange-400 rounded-xl border-orange-500'>
          <p className=' font-semibold text-lg m-2'>Frank the Jelly DEMO</p>
          <a rel="noreferrer" className="flex justify-center "  target="_blank" href="https://erpolley.itch.io/frank-the-jelly-demo">
         <img src="https://github.com/ericpolley/ericpolley/blob/main/src/images/frank.png?raw=true" className=" shadow-lg w-[95%] h-[340px] border-4 rounded-md border-orange-500 object-cover" alt="frank" />
         </a>
          <p className='mb-2 mt-2 text-sm'>
            
            Platform side scroller PC Game. <br /> Created with UPBGE and Python. 
            </p>
          <div className='mb-2 mt-2'>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://erpolley.itch.io/frank-the-jelly-demo">Download Now </a>
          
          </div></div> 
        {/*Card end*/}
                {/* CARD */}
      <div className='lg:w-[30%] w-full shadow-xl border-4 m-2 flex flex-col justify-center items-center text-black bg-orange-400 rounded-xl border-orange-500'>
          <p className=' font-semibold text-lg m-2'>Bionic Quandary DEMO</p>
          <a rel="noreferrer" className="flex justify-center "  target="_blank" href="https://github.com/ericpolley/game-demo1-bq/raw/main/demo1-bq.zip">
         <img src="https://github.com/ericpolley/ericpolley/blob/main/src/images/bionictest.png?raw=true" className='shadow-lg w-[95%] h-[340px] border-4 rounded-md border-orange-500 object-cover'  alt="frank" />
         </a>
          <p className='mb-2 mt-2 text-sm'>
            A simple First person game. <br /> Created with Ursina and Python. 
            </p>
          <div className='mb-2 mt-2'>
          <a className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-8' rel="noreferrer"  target="_blank" href="https://github.com/ericpolley/game-demo1-bq/raw/main/demo1-bq.zip">Download Now </a>
          
          </div></div> 
        {/*Card end*/}
           
        </div>
      </div>
    </div>
  )
}
