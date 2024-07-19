"use client";
import { Montserrat, Inter } from "next/font/google";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import heroImg from "@/asset/latestUpdates/heroImg.png";
import { IoEllipse, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { PiLineVertical } from "react-icons/pi";
import Wrapper from "@/components/Wrapper";

const montserrat = Montserrat({
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
});

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const newsItems = [
    {
      title1: "UN chief",
      title2: "calls for ‘dramatic shift’ to transform education worldwide",
      date: "11 July 2024",
      category: "Culture and Education",
      description:
        "The application correction window for GATE 2024 at IISc Bangalore is set to commence on November 18, 2023. Applicants can make corrections to their GATE forms until November 24, 2023.",
      imageUrl: heroImg,
    },
    {
      title1: "UN chief",
      title2: "calls for ‘dramatic shift’ to transform education worldwide",
      date: "13 July 2024",
      category: "Culture and Education",
      description:
        "The application correction window for GATE 2024 at IISc Bangalore is set to commence on November 18, 2023. Applicants can make corrections to their GATE forms until November 24, 2023.",
      imageUrl: heroImg,
    },
    {
      title1: "UN chief",
      title2: "calls for ‘dramatic shift’ to transform education worldwide",
      date: "14 July 2024",
      category: "Culture and Education",
      description:
        "The application correction window for GATE 2024 at IISc Bangalore is set to commence on November 18, 2023. Applicants can make corrections to their GATE forms until November 24, 2023.",
      imageUrl: heroImg,
    },
    {
      title1: "UN chief",
      title2: "calls for ‘dramatic shift’ to transform education worldwide",
      date: "15 July 2024",
      category: "Culture and Education",
      description:
        "The application correction window for GATE 2024 at IISc Bangalore is set to commence on November 18, 2023. Applicants can make corrections to their GATE forms until November 24, 2023.",
      imageUrl: heroImg,
    },
  ];

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1,
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <section>
      <Wrapper>
        <div className=" relative flex pb-12 mb-4 h-fit pt-5">

          {/* Image */}
          <div className="absolute z-10 left-[33%] h-[95%]">
            <Image
              src={newsItems[activeIndex].imageUrl}
              alt="Education Image"
              className="w-fit h-full object-cover"
            />
          </div>

          {/* NewsDescription */}
          <div className="z-20 mx-4 mt-5 w-1/2 pt-4 pl-4 rounded-md bg-white/90  ">
            <div>
              <h2
                className={`${montserrat.className} ml-1 w-fit text-base font-bold text-[#2095F2]`}
              >
                Today's
              </h2>
              <div
                className={`${inter.className} pl-4 my-5 text-sm md:text-3xl lg:text-custom   border-l-2 border-black px-3 py-1`}
              >
                <span className=" font-bold leading-custom text-[#2095F2]">
                  {newsItems[activeIndex].title1}
                </span>
                <span className=" font-bold leading-custom text-[#012148]">
                  {" "}
                  {newsItems[activeIndex].title2}
                </span>
              </div>
              <div className={`${montserrat.className} ml-5`}>
                <div className="flex items-center">
                  <span className="text-base font-bold">
                    {newsItems[activeIndex].date}
                  </span>
                  <span className="text-black">
                    <PiLineVertical />{" "}
                  </span>
                  <span className="font-bold text-[#2095F2] ">
                    {newsItems[activeIndex].category}
                  </span>
                </div>
                <div className="text-sm font-normal leading-6">
                  {newsItems[activeIndex].description}{" "}
                  <a
                    href="#"
                    className="text-base font-semibold text-[#2095F2]"
                  >
                    Read More
                  </a>
                </div>
              </div>

              {/* Chevrons */}
              <div className="my-5  flex items-center justify-center space-x-7">
                  <div>
                    <IoChevronBack
                      className=" h-6 w-6 cursor-pointer text-[#11111166]"
                      onClick={handlePrevClick}
                    />
                  </div>
                  <div>
                    <IoChevronForward
                      className="h-6 w-6  cursor-pointer text-[#2095F2]"
                      onClick={handleNextClick}
                    />
                  </div>
                </div>
            </div>
          </div>
        </div>
        {/* Ellipses*/}
        <div className="flex items-center justify-center">
          <div className="flex space-x-2 ">
            {newsItems.map((_, index) => (
              <IoEllipse
                key={index}
                className={`h-[11px] w-4 ${index === activeIndex ? "text-[#2095F2]" : "text-[#D9D9D9]"}`}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSection;
