import React from "react";
import { topCourses } from "@/data/homePage";
import { LuListFilter } from "react-icons/lu";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CoursesCard from "@/components/cards/CoursesCard";
export default function TopCourses() {
  return (
    <section className="mx-auto my-16 w-full max-w-[1440px] px-5">
      <Wrapper>
      <div className="mb-5 flex justify-between">
        <h1 className="title1 md:ml-8">
          <span className="font-normal text-blue-950">{topCourses.title.t1}</span>{" "}
          <span className="font-semibold text-blue-500">{topCourses.title.t2}</span>
        </h1>
        {/* filter Button  */}
        <button className="button3 h-max md:mr-8">
          <LuListFilter className="mt-1" /> Filter
        </button>
      </div>
      {/* Slider  */}
      <div className="topColleges relative">
        <CoursesCard />
      </div>
      <div className="flex-center p-5">
        <Link href={"#"} className="w-max font-medium">
          View All
        </Link>
      </div>
      </Wrapper>
    </section>
  );
}
