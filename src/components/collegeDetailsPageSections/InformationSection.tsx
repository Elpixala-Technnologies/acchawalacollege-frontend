import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CollegeDetailsCardSlider from "../cards/CollegeDetailsCardSlider";
import PartnersCard from "../cards/PartnersCard";
import CompaniesScrollSlideShow from "./CompaniesScrollSlideShow";

export default function InformationSection({ data }: any) {
  return (
    <section className="w-full bg-white">
      <Wrapper className="flex flex-col gap-y-5 border-b border-zinc-400 p-5 md:p-10">
        {/* Title  */}
        {data?.title && (
          <h1 className="title2">
            {data?.title.t1 && <span>{data?.title.t1}</span>}
            {data?.title.t2 && <span>{data?.title.t2}</span>}
            {data?.title.t3 && <span>{data?.title.t3}</span>}
          </h1>
        )}
        {/* Author  */}
        {data?.author && (
          <div className="flex items-center gap-x-2 ">
            {data?.author?.avatar && (
              <Image
                src={data?.author?.avatar}
                alt="avatar"
                className="h-12 w-12 rounded-full"
              />
            )}
            <div>
              {data?.author?.name && (
                <p className="font-bold">{data?.author?.name}</p>
              )}
              {data?.author?.lastUpdated && (
                <p className="font-medium">
                  Last Updated: {data?.author?.lastUpdated}
                </p>
              )}
            </div>
          </div>
        )}
        {/* Article  */}
        {data?.article && (
          <div
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: data?.article }}
          />
        )}
        {/* Read More  */}
        {data?.readMoreLink && (
          <Link
            href={data?.readMoreLink}
            className="text-right font-medium hover:text-blue-500"
          >
            Read More
          </Link>
        )}
        {/* buttons  */}
        {data?.button && (
          <div className="flex gap-x-4 md:max-w-xl">
            {data?.button1?.text && (
              <Link className="button6 flex-[1]" href={data?.button1?.link}>
                {data?.button1?.text}
              </Link>
            )}
            {data?.button2?.text && (
              <Link className="button7 flex-[1]" href={data?.button2?.link}>
                {data?.button2?.text}
              </Link>
            )}
          </div>
        )}
        {/* facilities  */}
        {data?.facilities && (
          <div className="flex flex-wrap gap-5 rounded-lg bg-blue-100 p-5">
            {data?.facilities?.map((d: any, i: number) => (
              <div
                key={i}
                className="flex-center gap-1 rounded-e-3xl rounded-s-3xl border-2 border-zinc-300 bg-white p-3 shadow"
              >
                <Image
                  src={d?.icon}
                  alt="icon"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                <p className="font-medium text-blue-950">{d?.name}</p>
              </div>
            ))}
          </div>
        )}
        {/* Courses  */}
        {data?.courses && (
          <div className="md:grid-col-2 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3">
            {data?.courses.length > 0 &&
              data?.courses?.map((course: any, i: number) => (
                <React.Fragment key={i}>
                  <CollegeDetailsCardSlider course={course} />
                </React.Fragment>
              ))}
          </div>
        )}
        {/* Top Recruiters  */}
        {data?.companyLogos &&(
          <CompaniesScrollSlideShow image={data?.companyLogos} />
        )}
      </Wrapper>
    </section>
  );
}
