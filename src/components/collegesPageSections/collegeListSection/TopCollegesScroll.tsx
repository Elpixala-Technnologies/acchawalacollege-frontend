import React, { useRef, useState, useEffect } from "react";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
// Check if the import path aliases are correctly configured in your project setup
import { topColleges } from "@/data/homePage";
import { CollegesCardContent } from "@/components/cards/CollegesCard";

export default function TopCollegesScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true); // Initialize to false

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft - 200,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + 200,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      handleScroll();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full my-5 bg-blue-200 rounded-lg pb-6">
      <h1 className="title1 p-6">
        <span>{topColleges.title.t1}</span>{" "}
        <span className="font-semibold text-blue-500">
          {topColleges.title.t2}
        </span>
      </h1>
      <div
        className="flex w-full gap-6 overflow-x-hidden px-5"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        {topColleges.colleges.map((college: any, index: number) => (
          <div
            key={index}
            className="min-w-[420px] overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-xl"
          >
            <CollegesCardContent college={college} />
          </div>
        ))}
      </div>
      {showLeftButton && (
        <button
          className="absolute right-24 top-3 rounded-full bg-blue-500 p-3"
          onClick={handleScrollLeft}
        >
          <TiChevronLeft className="text-3xl text-white" />
        </button>
      )}
      {showRightButton && (
        <button
          className="absolute right-5 top-3 rounded-full bg-blue-500 p-3"
          onClick={handleScrollRight}
        >
          <TiChevronRight className="text-3xl text-white" />
        </button>
      )}
    </div>
  );
}
