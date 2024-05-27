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
                  <div className="flex gap-x-2 py-2">
                    <div
                      className="dangerouslySetInnerHTMLStyle text-justify"
                      dangerouslySetInnerHTML={{ __html: examsOverviewData?.section2?.heading1 }}
                    />
                    <p className="flex items-center gap-x-1 font-thin">
                      <div
                        className="dangerouslySetInnerHTMLStyle text-justify"
                        dangerouslySetInnerHTML={{ __html: examsOverviewData?.section2?.description1 }}
                      />
                    </p>
                  </div>
                  <div className="flex gap-x-2 py-2">
                    <div
                      className="dangerouslySetInnerHTMLStyle text-justify"
                      dangerouslySetInnerHTML={{ __html: examsOverviewData?.section2?.heading2 }}
                    />
                    <p className="flex items-center gap-x-1 font-thin">
                      <div
                        className="dangerouslySetInnerHTMLStyle text-justify"
                        dangerouslySetInnerHTML={{ __html: examsOverviewData?.section2?.description2 }}
                      />
                    </p>
                  </div>
                  <div className="flex gap-x-2 py-2">
                    <div
                      className="dangerouslySetInnerHTMLStyle text-justify"
                      dangerouslySetInnerHTML={{ __html: examsOverviewData?.section2?.heading3 }}
                    />
                    <p className="flex items-center gap-x-1 font-thin">
                      <div
                        className="dangerouslySetInnerHTMLStyle text-justify"
                        dangerouslySetInnerHTML={{ __html: examsOverviewData?.section2?.description3 }}
                      />
                    </p>
                  </div>
                  <div className="flex gap-x-2 py-2">
                    <div
                      className="dangerouslySetInnerHTMLStyle text-justify"
                      dangerouslySetInnerHTML={{ __html: examsOverviewData?.section2?.heading4 }}
                    />
                    <p className="flex items-center gap-x-1 font-thin">
                      <div
                        className="dangerouslySetInnerHTMLStyle text-justify"
                        dangerouslySetInnerHTML={{ __html: examsOverviewData?.section2?.description4 }}
                      />
                    </p>
                  </div>
                  <br />
                  <Separator />
                  <div className="flex flex-col pt-4 gap-2 ">
                  </div>
                </div>
                <div className="p-4 bg-[#BAE1FF]">
                  <div
                    className="dangerouslySetInnerHTMLStyle text-justify"
                    dangerouslySetInnerHTML={{ __html: examsOverviewData?.section3?.heading }}
                  />
                  <div className="flex flex-col gap-2 p-2 font-[#5A5695]">
                    <div
                      className="dangerouslySetInnerHTMLStyle text-justify"
                      dangerouslySetInnerHTML={{ __html: examsOverviewData?.section3?.description1 }}
                    />
                    <div
                      className="dangerouslySetInnerHTMLStyle text-justify"
                      dangerouslySetInnerHTML={{ __html: examsOverviewData?.section3?.description2 }}
                    />
                    <div
                      className="dangerouslySetInnerHTMLStyle text-justify"
                      dangerouslySetInnerHTML={{ __html: examsOverviewData?.section3?.description2 }}
                    />
                    <div
                      className="dangerouslySetInnerHTMLStyle text-justify"
                      dangerouslySetInnerHTML={{ __html: examsOverviewData?.section3?.description3 }}
                    />
                    <div
                      className="dangerouslySetInnerHTMLStyle text-justify"
                      dangerouslySetInnerHTML={{ __html: examsOverviewData?.section3?.description4 }}
                    />
                    <div
                      className="dangerouslySetInnerHTMLStyle text-justify"
                      dangerouslySetInnerHTML={{ __html: examsOverviewData?.section3?.description5 }}
                    />
                    <div
                      className="dangerouslySetInnerHTMLStyle text-justify"
                      dangerouslySetInnerHTML={{ __html: examsOverviewData?.section3?.description6 }}
                    />
                    <div
                      className="dangerouslySetInnerHTMLStyle text-justify"
                      dangerouslySetInnerHTML={{ __html: examsOverviewData?.section3?.description7 }}
                    />
                    <div
                      className="dangerouslySetInnerHTMLStyle text-justify"
                      dangerouslySetInnerHTML={{ __html: examsOverviewData?.section3?.description8 }}
                    />
                    <div
                      className="dangerouslySetInnerHTMLStyle text-justify"
                      dangerouslySetInnerHTML={{ __html: examsOverviewData?.section3?.description9 }}
                    />
                    <div
                      className="dangerouslySetInnerHTMLStyle text-justify"
                      dangerouslySetInnerHTML={{ __html: examsOverviewData?.section3?.description10 }}
                    />
                  </div>
                </div>
                {/* </div> */}
              </div>
              <div className="border border-primary-text-light gap-4 bg-[#012148]">
                <ImageCard
                  imagePath={examsOverviewData?.section4?.img}
                  containerHeight="h-96" />
                <h1 className="text-white p-3 my-3">
                  <div
                    className="dangerouslySetInnerHTMLStyle text-justify"
                    dangerouslySetInnerHTML={{ __html: examsOverviewData?.section4?.title }}
                  />
                </h1>
              </div>
              <div className="flex flex-col gap-4">
                <h6 className="text-primary text-[25px] font-semibold ">
                  <div
                    className="dangerouslySetInnerHTMLStyle text-justify"
                    dangerouslySetInnerHTML={{ __html: examsOverviewData?.table1?.title }}
                  />
                </h6>
                <Table table={highlighttable}></Table>
              </div>
              <div className="flex flex-col gap-4">
                <h6 className="text-primary text-[25px] font-semibold ">
                  <div
                    className="dangerouslySetInnerHTMLStyle text-justify"
                    dangerouslySetInnerHTML={{ __html: examsOverviewData?.jeeExamDate?.heading }}
                  />
                </h6>
                <div>
                  <div
                    className="dangerouslySetInnerHTMLStyle text-justify"
                    dangerouslySetInnerHTML={{ __html: examsOverviewData?.jeeExamDate?.description }}
                  />
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
                  <div
                    className="dangerouslySetInnerHTMLStyle text-justify"
                    dangerouslySetInnerHTML={{ __html: examsOverviewData?.jEEMainsExamQualifyingMarks?.heading }}
                  />
                </h6>
              </div>
              <Table table={examQualifyingMarkstable}></Table>

              <div>
                <h6 className="text-primary text-[25px] font-semibold">
                  <div
                    className="dangerouslySetInnerHTMLStyle text-justify"
                    dangerouslySetInnerHTML={{ __html: examsOverviewData?.examDateSession1table?.heading }}
                  />
                </h6>
              </div>
              <Table table={examDateSession1table}></Table>
              <div>
                <h6 className="text-primary text-[25px] font-semibold">
                  <div
                    className="dangerouslySetInnerHTMLStyle text-justify"
                    dangerouslySetInnerHTML={{ __html: examsOverviewData?.answerKey?.heading }}
                  />
                </h6>
                <div
                  className="dangerouslySetInnerHTMLStyle text-justify"
                  dangerouslySetInnerHTML={{ __html: examsOverviewData?.answerKey?.description }}
                />
              </div>
              <div className="gap-4">
                <ExamAdmissionCard />
                <ExamAdmissionCard />
              </div>
              <div>
                <h6 className="text-primary text-[25px] font-semibold">
                  <div
                    className="dangerouslySetInnerHTMLStyle text-justify"
                    dangerouslySetInnerHTML={{ __html: examsOverviewData?.mainResult?.heading }}
                  />
                </h6>
                <div
                  className="dangerouslySetInnerHTMLStyle text-justify"
                  dangerouslySetInnerHTML={{ __html: examsOverviewData?.mainResult?.description }}
                />
              </div>
              <div>
                <CollegePredictorCard />
              </div>
              <div>
                <h6 className="text-primary text-[25px] font-semibold">
                  <div
                    className="dangerouslySetInnerHTMLStyle text-justify"
                    dangerouslySetInnerHTML={{ __html: examsOverviewData?.answerKey?.heading }}
                  />
                </h6>
                <div
                  className="dangerouslySetInnerHTMLStyle text-justify"
                  dangerouslySetInnerHTML={{ __html: examsOverviewData?.answerKey?.description }}
                />
              </div>
              <div>
                <h6 className="text-primary text-[25px] font-semibold">
                  <div
                    className="dangerouslySetInnerHTMLStyle text-justify"
                    dangerouslySetInnerHTML={{ __html: examsOverviewData?.examResponseSheet?.heading1 }}
                  />
                </h6>
                <div
                  className="dangerouslySetInnerHTMLStyle text-justify"
                  dangerouslySetInnerHTML={{ __html: examsOverviewData?.examResponseSheet?.description1 }}
                />
              </div>
              <div className="text-blue-950 font-bold">
                <div
                  className="dangerouslySetInnerHTMLStyle text-justify"
                  dangerouslySetInnerHTML={{ __html: examsOverviewData?.examResponseSheet?.heading2 }}
                />
              </div>
              <div
                className="dangerouslySetInnerHTMLStyle text-justify"
                dangerouslySetInnerHTML={{ __html: examsOverviewData?.examResponseSheet?.description2 }}
              />
              <div
                className="dangerouslySetInnerHTMLStyle text-justify"
                dangerouslySetInnerHTML={{ __html: examsOverviewData?.examResponseSheet?.description3 }}
              />
              <div
                className="dangerouslySetInnerHTMLStyle text-justify"
                dangerouslySetInnerHTML={{ __html: examsOverviewData?.examResponseSheet?.description4 }}
              />
              <div
                className="dangerouslySetInnerHTMLStyle text-justify"
                dangerouslySetInnerHTML={{ __html: examsOverviewData?.examResponseSheet?.description5 }}
              />
            </div>

            <div>
              <div className="text-[#165BAE] rounded-md">
                <div className="flex justify-between px-5 py-4 items-center">
                  <p className={"text-primary text-[25px] font-semibold"}>
                    <div
                      className="dangerouslySetInnerHTMLStyle text-justify"
                      dangerouslySetInnerHTML={{ __html: examsOverviewData?.frequentlyAskedQuestions?.title }}
                    />
                    {/* {examsOverviewData?.frequentlyAskedQuestions?.title?.mainTitle} */}
                  </p>
                </div>
                <div className="p-6 flex flex-col gap-4 text-sm">
                  <ExamAccordian title={examsOverviewData?.frequentlyAskedQuestions?.heading1}>
                    {examsOverviewData?.frequentlyAskedQuestions?.description1}
                  </ExamAccordian>
                  <ExamAccordian title={examsOverviewData?.frequentlyAskedQuestions?.heading2}>
                    {examsOverviewData?.frequentlyAskedQuestions?.description2}
                  </ExamAccordian>
                  <ExamAccordian title={examsOverviewData?.frequentlyAskedQuestions?.heading3}>
                    {examsOverviewData?.frequentlyAskedQuestions?.description3}
                  </ExamAccordian>
                  <ExamAccordian title={examsOverviewData?.frequentlyAskedQuestions?.heading4}>
                    {examsOverviewData?.frequentlyAskedQuestions?.description4}
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