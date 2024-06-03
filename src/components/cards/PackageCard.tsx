import React, { useState } from "react";
import Image from "next/image";
import { formatRupee } from "@/utils/fotmatRupee";
import { FaRegCircleCheck } from "react-icons/fa6";
import { SlClose } from "react-icons/sl";
import TextWithLineBreak from "@/utils/TextWithLineBreak";
import Link from "next/link";
export default function PackageCard({ data, isActive, onSelect }: any) {
  return (
    <div
      className={`relative max-md:mx-5 max-w-[450x] md:min-w-[400px] rounded-lg border-2 ${isActive ? "md:translate-y-4 md:scale-105 scale-100 md:border-blue-500 md:shadow-lg md:shadow-blue-500" : data.styling.border} gap-1 overflow-hidden transition-all duration-300  hover:translate-y-4 hover:scale-105 hover:shadow-lg hover:shadow-blue-500`}
      onClick={onSelect}
    >
      {data?.isPopular && (
        <div className="md:absolute right-[8.5rem] top-[2.5rem] w-full md:-rotate-45 bg-red-800 py-1 text-center text-white">
          Most Popular
        </div>
      )}
      <div className={`flex-center bg-gradient-to-r p-2 ${data.styling.tagBg}`}>
        <Image src={data.icon} alt="icon" width={30} height={30} />
      </div>
      <div className="flex w-full flex-col items-center text-center">
        <h2 className="font-semibold">
          <TextWithLineBreak text={data.PackageName} />
        </h2>

        <p>
          <span className="text-2xl font-semibold">
            {formatRupee(data.price)}
          </span>
          <span className="text-xs text-zinc-500">/year</span>
        </p>

        <p className="mb-8">
          <TextWithLineBreak text={data.text1} />
        </p>

        <ul className="w-max text-left leading-8">
          {data.list.map((d: any, i: number) => (
            <li key={i} className="flex items-center gap-4">
              <span>
                {d.isInclude ? (
                  <FaRegCircleCheck className="text-green-500" />
                ) : (
                  <SlClose className="text-red-500" />
                )}
              </span>
              <span>{d.text}</span>
            </li>
          ))}
        </ul>

        <Link href={data.button.href}>
          <button className="button2 my-8">{data.button.text}</button>
        </Link>
      </div>
    </div>
  );
}
