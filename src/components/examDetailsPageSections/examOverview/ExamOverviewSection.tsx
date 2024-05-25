import Separator from "../../separator/separator";
import Table from "../../table/table";
import ExamSideBarComponent from "../ExamSideBar";
import ImageCard from "@/components/bgButton/ImageCard";
import React from 'react'
import ExamBanner from "../ExamBanner";
import ExamAdmissionCard from "@/components/cards/examAdmissionCard";
import { examDateSession1table, examDatetable, examQualifyingMarkstable, examsOverviewData, highlighttable } from "@/data/examOverviewData";
import ExamAccordian from "@/components/examAccordian/examAccordian";

const ExamOverviewSection = () => {
  return (
    <>
      <section id="collegeList" className="my-5 w-full pb-5">
        <div className="flex gap-4 max-w-screen-xl mx-auto mb-4">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-5">
              <div>
                <div className="border border-primary-text-light rounded-md gap-4">
                  <div className="p-6">
                    <div>
                      <span className="font-semibold">{examsOverviewData?.section1?.title?.heading}</span>
                      {examsOverviewData?.section1?.title?.description}
                    </div>
                    <br />
                    <Separator />
                    <div className="flex flex-col pt-4 gap-2 ">
                      <div>
                        <span className="font-semibold">{examsOverviewData?.section2?.title?.heading1} </span> {examsOverviewData?.section2?.title?.description1}
                      </div>
                      <div>
                        <span className="font-semibold">{examsOverviewData?.section2?.title?.heading2}</span>{examsOverviewData?.section2?.title?.description2}
                      </div>
                      <div>
                        <span className="font-semibold">{examsOverviewData?.section2?.title?.heading3}</span>{examsOverviewData?.section2?.title?.description3}
                      </div>
                      <div>
                        <span className="font-semibold">{examsOverviewData?.section2?.title?.heading4}</span>{examsOverviewData?.section2?.title?.description4}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-[#BAE1FF]">
                    <span className="font-semibold text-xl">{examsOverviewData?.section3?.title?.heading1}</span>
                    <div className="flex flex-col gap-2 p-2 font-[#5A5695]">
                      <p>{examsOverviewData?.section3?.title?.description1}</p>
                      <p>{examsOverviewData?.section3?.title?.description2}</p>
                      <p>{examsOverviewData?.section3?.title?.description3}</p>
                      <p>{examsOverviewData?.section3?.title?.description4}</p>
                      <p>{examsOverviewData?.section3?.title?.description5}</p>
                      <p>{examsOverviewData?.section3?.title?.description6}</p>
                      <p>{examsOverviewData?.section3?.title?.description7}</p>
                      <p>{examsOverviewData?.section3?.title?.description8}</p>
                      <p>{examsOverviewData?.section3?.title?.description9}</p>
                      <p>{examsOverviewData?.section3?.title?.description10}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-primary-text-light gap-4 bg-[#012148]">
                <ImageCard
                  imagePath={examsOverviewData?.section4?.img}
                  containerHeight="h-96" />
                <h1 className="text-white p-3 my-3">
                  {examsOverviewData?.section4?.title?.heading1}
                </h1>
              </div>
              <div className="flex flex-col gap-4">
                <h6 className="text-primary text-[25px] font-semibold ">
                  {examsOverviewData?.table1?.title?.heading}
                </h6>
                <Table table={highlighttable}></Table>
              </div>
              <div className="flex flex-col gap-4">
                <h6 className="text-primary text-[25px] font-semibold ">
                  {examsOverviewData?.jeeExamDate?.title?.heading}
                </h6>
                <div>
                  {examsOverviewData?.jeeExamDate?.title?.description}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h6 className="text-primary text-[25px] font-semibold ">
                JEE Mains 2024 Exam Date Session 2
              </h6>
              <Table table={examDatetable}></Table>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                {`The JEE Advanced Cut off for 2024 will be disclosed simultaneously with the release of the IIT JEE results. In the preceding year, the JEE Advanced Cut off for Common Rank List (CRL) stood at 23.89% in aggregate and 6.83% in each subject. Meanwhile, the JEE Advanced Cut off for Other Backward Classes (OBC) was 21.50% in aggregate and 6.15% in each subject. JoSAA will announce the IIT JEE Cut off ranks on the official website – josaa.admissions.nic.in, coinciding with the JEE Advanced qualifying percentiles. These cut off ranks specify the minimum ranks required by candidates for securing admission to the IITs. Attaining a score of 80 or more is considered commendable in JEE Advanced 2024. However, aspiring for an All India Rank (AIR) 1 necessitates aiming for a score exceeding 320 marks in IIT JEE. In the previous year (2023), the JEE Advanced Cut off for IIT Bombay was 67 for Computer Science and Engineering (CSE), 481 for Electrical Engineering, 1736 for Mechanical Engineering, and 4371 for Civil Engineering. Based on the data from the previous year, students aiming for a rank below 1000 should target a score of 170 marks or higher.`}
              </div>

              <div>
                <h6 className="text-primary text-[25px] font-semibold">
                  {examsOverviewData?.jEEMainsExamQualifyingMarks?.title?.heading}
                </h6>
              </div>
              <Table table={examQualifyingMarkstable}></Table>

              <div>
                <h6 className="text-primary text-[25px] font-semibold">
                  {examsOverviewData?.examDateSession1table?.title?.heading}
                </h6>
              </div>
              <Table table={examDateSession1table}></Table>
              <div>
                <h6 className="text-primary text-[25px] font-semibold">
                  {examsOverviewData?.answerKey?.title?.heading}
                </h6>
                {examsOverviewData?.answerKey?.title?.description}
              </div>
              <div>
                <h6 className="text-primary text-[25px] font-semibold">
                  {examsOverviewData?.mainResult?.title?.heading}
                </h6>
                {examsOverviewData?.mainResult?.title?.description}
              </div>
              <div>
                <ExamAdmissionCard />
              </div>
            </div>

            <div>
              <div className="text-[#165BAE] rounded-md">
                <div className="flex justify-between px-5 py-4 items-center">
                  <p className={"text-primary text-[25px] font-semibold"}>
                    {examsOverviewData?.frequentlyAskedQuestions?.title?.mainTitle}
                  </p>
                </div>
                <div className="p-6 flex flex-col gap-4 text-sm">
                  <ExamAccordian title={examsOverviewData?.frequentlyAskedQuestions?.title?.heading1}>
                    {examsOverviewData?.frequentlyAskedQuestions?.title?.description1}
                  </ExamAccordian>
                  <ExamAccordian title={examsOverviewData?.frequentlyAskedQuestions?.title?.heading2}>
                    {examsOverviewData?.frequentlyAskedQuestions?.title?.description2}
                  </ExamAccordian>
                  <ExamAccordian title={examsOverviewData?.frequentlyAskedQuestions?.title?.heading3}>
                    {examsOverviewData?.frequentlyAskedQuestions?.title?.description3}
                  </ExamAccordian>
                  <ExamAccordian title={examsOverviewData?.frequentlyAskedQuestions?.title?.heading4}>
                    {examsOverviewData?.frequentlyAskedQuestions?.title?.description4}
                  </ExamAccordian>
                </div>
                <ExamBanner />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <ExamSideBarComponent />
          </div>
        </div>
      </section>
    </>
  );
}

export default ExamOverviewSection