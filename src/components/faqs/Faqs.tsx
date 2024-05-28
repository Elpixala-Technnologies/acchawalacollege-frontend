"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Wrapper from "../Wrapper";

export default function Faqs({ data, className = "" }: any) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id: any) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="my-16 w-full">
      <Wrapper>
        {/* Title  */}
        {data?.title && (
          <h1 className="title1 mb-5">
            {data?.title.t1 && <span className="text-slate-500">{data?.title.t1}</span>}{" "}
            {data?.title.t2 && <span className="text-blue-950">{data?.title.t2}</span>}{" "}
            {data?.title.t3 && <span className="text-sky-500">{data?.title.t3}</span>}{" "}
          </h1>
        )}
        <div className={`flex flex-col gap-4 ${className}`}>
          {data?.faqsQuestionsAndAnswers?.map((faq: any, index: number) => (
            <div key={faq.id} className="mb-4 border-b border-zinc-300 pb-2">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="font-medium">{faq?.question}</span>
                <IoIosArrowDown
                  className={`transform text-xl transition-transform ${
                    openFaq === faq.id || (index === 0 && openFaq === null)
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>
              <div
                className={`mt-2 transition-all duration-300 ease-in-out ${
                  openFaq === faq?.id || (index === 0 && openFaq === null)
                    ? "max-h-96"
                    : "max-h-0 overflow-hidden"
                }`}
              >
                <p className="text-zinc-500">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
