import Image from "next/image";
import React from "react";
import { section3Bg } from "@/asset";
import { section3 } from "@/data/homePage";
import Link from "next/link";
import TextWithLineBreak from "@/utils/TextWithLineBreack";

export default function Section3() {
  return (
    <section className="w-full mx-auto">
      <div className="relative">
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
      </div>
    </section>
  );
}
