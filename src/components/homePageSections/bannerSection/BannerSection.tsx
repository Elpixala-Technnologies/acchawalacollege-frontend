"use client";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";

export default function BannerSection({data}:any) {
  return (
    <section className="my-16 w-full">
      <Wrapper className="flex items-center max-md:flex-col max-md:gap-y-2">
        {/* Left Side of Banner */}
        <div className="flex w-max flex-col gap-8 p-5 [flex:1] max-md:pr-0">
          {/* Title  */}
          <h1 className="text-3xl flex flex-col gap-y-2 md:text-5xl font-medium text-wrap">
            <span className="  text-blue-950/70">{data?.title?.t1}</span>
            <span className=" text-blue-950">{data?.title?.t2}</span>
            <span className=" text-blue-500">{data?.title?.t3}</span>
          </h1>
          {data?.text1 && <p className="text-wrap">{data?.text1}</p>}
          {/* Input field */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex h-10  gap-1"
          >
            <input
              className="h-full w-full max-w-[500px] rounded-md  border bg-zinc-100 p-5 shadow"
              placeholder="Search Colleges, Courses, Exams & more"
            />
            <button
              type="submit"
              className="banner-search-button"
            >
              <CiSearch className="text-2xl text-white" />
            </button>
          </form>
          <div className="flex gap-2">
            <Link href={data?.button1?.href} className="button2">
              {data?.button1?.text}
            </Link>
            <Link href={data?.button2?.href} className="button1">
              {data?.button2?.text}
            </Link>
          </div>
        </div>
        {/* Right Side of Banner  */}
        <div className="relative flex w-1/2 items-center gap-x-5">
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
          <p className="absolute bottom-5 right-1/2 flex w-[30%] min-w-[205px] translate-x-full flex-col rounded-xl bg-blue-950 p-5 text-white">
            <span className="mb-3 text-wrap">{data?.text2}</span>
            <span>{data?.text3}</span>
          </p>
        </div>
      </Wrapper>
    </section>
  );
}
