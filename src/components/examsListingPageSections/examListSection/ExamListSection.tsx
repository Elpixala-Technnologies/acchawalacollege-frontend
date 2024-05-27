"use client";
import React, { useState } from "react";
import { dummyCollegeDataArray } from "@/data/collegeData";
import { RiSearchLine } from "react-icons/ri";
import SortButton from "@/components/sortButton/SortButton";
import { MdOutlineSort } from "react-icons/md";
import CollegeFilteredCard from "@/components/cards/CollegeFilteredCard";
import CollegesCard from "@/components/cards/CollegesCard";
import Wrapper from "@/components/Wrapper";
import ExamFilters from "./ExamFilters";
import ExamFilteredCard from "@/components/cards/ExamFilteredCard";
import { dummyExamDataArray } from "@/data/examData";
import TopExamScroll from "./TopExamsScroll";
import TopPreviousYearPaperScroll from "./TopPreviousYearPaperScroll";
// import ExamFilteredCard from "../../cards/ExamFilteredCard";

export default function ExamListSection() {
  const [MobileFilter, setMobileFilter] = useState(false);
  const [displayCount, setDisplayCount] = useState(3);
  const [filteredData, setFilteredData] = useState<any>(dummyExamDataArray);
  // const [filteredData, setFilteredData] = useState<any>(dummyCollegeDataArray);

  function handleSearch() {
    // search operation
  }

  const handleMobileFilter = () => {
    setMobileFilter((pre) => !pre);
  };

  const handleFilterOptionClick = (option: any) => {
    if (option === "a-z") {
      const sortedData: any = [...dummyExamDataArray].sort(
        (a: any, b: any) => {
          return a?.name.localeCompare(b?.name);
        },
      );
      setFilteredData(sortedData.slice(0, displayCount));
    } else if (option === "reset") {
      const resetArray: any = [...dummyExamDataArray].slice(0, displayCount);
      setFilteredData(resetArray);
    }
  };

  return (
    <section id="collegeList" className="my-5 w-full pb-5">
      <Wrapper className=" flex flex-col md:flex-row">
        {/* Aside College Filter Section  */}
        <ExamFilters allColleges={dummyCollegeDataArray} />
        {/* main College Search and List Section  */}
        <main className="flex w-full flex-col p-5 pt-0  md:[flex:8] md:min-w-[550px]">
          {/* Search and Sort Section  */}
          <div className="relative mb-4 flex items-stretch gap-4 max-md:flex-col">
            <div className="text-primary-text focus-within:border-secondary-text flex h-12 flex-1 items-center rounded-md border-2 border-zinc-300 bg-white px-2 shadow-md max-md:mt-5">
              <RiSearchLine className="text-blue-500" />
              <input
                className="w-full pl-5 max-md:p-3 focus:outline-none"
                type="text"
                placeholder="Search Colleges Name"
                onChange={handleSearch}
              />
            </div>
            <div className="flex gap-4">
              {/* sort button  */}
              <SortButton handleFilterOptionClick={handleFilterOptionClick} />
              {/* Filter Button  */}
              <div className="hidden max-md:block">
                <div className="group flex h-12 cursor-pointer items-center gap-2 rounded-md border-2 border-blue-500 bg-blue-500 px-2 text-white">
                  <span onClick={handleMobileFilter}>Filter</span>
                  <MdOutlineSort />
                </div>
              </div>
            </div>
          </div>
          {/* College List Section  */}
          {filteredData.slice(0, 3).map((exam: any) => (
            <ExamFilteredCard
              mobileFilter={MobileFilter}
              key={exam.id}
              exam={exam}
            />
          ))}
          {/* Top Exam Section  */}
          <TopExamScroll />
          {/* Next College List Section  */}
          {filteredData.slice(3).map((exam: any) => (
            <ExamFilteredCard key={exam.id} exam={exam} />
          ))}
          {/* Top Exam Previous Year Paper  Section  */}
          <TopPreviousYearPaperScroll />
        </main>
      </Wrapper>
    </section>
  );
}
