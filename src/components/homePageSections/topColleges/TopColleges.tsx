import React from "react";
import { topColleges } from "@/data/homePage";
import { LuListFilter } from "react-icons/lu";
import CollegesCard from "@/components/cards/CollegesCard";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
export default function TopColleges() {
  return (
    <section className="mx-auto my-5 w-full max-w-[1440px] px-5">
      <Wrapper className="mb-3 flex justify-between">
        <h1 className="title1 md:ml-8">
          <span className="font-normal">{topColleges.title.t1}</span>{" "}
          <span className="font-semibold">{topColleges.title.t2}</span>
        </h1>
        {/* filter Button  */}
        <button className="button3 h-max md:mr-8">
          <LuListFilter className="mt-1" /> Filter
        </button>
      </Wrapper>
      {/* Slider  */}
      <Wrapper className="topColleges relative">
        <CollegesCard />
      </Wrapper>
      <Wrapper className="flex-center p-5">
        <Link href={"#"} className="w-max font-medium">
          View All
        </Link>
      </Wrapper>
    </section>
  );
}
