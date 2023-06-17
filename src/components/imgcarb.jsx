import React from 'react';
import ImageCarouselb from './ImageCarousel';

const ImgCarb = () => {
  const images = [
    'https://github.com/ericpolley/flashdashdesign/blob/main/src/images/paintbrush%20painting%20co%20001.png?raw=true',
    'https://github.com/ericpolley/flashdashdesign/blob/main/src/images/leanGreenAirducts%20001.png?raw=true',
    'https://github.com/ericpolley/flashdashdesign/blob/main/src/images/paintbrush%20painting%20co%20001.png?raw=true',
    'https://github.com/ericpolley/flashdashdesign/blob/main/src/images/lighting%20Logo%20001.png?raw=true',
  ];

  return (
    <div className=" p-8 m-2">
      
      <ImageCarouselb images={images} />
    </div>
  );
};

export default ImgCarb;
