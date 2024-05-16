import Image from "next/image";
import React from "react";
import {
  DownArrow,
  Landing1,
  Landing2,
  Landing3,
  Search,
  section3Bg,
} from "@/asset";
import { section3 } from "@/data/homePage";
import Link from "next/link";
import TextWithLineBreak from "@/utils/TextWithLineBreack";
import Button from "@/components/button/button";
import AdmissionsCard from "@/components/cards/AdmissionsCard";
import CounsellingSessionsCard from "@/components/cards/CounsellingCard";
import FulfilledDreamsCard from "@/components/cards/FulfilledDreamCard";

export default function Section3() {
  return (
    <>
      <div className="w-full bg-white  pt-10">
        <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between gap-2 ">
          <div className="relative bg-white rounded-lg overflow-hidden p-2 w-2/3">
            <div className="flex flex-col gap-3">
              <span>
                <span className="text-[38px] font-bold font-satoshi text-[#5C5B8F]">
                  Best Education
                </span>
                <br />
                <span className="text-[#012148] font-bold text-[38px]">
                  Counselling Platform
                </span>
                <br />
                <span className="text-[#2095F2] font-bold text-[38px]">
                  in The World
                </span>
              </span>
              <div className="text-primary-text text-[17px]">
                Search your career opportunities across 27000+ Colleges
              </div>
              <div className="flex gap-1">
                <input
                  className="rounded-md border-[0.5px] border-primary-extra-light-text  w-full bg-[#F2F2F2] p-2 shadow"
                  placeholder="Search Colleges, Courses, Exams & more"
                />
                <button className="bg-[#2095F2] text-white p-[10px] rounded-md flex gap-4 items-center justify-center">
                  <Image src={Search} alt="" />
                </button>
              </div>
              <div className="text-[15px] font-light">
                <button
                  type="button"
                  className="py-2.5 w-56 px-5 me-2 mb-2 text-sm border-[#012148] font-medium text-[#012148] focus:outline-none bg-white rounded-lg border hover:bg-gray-100"
                >
                  Explore Colleges
                </button>
                <button
                  type="button"
                  className="text-white w-60 bg-[#012148] hover:bg-[#012148]  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  Schedule Counselling
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-1 w-2/3 items-start justify-end p-5 relative">
            <div className="p-5 gap-2 flex flex-col items-end w-full ">
              <Image
                src={Landing1}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
              <Image
                src={Landing2}
                alt=""
                width={1000}
                height={1000}
                className="w-[80%] h-full object-cover"
              />
            </div>
            <div className="w-full">
              <Image
                src={Landing3}
                alt=""
                width={1200}
                height={1000}
                className="w-3/4 h-full mt-10 object-cover"
              />
              <div className="lg:flex hidden flex-col gap-1 bg-[#012148] w-1/3 p-5 text-white text-base rounded-3xl absolute bottom-12 right-1/4">
                <span>Get 30% off on every 1st month </span>
                <span>Expert Counsellors</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-10 grid grid-cols-3 gap-0 w-full">
          <div>
            <div>
              <AdmissionsCard />
            </div>
          </div>
          <div>
            <FulfilledDreamsCard />
          </div>
          <div>
            <CounsellingSessionsCard />
          </div>
        </div>
      </div>
    </>
  );
}
