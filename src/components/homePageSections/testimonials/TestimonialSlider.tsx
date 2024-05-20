"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import { FaRegCirclePlay } from "react-icons/fa6";
import Link from "next/link";

export default function TestimonialSlider({ testimonials }: any) {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 40,
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
        slidesPerView: 2,
      },
    },
  };

  return (
    <div className="relative">
      <Swiper
        {...swiperOptions}
        className="w-full max-w-fit translate-x-[25%] px-5"
      >
        {testimonials.map((test: any, index: number) => (
          <SwiperSlide
            key={index}
            className="mb-10 w-full overflow-hidden rounded-xl border border-zinc-300 bg-white p-5"
          >
            <TestimonialSliderContent testimonial={test} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Add navigation buttons */}
      <div className="absolute h-full w-20">
        <div className="swiper-button-next pb-44"></div>
        <div className="swiper-button-prev pb-44"></div>
      </div>
    </div>
  );
}

function TestimonialSliderContent({ testimonial }: any) {
  return (
    <>
      <div className="mb-5 flex w-full items-center gap-2">
        <Image
          src={testimonial?.userAvatar}
          alt="avatar"
          className="h-16 w-16 rounded-full border-2 border-blue-500 object-cover p-1"
        />
        <div>
          <p className="font-medium">{testimonial?.userName}</p>
          <p className="text-xs text-zinc-500">{testimonial?.college}</p>
        </div>
      </div>
      <p className="mb-5 line-clamp-4 text-wrap font-medium text-black">{`"${testimonial?.comment}"`}</p>
      {testimonial?.storyVideoLink && (
        <div className="flex justify-end">
          <Link href={testimonial?.storyVideoLink}>
            <button className="flex items-center gap-x-2 rounded-lg bg-blue-500 p-3 text-xs text-white">
              <FaRegCirclePlay /> <p>Watch Now</p>
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
