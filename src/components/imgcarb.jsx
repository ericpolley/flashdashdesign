import React from 'react';
import ImageCarouselb from './ImageCarouselb';


const ImgCarb = () => {
  const images = [
    'https://github.com/ericpolley/flashdashdesign/blob/main/src/images/3d%20to%20pixel%20image%20ref%2002.png?raw=true',
    'https://github.com/ericpolley/flashdashdesign/blob/main/src/images/Robot-tv-cute-erpolley-0004.png?raw=true',
    'https://github.com/ericpolley/flashdashdesign/blob/main/src/images/UFO-PNG-ERPOLLEY-0006.png?raw=true',
    'https://github.com/ericpolley/flashdashdesign/blob/main/src/images/low-poly-buildings-erpolley-c0005.png?raw=true',
  ];

  return (
    <div className=" p-8 m-2">
      
      <ImageCarouselb images={images} />
    </div>
  );
};

export default ImgCarb;
