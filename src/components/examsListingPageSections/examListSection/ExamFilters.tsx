"use client";
import Filter from "@/components/filters/Filter";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

export default function ExamFilters({ allColleges, mobileFilter }: any) {
  // Filter Checked
  const [StreamFilter, setStreamFilter] = useState<string[]>([]);
  const [collegeTypeFilter, setCollegeTypeFilter] = useState<string>("");
  const [examLevelFilter, setExamLevelFilter] =
    useState<string>("");
  const [examFilter, setExamFilter] = useState<string>("");

  const [filteredStreamData, setFilteredStreamData] =
    useState<any>(allColleges);
  const [filteredCollegeTypeData, setFilteredCollegeTypeData] =
    useState<any>(allColleges);
  const [filteredExamData, setFilteredExamData] = useState<any>(allColleges);

  const [SelectedFilter, setSelectedFilter] = useState({
    stream: [] as string[],
    collegeType: "",
    examLevel: "",
  });

  // handleFilter functions
  const handleStreamFilter = (data: string) => {
    // Toggle the selection
    const updatedSelection = StreamFilter.includes(data)
      ? StreamFilter.filter((item) => item !== data)
      : [...StreamFilter, data];

    setStreamFilter(updatedSelection);
    setSelectedFilter((prevData) => ({
      ...prevData,
      stream: updatedSelection,
    }));
  };

  const handleCollegeTypeFilter = (data: any) => {
    setCollegeTypeFilter(data);
    setSelectedFilter((prevData) => ({
      ...prevData,
      collegeType: data,
    }));
  };

  const handleExamLevelFilter = (data: any) => {
    setExamLevelFilter(data);
    setSelectedFilter((prevData) => ({
      ...prevData,
      examLevel: data,
    }));
  };


  // function to remove filters from selected filter
  const handleUnselectFilter = (filter?: string, name?: string) => {
    if (filter === "stream") {
      setStreamFilter([]);
      setSelectedFilter((prevData) => ({
        ...prevData,
        stream: [],
      }));
    } else if (filter === "collegeType") {
      setCollegeTypeFilter("");
      setSelectedFilter((prevData) => ({
        ...prevData,
        collegeType: "",
      }));
    } else if (filter === "examLevel") {
      setExamLevelFilter("");
      setSelectedFilter((prevData) => ({
        ...prevData,
        examLevel: "",
      }));

    }
  };

  return (
    <aside className={`px-3 [flex:2] min-w-[300px]`}>
      <h1 className="mb-10 font-medium">
        Showing {allColleges.length} Colleges
      </h1>
      <div className="w-full rounded border-2 border-zinc-300 p-5 pb-0">
        <h2 className="mb-5 font-medium">Find Exams</h2>
        {/* Selected filters display */}
        <div className="flex flex-wrap items-center gap-1">
          {Object.values(SelectedFilter).some(
            (value) =>
              value !== "" && (!Array.isArray(value) || value.length !== 0),
          ) && <span className="text-xs font-bold">Filters Applied : </span>}
          {Object.entries(SelectedFilter).map(
            ([key, value]: [string, string | string[]]) => {
              if (Array.isArray(value)) {
                // If the value is an array, join its elements with commas
                value = value.join(" , ");
              } else if (key === "courseDuration") {
                const duration: any =
                  typeof value === "string" ? parseInt(value) : value;
                return (
                  value !== "" && (
                    <div
                      key={key}
                      className="flex w-max items-center gap-1 rounded-md border border-blue-500 px-2 py-1 text-xs"
                    >
                      <span>
                        {Math.floor(duration / 12)} years {duration % 12} months
                      </span>
                      <button
                        onClick={() =>
                          handleUnselectFilter(key, value as string)
                        }
                      >
                        <MdClose />
                      </button>
                    </div>
                  )
                );
              }
              return (
                value !== "" &&
                (!Array.isArray(value) || value.length !== 0) && (
                  <div
                    key={key}
                    className="flex w-max items-center gap-1 rounded-md border border-blue-500 px-2 py-1 text-xs"
                  >
                    <span className="max-w-[150px] text-wrap">{value}</span>
                    <button onClick={() => handleUnselectFilter(key, value)}>
                      <MdClose />
                    </button>
                  </div>
                )
              );
            },
          )}
        </div>
        {/*END  shows filter by options  */}

        {/* Filters  */}
        <Filter
          title="STREAM"
          filteredDataArray={filteredStreamData}
          handleFilter={handleStreamFilter}
          checked={StreamFilter}
        />
        <Filter
          title="COLLEGE TYPE"
          filteredDataArray={filteredCollegeTypeData}
          handleFilter={handleCollegeTypeFilter}
          checked={collegeTypeFilter}
        />
        <Filter
          title="EXAM LEVEL"
          filteredDataArray={filteredExamData}
          handleFilter={handleExamLevelFilter}
          checked={examFilter}
        />
      </div>
    </aside>
  );
}
