'use client'
import { AskIcon, Heart } from "@/asset";
import Wrapper from "@/components/Wrapper";
import Breadcrumb from "@/components/breadcrum/breadcrum";
import Button from "@/components/button/button";
import NavbarSlider from "@/components/navbar-carousal";
import Image from "next/image";
import router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CiCalendar, CiCircleQuestion, CiClock1, CiFlag1, CiHeart, CiLocationOn } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import ExamOverviewComponent from "../examOverview/ExamOverviewSection";


export default function HeroExamSection({ examDetails }: any) {
  const [currentTab, setCurrentTab] = useState("examPattern");
  const queryParam = useSearchParams();
  // const router = useRouter();
  // const examId = router.query.examId as string;

  const breadcrumbItems = [
    { label: "Home", url: "/" },
    { label: "Exams", url: "/exams" },
    { label: "JEE ADVANCED 2024" },
  ];

  const tabs = [
    { name: "Overview", value: "overview" },
    { name: "Eligibility Criteria", value: "eligibility" },
    { name: "Exam Pattern", value: "examPattern" },
    { name: "Syllabus", value: "syllabus" },
    { name: "Important Dates", value: "importantDates" },
    { name: "Registration & Application Process", value: "registration" },
    { name: "Preparation Material", value: "prepMaterial" },
    { name: "Sample Paper", value: "samplePaper" },
    { name: "Tips", value: "tips" },
  ];

  const tab = queryParam.get("tab");
  const getTabData = () => {
    switch (currentTab) {
      case "overview":
        return;
      case "eligibility":
        return;
      case "examPattern":
        return;
      case "syllabus":
        return;
      case "importantDates":
        return;
      case "registration":
        return;
      case "prepMaterial":
        return;
      case "samplePaper":
        return;
      case "tips":
        return;
      case "examDiscussion":
        return;
      default:
        return;
    }
  };

  const handleTab = (value: string) => {
    setCurrentTab(value);
    router.push(
      {
        pathname: `/exams/`,
        query: { tab: value },
      },
      undefined,
      { shallow: true }
    );
  };

  // useEffect(() => {
  //   if (tab) {
  //     setCurrentTab(tab);
  //   }
  //   console.log(examId);
  // }, [tab]);

  return (
    <>

      <section className="heroSection navbar-PageInfo-responsive">
        <div className="relative h-60">
          <section className="relative w-full ">
            <Image
              src={examDetails?.examImg}
              alt="collegeImg"
              className="mx-auto h-[310px] w-full object-cover"
            />
            <div className="absolute left-0 top-0 h-full w-full">
              <Wrapper className="p-10 text-white">
                <div className="my-auto flex items-center gap-x-6 border-b border-white pb-5">
                  <div className="min-h-20 min-w-20 md:h-40 md:w-40 bg-white p-2 md:p-5">
                    <Image
                      src={examDetails?.examLogo}
                      alt="collegeLogo"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="wh md:text-3xl text-2xl font-bold text-wrap">
                      {examDetails?.examName}
                    </h1>
                    <div>
                      <div className="flex max-md:flex-col gap-x-6">
                        <p className="flex items-center gap-x-1 font-thin">
                          <CiCalendar /> Exam Date :
                          {examDetails?.ExamDates}
                        </p>
                        <p className="flex items-center gap-x-1 font-thin">
                          ApplicationForm :
                          {examDetails?.ApplicationForm}
                        </p>
                      </div>
                      <div className="flex max-md:flex-col gap-x-6">
                        <p className="flex items-center gap-x-1 font-thin">
                          <CiCalendar /> ExamPattern :
                          {examDetails?.ExamPattern}
                        </p>
                        <p className="flex items-center gap-x-1 font-thin">
                          Registration :
                          {examDetails?.Registration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <div className="flex gap-4">
                    <div className="flex gap-2 items-center text-[15px]">
                      <div className="p-[6px] rounded-full">
                        <CiHeart />
                      </div>
                      Save
                    </div>
                    <div className="flex items-center text-[15px]">
                      <div className="p-2 rounded-full">
                        <CiCircleQuestion />
                      </div>
                      Ask
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <button className="rounded-lg border-2 border-blue-500 bg-blue-500 px-4 py-2 text-white hover:bg-white hover:text-blue-500">
                      {examDetails.button1.text}
                    </button>
                    <button className="rounded-lg border-2 border-white px-2 py-2 text-white hover:bg-blue-500 hover:border-white hover:text-white">
                      {examDetails.button2.text}
                    </button>
                  </div>
                </div>
              </Wrapper>
            </div>
          </section>
        </div>
        <br />
        <section>
          <div className="flex justify-center max-w-screen-xl mx-auto flex-col pt-6">
            <div className="infoOption flex items-center max-w-screen-xl mr-2">
              <div className="sticky-nav-wrapper w-full flex items-center justify-center">
                <div className="flex border-b border-b-primary-light w-full rounded-lg">
                  <div className="sm:max-w-screen-xl pt-2 lg:mx-auto px-1 py-1 w-full justify-center mt-5">
                    <NavbarSlider
                      buttonBorderColor="border-primary-text"
                      buttonTextColor="text-primary-text"
                      showPagination={false}
                      slidesDesktop={5}
                      slidesTablet={5}
                      slidesMobile={3}
                      slides={tabs?.map((tab: any, index: number) => (
                        <div
                          key={tab.name}
                          onClick={() => handleTab(tab.value)}
                          className={`text-nowrap hover:text-blue-950 hover:border-b-2 hover:border-blue-950 text-sm flex justify-center items-center w-max h-full text-center cursor-pointer font-semibold text-lg`}
                        >
                          {tab?.name}
                        </div>
                      ))}
                    />
                  </div>
                </div>
              </div>
            </div>
            <ExamOverviewComponent />
          </div>
        </section>
      </section>
    </>
  );
}
