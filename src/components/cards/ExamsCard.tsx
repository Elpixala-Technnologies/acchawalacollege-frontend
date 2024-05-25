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

export default function ExamsCard() {
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
                        <ExamsCardContent exam={exam} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Add navigation buttons */}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </>
    );
}

export const ExamsCardContent = function ExamsCard({ exam }: any) {
    return (
        <React.Fragment>
            <div className="flex flex-col items-stretch w-full bg-white rounded-lg shadow-lg">
                <div className="relative rounded-t-lg bg-white">
                    <Image
                        src={exam?.img}
                        alt={"college"}
                        width={150}
                        height={180}
                        className="w-full h-36 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 px-4 py-6 flex justify-between max-h-max items-center">
                        <div className="flex gap-1 items-center rounded-full px-2 py-1 text-xs">
                        </div>
                        <div className="bg-white rounded-full px-2 py-1 text-sm cursor-pointer">
                            Online Exam
                            {/* <Image src={HeartIcon} width={14} height={14} alt={"feature"} /> */}
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col">
                    <div className="p-2 flex flex-col gap-2">
                        <div className="text-[14px]">
                            <h4 className="text-primary text-lg font-semibold">
                                {exam.examName}
                            </h4>
                            <div className="grid grid-cols-2 pt-2 gap-2">
                                <div>
                                    <p className="icon-text pt-2">
                                        <span>{exam?.examParticipating?.icon}</span>
                                        {exam.examParticipating.name}
                                    </p>
                                </div>
                                <div className="absolute right-0 pr-2">
                                    <span className="text-[#02001480] text-sm">
                                        {exam.examParticipating.value}
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 pt-2 gap-2">
                                <div>
                                    <p className="icon-text pt-2">
                                        <span>{exam?.examDate?.icon}</span>
                                        {exam.examDate.name}
                                    </p>
                                </div>
                                <div className="absolute right-0 pr-2">
                                    <span className="text-[#02001480] text-sm">
                                        {exam?.examDate?.value}
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 pt-2 gap-2">
                                <div>
                                    <p className="icon-text pt-2">
                                        <span>{exam?.examLevel?.icon}</span>
                                        {exam.examLevel.name}
                                    </p>
                                </div>
                                <div className="absolute right-0 pr-2">
                                    <span className="text-[#02001480] text-sm">
                                        {exam?.examLevel?.value}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 mx-1.5 pb-2 gap-4">
                        <div>
                            <button className="cardButton1">
                                {exam.button1.icon && <span>{exam.button1.icon}</span>}{" "}
                                {exam.button1.text}
                            </button>
                        </div>
                        <div>
                            <button className="examCardButton2">
                                {exam.button2.icon && <span>{exam.button2.icon}</span>}{" "}
                                {exam.button2.text}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
