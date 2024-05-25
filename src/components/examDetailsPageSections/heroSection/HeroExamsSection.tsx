'use client'
import { AskIcon, Heart } from "@/asset";
import Wrapper from "@/components/Wrapper";
import Breadcrumb from "@/components/breadcrum/breadcrum";
import Button from "@/components/button/button";
import NavbarSlider from "@/components/navbar-carousal";
import Image from "next/image";
import router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CiCalendar, CiClock1, CiFlag1, CiLocationOn } from "react-icons/ci";
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
        {/* <Image
          width={100}
          height={100}
          src={examDetails?.examImg[0]}
          objectFit=""
          alt={"ScholarshipData"}
          className="w-full h-60 object-contain"
        /> */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 text-white flex flex-col gap-4 max-w-screen-xl mx-auto px-4 my-2">
          <div>
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className="flex gap-4">
            <div className="p-[10px] bg-white rounded h-max">
              <Image
                width={100}
                height={100}
                alt=""
                src={examDetails?.examLogo}
              />
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <div className="flex gap-4 pt-4 items-center">
                <h1 className="font-bold text-3xl">{examDetails?.examName}</h1>
              </div>
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
              <div className="flex max-md:flex-col gap-x-6">
                <p className="flex items-center gap-x-1 font-thin">
                  <CiClock1 /> Updated :
                  {examDetails?.Updated}
                </p>
              </div>
              <div className="flex gap-4 justify-end">
                <div className="flex gap-2 items-center text-[15px]">
                  <div className="bg-white p-[6px] rounded-full">
                    <Image src={Heart} width={10} height={10} alt="" />
                  </div>
                  Save
                </div>
                <div className="flex items-center  text-[15px]">
                  <div className="p-2 rounded-full">
                    <Image src={AskIcon} alt="" />
                  </div>
                  Ask
                </div>
                <div>
                  <Button
                    text="Register Now"
                    showHover={false}
                    outline
                    outlineColor="border-white"
                    textColor="text-white"
                    paddingX="px-[10px]"
                    paddingY="py-[10px]"
                    filledColor = "bg-[#012148]"
                    width="w-36"
                    align="text-center"
                  />
                </div>
                <div>
                  <Button
                    text="Brochure"
                    showHover={false}
                    outline
                    outlineColor="border-white"
                    textColor="text-white"
                    paddingX="px-[10px]"
                    paddingY="py-[10px]"
                    width="w-36"
                    align="text-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center max-w-screen-xl mx-auto flex-col">
        <div className="infoOption flex items-center max-w-screen-xl mr-2">
          <div className="sticky-nav-wrapper w-full flex items-center justify-center">
            <div className=" bg-white flex border-b border-b-primary-light w-full rounded-lg">
              <div className="sm:max-w-screen-xl lg:mx-auto px-1 py-1 w-full justify-center shadow-md shadow-gray-600 rounded-lg mt-5">
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
                      className={`text-nowrap hover:text-orange-400 hover:border-b-2 hover:border-orange-400 text-sm flex justify-center items-center w-max h-full text-center cursor-pointer font-semibold text-lg`}
                    >
                      {tab?.name}
                    </div>
                  ))}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <p className="text-lg mt-5 flex items-center gap-2">
          <FaRegClock className="text-2xl" />
          <span>Updated at </span>
          <ExamOverview/>
          {formatDate(college?.updatedAt!)}
        </p> */}
        {/* <CollegeTab data={TabData} /> */}
        <ExamOverviewComponent/>
      </div>
      <section className="mainSection max-w-screen-xl mx-auto">
        {/* <div>{getTabData()}</div> */}
      </section>
    </section>
    </>
);
}
