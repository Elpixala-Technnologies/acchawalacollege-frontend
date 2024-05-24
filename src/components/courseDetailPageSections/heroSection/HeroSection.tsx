import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React from "react";
import { CiFlag1, CiLocationOn } from "react-icons/ci";

export default function HeroSection({ data }: any) {
  return (
    <section className="relative w-full ">
        <Wrapper className="p-10">
          <div className="my-auto flex items-center gap-x-6 border-b border-white pb-5">
            {/* BreadCrumb  */}

            <div className="min-h-20 min-w-20 md:h-40 md:w-40 rounded-full bg-white p-2 md:p-5">
              <Image
                src={data?.collegeDetails?.collegeLogo}
                alt="collegeLogo"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className="wh md:text-3xl text-2xl font-bold text-wrap">
                {data?.collegeDetails?.CollegeName}
              </h1>
              <div className="flex max-md:flex-col gap-x-6">
                <p className="flex items-center gap-x-1 font-thin">
                  <CiLocationOn />
                  {data?.location?.city},{" "}
                  {data?.location?.state}
                </p>
                <p className="flex items-center gap-x-1 font-thin">
                  <CiFlag1 />
                  {data?.collegeType === "Government"
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
              {data?.collegeType}
            </p>
          </div>
        </Wrapper>
    </section>
  );
}
