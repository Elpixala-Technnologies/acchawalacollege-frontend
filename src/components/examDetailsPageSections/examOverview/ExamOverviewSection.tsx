import { HappyStudents } from "@/asset";
import Accordian from "../../accordian/accordian";
import Separator from "../../separator/separator";
import Table from "../../table/table";
import ExamSideBarComponent from "../ExamSideBar";
import Image from "next/image";
import ImageCard from "@/components/bgButton/ImageCard";

import React from 'react'

const ExamOverviewSection = () => {
  const table = [
    {
      " Particulars": "Exam Name",
      Details: "Joing Entrance Exam (JEE) Advanced 2024",
    },
    { "Particulars": "Conducting Body", Details: "IIT Madras" },
    { "Particulars": "Exam Level", Details: "National" },
    { "Particulars": "Exam Frequency", Details: "Once a year" },
    { "Particulars": "Mode of Exam", Details: "Computer-based test" },
    {
      "Details": "Courses Offered through Entrance Exam",
      Particulars:
        "Bachelors: B.Tech, BS, BArch Dual Degree - BTech, MTech, BS, MS Integrated Masters: MTech, MSc",
    },
  ];
  const table2 = [
    {
      "Events": "JEE Main 2024 registration date",
      Date: "February 2, 2024",

    },
    {
      "Events": "JEE Main 2024 registration date",
      Date: "February 2, 2024",

    },
    {
      "Events": "JEE Main registration 2024 Last Date",
      Date: "February 2, 2024",

    },
    {
      "Events": "Application form correction dates",
      Date: "March 6 to 7, 2024",

    },
    {
      "Events": "Application form correction dates",
      Date: "March 6 to 7, 2024",

    },
    {
      "Events": "Application form correction dates",
      Date: "March 6 to 7, 2024",

    },
    {
      "Events": "JEE Main registration 2024 Last Date",
      Date: "February 2, 2024",

    },
    {
      "Events": "JEE Main registration 2024 Last Date",
      Date: "February 2, 2024",

    },
    {
      "Events": "Conducting Body",
      Date: "February 20, 2024 ",
    },

  ];
  const table3 = [
    {
      "Events": "Release of JEE Main 2024 exam date notification",
      "JEE Mains 2024 exam dates": "September 19",

    },
    {
      "Events": "Availability of JEE Mains brochure 2024",
      "JEE Mains 2024 exam dates": "February 2, 2024",

    },
    {
      "Events": "Starting of JEE Main January 2024 registration",
      "JEE Mains 2024 exam dates": "February 2, 2024",

    },
    {
      "Events": "Starting of JEE Main January 2024 registration",
      "JEE Mains 2024 exam dates": "February 2, 2024",

    },
    {
      "Events": "Starting of JEE Main January 2024 registration",
      "JEE Mains 2024 exam dates": "February 2, 2024",

    },
    {
      "Events": "Starting of JEE Main January 2024 registration",
      "JEE Mains 2024 exam dates": "February 2, 2024",

    },
    {
      "Events": "Starting of JEE Main January 2024 registration",
      "JEE Mains 2024 exam dates": "February 2, 2024",

    },
    {
      "Events": "Starting of JEE Main January 2024 registration",
      "JEE Mains 2024 exam dates": "February 2, 2024",

    },

  ];

  return (
    <>
      <section id="collegeList" className="my-5 w-full pb-5">
        <div className="flex gap-4 max-w-screen-xl mx-auto mb-4">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-5">
              <div>
                <div className="border border-primary-text-light rounded-md p-6 gap-4">
                  <div>
                    <span className="font-semibold">JEE Main 2024: </span>
                    {`NTA has released the JEE Main 2024 session 2 result for paper 2 at jeemain.nta.ac.in. The authority closed the JEE Main 2024 challenge window on May 1, 2024. The provisional JEE Main 2024 answer key for paper 2 has been released on April 30. Candidates can check the JEE Main B.Arch answer key 2024 for session 2 on the official website. Candidates who appeared for the JEE Main exam could raise objections to the answer key from April 30 to May 1.`}
                  </div>
                  <br />
                  <Separator />
                  <div className="flex flex-col gap-2 p-4">
                    <div>
                      <span className="font-semibold">New: </span>  {`JEE Main 2024 college predictor`}
                    </div>
                    <div>
                      <span className="font-semibold">Latest:  </span>  {`Top colleges accepting JEE Main rank between 50k to 2 Lakhs`}
                    </div>
                    <div>
                      <span className="font-semibold">Don't Miss:</span>  {` JEE cutoffs for top IITs | JEE Main cutoff for top 10 NITs`}
                    </div>
                    <div>
                      <span className="font-semibold">Suggested: </span>  {` JEE seat matrix`}
                    </div>
                  </div>
                  <div className="p-4 bg-[#BAE1FF]">
                    <span className="font-semibold text-xl">This Story also Contains</span>
                    <div className="flex flex-col gap-2 p-2 font-[#5A5695]">
                      <p>JEE Main 2024 Highlights</p>
                      <p>JEE Main 2024 Exam Date</p>
                      <p>JEE Main Answer Key 2024</p>
                      <p>JEE Main 2024 answer key challenges</p>
                      <p>JEE Main 2024 Response Sheet</p>
                      <p>JEE Main 2024 Result</p>
                      <p>JEE Main 2024 Toppers</p>
                      <p>JEE Main 2024 Participating Institutes & Seat Matrix</p>
                      <p>JEE Main 2024 State-Level Admissions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <ImageCard
                  imagePath={HappyStudents}
                  containerHeight="h-96" />
              </div>
              <div className="flex flex-col gap-4">
                <h6 className="text-primary text-[25px] font-semibold ">
                  JEE Main 2024 Highlights
                </h6>
                <Table table={table}></Table>
              </div>
              <div className="flex flex-col gap-4">
                <h6 className="text-primary text-[25px] font-semibold ">
                  JEE Main 2024 Exam Date
                </h6>
                <div>
                  {`National Testing Agency announced the JEE Mains 2024 exam date for sessions 1 and 2. NTA JEE Main 2024 exam date consists of
                  schedules for all the important events. Aspirants are advised to keep an eye on the IIT JEE Main 2024 exam date so that they do not end up missing any important updates regarding the exam. The complete schedules for the NTA JEE Mains exam are updated below. Check the table for the NTA JEE exam date 2024.`}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h6 className="text-primary text-[25px] font-semibold ">
                JEE Mains 2024 Exam Date Session 2
              </h6>
              <Table table={table}></Table>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                {`The JEE Advanced Cut off for 2024 will be disclosed simultaneously with the release of the IIT JEE results. In the preceding year, the JEE Advanced Cut off for Common Rank List (CRL) stood at 23.89% in aggregate and 6.83% in each subject. Meanwhile, the JEE Advanced Cut off for Other Backward Classes (OBC) was 21.50% in aggregate and 6.15% in each subject. JoSAA will announce the IIT JEE Cut off ranks on the official website – josaa.admissions.nic.in, coinciding with the JEE Advanced qualifying percentiles. These cut off ranks specify the minimum ranks required by candidates for securing admission to the IITs. Attaining a score of 80 or more is considered commendable in JEE Advanced 2024. However, aspiring for an All India Rank (AIR) 1 necessitates aiming for a score exceeding 320 marks in IIT JEE. In the previous year (2023), the JEE Advanced Cut off for IIT Bombay was 67 for Computer Science and Engineering (CSE), 481 for Electrical Engineering, 1736 for Mechanical Engineering, and 4371 for Civil Engineering. Based on the data from the previous year, students aiming for a rank below 1000 should target a score of 170 marks or higher.`}
              </div>

              <div>
                <h6 className="text-primary text-[25px] font-semibold">
                  JEE Advanced 2024 Qualifying Marks
                </h6>
              </div>
              <Table table={table2}></Table>

              <div>
                <h6 className="text-primary text-[25px] font-semibold">
                  JEE Main 2024 Exam Date (Session 1)
                </h6>
              </div>
              <Table table={table3}></Table>
              <div>
                <h6 className="text-primary text-[25px] font-semibold">
                  JEE Main Answer Key 2024
                </h6>
                {
                  `CThe authority will release the final JEE Main session 2 answer key 2024 for paper 2 on the website, jeemain.nta.ac.in. Candidates can
                use the JEE Mains answers key to verify their answers and predict the probable score. NTA has published the provisional JEE Main 2024
                B.Arch answer key on April 30. Candidates could raise objections to the answer key from April 30 to May 1. The authorities released the
                provisional JEE Main B.Tech answer key 2024 on April 12. Candidates were allowed to raise objections to the provisional JEE Main
                answer key from April 12 to 14.`
                }
              </div>
              <div>
                <h6 className="text-primary text-[25px] font-semibold">
                  JEE Main 2024 Result
                </h6>
                {
                  `NTA has announced the JEE Main result 2024 online at jeemain.nta.ac.in. Candidates can check JEE Mains 2024 result online. JEE Main login credentials are required to check the result. The JEE login credential includes the application number and date of birth. The
                authority released the JEE Main result 2024 for paper 1 on February 12, while the JEE B.Arch results were declared on March 6.
                Candidates can download the JEE Main scorecard 2024 to know the marks obtained, category-wise rank, and much more. Candidates
                can follow the steps mentioned below to check the JEE Main answer key 2024. Along with the result state wise topper list will be
                released online.`
                }
              </div>
            </div>

            <div>
              <div className="text-[#165BAE] rounded-md">
                <div className="flex justify-between px-5 py-4 items-center">
                  <p className={"text-primary text-[25px] font-semibold"}>
                    Frequently Asked Questions
                  </p>
                </div>
                <div className="p-6 flex flex-col gap-4 text-sm">
                  <Accordian title="What is the eligibility criteria for IIT JEE?">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged.
                  </Accordian>
                  <Accordian title="What is IIT JEE?">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard dummy
                    text ever since the 1500s, when an unknown printAccordian
                    galley of type and scrambled it to make a type specimen book.
                    Accordianhas survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially
                    unchanged.
                  </Accordian>
                  <Accordian title="What is the eligibility criteria for IIT JEE?">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged.
                  </Accordian>
                </div>
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