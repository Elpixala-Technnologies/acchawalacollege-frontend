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
    <section className="w-full my-10">
      <h1 className="title1 text-center">Counselling Packages</h1>
      <div className="w-full relative">
        <div
          className="w-full max-w-[1440px] mx-auto py-14 flex justify-center gap-6 overflow-x-hidden relative"
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
