"use client";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CollegeDetailsCardSlider from "../cards/CollegeDetailsCardSlider";
import CompaniesScrollSlideShow from "./CompaniesScrollSlideShow";
import ReviewsSlider from "../cards/ReviewsSlider";
import { IoIosArrowDown } from "react-icons/io";
import YoutubeVideo from "../youtubeVideo";

export default function InformationSection({ data }: any) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id: any) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="w-full bg-white">
      <Wrapper className="flex flex-col gap-y-5 border-b border-zinc-400 p-5 md:p-10">
        {/* Title  */}
        {data?.title && (
          <h1 className="title2">
            {data?.title.t1 && <span>{data?.title.t1}</span>}{" "}
            {data?.title.t2 && <span>{data?.title.t2}</span>}{" "}
            {data?.title.t3 && <span>{data?.title.t3}</span>}{" "}
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
          <p className="w-full text-right">
            <Link
              href={data?.readMoreLink}
              className="w-min text-nowrap font-medium hover:text-blue-500 hover:underline"
            >
              Read More
            </Link>
          </p>
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
          <div className="md:grid-col-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data?.courses.length > 0 &&
              data?.courses?.map((course: any, i: number) => (
                <React.Fragment key={i}>
                  <CollegeDetailsCardSlider course={course} />
                </React.Fragment>
              ))}
          </div>
        )}
        {/* Top Recruiters  */}
        {data?.companyLogos && (
          <CompaniesScrollSlideShow image={data?.companyLogos} />
        )}
        {/* Reviews  */}
        {data?.individualReviews && (
          <div className="HighlightsSlider relative w-full">
            <ReviewsSlider reviews={data?.individualReviews} />
          </div>
        )}
        {/* Photo Gallery  */}
        {data?.photos && (
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {data?.photos?.map((d: any, i: number) => (
              <Image
                key={i}
                src={d}
                alt="gallery"
                className="h-full max-h-[200px] w-full flex-wrap rounded-lg object-cover"
              />
            ))}
          </div>
        )}
        {/* Video Gallery  */}
        {data?.videos && (
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {data?.videos?.map((d: any, i: number) => (
              <YoutubeVideo
                videoId={d?.videoId}
                width={"100%"}
                height={"200"}
                key={i}
              />
            ))}
          </div>
        )}
        {/* FAQs  */}
        {data?.faqsQuestionsAndAnswers && (
          <div className="flex flex-col gap-4">
            {data?.faqsQuestionsAndAnswers.map((faq: any, index: number) => (
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
        )}
      </Wrapper>
    </section>
  );
}
