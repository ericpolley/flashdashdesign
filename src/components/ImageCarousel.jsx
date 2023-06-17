import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  return (
    <div className="flex items-center justify-center">
      <button
        className="p-2 bg-orange-500 sm:text-sm md:text-5xl rounded-full font-extrabold text-gray-900 pb-5 border-8 border-orange-500 m-1 hover:bg-orange-200 focus:outline-none"
        onClick={previousImage}
      >
        &lt;
      </button>
      <Link to="/animation">
      <img className="w-[60vw] lg:w-[25vw] border-8 border-orange-500 bg-orange-300 hover:bg-orange-50 rounded-md object-cover" src={images[currentImageIndex]} alt="" />
      </Link>
      <button
        className="p-2 bg-orange-500 sm:text-sm md:text-5xl font-extrabold rounded-full text-gray-900 pb-5 border-8 border-orange-500 m-1 hover:bg-orange-200  focus:outline-none"
        onClick={nextImage}
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
