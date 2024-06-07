import React from "react";
import Wrapper from "@/components/Wrapper";
import DiscoverTopCollegesCard, {
  CollegesCardContent,
} from "@/components/cards/DiscoverTopCoursesCard";

export default function DiscoverTopColleges({ data }: any) {
  return (
    <section className="my-16 w-full">
      <Wrapper>
        <div className="mb-8 flex justify-between">
          {data?.title && (
            <h1 className="title1">
              {data?.title?.t1 && ( <span className="text-blue-950/60">{data?.title?.t1}</span> )}{" "}
              {data?.title?.t2 && ( <span className="text-blue-950">{data?.title?.t2}</span> )}{" "}
              {data?.title?.t3 && ( <span className=" text-blue-500">{data?.title?.t3}</span> )}
            </h1>
          )}
          {/* filter Button  */}
          {/* <button className="button3 h-max md:mr-8">
                        <LuListFilter className="mt-1" /> Filter
                    </button> */}
        </div>
        {/* Slider for mobile view */}
        <div className="topCollegesAbroad relative md:hidden">
          <DiscoverTopCollegesCard data={data?.colleges} />
        </div>
        {/* Grid for desktop view */}
        <div className="hidden grid-cols-1 gap-2 sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {data?.colleges
            ?.slice(0, 8)
            .map((college: any, index: number) => (
              <CollegesCardContent key={index} college={college} />
            ))}
        </div>
      </Wrapper>
    </section>
  );
}
