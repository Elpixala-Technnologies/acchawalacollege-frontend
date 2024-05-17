import { Partner1, Partner2 } from "@/asset";
import Image from "next/image";
import React from "react";

const images = [
  Partner1,
  Partner2,
  Partner1,
  Partner2, Partner1,
  Partner2, Partner1,
  Partner2,
  Partner1,
  Partner2, Partner1,
  Partner2, Partner1,
  Partner2,
]; // Array of image paths
const PartnerBanner = () => {
  return (
    <div className="bg-white">
      <div className="w-full max-w-[1200px] h-[20vh] py-5 mx-auto flex flex-col items-center justify-center gap-2 ">
        <p className="text-primary-text flex items-center flex-col p-5 gap-4">
          <span className="text-4xl font-semibold">Our Knowledge Partners</span>
        </p>
        <div className="image-gallery flex flex-row gap-20 justify-start w-full overflow-x-scroll">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Partner ${index + 1}`}
                width={1000}
                height={1000}
                className="w-full h-full"
              />
            ))}
          </div>
      </div>
      
    </div>
  );
};

export default PartnerBanner;
