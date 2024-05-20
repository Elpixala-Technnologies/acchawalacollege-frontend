import React from "react";
import { topColleges } from "@/data/homePage";
import { LuListFilter } from "react-icons/lu";
import CollegesCard from "@/components/cards/CollegesCard";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
export default function TopColleges() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-5 my-5">
      <Wrapper className="flex justify-between mb-3">
        <h1 className="title1">
          <span>{topColleges.title.t1}</span>{" "}
          <span className="font-semibold">{topColleges.title.t2}</span>
        </h1>
        {/* filter Button  */}
        <button className="button3">
          <LuListFilter className="mt-1" /> Filter
        </button>
      </Wrapper>
      {/* Slider  */}
      <Wrapper className="topColleges relative">
        <CollegesCard />
      </Wrapper>
      <Wrapper className="flex-center p-5">
      <Link href={"#"} className="font-medium w-max" >View All</Link>
      </Wrapper>
    </section>
  );
}
