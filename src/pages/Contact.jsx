import React from 'react'

export default function Contact() {
  return (
    <div>
      
       <div className='w-full text-center'>
      <h1 className='text-2xl font-medium'>Contact</h1>
      <div className='flex flex-col flex-wrap'>
      <p className='m-6 text-xl'>Eric Polley</p>

      <div className='flex flex-row justify-center items-center md:space-x-6 space-x-2 mb-6'>
      {/* Social media */}
      <a href="https://www.linkedin.com/in/eric-polley/" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-512.png"
        className='md:w-32 md:h-32 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer'
         alt="Linkedin"></img></a>
         {/* Social media End */}
         {/* Social media */}
      <a href="https://twitter.com/ericrpolley" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-512.png"
        className='md:w-32 md:h-32 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer'
         alt="twitter"></img></a>
         {/* Social media End */}
          {/* Social media */}
      <a href="https://youtube.com/erpolley" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Youtube_svg-512.png"
        className='md:w-32 md:h-32 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer'
         alt="youtube"></img></a>
         {/* Social media End */}
         {/* Social media */}
      <a href="https://www.facebook.com/eric.r.polley" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-512.png"
        className='md:w-32 md:h-32 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer'
         alt="youtube"></img></a>
         {/* Social media End */}
          {/* Social media */}
      <a href="https://www.instagram.com/erpolley/" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png"
        className='md:w-32 md:h-32 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer'
         alt="youtube"></img></a>
         {/* Social media End */}

</div>
      <a href="mailto:ericpolley@live.com" target="_blank" rel="noreferrer" className='focus:text-orange-400 text-orange-600 hover:text-orange-500 m-2'><p>ericpolley@live.com</p></a>
      <p className='m-4'>(509)868-2692</p>
      <p className='m-4'>Discord: erpolley#5318</p>

     
</div>
</div>
    </div>
  )
}
