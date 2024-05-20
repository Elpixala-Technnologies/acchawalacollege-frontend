import React from "react";
import Image from "next/image";
import { formatRupee } from "@/utils/fotmatRupee";
import { FaRegCircleCheck } from "react-icons/fa6";
import { SlClose } from "react-icons/sl";
import TextWithLineBreak from "@/utils/TextWithLineBreack";
import Link from "next/link";
export default function PackageCard({ data }: any) {
  return (
    <div className={`relative min-w-[400px] max-w-[450x] rounded-lg border-2 ${data.styling.border} overflow-hidden gap-1 hover:scale-105 hover:translate-y-4  transition-all duration-300 hover:shadow-lg hover:shadow-blue-500`}>
      {data.isPopular && (
        <div className="absolute top-[2.5rem] right-[8.5rem] w-full text-center py-1 bg-red-800 text-white -rotate-45">Most Popular</div>
      )}
      <div className={`flex-center p-2 bg-gradient-to-r ${data.styling.tagBg}`}>
        <Image src={data.icon} alt="icon" width={30} height={30} />
      </div>
      <div className="w-full flex flex-col items-center text-center">
        <h2 className="font-semibold"><TextWithLineBreak text={data.PackageName} /></h2>

        <p>
          <span className="font-semibold text-2xl">
            {formatRupee(data.price)}
          </span>
          <span className="text-xs text-zinc-500">/year</span>
        </p>

        <p className="mb-8"><TextWithLineBreak text={data.text1} /></p>

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
