import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection2({ collegeDetails }: any) {
  return (
    <section className="mb-10 w-full border-t border-zinc-400 bg-blue-100">
      <Wrapper className="flex flex-col gap-y-5 p-5 md:p-10">
        <h1 className="title2">
          {collegeDetails?.Overview?.title?.t1 && (
            <span>{collegeDetails?.Overview.title.t1}</span>
          )}{" "}
          {collegeDetails?.Overview?.title?.t2 && (
            <span>{collegeDetails?.Overview.title.t2}</span>
          )}{" "}
          {collegeDetails?.Overview?.title?.t3 && (
            <span>{collegeDetails?.Overview.title.t3}</span>
          )}{" "}
        </h1>
        <div className="flex items-center gap-x-2 ">
          <Image
            src={collegeDetails?.Overview?.author?.avatar}
            alt="avatar"
            className="h-12 w-12 rounded-full"
          />
          <div>
            {collegeDetails?.Overview?.author?.name && (
              <p className="font-bold">
                {collegeDetails?.Overview?.author?.name}
              </p>
            )}
            {collegeDetails?.Overview?.author?.lastUpdated && (
              <p className="font-medium">
                Last Updated: {collegeDetails?.Overview?.author?.lastUpdated}
              </p>
            )}
          </div>
        </div>
        <div
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: collegeDetails?.Overview.article }}
        />
        <Link
          href={collegeDetails?.Overview.readMoreLink}
          className="text-right font-medium hover:text-blue-500"
        >
          Read More
        </Link>
        <div className="flex gap-x-4 md:max-w-xl">
        <Link className="button6 flex-[1]" href={collegeDetails?.Overview.button1.link}>{collegeDetails?.Overview.button1.text}</Link>
        <Link className="button7 flex-[1]" href={collegeDetails?.Overview.button2.link}>{collegeDetails?.Overview.button2.text}</Link>
        </div>
      </Wrapper>
    </section>
  );
}
