// components/SingleImageCard.jsx
import Image from 'next/image';
import React from 'react';
import img from '@/asset/latestUpdates/councelling.png'

const SingleImageCard = () => {
  const imageData = {
    src: img,
    alt: 'Description for image 1',
    title: 'UN chief calls for ‘dramatic shift’ to transform education worldwide',
    date: 'June 24, 2024 5:00 PM',
  };

  return (
    <div className="pt-0 p-2 mb-3">
        <div className="relative h-72 overflow-hidden rounded-t-xl">
          <Image
            src={imageData.src}
            alt={imageData.alt}
            className='object-cover w-full h-full'
          />
          <div className="absolute bottom-0  bg-black bg-opacity-50 text-white p-4 w-full ">
            <h1 className="text-3xl font-bold ">
              {imageData.title}
            </h1>
            <p className="text-sm mt-1">{imageData.date}</p>
          </div>
        </div>
      
    </div>
  );
};

export default SingleImageCard;
