import React, { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://www.spectrum.com/content/dam/spectrum/residential/en/mobile/products/PLP-Banner/PLP-Apple-16-Pro-Desert-Titanium.png',
    'https://www.spectrum.com/content/dam/spectrum/residential/en/mobile/products/PLP-Banner/PLP-Apple-16-Ultramarine.png',
    'https://www.spectrum.com/content/dam/spectrum/residential/en/mobile/products/PLP-Banner/PLP-Google-Pixel-9-Pro-XL.png',
    'https://www.spectrum.com/content/dam/spectrum/residential/en/mobile/products/PLP-Banner/PLP-samsung-B6Q6-fold6-flip6.png',
    "https://assets-prd.ignimgs.com/2024/03/29/every-iphone-1711694546855.png",
    "https://cdn.mos.cms.futurecdn.net/J4JXcSkDiDJ2gWjXYKMHNm.jpg",
    "https://cdn.mos.cms.futurecdn.net/56QPT69xqSKcb4DzDWYDaX.jpg",
    "https://www.iphonelife.com/sites/iphonelife.com/files/styles/promo_in_content_save-top_2x/public/historyoftheiphone_0.jpg?itok=tXoyyfzJ",
    "https://www.cnet.com/a/img/resize/da118f00be5dfece94681652f7950c7daa30c96a/hub/2023/10/13/76701e85-0a36-487f-80c7-9cae1da1e06e/google-pixel-8-3526.jpg?auto=webp&fit=crop&height=675&width=1200",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-10xl mx-auto overflow-hidden mt-10">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="max-w-100 h-64 object-cover" // Full width and fixed height
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
      >
        &#10094; {/* Left arrow */}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
      >
        &#10095; {/* Right arrow */}
      </button>
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 mx-1 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
