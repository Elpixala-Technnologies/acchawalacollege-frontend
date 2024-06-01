"use client";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";

export default function BannerSection({ data }: any) {
  return (
    <section className="my-16 w-full">
      <Wrapper className="flex flex-col items-center gap-y-6 md:flex-row">
        {/* Left Side of Banner */}
        <div className="flex flex-col gap-4 p-5 md:w-1/2 w-full">
          {/* Title */}
          <h1 className="title1 font-bold flex-row gap-2 pt-2">
            <span className="text-4xl text-blue-900/80">{data?.title?.t1}</span>{" "}
            <span className="text-4xl text-black">{data?.title?.t2}</span>
          </h1>
          <span className="text-4xl font-bold text-blue-500">{data?.title?.t3}</span>
          {data?.text1 && <p className="text-wrap">{data?.text1}</p>}
          {/* Input field */}
          <form onSubmit={(e) => e.preventDefault()} className="flex h-10 w-full gap-1">
            <input
              className="h-full w-full rounded-md border bg-zinc-100 p-5 shadow"
              placeholder="Search Colleges, Courses, Exams & more"
            />
            <button type="submit" className="flex items-center justify-center h-full w-12 bg-blue-500 rounded-md">
              <CiSearch className="text-2xl text-white" />
            </button>
          </form>
          <div className="flex gap-2 flex-wrap">
            <Link href={data?.button1?.href} className="button2 px-4 py-2">
              {data?.button1?.text}
            </Link>
            <Link href={data?.button2?.href} className="button1 px-4 py-2">
              {data?.button2?.text}
            </Link>
          </div>
        </div>
        {/* Right Side of Banner */}
        <div className="relative flex md:w-1/2 w-full flex-col md:flex-row items-center md:gap-5 gap-3">
          <div className="relative flex flex-col md:w-3/5 w-full gap-3 md:gap-5">
            <Image
              src={data?.img[0]}
              alt="b2"
              width={1000}
              height={1000}
              className="h-full max-h-[200px] w-full rounded-lg object-contain"
            />
            <Image
              src={data?.img[1]}
              alt="b1"
              className="h-full max-h-[320px] w-full rounded-lg pl-28 object-contain"
            />
          </div>
          <Image
            src={data?.img[2]}
            alt="b3"
            width={1000}
            height={1000}
            className="h-full max-h-[350px] w-full md:w-2/5 rounded-lg object-contain"
          />
          <p className="absolute bottom-5 right-1/2 md:right-14 md:translate-x-0 translate-x-full w-[30%] min-w-[205px] md:w-auto flex flex-col rounded-xl bg-blue-950 p-5 text-white">
            <span className="text-wrap">{data?.text2}</span>
            <span>{data?.text3}</span>
          </p>
        </div>
      </Wrapper>
    </section>
  );
}
