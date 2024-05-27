"use client";
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';

export default function Faqs({data, className=""}:any) {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (id: any) => {
      setOpenFaq(openFaq === id ? null : id);
    };
  
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
    {data?.map((faq: any, index: number) => (
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
  )
}
