import React from 'react';
import ImageCarousel from './ImageCarousel';

const ImgCar = () => {
  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg',
    'https://www.newlyswissed.com/wp-content/uploads/2011/10/Swiss-Cow-Fiona_main.jpg',
    'https://static.sadhguru.org/d/46272/1633180685-1633180685216.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnE1oi_ZCNPrBXTVRVEFGOF3lcrKlT_AhINau8ft62zDB_y6_dEfKYjSKbSHbNoKS0C64&usqp=CAU',
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Image Carousel</h1>
      <ImageCarousel images={images} />
    </div>
  );
};

export default ImgCar;
