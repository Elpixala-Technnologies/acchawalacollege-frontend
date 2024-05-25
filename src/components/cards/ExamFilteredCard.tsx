import Image from "next/image";
import Link from "next/link";
import React from "react";
import Separator from "../separator/separator";

export default function ExamFilteredCard({ exam }: any) {

  return (
    <div className="relative mb-5 w-full rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {/* Div 1 */}
      <div className="flex gap-y-2 p-5 max-md:flex-wrap">
        <Image
          src={exam.img}
          alt="exam"
          className="h-[160px] w-[200px] rounded-md max-md:ml-5 max-md:w-full"
        />
        <div className="exam-card">
          <h1 className=" mb-3 text-wrap text-xl font-bold">{exam.name}</h1>
          <div className="mb-3 flex flex-wrap gap-x-6">
            {/* item 1  */}
          </div>
          {/* Line 1  */}
          <div className="flex gap-x-1 text-zinc-600">
            <p className="line-clamp-2 text-wrap text-sm [flex:10]">
              {exam.desc}{" "}
              <span>
                Exam Date
              </span>
            </p>
            <div className="flex items-center gap-x-1 [flex:2]">
              26 May 24
            </div>
          </div>
          <Separator />
            {/* Line 2  */}
          <div className="flex gap-x-1 text-zinc-600 pt-4">
            <p className="line-clamp-2 text-wrap text-sm [flex:10]">
              {exam.desc}{" "}
              <span>
              Application Form  
              </span>
            </p>
            <div className="flex items-center gap-x-1 [flex:2]">
              27 Apr 25
            </div>
          </div>
          <Separator />
            {/* Line 3  */}
          <div className="flex gap-x-1 text-zinc-600 pt-4">
            <p className="line-clamp-2 text-wrap text-sm [flex:10]">
              {exam.desc}{" "}
              <span>
              Result Announce
              </span>
            </p>
            <div className="flex items-center gap-x-1 [flex:2]">
              26 May 24
            </div>
          </div>
        </div>
        <div className="flex flex-col text-right gap-2 gap-x-2">
          <button className="rounded-lg border-2 border-[#012148] bg-[#012148] px-4 py-2 text-white hover:bg-white  hover:text-blue-500">
            {exam.button1.text}
          </button>
          <button className="rounded-lg border-2 border-blue-700 px-2 py-2 bg-blue-700 text-white hover:bg-blue-700 hover:text-white">
            {exam.button2.text}
          </button>
          <button className="rounded-lg border-2 border-blue-700 px-2 py-2 text-blue-500 hover:bg-blue-700 hover:text-white">
            {exam.button3.text}
          </button>
        </div>
      </div>
      {/* Div 2  */}
      <div className="flex flex-wrap justify-between gap-y-2 border-t-2 border-black p-5">
        <ul className="flex flex-wrap items-center gap-x-4 rounded-md bg-blue-100 px-4 py-1 text-sm text-blue-600">
          {exam.navbar.map((item: string, index: number) => (
            <React.Fragment key={index}>
              <Link href="#">
                <li key={index} className="cursor-pointer hover:underline">
                  {item}
                </li>
              </Link>
              {index !== exam.navbar.length - 1 && <li>|</li>}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}

