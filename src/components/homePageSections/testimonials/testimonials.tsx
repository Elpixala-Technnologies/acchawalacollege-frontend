"use client";
import { TestimonialIcons, TestimonialsImage } from "@/asset";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import { MdOutlinePlayCircle } from "react-icons/md";

const TestData = [
  {
    name: "Cristian",
    college: "Accha Wala",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    "name": "Maria",
    "college": "Accha Wala",
    "description": "Top trends in sustainable energy practices for 2024 and beyond."
  },
  {
    "name": "Rahul",
    "college": "Accha Wala",
    "description": "Analyzing the impact of AI-driven logistics solutions on supply chain management."
  },
  {
    "name": "Priya",
    "college": "Accha Wala",
    "description": "Exploring the intersection of blockchain technology and digital identity verification."
  }
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, TestData.length - 1));
  };

  const previous = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  return (
    <div>
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between gap-2 relative my-10 py-5 overflow-x-hidden">
        <div className="w-1/3 flex flex-col gap-4 ml-10">
          <div className="py-10 my-10">
            <span className="text-4xl font-semibold">
              Student <br />
              <b className="text-blue-500">Testimonials</b>
            </span>
            <p className="w-full flex flex-col items-start text-gray-500">
              <span>Discover Success Stories</span>
              <span className="w-full">from Our Satisfied Students</span>
            </p>
          </div>
          <Image
            src={TestimonialIcons}
            alt=""
            width={1000}
            height={1000}
            className="w-1/3 h-1/4 absolute top-10  left-10 -z-10"
          />
          <div className="flex gap-2 p-5">
            <button
              type="button"
              className="font-medium rounded-lg text-3xl text-black"
              onClick={previous}
              disabled={startIndex === 0}
            >
              <IoIosArrowBack />
            </button>
            <button
              type="button"
              className="font-medium rounded-lg text-3xl text-black"
              onClick={next}
              disabled={startIndex >= TestData.length - 2}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="w-2/3 flex items-end justify-end">
          <Image
            src={TestimonialsImage}
            alt=""
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full absolute top-1/4 -right-20  flex gap-4 justify-end">
          {TestData.slice(startIndex, startIndex + 2).map((data, index) => (
            <div className="lg:max-w-md max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow relative">
              <div className="flex flex-row items-center pb-5 gap-2">
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 72, height: 72 }}
                />
                <p className="flex flex-col">
                  <span className="font-bold text-lg">{data.name}</span>
                  <span>{data.college}</span>
                </p>
              </div>

              <p className="mb-16 font-normal text-gray-700 line-clamp-4">
                {data.description}
              </p>
              <div className="inline-flex items-center px-3 py-2 gap-1 text-sm font-medium text-center text-white bg-[#2095F2] rounded-3xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 absolute bottom-5 right-5">
              <MdOutlinePlayCircle className="text-white text-xl" />
              Watch their Story
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
