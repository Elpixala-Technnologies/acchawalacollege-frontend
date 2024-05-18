"use client";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import { homeBanner } from "@/data/homePage";

export default function BannerSection() {
  return (
    <section className="my-5 w-full">
      <Wrapper className="flex items-center max-md:flex-col max-md:gap-y-2">
        {/* Left Side of Banner */}
        <div className="flex w-max flex-col gap-8 p-5 [flex:1] max-md:pr-0">
          {/* Title  */}
          <h1 className="max-md:4xl flex flex-col gap-y-2 text-5xl font-medium">
            <span className="  text-blue-900/80">{homeBanner?.title?.t1}</span>
            <span className=" text-blue-900">{homeBanner?.title?.t2}</span>
            <span className=" text-blue-500">{homeBanner?.title?.t3}</span>
          </h1>
          <p>{homeBanner?.text1}</p>
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
              className="flex-center h-full rounded-md bg-blue-500 p-5 text-white shadow"
            >
              <CiSearch className="text-2xl text-white" />
            </button>
          </form>
          <div className="flex gap-2">
            <Link href={homeBanner?.button1?.href} className="button2">
              {homeBanner?.button1?.text}
            </Link>
            <Link href={homeBanner?.button2?.href} className="button1">
              {homeBanner?.button2?.text}
            </Link>
          </div>
        </div>
        {/* Right Side of Banner  */}
        <div className="relative flex w-1/2 items-center gap-x-5">
          <div className="relative flex h-full w-3/5 flex-col gap-y-5">
            <Image
              src={homeBanner?.img[0]}
              alt="b2"
              width={1000}
              height={1000}
              className="ml-auto h-full max-h-[200px] w-max  rounded-lg object-contain"
            />
            <Image
              src={homeBanner?.img[1]}
              alt="b1"
              className="ml-auto h-full max-h-[320px] w-max  rounded-lg object-contain"
            />
          </div>
          <Image
            src={homeBanner?.img[2]}
            alt="b3"
            width={1000}
            height={1000}
            className="h-full max-h-[350px] w-2/5 rounded-lg object-contain"
          />
          <p className="absolute bottom-5 right-1/2 flex w-[30%] min-w-[205px] translate-x-full flex-col rounded-xl bg-blue-950 p-5 text-white">
            <span className="mb-3 text-wrap">{homeBanner?.text2}</span>
            <span>{homeBanner?.text3}</span>
          </p>
        </div>
      </Wrapper>
    </section>
  );
}
