import Wrapper from "@/components/Wrapper";
import { formatRupee } from "@/utils/fotmatRupee";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiFlag1, CiHeart, CiLocationOn } from "react-icons/ci";
import {
  FaAngleRight,
  FaChalkboardTeacher,
  FaQuestionCircle,
  FaRegClock,
} from "react-icons/fa";
import { FaBuildingFlag, FaClockRotateLeft } from "react-icons/fa6";
import { GrValidate } from "react-icons/gr";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { IoBookOutline, IoHeartCircleSharp } from "react-icons/io5";

export default function HeroSection({ data }: any) {
  return (
    <section className="relative w-full border-b border-zinc-300">
      <Wrapper className="p-10">
        {/* BreadCrumb  */}
        <div className="mb-5 flex items-center gap-x-1 text-xs font-medium text-blue-950">
          <Link href="/">
            <p>Home</p>
          </Link>
          <FaAngleRight />
          <Link href="/courses">
            <p>Courses</p>
          </Link>
          <FaAngleRight />
          <p className="font-blue-500">{data?.title}</p>
        </div>
        {/* End BreadCrumb  */}
        <div className="my-auto flex gap-x-8 border-b border-white">
          <Image
            src={data?.collegeDetails?.collegeLogo}
            alt="collegeLogo"
            className="h-full max-h-40 w-full max-w-40 object-cover"
          />
          <div className="flex flex-col gap-2 text-sm">
            {/* title  */}
            <div className="flex items-center gap-x-1 font-thin">
              <h1 className="text-wrap text-2xl font-bold text-blue-950 md:text-4xl">
                {data?.title}
              </h1>
              {data?.courseType && (
                <p className="flex items-center gap-x-1 rounded-md border border-red-600 px-2 py-1 text-xs font-thin text-red-600">
                  <IoBookOutline />
                  {data?.courseType} Course
                </p>
              )}
            </div>
            {/* End  title  */}
            {/* Location  */}
            <div className="flex gap-x-6 max-md:flex-col">
              <p className="flex items-center gap-x-1 font-thin">
                <CiLocationOn />
                {data?.collegeDetails?.location?.city}{" "}
                {data?.collegeDetails?.location?.state && (
                  <>
                    {", "}
                    {data?.collegeDetails?.location?.state}
                  </>
                )}
              </p>
              <p className="flex items-center gap-x-1 font-thin">
                <FaBuildingFlag />
                {data?.collegeDetails?.CollegeName}
              </p>

              {/* <p className="flex items-center gap-x-1 font-thin">
                <CiFlag1 />
                {data?.collegeType === "Government" ? "Govt." : "Pvt."} College
              </p> */}
            </div>
            {/* End Location  */}
            {/* Affiliation  */}
            <div className="text-bold flex gap-x-6 max-md:flex-col">
              {data?.collegeDetails?.affiliation && (
                <p className="flex items-center gap-x-1 ">
                  <GrValidate />
                  {data?.collegeDetails?.affiliation}
                </p>
              )}
              {" | "}
              {data?.duration && (
                <p className="flex items-center gap-x-1 ">
                  <FaClockRotateLeft />
                  {data?.duration}
                </p>
              )}
              {" | "}
              {data?.courseType && (
                <p className="flex items-center gap-x-1 ">
                  <FaChalkboardTeacher />
                  {data?.courseType}
                </p>
              )}
              {" | "}
              {data?.fees && (
                <p className="flex items-center gap-x-1 ">
                  <HiOutlineCurrencyRupee />
                  {formatRupee(data?.fees)}
                </p>
              )}
            </div>
            {/* End Affiliation  */}
            {/* Last Updated  */}
            <div className="mt-5">
              <p className="flex items-center gap-x-1 ">
                <FaRegClock /> Updated on {data?.lastUpdate}
              </p>
            </div>
            {/* End Last Updated  */}
          </div>
        </div>
        <div className="flex justify-end gap-x-6 text-blue-950/80 ">
          <p className="flex items-center gap-x-1 font-thin">
            <IoHeartCircleSharp className="text-lg" />
            Save
          </p>
          <p className="flex items-center gap-x-1 font-thin">
            <FaQuestionCircle />
            Ask
          </p>
          <div className="flex gap-2">
            <Link href={data?.button1?.href} className="button2">
              {data?.button1?.text}
            </Link>
            <Link href={data?.button2?.href} className="button1">
              {data?.button2?.text}
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
