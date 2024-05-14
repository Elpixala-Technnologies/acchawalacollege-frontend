"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { useEffect, useState } from "react";
import { topColleges } from "@/data/homePage";
import Image from "next/image";

export default function CollegesCard() {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: {
      clickable: true,
      // dynamicBullets: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <>
      <Swiper {...swiperOptions} className="mySwiper max-w-fit w-[95%] px-5">
        {topColleges.colleges.map((college: any, index: number) => (
          <SwiperSlide
            key={index}
            className="w-full border border-zinc-300 bg-white rounded-xl overflow-hidden shadow-2xl my-12"
          >
            <div className="relative w-full">
              <Image
                src={college?.img}
                alt="college"
                className="w-full h-[200px]"
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-4 p-5 bg-white rounded-lg">
                {college?.icon}
              </div>
            </div>
            <div className="w-full bg-blue-200 text-blue-500 flex-center p-2 font-semibold">
              {college.title}
            </div>
            <div className="p-5">
              <p className="font-semibold text-blue-950">{college?.text1}</p>
              <h4 className="text-2xl font-medium mb-10">
                MBA from {college?.collegeName}
              </h4>
              <p className="icon-text">
                <span>{college?.degreeType?.icon}</span>
                {college.degreeType.name}
              </p>
              <p className="icon-text">
                <span>{college.duration.icon}</span> {college.duration.name}
              </p>
              <p className="icon-text">
                {college.noOfSpecializations.icon && (
                  <span>{college.noOfSpecializations.icon}</span>
                )}{" "}
                {college.noOfSpecializations.no} Specializations
              </p>
              <div className="flex justify-between gap-x-4 my-8 ">
                <button className="cardButton1">
                  {college.button1.icon && <span>{college.button1.icon}</span>}{" "}
                  {college.button1.text}
                </button>
                <button className="cardButton2">
                  {college.button2.icon && <span>{college.button2.icon}</span>}{" "}
                  {college.button2.text}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Add navigation buttons */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </>
  );
}
