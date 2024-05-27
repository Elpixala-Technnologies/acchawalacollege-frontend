import Separator from "../../separator/separator";
import Table from "../../table/table";
import ExamSideBarComponent from "../ExamSideBar";
import ImageCard from "@/components/bgButton/ImageCard";
import React from 'react'
import ExamBanner from "../ExamBanner";
import ExamAdmissionCard from "@/components/cards/examAdmissionCard";
import { examDateSession1table, examDatetable, examQualifyingMarkstable, examsOverviewData, highlighttable } from "@/data/examOverviewData";
import ExamAccordian from "@/components/examAccordian/examAccordian";
import CollegePredictorCard from "@/components/cards/CollegePredictorCard";

const ExamOverviewSection = () => {
  return (
    <>
      <section id="collegeList" className="my-5 w-full pb-5">
        <div className="flex gap-4 max-w-screen-xl mx-auto mb-4">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-5">
              <div>
                {/* <div className="border border-primary-text-light rounded-md gap-4"> */}
                  <div className="p-4">
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
                {/* </div> */}
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
            <div className="gap-4">
              <ExamAdmissionCard />
              <ExamAdmissionCard />
            </div>
            <div className="flex flex-col gap-5">
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
              <div className="gap-4">
                <ExamAdmissionCard />
                <ExamAdmissionCard />
              </div>
              <div>
                <h6 className="text-primary text-[25px] font-semibold">
                  {examsOverviewData?.mainResult?.title?.heading}
                </h6>
                {examsOverviewData?.mainResult?.title?.description}
              </div>
              <div>
                <CollegePredictorCard />
              </div>
              <div>
                <h6 className="text-primary text-[25px] font-semibold">
                  {examsOverviewData?.answerKey?.title?.heading}
                </h6>
                {examsOverviewData?.answerKey?.title?.description}
              </div>
              <div>
                <h6 className="text-primary text-[25px] font-semibold">
                  {examsOverviewData?.examResponseSheet?.title?.heading}
                </h6>
                {examsOverviewData?.examResponseSheet?.title?.description}
              </div>
                <div className="text-blue-950 font-bold">{examsOverviewData?.examResponseSheet?.title?.heading1}</div>
                <p>{examsOverviewData?.examResponseSheet?.title?.description1}</p>
                <p>{examsOverviewData?.examResponseSheet?.title?.description2}</p>
                <p>{examsOverviewData?.examResponseSheet?.title?.description3}</p>
                <p>{examsOverviewData?.examResponseSheet?.title?.description4}</p>
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
          {/* <div className="hidden md:block">
            <ExamSideBarComponent />
          </div> */}
        </div>
      </section>
    </>
  );
}

export default ExamOverviewSection