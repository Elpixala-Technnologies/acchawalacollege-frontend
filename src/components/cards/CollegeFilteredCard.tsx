import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart, CiLocationOn, CiMobile1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";
import { SlBadge } from "react-icons/sl";
import { TbCoinRupee, TbTransactionRupee } from "react-icons/tb";

export default function CollegeFilteredCard({ college }: any) {
  return (
    <div className="relative mb-5 w-full rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <Tag />
      {/* Div 1 */}
      <div className="flex gap-y-2 p-5 max-md:flex-wrap">
        <Image
          src={college.img}
          alt="collage"
          className="h-[160px] w-[200px] rounded-md max-md:ml-5 max-md:w-full"
        />
        <div className="px-5">
          {/* Line 1  */}
          <div className="mb-3 flex flex-wrap gap-x-8">
            <div className="flex items-center gap-x-2">
              <span className="flex items-center gap-x-1 rounded bg-green-600 px-1 text-sm font-thin text-white">
                {college.rating} <FaStar className="mb-[1px]" />
              </span>
              <span className="text-xs text-blue-500">{`(${college.reviews} reviews)`}</span>
            </div>

            <div className="flex items-center gap-x-2">
              <CiLocationOn />
              <span className="text-xs text-blue-500">
                {college.state && `${college.city}, ${college.state}`}
              </span>
            </div>

            <div className="flex items-center gap-x-2">
              <MdOutlineOutlinedFlag />
              <span className="text-xs text-blue-500">
                {college.collegeType.slice(0, 3)}. College
              </span>
            </div>
          </div>
          {/* Line 2  */}
          <h1 className=" mb-3 text-wrap text-xl font-bold">{college.name}</h1>
          {/* Line 3 */}
          <div className="mb-3 flex flex-wrap gap-x-6">
            {/* item 1 */}
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <TbCoinRupee className="text-3xl text-blue-500" />
                <div>
                  <p className="font-semibold">
                    {college.avgFeePerYear}. lac/sem
                  </p>
                  <p className="text-xs text-zinc-400">Fees</p>
                </div>
              </div>
            </div>
            {/* item 2  */}
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <SlBadge className="text-3xl text-blue-500" />
                <div>
                  <p className="font-semibold">{college.affiliation}</p>
                  <p className="text-xs text-zinc-400">Accreditation</p>
                </div>
              </div>
            </div>
            {/* item 3  */}
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <FaHandHoldingDollar className="text-3xl text-red-500" />
                <div>
                  <p className="font-semibold">{college.package} lpa</p>
                  <p className="text-xs text-zinc-400">Avg Package</p>
                </div>
              </div>
            </div>
            {/* item 4  */}
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                <RiTodoLine className="text-3xl text-blue-500" />
                <div>
                  <p className="font-semibold">{college.exam}</p>
                  <p className="text-xs text-zinc-400">Exams</p>
                </div>
              </div>
            </div>
          </div>
          {/* Line 4  */}
          <div className="flex gap-x-1 text-zinc-600">
            <p className="line-clamp-2 text-wrap text-sm [flex:11]">
              {college.desc}{" "}
              <span>
                <Link href={college.link}>Read More</Link>
              </span>
            </p>
            <div className="flex items-center gap-x-1 text-3xl [flex:1]">
              <CiHeart /> <span className="font-thin">|</span> <CiMobile1 />
            </div>
          </div>
        </div>
      </div>
      {/* Div 2  */}
      <div className="flex flex-wrap justify-between gap-y-2 border-t-2 border-black p-5">
        <ul className="flex flex-wrap items-center gap-x-4 rounded-md bg-blue-100 px-4 py-1 text-sm text-blue-600">
          {college.navbar.map((item: string, index: number) => (
            <React.Fragment key={index}>
              <Link href="#">
                <li key={index} className="cursor-pointer hover:underline">
                  {item}
                </li>
              </Link>
              {index !== college.navbar.length - 1 && <li>|</li>}
            </React.Fragment>
          ))}
        </ul>
        <div className="flex gap-x-2">
          <button className="rounded-lg border-2 border-blue-700 bg-blue-700 px-4 py-2 text-white hover:bg-white  hover:text-blue-500">
            {college.button1.text}
          </button>
          <button className="rounded-lg border-2 border-blue-700 px-2 py-2 text-blue-500 hover:bg-blue-700 hover:text-white">
            {college.button2.text}
          </button>
        </div>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="flex-center absolute right-5 top-0 flex-col text-center font-bold text-white">
      <p className="bg-blue-950 p-[8px]">#1</p>
      <p className="rounded bg-blue-950 px-[9px] z-10">NIRF</p>
      <div className="h-0 w-0 border-[18px] border-b-transparent border-l-blue-950 border-r-blue-950 border-t-blue-950 -translate-y-2"></div>
    </div>
  );
}
