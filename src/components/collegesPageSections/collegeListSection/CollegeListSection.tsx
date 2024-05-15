"use client";
import React, { useState } from "react";
import CollegeFilters from "./CollegeFilters";
import { dummyCollegeDataArray } from "@/data/collegeData";
import { RiSearchLine } from "react-icons/ri";
import SortButton from "@/components/sortButton/SortButton";
import { MdOutlineSort } from "react-icons/md";
import CollegeFilteredCard from "@/components/cards/CollegeFilteredCard";
export default function CollegeListSection() {
  const [MobileFilter, setMobileFilter] = useState(false);
  const [displayCount, setDisplayCount] = useState(3);
  const [filteredData, setFilteredData] = useState<any>(dummyCollegeDataArray);

  function handleSearch() {
    // search operation
  }

  const handleMobileFilter = () => {
    setMobileFilter(!MobileFilter);
    if (MobileFilter) {
      document.body.style.overflow = "hidden";
    }
  };

  const handleFilterOptionClick = (option: any) => {
    if (option === "a-z") {
      const sortedData: any = [...dummyCollegeDataArray].sort(
        (a: any, b: any) => {
          return a?.name.localeCompare(b?.name);
        }
      );
      setFilteredData(sortedData.slice(0, displayCount));
    } else if (option === "reset") {
      const resetArray: any = [...dummyCollegeDataArray].slice(0, displayCount);
      setFilteredData(resetArray);
    }
  };

  return (
    <section id="collegeList" className="w-full my-5">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row px-4">
        {/* Aside College Filter Section  */}
        <CollegeFilters allColleges={dummyCollegeDataArray} />
        {/* main College Search and List Section  */}
        <main className="md:[flex:8] w-full flex flex-col p-5 pt-0">
          {/* Search and Sort Section  */}
          <div className="mb-4 flex gap-4 items-stretch relative max-md:flex-col">
            <div className="bg-white h-12 flex border-2 border-zinc-300 shadow-md rounded-md flex-1 items-center text-primary-text px-2 focus-within:border-secondary-text">
              <RiSearchLine className="text-blue-500" />
              <input
                className="w-full focus:outline-none pl-5"
                type="text"
                placeholder="Search Colleges Name"
                onChange={handleSearch}
              />
            </div>
            <div className="flex gap-4">
              {/* sort button  */}
              <SortButton handleFilterOptionClick={handleFilterOptionClick} />
              <div className="max-md:block hidden">
                <div className="flex border-2 items-center px-2 border-extra-light-text gap-2 rounded-md cursor-pointer">
                  <span onClick={handleMobileFilter}>Filter</span>
                  <MdOutlineSort />
                </div>
              </div>
            </div>
          </div>
          {/* College List Section  */}
          {filteredData.slice(0,3).map((college: any) => (
            <CollegeFilteredCard key={college.id} college={college} />
          ))}
        </main>
      </div>
    </section>
  );
}
