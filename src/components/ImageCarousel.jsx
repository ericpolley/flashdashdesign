import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="p-2 bg-orange-300 rounded-full text-gray-900 hover:bg-orange-200 focus:outline-none"
        onClick={previousImage}
      >
        &lt;
      </button>
      <img className="max-w-xs border-4 border-orange-500 rounded-md  w-[100vw] object-cover" src={images[currentImageIndex]} alt="" />
      <button
        className="p-2 bg-orange-300 rounded-full text-gray-700 hover:bg-orange-200 focus:outline-none"
        onClick={nextImage}
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
