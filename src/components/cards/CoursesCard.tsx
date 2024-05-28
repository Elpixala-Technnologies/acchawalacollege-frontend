"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import { FaRegCalendarAlt, FaRegClock, FaStar } from "react-icons/fa";
import Link from "next/link";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { formatRupee } from "@/utils/fotmatRupee";

export default function CoursesCard({data}:any) {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      clickable: true,
      // dynamicBullets: true,
    },
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <>
      <Swiper {...swiperOptions} className="mySwiper w-[95%] max-w-fit px-5">
        {data.map((course: any, index: number) => (
          <SwiperSlide
            key={index}
            className="mb-12 w-full overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-2xl"
          >
            <CoursesCardContent course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Add navigation buttons */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </>
  );
}

export const CoursesCardContent = function CoursesCard({ course }: any) {
  return (
    <React.Fragment>
      <div className="relative w-full">
        <Image src={course?.bg} alt="course" className="h-[200px] w-full" />
        <div className="absolute left-0 top-0 flex h-full w-full items-center gap-3 bg-black/50 p-5">
          <Image
            src={course?.teacherAvatar}
            alt="teacher"
            width={112}
            height={112}
            className="h-28 w-28 rounded-full border-2 border-zinc-200 object-cover"
          />
          <div className="my-auto text-white">
            <p className="mb-3 text-wrap text-sm font-thin underline">
              {course?.teacherRole}
            </p>
            <h6 className="mb-1 text-wrap font-bold">{course?.teacherName}</h6>
            <p className="text-wrap text-sm font-thin">{course?.designation}</p>
          </div>
        </div>
      </div>
      <div className="p-5">
        {/* line 1  */}
        <div className="flex items-center justify-between mb-5">
          <h4 className="text-wrap text-2xl font-medium max-w-max">
            {course?.stream} from {course?.title}
          </h4>
          {/* stars  */}
          <div className="flex flex-nowrap items-center gap-x-1">
            <FaStar className="text-yellow-400" />
            <span className="text-sm bg-blue-950 text-white rounded px-1">{course?.stars}</span>
          </div>
        </div>
        {/* END line 1  */}
        {/* line 2  */}
        <div className="flex border-b border-zinc-400 mb-2 text-sm">
          <div className="flex-[1] border-r border-zinc-400 pb-5">
            <h6 className="font-bold text-base">Course Details</h6>
            <p className="flex items-center gap-x-2"><MdOutlineMapsHomeWork className="text-blue-500 text-lg" />{course?.courseDetails?.noOfAvailableCourses} Courses</p>
            <p className="flex items-center gap-x-2"><FaRegClock className="text-blue-500 text-lg" />{course?.courseDetails?.courseTime}</p>
            <p className="flex items-center gap-x-2"><FaRegCalendarAlt className="text-blue-500 text-lg" />{course?.courseDetails?.duration}</p>
          </div>
          <div className="flex-[1] pl-5 pb-5">
            <h6 className="font-bold text-base">Course Price</h6>
            <p>Full Time : <span className="font-bold text-blue-500">{formatRupee(course?.courseDetails?.coursesPrice?.fullTime)}</span></p>
            <p>Part Time : <span className="font-bold text-blue-500">{formatRupee(course?.courseDetails?.coursesPrice?.partTime)}</span></p>
          </div>
        </div>
        {/* END line 2  */}

        {/* line 3  */}

        <h6 className="font-bold text-sm">Course Summery</h6>
        <p className="text-sm mb-2">{course?.summery}</p>
        {/* END line 3  */}

        {/* line 4  */}
        <Link href={course?.button?.href}>
          <button className="cardButton2">{course.button.text}</button>
        </Link>
      </div>
    </React.Fragment>
  );
};
