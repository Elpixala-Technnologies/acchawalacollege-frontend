import React, { useRef, useState, useEffect } from "react";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
// Check if the import path aliases are correctly configured in your project setup
import { previousYearSection, topExams } from "@/data/examData";
import { ExamPreviousYearCardContent } from "@/components/cards/ExamPreviousYearCard";

export default function TopPreviousYearPaperScroll() {
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
        <div className="relative my-5 bg-blue-200 rounded-lg pb-6 max-w-[1035px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h1 className="title1 p-6">
                <span className="examTitle">{previousYearSection.title.t1}</span>{" "}
                <span className="font-semibold text-blue-500">
                    {previousYearSection.title.t2}
                </span>
            </h1>
            <div className="absolute inset-0 px-6 py-6 pt-16 flex max-h-max">
                {/* <div className="flex gap-1 items-start rounded-full px-2 py-1 text-xs">
                </div> */}
                <div className="bg-white border-blue-500 rounded-full px-2 py-1 text-sm cursor-pointer">
                    JEE MAIN
                </div>
            </div>
            <br/>
            <div
                className="flex w-full gap-6 overflow-x-hidden px-5"
                ref={scrollContainerRef}
                onScroll={handleScroll}
            >
                {previousYearSection.examPreviousYearPaper.map((exam: any, index: number) => (
                    <div
                        key={index}
                        className="min-w-[420px] overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-xl"
                    >
                        <ExamPreviousYearCardContent exam={exam} />
                    </div>
                ))}
            </div>
            {showLeftButton && (
                <button
                    className="absolute right-24 top-3 rounded-full bg-white p-3"
                    onClick={handleScrollLeft}
                >
                    <TiChevronLeft className="text-2xl text-black" />
                </button>
            )}
            {showRightButton && (
                <button
                    className="absolute right-5 top-3 rounded-full bg-white p-3"
                    onClick={handleScrollRight}
                >
                    <TiChevronRight className="text-2xl text-black" />
                </button>
            )}
        </div>
    );
}
