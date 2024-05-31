import React from "react";
import DiscoverTopCoursesCardProps from "@/components/cards/DiscoverTopCoursesCard";
import { FaFilter } from "react-icons/fa6";
import { MdFilterList } from "react-icons/md";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

export default function DiscoverTopColleges({ data }: any) {
  return (
    <section className="mx-auto my-16 w-full max-w-[1440px] px-5">
      <Wrapper>
        <div className="mb-8 flex justify-between">
          <h1 className="title1 md:ml-8">
            <span className="text-blue-950">Discover</span>{" "}
            <span className="ml-2 text-gray-950">Top</span>{" "}
            <span className="ml-2 text-blue-500">Colleges</span>
          </h1>
          {/* filter Button  */}
          <button className="button3 h-max md:mr-8">
            <MdFilterList className="mt-1" />
            Filter
            {/* <LuListFilter className="mt-1" /> Filter */}
          </button>
        </div>
        {/* Card  */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {data.map((college: any, index: number) => (
            <DiscoverTopCoursesCardProps key={index} {...college} />
          ))}
        </div>

        <div className="flex-center p-5">
          <Link
            href={"/courses"}
            className="w-max font-medium hover:text-blue-500"
          >
            View All
          </Link>
        </div>
      </Wrapper>
    </section>
  );
}
