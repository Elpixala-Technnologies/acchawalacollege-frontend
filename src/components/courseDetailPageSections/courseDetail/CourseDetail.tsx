"use client";
import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
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
      </Wrapper>
    </section>
  );
}
