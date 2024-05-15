import Image from "next/image";
import React from "react";
import { DownArrow, Landing1, Landing2, Landing3, Search, section3Bg } from "@/asset";
import { section3 } from "@/data/homePage";
import Link from "next/link";
import TextWithLineBreak from "@/utils/TextWithLineBreack";
import Button from "@/components/button/button";
import Section4 from "../section4/Section4";
import AdmissionsCard from "@/components/cards/AdmissionsCard";
import CounsellingSessionsCard from "@/components/cards/CounsellingCard";
import FulfilledDreamsCard from "@/components/cards/FulfilledDreamCard";

export default function Section3() {
  return (
    <section className="w-full mx-auto">
      {/* <div className="relative">
        <Image
          src={section3Bg}
          alt="bg"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex-center flex-col text-white gap-5">
          <h1 className="text-4xl text-center">
            <TextWithLineBreak text={section3.title} />
          </h1>
          <p className="font-light">
            <TextWithLineBreak text={section3.text1} />
          </p>
          <Link href={section3.button.href}>
            <button className="button1">
              {section3.button.text}
            </button>
          </Link>
        </div>
      </div> */}
      <div className="relative bg-white p-16 pt-16 rounded-lg overflow-hidden">
        <div className="flex flex-col gap-3 pt-12">
          <span>
            <span className="text-[38px] font-bold font-satoshi text-[#5C5B8F]">Best Education</span>
            <br />
            <span className="text-[#012148] font-bold text-[38px]">Counselling Platform</span><br />
            <span className="text-[#2095F2] font-bold text-[38px]">in The World</span>
          </span>
          <div className="text-primary-text text-[17px]">
            Search your career opportunities across 27000+ Colleges
          </div>
          <div className="flex gap-1">
            <input
              className="rounded-md border-[0.5px] border-primary-extra-light-text w-2/6 bg-[#F2F2F2] p-2 shadow"
              placeholder="Search Colleges, Courses, Exams & more"
            />
            <button className="bg-[#2095F2] text-white p-[10px] rounded-md flex gap-4 items-center justify-center">
              <Image src={Search} alt="" />
            </button>
          </div>
          <div className="text-[15px] font-light">
            <button type="button" className="py-2.5 w-56 px-5 me-2 mb-2 text-sm  border border-[#012148] font-medium text-[#012148] focus:outline-none bg-white rounded-lg border border-gray-950 hover:bg-gray-100">Explore Colleges</button>
            <button type="button" className="text-white w-60 bg-[#012148] hover:bg-[#012148]  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Schedule Counselling</button>
          </div>
          {/* <div className="flex justify-end items-center gap-2 text-sm">
            <div className="flex flex-wrap">
              <div>
                <Image src={Landing1} alt="" />
                </div>
              <div><Image src={Landing1} alt="" /></div>
              <div><Image src={Landing1} alt="" /></div>
            </div>
          </div> */}
        </div>
        {/* <div className="absolute -top-10 -right-10">
            <div className="grid grid-rows-3 grid-flow-col gap-4">
              <div className="row-start-1 landing-1 row-span-2"><Image src={Landing1} alt="" /></div>
              <div className="row-end-2  landing-2 row-span-2"><Image src={Landing2} alt="" /></div>
              <div className="row-start-1 row-end-4"><Image src={Landing3} alt="" /></div>
            </div>
        </div> */}
      </div>

      <div className=" p-10 grid grid-cols-3 gap-0">
        <div>
          <div><AdmissionsCard />
          </div>
        </div>
        <div>
          <FulfilledDreamsCard />
        </div>
        <div>
          <CounsellingSessionsCard />
        </div>
      </div>
    </section>
  );
}
