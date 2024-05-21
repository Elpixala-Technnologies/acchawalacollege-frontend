import Wrapper from "@/components/Wrapper";
import React from "react";
import { bannerSection } from "@/data/collegeData";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="mb-10 w-full border-t border-zinc-400 bg-blue-100">
      <Wrapper className="flex flex-col gap-y-5 p-5 md:p-10">
        <h1 className="title2">
          {bannerSection?.title?.t1 && <span>{bannerSection.title.t1}</span>}{" "}
          {bannerSection?.title?.t2 && <span>{bannerSection.title.t2}</span>}{" "}
          {bannerSection?.title?.t3 && <span>{bannerSection.title.t3}</span>}{" "}
        </h1>
        <div className="flex items-center gap-x-2 ">
          <Image
            src={bannerSection?.author?.avatar}
            alt="avatar"
            className="h-12 w-12 rounded-full"
          />
          <div>
            {bannerSection?.author?.name && (
              <p className="font-bold">{bannerSection?.author?.name}</p>
            )}
            {bannerSection?.author?.lastUpdated && (
              <p className="font-medium">Last Updated: {bannerSection?.author?.lastUpdated}</p>
            )}

          </div>
        </div>
        <div className="text-justify" dangerouslySetInnerHTML={{ __html: bannerSection.article }} />
        <Link href={bannerSection.readMoreLink} className="font-medium text-right hover:text-blue-500">Read More</Link>
      </Wrapper>
    </section>
  );
}
