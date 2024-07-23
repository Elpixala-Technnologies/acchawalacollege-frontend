"use client";
import TimelineList from "@/components/TimelineList";
import CollegeDetailsCardSlider from "@/components/cards/CollegeDetailsCardSlider";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SiTicktick } from "react-icons/si";
import useIsMobile from "@/customHooks/useIsMobile";
import ThreeCardSection from "./components/ThreeCardSection";
import HighlightsSlider from "./components/highlightsSlider/HighlightsSlider";
import CompaniesScrollSlideShow from "./components/CompaniesScrollSlideShow";
import BrochureSection from "./components/BrochureSection";
import YoutubeVideo from "../youtubeVideo";
import ReviewsSlider from "../cards/ReviewsSlider";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai"
import { PiShareFat } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";

export default function Content({ selectedContent }: any) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile(1030); // breakpoint

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      {selectedContent &&
        selectedContent?.sections?.length > 0 &&
        selectedContent?.sections?.map((section: any, index: any) => {
          const articleLength = section.article?.length || 0;
          return (
            <div
              key={index}
              className="mt-5 w-full border-b border-zinc-300 pb-5"
            >
              {/*Three Colored Heading*/}
              {section?.threeColorHeading && (
                <>
                  <span className="px-1 text-2xl font-bold text-[#5c5b8f] md:text-3xl">
                    {section.threeColorHeading[0]}
                  </span>
                  <span className="px-1 text-2xl font-bold text-[#012148] md:text-3xl">
                    {section.threeColorHeading[1]}
                  </span>
                  <span className="px-1 text-2xl font-bold text-[#2095f2] md:text-3xl">
                    {section.threeColorHeading[2]}
                  </span>
                </>
              )}

              {/* Title */}
              {section?.title && (
                <h1 className="title1 mb-8">
                  {section.title.t1 && (
                    <span className="text-blue-950/70">{section.title.t1}</span>
                  )}{" "}
                  {section.title.t2 && (
                    <span className="text-blue-950">{section.title.t2}</span>
                  )}{" "}
                  {section.title.t3 && (
                    <span className="text-sky-500">{section.title.t3}</span>
                  )}{" "}
                </h1>
              )}
              {/* Author */}
              {section?.author && (
                <div className="mb-8 flex items-center gap-x-2">
                  {section.author.avatar && (
                    <Image
                      src={section.author.avatar}
                      alt="avatar"
                      className="h-12 w-12 rounded-full"
                      width={48}
                      height={48}
                    />
                  )}
                  <div>
                    {section.author.name && (
                      <p className="font-bold">{section.author.name}</p>
                    )}
                    {section.author.lastUpdated && (
                      <p className="font-medium">
                        Last Updated: {section.author.lastUpdated}
                      </p>
                    )}
                  </div>
                </div>
              )}
              {/* Article */}
              {section?.article && (
                <>
                  <div
                    className={`dangerouslySetInnerHTMLStyle my-5 text-justify font-semibold ${
                      isExpanded ? "" : "line-clamp-4"
                    }`}
                    dangerouslySetInnerHTML={{ __html: section.article }}
                  />
                  {(articleLength > 665 || isMobile) && (
                    <button
                      onClick={toggleReadMore}
                      className="relative right-0 mb-5 block w-full text-right font-medium hover:text-blue-500"
                    >
                      {isExpanded ? "Show Less" : "Read More"}
                    </button>
                  )}
                </>
              )}
              {/* ImageText1 */}
              {section?.imageText1 && (
                <>
                  {section.imageText1.map((obj: any) => {
                    return (
                      <>
                        <hr className="border-gray-300" />
                        <div className="my-4 grid-cols-4 md:grid">
                          <div className="col-span-1">
                            <Image
                              src={obj.image}
                              className="rounded-lg"
                              alt="image"
                            />
                          </div>
                          <div className="col-span-3 mx-4 my-4 font-semibold text-gray-500 md:my-0">
                            <div className="flex flex-col">
                              <p className="my-4 text-sm md:my-0">{obj.date}</p>
                              <p className="text-xl font-bold text-black">
                                {obj.heading}
                              </p>
                              <p className="my-4 text-sm lg:text-sm xl:text-base">
                                {obj.data}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </>
              )}

              {/*Three Color Second Heading*/}
              {section?.threeColorSubHeading && (
                <div className="mt-20">
                  <span className="px-1 text-3xl font-bold text-[#5c5b8f]">
                    {section.threeColorSubHeading[0]}
                  </span>
                  <span className="px-1 text-3xl font-bold text-[#012148]">
                    {section.threeColorSubHeading[1]}
                  </span>
                  <span className="px-1 text-3xl font-bold text-[#2095f2]">
                    {section.threeColorSubHeading[2]}
                  </span>
                </div>
              )}

              {/* Facilities */}
              {section?.facilities && (
                <div className="mb-8 flex flex-wrap gap-5 rounded-lg bg-blue-100 p-5">
                  {section.facilities.map((d: any, i: number) => (
                    <div
                      key={i}
                      className="flex-center gap-1 rounded-e-3xl rounded-s-3xl border-2 border-zinc-300 bg-white p-3 shadow"
                    >
                      <Image
                        src={d.icon}
                        alt="icon"
                        width={20}
                        height={20}
                        className="h-5 w-5"
                      />
                      <p className="font-medium text-blue-950">{d.name}</p>
                    </div>
                  ))}
                </div>
              )}
              {/* List */}
              {section?.list && (
                <ul className="flex flex-wrap gap-x-5">
                  {section.list.map((item: any, index: any) => (
                    <li key={index} className="mb-2 flex items-center gap-x-2">
                      <SiTicktick className="text-xl text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {/* Buttons */}
              {section?.button && (
                <div className="flex gap-x-4 md:max-w-xl">
                  {section.button.button1?.text && (
                    <Link
                      className="button6 flex-[1]"
                      href={section.button.button1.link || "#"}
                    >
                      {section.button.button1.text}
                    </Link>
                  )}
                  {section.button.button2?.text && (
                    <Link
                      className="button7 flex-[1]"
                      href={section.button.button2.link || "#"}
                    >
                      {section.button.button2.text}
                    </Link>
                  )}
                </div>
              )}
              {/* Three Card Section  */}
              {section?.cardsSection && (
                <ThreeCardSection data={section?.cardsSection} />
              )}
              {/* Courses */}
              {section?.courses && (
                <div className="md:grid-col-2 my-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {section.courses.length > 0 &&
                    section.courses.map((course: any, i: number) => (
                      <React.Fragment key={i}>
                        <CollegeDetailsCardSlider course={course} />
                      </React.Fragment>
                    ))}
                </div>
              )}
              {/* Important Links  */}
              {section?.importantLinks && (
                <ul className="my-5">
                  {section?.importantLinks?.map((link: any, i: number) => (
                    <li key={i} className="mb-2 flex font-bold">
                      <h6 className="text-blue-950">{link.title}:</h6>
                      <span className="ml-1">
                        <Link
                          className="text-blue-950/50 underline hover:text-blue-500"
                          href={link?.href || "#"}
                        >
                          {link?.text}
                        </Link>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {/* banner  */}
              {section?.banner && (
                <div className="relative my-5">
                  <Image
                    src={section?.banner?.img}
                    alt="banner"
                    width={1700}
                    height={480}
                    className="h-96 w-full object-cover object-center"
                  />
                  <p className="absolute bottom-0 left-0 w-full text-wrap bg-blue-950 bg-opacity-60 px-5 py-3 text-white">
                    <Link href={section?.banner?.href || "#"}>
                      {section?.banner?.text}
                    </Link>
                  </p>
                </div>
              )}

              {/* Heading 1 */}
              {section?.heading1 && (
                <div className="my-4">
                  <span className="px-1 text-3xl font-bold text-[#5c5b8f]">
                    {section.heading1[0]}
                  </span>
                  <span className="px-1 text-3xl font-bold text-[#012148]">
                    {section.heading1[1]}
                  </span>
                </div>
              )}

              {/* Article1 */}
              {section?.article1 && (
                <>
                  <div
                    className={`dangerouslySetInnerHTMLStyle my-5 text-justify ${
                      isExpanded ? "" : "line-clamp-4"
                    }`}
                    dangerouslySetInnerHTML={{ __html: section.article1 }}
                  />
                  {(articleLength > 665 || isMobile) && (
                    <button
                      onClick={toggleReadMore}
                      className="relative right-0 mb-5 block w-full text-right font-medium hover:text-blue-500"
                    >
                      {isExpanded ? "Show Less" : "Read More"}
                    </button>
                  )}
                </>
              )}

              {/* Heading 2 */}
              {section?.heading2 && (
                <div className="my-4">
                  <span className="px-1 text-3xl font-bold text-[#5c5b8f]">
                    {section.heading2[0]}
                  </span>
                  <span className="px-1 text-3xl font-bold text-[#012148]">
                    {section.heading2[1]}
                  </span>
                </div>
              )}

              {/* Button Array */}
              {section?.buttonArray && (
                <div className="my-7 flex gap-4 overflow-auto justify-between no-scrollbar">
                  {section.buttonArray.map((obj: any) => {
                    return (
                      <>
                        <div>
                          <button className="rounded-full border-2 border-[#6fbbfe] bg-[#dfefff] xl:px-8 px-4 text-sm   whitespace-nowrap py-1">
                            {obj.data}
                          </button>
                        </div>
                      </>
                    );
                  })}
                </div>
              )}

              {/*Discussion */}
              {section?.discussion && (
                <>
                  <div className="grid grid-cols-12 rounded-lg gap-4 xl:mr-0 lg:mr-8 mr-12 ">
                    <div className="col-span-11">
                      <div className="flex items-center gap-3 border-2 bg-white p-2">
                        <IoIosSearch className="h-6  w-6 text-blue-500" />
                        <input
                          className="w-full text-lg font-semibold text-black"
                          type="text"
                          placeholder="Start a discussion"
                        />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <button className="bg-[#2095f2] p-3 text-sm text-white">
                        SUBMIT
                      </button>
                    </div>
                  </div>
                  {section.discussion.map((obj: any) => {
                    return (
                      <>
                        <div className="my-4 grid-cols-5 rounded-2xl bg-[#dfefff] p-5 md:grid">
                          <div className="col-span-1">
                            <Image
                              src={obj.image}
                              className="rounded-lg"
                              alt="image"
                            />
                          </div>
                          <div className="col-span-4 mx-4 my-4 font-semibold text-gray-500 md:my-0">
                            <div className="flex flex-col">
                              <p className="text-xl font-bold text-black">
                                {obj.heading}
                              </p>
                              <p className="my-2 text-sm md:my-0">{obj.date}</p>
                              <p className="my-4 text-sm lg:text-sm xl:text-base">
                                {obj.data}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}

                  <div className="my-8 flex items-center gap-6 flex-row-reverse">
                    <IoIosArrowForward />
                    <p className="font-medium text-gray-500">Learn More</p>
                  </div>

                </>
              )}

              {/* Questions */}
              {section?.questions && (
                <>
                  {section.questions.map((obj: any) => {
                    return (
                      <>
                        <div className="my-8 p-8 bg-[#dfefff] rounded-2xl">
                          <div>
                            <div className="flex justify-between">
                              <div>
                                <p className="md:text-2xl text-lg font-bold">
                                  {obj.question}
                                </p>
                                <p className="text-sm font-medium">
                                  Asked by {obj.qname} | {obj.qdate}
                                </p>
                              </div>
                              <div>
                                <p className=" text-sm md:text-base whitespace-nowrap text-[#2095f2]">{obj.responses} responses</p>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-12 my-6 xl:mr-0 lg:mr-8 mr-14 rounded-lg gap-4">
                            <div className="col-span-11">
                              <div className="flex items-center gap-3 border-2 bg-white p-2">
                                <IoIosSearch className="h-6  w-6 text-blue-500" />
                                <input
                                  className="w-full text-lg font-semibold text-black"
                                  type="text"
                                  placeholder="Start a discussion"
                                />
                              </div>
                            </div>
                            <div className="col-span-1">
                              <button className="bg-[#2095f2] p-3 text-sm text-white">
                                SUBMIT
                              </button>
                            </div>
                          </div>
                          <div className="flex">
                            <Image
                              src={obj.image}
                              alt="profile"
                              width={50}
                              height={50}
                              className="rounded-full"
                            />
                            <div className="mx-4">
                              <p className="font-semibold text-xl">
                                {obj.aname} <span className="text-sm mx-1 text-gray-500"> {obj.adesignation} </span>{" "}
                              </p>
                              <p className="text-sm">Answered on {obj.adate}</p>
                            </div>
                          </div>
                          <div className="my-4">{obj.answer}</div>
                          <div className="flex items-center gap-2">
                          <AiOutlineLike />
                          <p>2</p>
                          <AiOutlineDislike />
                          <p>2</p>
                          <PiShareFat />
                          <p>2</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </>
              )}

              {/* ImageText2 */}
              {section?.imageText2 && (
                <>
                  {section.imageText2.map((obj: any) => {
                    return (
                      <>
                        <hr className="mt-8 border-gray-300" />
                        <div className="my-4 grid-cols-4 md:grid">
                          <div className="col-span-1">
                            <Image
                              src={obj.image}
                              className="rounded-lg"
                              alt="image"
                            />
                          </div>
                          <div className="col-span-3 mx-4 my-4 font-semibold text-gray-500 md:my-0">
                            <div className="flex flex-col">
                              <p className="my-4 text-sm md:my-0">{obj.date}</p>
                              <p className="text-xl font-bold text-black">
                                {obj.heading}
                              </p>
                              <p className="my-4 text-sm lg:text-sm xl:text-base ">
                                {obj.data}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </>
              )}

              {/* Table  */}
              {section?.table && (
                <div
                  className="dangerouslySetInnerHTMLStyle mb-8 w-full overflow-x-auto text-justify"
                  dangerouslySetInnerHTML={{ __html: section?.table }}
                />
              )}
              {/* Semester  */}
              {section?.semesters && <TimelineList data={section?.semesters} />}
              {/* Highlights Slider  */}
              {section?.highlights && (
                <HighlightsSlider data={section?.highlights} />
              )}
              {/* Top Recruiters  */}
              {section?.topRecruitersLogos && (
                <CompaniesScrollSlideShow image={section?.topRecruitersLogos} />
              )}
              {/* Brochure Section  */}
              {section?.brochureSection && (
                <BrochureSection data={section?.brochureSection} />
              )}
              {/* Reviews  */}
              {section?.individualReviews && (
                <div className="HighlightsSlider relative w-full">
                  <ReviewsSlider reviews={section?.individualReviews} />
                </div>
              )}
              {/* Photo Gallery  */}
              {section?.photoGallery && (
                <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {section?.photoGallery?.map((d: any, i: number) => (
                    <Image
                      key={i}
                      src={d.url}
                      alt="gallery"
                      className="h-full max-h-[200px] w-full flex-wrap rounded-lg object-cover"
                    />
                  ))}
                </div>
              )}
              {/* Video Gallery  */}
              {section?.videoGallery && (
                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {section?.videoGallery?.map((d: any, i: number) => (
                    <YoutubeVideo
                      videoId={d?.videoId}
                      width={"100%"}
                      height={"200"}
                      key={i}
                    />
                  ))}
                </div>
              )}

              {/* Article2 */}
              {section?.article2 && (
                <>
                  <div
                    className={`dangerouslySetInnerHTMLStyle mb-5 text-justify ${
                      isExpanded ? "" : "line-clamp-4"
                    }`}
                    dangerouslySetInnerHTML={{ __html: section.article2 }}
                  />
                  {(articleLength > 665 || isMobile) && (
                    <button
                      onClick={toggleReadMore}
                      className="relative right-0 mb-5 block w-full text-right font-medium hover:text-blue-500"
                    >
                      {isExpanded ? "Show Less" : "Read More"}
                    </button>
                  )}
                </>
              )}
            </div>
          );
        })}
    </>
  );
}
