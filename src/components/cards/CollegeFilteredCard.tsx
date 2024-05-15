import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { TbCoinRupee, TbTransactionRupee } from "react-icons/tb";

export default function CollegeFilteredCard({ college }: any) {
  return (
    <div className="w-full  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg mb-5">
      <div className="p-5 flex">
        <Image
          src={college.img}
          alt="collage"
          className="w-[200px] h-[160px] rounded-md"
        />
        <div className="px-5">
          {/* div 1  */}
          <div className="flex gap-x-8 mb-3">
            <div className="flex items-center gap-x-2">
              <span className="flex items-center text-sm gap-x-1 bg-green-600 rounded text-white font-thin px-1">
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
          {/* div 2  */}
          <div>
            <h1 className="text-xl font-bold">{college.name}</h1>
            <div className="flex gap-x-5">
              <div className="flex items-center gap-x-2">
                <div className="flex flex-col gap-1">
                <TbCoinRupee className="text-blue-500 text-xl" />
                <span className="font-semibold">
                  {college.avgFeePerYear}. lac/sem
                </span>
                <span className="text-xs text-zinc-400">Fees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5"></div>
    </div>
  );
}
