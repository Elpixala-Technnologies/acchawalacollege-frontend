"use client";
import React, { useState } from "react";
import Carousel from "./Carousel";
import Link from "next/link";
import { formatRupee } from "@/utils/fotmatRupee";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

export default function CollegeDetailsCardSlider({ course }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const slides = [
    {
      title: "Eligibility",
      text: course?.eligibility,
    },
    {
      title: "Fees",
      text: formatRupee(course?.fees),
    },
    {
      title: "Duration",
      text: course?.duration,
    },
  ];
  function handleCompare(){
    console.log("compare");
  }
  return (
    <div className="relative rounded-md border border-zinc-300 p-5">
      <div className="flex-center absolute right-4 top-2 gap-x-2">
        <p className="border-r border-zinc-300 pr-2 text-sm cursor-pointer hover:underline" onClick={handleCompare}>Compare</p>
        <div
          className="text-xl transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? <FaHeart className="text-red-500" /> : <CiHeart  />}
        </div>
      </div>
      {course?.name && (
        <h2 className="text-2xl font-medium text-blue-500">{course?.name}</h2>
      )}
      {/* slider  */}
      <div className="relative mb-12 mt-5">
        {/* Note: givimg min-w-full is neccessary to each slide */}
        <Carousel autoSlide={true}>{slides}</Carousel>
      </div>
      <div>
        {course?.buttons && (
          <div className="flex gap-x-4 md:max-w-xl">
            {course?.buttons?.button1?.text && (
              <Link
                className="button6 flex-[1]"
                href={course?.buttons?.button1?.href}
              >
                {course?.buttons?.button1?.text}
              </Link>
            )}
            {course?.buttons?.button2?.text && (
              <Link
                className="button7 flex-[1]"
                href={course?.buttons?.button2?.href}
              >
                {course?.buttons?.button2?.text}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
