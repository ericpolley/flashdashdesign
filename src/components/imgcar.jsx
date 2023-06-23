import React from 'react';
import ImageCarousel from './ImageCarousel';

const ImgCar = () => {
  const images = [
    'https://github.com/ericpolley/flashdashdesign/blob/main/src/images/tylers%20tires%200001.png?raw=true',
    'https://github.com/ericpolley/flashdashdesign/blob/main/src/images/Blue%20lawncare%20001.png?raw=true',
    'https://github.com/ericpolley/flashdashdesign/blob/main/src/images/paintbrush%20painting%20co%20001.png?raw=true',
    'https://github.com/ericpolley/flashdashdesign/blob/main/src/images/leanGreenAirducts%20001.png?raw=true',
    

  ];

  return (
    <div className=" m-1">
      
      <ImageCarousel images={images} />
    </div>
  );
};

export default ImgCar;
