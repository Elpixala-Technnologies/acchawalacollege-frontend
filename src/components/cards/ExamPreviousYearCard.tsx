"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { useEffect, useState } from "react";
import { topColleges } from "@/data/homePage";
import { topExams } from "@/data/examData";
import Image from "next/image";

export default function ExamPreviousYearCard() {
    const swiperOptions = {
        slidesPerView: 1,
        spaceBetween: 30,
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
                {topExams.exams.map((exam: any, index: number) => (
                    <SwiperSlide
                        key={index}
                        className="my-12 w-full overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-2xl"
                    >
                        <ExamPreviousYearCardContent exam={exam} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Add navigation buttons */}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </>
    );
}

export const ExamPreviousYearCardContent = function ExamPreviousYearCard({ exam }: any) {
    return (
        <React.Fragment>
            <div className="flex flex-col items-stretch">
                <div className="bg-[#FFF4EB] shadow-md rounded-lg p-4">
                    {/* <div className="absolute inset-0 px-4 py-6 flex max-h-max">
                        <div className="flex gap-1 items-start rounded-full px-2 py-1 text-xs">
                        </div>
                        <div className="bg-white rounded-full px-2 py-1 text-sm cursor-pointer">
                            JEE MAIN
                        </div>
                    </div> */}
                    <div className="flex justify-center">
                        <Image
                            src={exam?.img}
                            alt={"college"}
                            width={100}
                            height={100}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="my-3">
                        <p className="text-center font-medium text-gray-700">{exam.examPaperName1}</p>
                        <p className="text-center font-medium text-gray-700">{exam.examPaperName2}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
