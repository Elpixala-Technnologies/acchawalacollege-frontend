"use client";
import Filter from "@/components/filters/Filter";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";

export default function CollegeFilters({ allColleges }: any) {
  // Filter Checked
  const [StreamFilter, setStreamFilter] = useState<string>("");
  const [courseDurationFilter, setCourseDurationFilter] = useState<string>("");
  const [avgFeePerYearFilter, setAvgFeePerYearFilter] = useState<string>("");
  const [StateFilter, setStateFilter] = useState<string>("");
  const [CityFilter, setCityFilter] = useState<string>("");
  const [coursesFilter, setCoursesFilter] = useState<string>("");
  const [programTypeFilter, setProgramTypeFilter] = useState<string>("");
  const [collegeTypeFilter, setCollegeTypeFilter] = useState<string>("");
  const [collegeCategoryFilter, setCollegeCategoryFilter] =
    useState<string>("");
  const [affiliationFilter, setAffiliationFilter] = useState<string>("");
  const [genderFilter, setGenderFilter] = useState<string>("");
  const [rankingFilter, setRankingFilter] = useState<string>("");
  const [examFilter, setExamFilter] = useState<string>("");

  //   // filteredDataArrays
  //   const [filteredStreamData, setFilteredStreamData] = useState<any>([]);
  //   const [filteredCourseDurationData, setFilteredCourseDurationData] = useState<any>([]);
  //   const [filteredAvgFeePerYearData, setFilteredAvgFeePerYearData] = useState<any>([]);
  //   const [filteredStateData, setFilteredStateData] = useState<any>([]);
  //   const [filteredCityData, setFilteredCityData] = useState<any>([]);
  //   const [filteredCourseData, setFilteredCourseData] = useState<any>([]);
  //   const [filteredProgramTypeData, setFilteredProgramTypeData] = useState<any>([]);
  //   const [filteredCollegeTypeData, setFilteredCollegeTypeData] = useState<any>([]);
  //   const [filteredCollegeCategoryData, setFilteredCollegeCategoryData] = useState<any>([]);
  //   const [filteredAffiliationData, setFilteredAffiliationData] = useState<any>([]);
  //   const [filteredGenderData, setFilteredGenderData] = useState<any>([]);
  //   const [filteredRankingData, setFilteredRankingData] = useState<any>([]);
  //   const [filteredExamData, setFilteredExamData] = useState<any>([]);

  // Set initial state for filteredDataArrays
  // Note: Remove this and uncomment above const while connecting to backend
  const [filteredStreamData, setFilteredStreamData] = useState<any>(
    allColleges
  );
  const [filteredCourseDurationData, setFilteredCourseDurationData] =
    useState<any>(allColleges);
  const [filteredAvgFeePerYearData, setFilteredAvgFeePerYearData] =
    useState<any>(allColleges);
  const [filteredStateData, setFilteredStateData] = useState<any>(
    allColleges
  );
  const [filteredCityData, setFilteredCityData] = useState<any>(
    allColleges
  );
  const [filteredCourseData, setFilteredCourseData] = useState<any>(
    allColleges
  );
  const [filteredProgramTypeData, setFilteredProgramTypeData] = useState<any>(
    allColleges
  );
  const [filteredCollegeTypeData, setFilteredCollegeTypeData] = useState<any>(
    allColleges
  );
  const [filteredCollegeCategoryData, setFilteredCollegeCategoryData] =
    useState<any>(allColleges);
  const [filteredAffiliationData, setFilteredAffiliationData] = useState<any>(
    allColleges
  );
  const [filteredGenderData, setFilteredGenderData] = useState<any>(
    allColleges
  );
  const [filteredRankingData, setFilteredRankingData] = useState<any>(
    allColleges
  );
  const [filteredExamData, setFilteredExamData] = useState<any>(
    allColleges
  );

  const [SelectedFilter, setSelectedFilter] = useState({
    stream: "",
    courseDuration: "",
    state: "",
    city: "",
    courses: "",
    programType: "",
    collegeType: "",
    avgFeePerYear: "",
    collegeCategory: "",
    affiliation: "",
    genderAccepted: "",
    ranking: "",
    examAccepted: "",
  });

  // handleFilter functions
  const handleStreamFilter = (data: any) => {
    setStreamFilter(data);
    setSelectedFilter((prevData) => ({
      ...prevData,
      stream: data,
    }));
  };

  const handleCourseDurationFilter = (data: any) => {
    setCourseDurationFilter(data);
    setSelectedFilter((prevData) => ({
      ...prevData,
      courseDuration: data,
    }));
  };

  const handleAvgFeePerYearFilter = (data: any) => {
    setAvgFeePerYearFilter(data);
    setSelectedFilter((prevData) => ({
      ...prevData,
      avgFeePerYear: data,
    }));
  };

  const handleStateFilter = (data: any) => {
    setStateFilter(data);
    setSelectedFilter((prevData) => ({
      ...prevData,
      state: data,
    }));
  };

  const handleCityFilter = (data: any) => {
    setCityFilter(data);
    setSelectedFilter((prevData) => ({
      ...prevData,
      city: data,
    }));
  };

  const handleCourseFilter = (data: any) => {
    setCoursesFilter(data);
    setSelectedFilter((prevData) => ({
      ...prevData,
      courses: data,
    }));
  };

  const handleProgramTypeFilter = (data: any) => {
    setProgramTypeFilter(data);
    setSelectedFilter((prevData) => ({
      ...prevData,
      programType: data,
    }));
  };

  const handleCollegeTypeFilter = (data: any) => {
    setCollegeTypeFilter(data);
    setSelectedFilter((prevData) => ({
      ...prevData,
      collegeType: data,
    }));
  };

  const handleCollegeCategoryFilter = (data: any) => {
    setCollegeCategoryFilter(data);
    setSelectedFilter((prevData) => ({
      ...prevData,
      collegeCategory: data,
    }));
  };

  const handleAffiliationFilter = (data: any) => {
    setAffiliationFilter(data);
    setSelectedFilter((prevData) => ({
      ...prevData,
      affiliation: data,
    }));
  };

  const handleGenderFilter = (data: any) => {
    setGenderFilter(data);
    setSelectedFilter((prevData) => ({
      ...prevData,
      genderAccepted: data,
    }));
  };

  const handleRankingFilter = (data: any) => {
    setRankingFilter(data);
    setSelectedFilter((prevData) => ({
      ...prevData,
      ranking: data,
    }));
  };

  const handleExamFilter = (data: any) => {
    setExamFilter(data);
    setSelectedFilter((prevData) => ({
      ...prevData,
      examAccepted: data,
    }));
  };

  // function to remove filters from selected filter
  const handleUnselectFilter = (filter?: string, name?: string) => {
    if (filter === "stream") {
      setStreamFilter("");
      setSelectedFilter((prevData) => ({
        ...prevData,
        stream: "",
      }));
    } else if (filter === "state") {
      setStateFilter("");
      setSelectedFilter((prevData) => ({
        ...prevData,
        state: "",
      }));
    } else if (filter === "city") {
      setCityFilter("");
      setSelectedFilter((prevData) => ({
        ...prevData,
        city: "",
      }));
    } else if (filter === "courses") {
      setCoursesFilter("");
      setSelectedFilter((prevData) => ({
        ...prevData,
        courses: "",
      }));
    } else if (filter === "programType") {
      setProgramTypeFilter("");
      setSelectedFilter((prevData) => ({
        ...prevData,
        programType: "",
      }));
    } else if (filter === "collegeType") {
      setCollegeTypeFilter("");
      setSelectedFilter((prevData) => ({
        ...prevData,
        collegeType: "",
      }));
    } else if (filter === "courseDuration") {
      setCourseDurationFilter("");
      setSelectedFilter((prevData) => ({
        ...prevData,
        courseDuration: "",
      }));
    } else if (filter === "avgFeePerYear") {
      setAvgFeePerYearFilter("");
      setSelectedFilter((prevData) => ({
        ...prevData,
        avgFeePerYear: "",
      }));
    } else if (filter === "collegeCategory") {
      setCollegeCategoryFilter("");
      setSelectedFilter((prevData) => ({
        ...prevData,
        collegeCategory: "",
      }));
    } else if (filter === "affiliation") {
      setAffiliationFilter("");
      setSelectedFilter((prevData) => ({
        ...prevData,
        affiliation: "",
      }));
    } else if (filter === "genderAccepted") {
      setGenderFilter("");
      setSelectedFilter((prevData) => ({
        ...prevData,
        genderAccepted: "",
      }));
    } else if (filter === "ranking") {
      setRankingFilter("");
      setSelectedFilter((prevData) => ({
        ...prevData,
        ranking: "",
      }));
    } else if (filter === "examAccepted") {
      setExamFilter("");
      setSelectedFilter((prevData) => ({
        ...prevData,
        examAccepted: "",
      }));
    }
  };

  return (
    <aside className="[flex:2] px-3">
      <h1 className="font-medium mb-10">Showing {allColleges.length} Colleges</h1>
      <div className="w-full border-2 border-zinc-300 rounded p-5">
        <h2 className="font-medium mb-5">Find colleges</h2>
        {/* shows filter by options  */}
        <div className="flex items-center gap-1 flex-wrap">
          {Object.values(SelectedFilter).some((value) => value !== "") && (
            <span className="text-xs font-bold">Filters Applied : </span>
          )}
          {Object.entries(SelectedFilter).map(([key, value]) => {
            if (key === "courseDuration") {
              const duration =
                typeof value === "string" ? parseInt(value) : value;
              return (
                value !== "" && (
                  <div
                    key={key}
                    className="w-max px-2 py-1 border border-blue-500 rounded-md text-xs flex gap-1 items-center"
                  >
                    <span>
                      {Math.floor(duration / 12)} years {duration % 12} months
                    </span>
                    <span onClick={() => handleUnselectFilter(key, value)}>
                      <MdClose />
                    </span>
                  </div>
                )
              );
            }
            return (
              value !== "" && (
                <div
                  key={key}
                  className="w-max px-2 py-1 border border-blue-500 rounded-md text-xs flex gap-1 items-center"
                >
                  <span>{value}</span>
                  <span onClick={() => handleUnselectFilter(key, value)}>
                    <MdClose />
                  </span>
                </div>
              )
            );
          })}
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
          title="COURSE DURATION"
          filteredDataArray={filteredCourseDurationData}
          handleFilter={handleCourseDurationFilter}
          checked={courseDurationFilter}
        />
        <Filter
          title="AVG FEE PER YEAR"
          filteredDataArray={filteredAvgFeePerYearData}
          handleFilter={handleAvgFeePerYearFilter}
          checked={avgFeePerYearFilter}
        />
        <Filter
          title="STATE"
          filteredDataArray={filteredStateData}
          handleFilter={handleStateFilter}
          checked={StateFilter}
        />
        <Filter
          title="CITY"
          filteredDataArray={filteredCityData}
          handleFilter={handleCityFilter}
          checked={CityFilter}
        />
        <Filter
          title="COURSE"
          filteredDataArray={filteredCourseData}
          handleFilter={handleCourseFilter}
          checked={coursesFilter}
        />
        <Filter
          title="PROGRAM TYPE"
          filteredDataArray={filteredProgramTypeData}
          handleFilter={handleProgramTypeFilter}
          checked={programTypeFilter}
        />
        <Filter
          title="COLLEGE TYPE"
          filteredDataArray={filteredCollegeTypeData}
          handleFilter={handleCollegeTypeFilter}
          checked={collegeTypeFilter}
        />
        <Filter
          title="COLLEGE CATEGORY"
          filteredDataArray={filteredCollegeCategoryData}
          handleFilter={handleCollegeCategoryFilter}
          checked={collegeCategoryFilter}
        />
        <Filter
          title="AFFILIATION"
          filteredDataArray={filteredAffiliationData}
          handleFilter={handleAffiliationFilter}
          checked={affiliationFilter}
        />
        <Filter
          title="GENDER ACCEPTED"
          filteredDataArray={filteredGenderData}
          handleFilter={handleGenderFilter}
          checked={genderFilter}
        />
        <Filter
          title="RANKING"
          filteredDataArray={filteredRankingData}
          handleFilter={handleRankingFilter}
          checked={rankingFilter}
        />
        <Filter
          title="EXAM ACCEPTED"
          filteredDataArray={filteredExamData}
          handleFilter={handleExamFilter}
          checked={examFilter}
        />
      </div>
    </aside>
  );
}
