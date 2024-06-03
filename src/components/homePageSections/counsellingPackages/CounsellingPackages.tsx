"use client";
import PackageCard from "@/components/cards/PackageCard";
import React, { useRef, useState, useEffect } from "react";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";

export default function CounsellingPackages({ data }: any) {
  // const scrollContainerRef = useRef<HTMLDivElement>(null);
  // const [showLeftButton, setShowLeftButton] = useState(false);
  // const [showRightButton, setShowRightButton] = useState(true);

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
  const popularIndex = data?.CounsellingPackagesCards?.findIndex((pkg: any) => pkg.isPopular);
  const [activeIndex, setActiveIndex] = useState<number | null>(popularIndex);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="my-10 w-full">
      {data?.title && (
        <h1 className="title1 mb-8 text-center">{data?.title}</h1>
      )}
      <div className="relative w-full">
        <div
          className="relative mx-auto flex flex-wrap w-full max-w-[1440px] justify-center gap-6 max-md:flex-col pb-14 pt-5"
          // ref={scrollContainerRef}
          // onScroll={handleScroll}
        >
          {data?.CounsellingPackagesCards &&
            data?.CounsellingPackagesCards?.map((card: any, i: any) => (
              <PackageCard
                key={i}
                data={card}
                isActive={i === activeIndex}
                onSelect={() => handleSelect(i)}
              />
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
