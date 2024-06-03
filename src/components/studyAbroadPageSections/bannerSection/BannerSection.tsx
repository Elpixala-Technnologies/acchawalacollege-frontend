"use client";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import TextWithLineBreak from "@/utils/TextWithLineBreak";

export default function BannerSection({ data }: any) {
  return (
    <section className="my-16 max-md:mt-5 w-full">
      <Wrapper className="flex items-center max-md:flex-col max-md:gap-y-5 justify-between">
        {/* Left Side of Banner */}
        <div className="flex flex-col gap-4 p-5 w-full md:w-1/2 max-md:px-2">
          {/* Title */}
          <h1 className="title1 font-bold flex-row gap-2 pt-2">
            <span className="text-2xl md:text-4xl text-blue-900/80">{data?.title?.t1}</span>{" "}
            <span className="text-2xl md:text-4xl text-black">{data?.title?.t2}</span>
          </h1>
          <span className="text-2xl md:text-4xl font-bold text-blue-500">{data?.title?.t3}</span>
          {data?.text1 && <p className="text-wrap text-sm md:text-base">{data?.text1}</p>}
          {/* Input field */}
          <form onSubmit={(e) => e.preventDefault()} className="flex h-10 w-full gap-1">
            <input
              className="h-full w-full rounded-md border bg-zinc-100 p-3 md:p-5 shadow"
              placeholder="Search Colleges, Courses, Exams & more"
            />
            <button type="submit" className="flex items-center justify-center h-full w-10 md:w-12 bg-blue-500 rounded-md">
              <CiSearch className="text-xl md:text-2xl text-white" />
            </button>
          </form>
          <div className="flex md:gap-2 gap-1">
            <Link href={data?.button1?.href} className="button2  max-md:px-2">
              {data?.button1?.text}
            </Link>
            <Link href={data?.button2?.href} className="button1  max-md:px-3">
              {data?.button2?.text}
            </Link>
          </div>
        </div>
        {/* Right Side of Banner  */}
        <div className="relative flex md:w-1/2 items-center gap-x-5 max-md:w-full">
          <div className="relative flex h-full w-3/5 flex-col gap-y-5">
            <Image
              src={data?.img[0]}
              alt="b2"
              width={1000}
              height={1000}
              className="ml-auto h-full max-h-[200px] w-max  rounded-lg object-contain"
            />
            <Image
              src={data?.img[1]}
              alt="b1"
              className="ml-auto h-full max-h-[320px] w-max  rounded-lg object-contain"
            />
          </div>
          <Image
            src={data?.img[2]}
            alt="b3"
            width={1000}
            height={1000}
            className="h-full max-h-[350px] w-2/5 rounded-lg object-contain"
          />
          <p className="absolute bottom-5 right-1/2 flex w-[30%] min-w-[205px] md:translate-x-full translate-x-1/2 flex-col rounded-xl bg-blue-950 p-5 text-white max-md:scale-75">
            <span className="text-wrap">{data?.text2}</span>
            <span>{data?.text3}</span>
          </p>
        </div>
      </Wrapper>
    </section>
  );
}
