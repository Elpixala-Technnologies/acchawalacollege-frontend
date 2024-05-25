import React from "react";

import Link from "next/link";
import Image from "next/image";
import { ExamQuestions } from "@/asset";
import Wrapper from "../Wrapper";

export default function ExamBanner() {
  return (
    <section className="my-5 w-full md:p-5">
      <Wrapper className="flex justify-between md:rounded-xl bg-gradient-to-r from-sky-800 to-sky-500 p-5 text-white">
        <div className="flex flex-col justify-center gap-y-5 md:pl-10">
          <h1 className="title1">Are you Confused?</h1>
          <p>Ask anything and get your answer in 48 hours</p>
          <Link href="/contact-us" className="button7 max-w-48">
            Ask a Question
          </Link>
        </div>
        <Image
          src={ExamQuestions}
          alt=""
          width={300}
          className="h-full w-full max-w-[200px] object-cover"
        />
      </Wrapper>
    </section>
  );
}