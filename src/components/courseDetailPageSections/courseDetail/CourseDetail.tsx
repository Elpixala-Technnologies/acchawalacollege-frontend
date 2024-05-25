"use client";
import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import AsideSection from "./AsideSection";
import Faqs from "@/components/faqs/Faqs";

export default function CourseDetail({ data, faqs }: any) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index: any) => {
    setSelectedIndex(index);
  };
  return (
    <section className="mb-14 w-full">
      <Wrapper>
        <Navbar
          courseDetails={data}
          onSelect={handleSelect}
          selectedIndex={selectedIndex}
        />
        <div className="my-5 flex flex-col space-x-4 md:flex-row">
          <div className="flex w-full flex-col md:min-w-[550px] md:[flex:8]">
            <Content courseDetails={data} selectedIndex={selectedIndex} />
            <div className="my-5 rounded-lg border border-zinc-300 p-5">
              {/* Title  */}
              {faqs?.title && (
                <h1 className="mb-5 text-blue-950 text-2xl font-medium">
                  {faqs?.title && faqs?.title}
                </h1>
              )}
              <Faqs data={faqs?.faqsQuestionsAndAnswers} />
            </div>
          </div>
          <AsideSection />
        </div>
      </Wrapper>
    </section>
  );
}
