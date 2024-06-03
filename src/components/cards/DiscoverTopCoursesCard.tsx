"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";

export default function DiscoverTopCollegesCard({ data }: any) {
    const swiperOptions = {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            clickable: true,
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
            1200: {
                slidesPerView: 4,
            },
        },
    };

    return (
        <>
            <Swiper {...swiperOptions} className="mySwiper w-[95%] max-w-fit px-5">
                {data?.slice(0, 4).map((college: any, index: number) => (
                    <SwiperSlide
                        key={index}
                        className="mb-12 w-full overflow-hidden rounded-xl border border-zinc-300 bg-white"
                    >
                        <CollegesCardContent college={college} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Add navigation buttons */}
            <div className="swiper-button-next mr-2"></div>
            <div className="swiper-button-prev ml-2"></div>
        </>
    );
}

export const CollegesCardContent = function DiscoverTopCollegesCard({ college }: any) {
    return (
        <React.Fragment>
            <div className="max-w-xs rounded overflow-hidden shadow-sm m-2">
                <Image src={college.image} alt={college.name} width={303} height={288} className="w-full rounded-xl" />
                <div className="px-2 py-4">
                    <div className="font-bold text-xl mb-2">{college.name}</div>
                    <p className="text-gray-700 text-base">{college.location}</p>
                    <div className="flex flex-wrap items-center my-2">
                        <span className="w-7 h-7 text-white text-center rounded-b-lg bg-blue-500">{college.rating}</span>
                        <span className='text-gray-600 ml-1'>Excellent</span>
                        <span className="ml-2 text-gray-600">{college.reviews}</span>
                        <span className="ml-2 text-gray-600">{college.distance} away</span>
                    </div>
                    <div className="text-yellow-600 font-bold mt-2">{college.priceRange}</div>
                </div>
            </div>
        </React.Fragment>
    );
};
