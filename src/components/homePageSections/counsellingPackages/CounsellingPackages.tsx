"use client";
import PackageCard from "@/components/cards/PackageCard";
import { CounsellingPackagesCards } from "@/data/Packages";
import React, { useRef, useState, useEffect } from "react";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";

export default function CounsellingPackages() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  // const handleScroll = () => {
  //   if (scrollContainerRef.current) {
  //     const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
  //     setShowLeftButton(scrollLeft > 0);
  //     setShowRightButton(scrollLeft + clientWidth < scrollWidth);
  //   }
  // };

  // const handleScrollLeft = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollTo({
  //       left: scrollContainerRef.current.scrollLeft - 200,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // const handleScrollRight = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollTo({
  //       left: scrollContainerRef.current.scrollLeft + 200,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // useEffect(() => {
  //   const handleResize = () => {
  //     handleScroll();
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <section className="my-10 w-full">
      <h1 className="title1 text-center">Counselling Packages</h1>
      <div className="relative w-full">
        <div
          className="relative mx-auto flex w-full max-w-[1440px] justify-center gap-6 overflow-x-hidden py-14"
          // ref={scrollContainerRef}
          // onScroll={handleScroll}
        >
          {CounsellingPackagesCards.map((card, i) => (
            <PackageCard key={i} data={card} />
          ))}
        </div>
        {/* {showLeftButton && (
          <button
            className="absolute top-1/2 left-5 p-5 bg-blue-500 rounded-full"
            onClick={handleScrollLeft}
          >
            <TiChevronLeft className="text-3xl text-white" />
          </button>
        )} */}
        {/* {showRightButton && (
          <button
            className="absolute top-1/2 right-5 p-5 bg-blue-500 rounded-full"
            onClick={handleScrollRight}
          >
            <TiChevronRight className="text-3xl text-white" />
          </button>
        )} */}
      </div>
    </section>
  );
}
