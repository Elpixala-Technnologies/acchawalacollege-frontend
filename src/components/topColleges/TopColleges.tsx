import React from "react";
// import { LuListFilter } from "react-icons/lu";
import CollegesCard from "@/components/cards/CollegesCard";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
export default function TopColleges({data}:any) {
  return (
    <section className="mx-auto my-5 w-full max-w-[1440px] px-5">
      <Wrapper>
      <div className="mb-8 flex justify-between">
       {data?.title && <h1 className="title1 md:ml-8">
          <span className="font-normal">{data?.title?.t1}</span>{" "}
          <span className="font-semibold text-blue-500">{data.title.t2}</span>
        </h1>}
        {/* filter Button  */}
        {/* <button className="button3 h-max md:mr-8">
          <LuListFilter className="mt-1" /> Filter
        </button> */}
      </div>
      {/* Slider  */}
      <div className="topColleges relative">
        <CollegesCard data={data?.colleges} />
      </div>
      <div className="flex-center p-5">
        <Link href={"/colleges"} className="w-max font-medium hover:text-blue-500">
          View All
        </Link>
      </div>
      </Wrapper>
    </section>
  );
}
