import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React from "react";
import { CiFlag1, CiLocationOn } from "react-icons/ci";

export default function HeroSection1({ collegeDetails }: any) {
  return (
    <section className="relative w-full ">
      <Image
        src={collegeDetails?.collegeImg[0]}
        alt="collegeImg"
        className="mx-auto h-[280px] w-full max-w-screen-2xl object-cover"
      />
      <div className="absolute left-0 top-0 h-full w-full bg-black/50">
        <Wrapper className="p-10 text-white">
          <div className="my-auto flex items-center gap-x-6 border-b border-white pb-5">
            <div className="min-h-20 min-w-20 md:h-40 md:w-40 rounded-full bg-white p-2 md:p-5">
              <Image
                src={collegeDetails?.collegeLogo}
                alt="collegeLogo"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className="wh md:text-3xl text-2xl font-bold text-wrap">
                {collegeDetails?.CollegeName}
              </h1>
              <div className="flex max-md:flex-col gap-x-6">
                <p className="flex items-center gap-x-1 font-thin">
                  <CiLocationOn />
                  {collegeDetails?.location?.city},{" "}
                  {collegeDetails?.location?.state}
                </p>
                <p className="flex items-center gap-x-1 font-thin">
                  <CiFlag1 />
                  {collegeDetails?.collegeType === "Government"
                    ? "Govt."
                    : "Pvt."}{" "}
                  College
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-x-6 py-5">
            <p className="flex items-center gap-x-1 font-thin">
              <CiLocationOn />
              {collegeDetails?.collegeType}
            </p>
            <p className="flex items-center gap-x-1 font-thin">
              <CiFlag1 />
              {collegeDetails?.estYear}
            </p>
          </div>
        </Wrapper>
      </div>
    </section>
  );
}
