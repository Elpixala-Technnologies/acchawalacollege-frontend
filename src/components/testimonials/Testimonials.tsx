import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React from "react";
import { quoteIcon } from "@/asset";
import TextWithLineBreak from "@/utils/TextWithLineBreak";
import TestimonialSlider from "../cards/TestimonialSlider";

export default function Testimonials({ data }: any) {
  return (
    <section className="relative my-16 w-full max-md:px-5">
      <div className="relative mx-auto flex w-full max-w-[1350px] overflow-hidden">
        {/* Background Images  */}
        <div className="-z-10 flex w-full justify-between">
          <Image
            src={quoteIcon}
            alt="bg"
            className="m-14 max-h-[150px] w-auto translate-x-1/2 object-contain"
          />
          <Image
            src={data.bgImg}
            alt="bg"
            className="max-h-[450px] w-auto object-contain"
          />
        </div>
        {/* Title and Text */}
        <div className="z-3 absolute left-0 top-[50%] flex -translate-y-1/2 flex-col gap-3">
          <h1 className="title1 flex flex-col gap-3">
            <span className="text-blue-950">{data.title.t1}</span>
            <span className="text-blue-500">{data.title.t2}</span>
          </h1>
          <p>
            <TextWithLineBreak text={data?.text1} />
          </p>
        </div>
        {/* Testimonials  */}
        <div className="testimonials z-3 absolute left-0 top-[60%] mx-auto w-full -translate-y-1/2">
          <TestimonialSlider testimonials={data.testimonials} />
        </div>
      </div>
    </section>
  );
}
