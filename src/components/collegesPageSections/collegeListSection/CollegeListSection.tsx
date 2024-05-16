"use client";
import React, { useState } from "react";
import CollegeFilters from "./CollegeFilters";
import { dummyCollegeDataArray } from "@/data/collegeData";
import { RiSearchLine } from "react-icons/ri";
import SortButton from "@/components/sortButton/SortButton";
import { MdOutlineSort } from "react-icons/md";
import CollegeFilteredCard from "@/components/cards/CollegeFilteredCard";
import TopCollegesScroll from "./TopCollegesScroll";
import CollegesCard from "@/components/cards/CollegesCard";
export default function CollegeListSection() {
  const [MobileFilter, setMobileFilter] = useState(true);
  const [displayCount, setDisplayCount] = useState(3);
  const [filteredData, setFilteredData] = useState<any>(dummyCollegeDataArray);

  function handleSearch() {
    // search operation
  }

  const handleMobileFilter = () => {
    setMobileFilter(pre => !pre);
  };

  const handleFilterOptionClick = (option: any) => {
    if (option === "a-z") {
      const sortedData: any = [...dummyCollegeDataArray].sort(
        (a: any, b: any) => {
          return a?.name.localeCompare(b?.name);
        },
      );
      setFilteredData(sortedData.slice(0, displayCount));
    } else if (option === "reset") {
      const resetArray: any = [...dummyCollegeDataArray].slice(0, displayCount);
      setFilteredData(resetArray);
    }
  };

  return (
    <section id="collegeList" className="my-5 w-full pb-5">
      <div className="mx-auto flex  w-full max-w-[1440px] flex-col px-4 md:flex-row">
        {/* Aside College Filter Section  */}
        <CollegeFilters allColleges={dummyCollegeDataArray} />
        {/* main College Search and List Section  */}
        <main className="flex w-full flex-col p-5 pt-0 md:max-w-[1008px] md:[flex:8]">
          {/* Search and Sort Section  */}
          <div className="relative mb-4 flex items-stretch gap-4 max-md:flex-col">
            <div className="text-primary-text  focus-within:border-secondary-text flex h-12 flex-1 items-center rounded-md border-2 border-zinc-300 bg-white px-2 shadow-md max-md:mt-5">
              <RiSearchLine className="text-blue-500" />
              <input
                className="w-full pl-5 focus:outline-none"
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
          {filteredData.slice(0, 3).map((college: any) => (
            <CollegeFilteredCard mobileFilter={MobileFilter} key={college.id} college={college} />
          ))}
          {/* Top Colleges Section  */}
          <TopCollegesScroll />
          {/* Next College List Section  */}
          {filteredData.slice(3).map((college: any) => (
            <CollegeFilteredCard key={college.id} college={college} />
          ))}
        </main>
      </div>
    </section>
  );
}
