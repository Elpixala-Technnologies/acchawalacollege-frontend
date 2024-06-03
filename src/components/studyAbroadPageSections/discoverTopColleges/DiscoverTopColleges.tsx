import React from "react";
import Wrapper from "@/components/Wrapper";
import DiscoverTopCollegesCard, { CollegesCardContent } from "@/components/cards/DiscoverTopCoursesCard";

export default function DiscoverTopColleges({ data }: any) {
    return (
        <section className="my-16 w-full">
            <Wrapper isMaxWidthChangeRequired="max-w-[1500px]">
                <div className="mb-8 flex justify-between">
                    {data?.title && (
                        <h1 className="title1">
                            <span className="text-blue-950">{data?.title?.t2}</span>{" "}
                            <span className=" text-blue-500">{data.title.t3}</span>
                        </h1>
                    )}
                    {/* filter Button  */}
                    {/* <button className="button3 h-max md:mr-8">
                        <LuListFilter className="mt-1" /> Filter
                    </button> */}
                </div>
                {/* Slider for mobile view */}
                <div className="md:hidden topCollegesAbroad relative">
                    <DiscoverTopCollegesCard data={data?.colleges} />
                </div>
                {/* Grid for desktop view */}
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
                    {data?.colleges?.slice(0, 8).map((college: any, index: number) => (
                        <CollegesCardContent key={index} college={college} />
                    ))}
                </div>
            </Wrapper>
        </section>
    );
}
