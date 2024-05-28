import React from "react";
import { LuListFilter } from "react-icons/lu";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CoursesCard from "@/components/cards/CoursesCard";
export default function TopCourses({data}:any) {
  return (
    <section className="mx-auto my-16 w-full max-w-[1440px] px-5">
      <Wrapper>
      <div className="mb-8 flex justify-between">
        <h1 className="title1 md:ml-8">
          <span className="font-normal text-blue-950">{data.title.t1}</span>{" "}
          <span className="font-semibold text-blue-500">{data.title.t2}</span>
        </h1>
        {/* filter Button  */}
        {/* <button className="button3 h-max md:mr-8">
          <LuListFilter className="mt-1" /> Filter
        </button> */}
      </div>
      {/* Slider  */}
      <div className="topColleges relative">
        <CoursesCard data={data.courses} />
      </div>
      <div className="flex-center p-5">
        <Link href={"/courses"} className="w-max font-medium hover:text-blue-500">
          View All
        </Link>
      </div>
      </Wrapper>
    </section>
  );
}
