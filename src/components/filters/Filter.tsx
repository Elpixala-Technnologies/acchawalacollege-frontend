"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";

export default function Filter({
  title,
  filteredDataArray,
  handleFilter,
  checked,
}: any) {
  const [open, setOpen] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleViewMore = () => setShowAll(!showAll);

  function handleSortAvgFeePerYear(data: any){
    // sort operation
  }
  return (
    <div className="w-full border-b  border-zinc-500 pb-5 mb-5">
      {/* Title with open/close list button  */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleOpen}
      >
        <span className="text-blue-500 font-bold uppercase">{title}</span>{" "}
        <span className="font-light">
          {open ? (
            <IoIosArrowDown className="transition-all duration-300" />
          ) : (
            <IoIosArrowDown className="transition-all duration-300 -rotate-180" />
          )}
        </span>
      </div>
      {/* list  */}
      {open && (
        <div>
          {/* Search Bar  */}
          {title !== "COURSE DURATION" &&
            title !== "AVG FEE PER YEAR" &&
            title !== "PROGRAM TYPE" &&
            title !== "COLLEGE TYPE" &&
            title !== "GENDER ACCEPTED" &&          
            (
              <div className="searchBar relative">
                <input
                  type="text"
                  className="border border-zinc-500 shadow-md p-2 pl-4 text-sm w-full my-2 rounded outline-none"
                  placeholder={`Search ${title.toLowerCase()}`}
                />
                <IoIosSearch className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-500" />
              </div>
            )}
          {/* END Search Bar  */}
          <div className="h-full max-h-48 overflow-y-auto">
            {/* Stream  */}
            {title === "STREAM" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.id}
                      className="flex gap-1 items-center my-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        id={filter.id}
                        name={filter.stream}
                        checked={checked === filter.stream}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.stream)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-base font-medium text-secondary-text hover:text-primary"
                      >
                        {filter.stream}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="text-right text-blue-500 font-medium cursor-pointer"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* COURSE DURATION */}
            {title === "COURSE DURATION" && (
              <div className="flex flex-col gap-4 p-5">
                <p className="text-center text-xs">
                  {Math.floor(checked / 12)} years {checked % 12} months
                </p>
                <input
                  type="range"
                  min="1"
                  max="96" // 8 years * 12 months/year = 96 months               
                  value={checked}
                  onChange={(e) => handleFilter(parseInt(e.target.value))}
                  className="cursor-pointer w-full appearance-none bg-gray-200 h-1 rounded-lg outline-none"
                  style={{
                    cursor: "pointer",
                    background: `linear-gradient(to right, rgb(59 130 246) ${checked}%, rgb(229 231 235) ${checked}%)`,
                  }}
                />
                <div className="flex justify-between">
                  <span>1 month</span>
                  <span>8 years</span>
                </div>
              </div>
            )}
            {/* AVG FEE PER YEAR */}
            {title === "AVG FEE PER YEAR" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.id}
                      className="flex gap-1 items-center my-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        id={filter.id}
                        name={filter.avgFeePerYear}
                        checked={checked === filter.avgFeePerYear}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.avgFeePerYear)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-base font-medium text-secondary-text hover:text-primary"
                      >
                        {filter.avgFeePerYear}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="text-right text-blue-500 font-medium cursor-pointer"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
                {/* MIN / Max Button  */}
                <div className="flex gap-1 mt-2">
                  <button
                    className="[flex:1]  border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded"
                    onClick={() => handleSortAvgFeePerYear("min")}
                  >
                    ₹ Min
                  </button>
                  <button
                    className="[flex:1] border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded"
                    onClick={()=> handleSortAvgFeePerYear("max")}
                  >
                    ₹ Max
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => handleSortAvgFeePerYear("go")}
                  >
                    Go
                  </button>
                </div>
              </>
            )}
            {/* STATE */}
            {title === "STATE" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.id}
                      className="flex gap-1 items-center my-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        id={filter.id}
                        name={filter.state}
                        checked={checked === filter.state}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.state)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-base font-medium text-secondary-text hover:text-primary"
                      >
                        {filter.state}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="text-right text-blue-500 font-medium cursor-pointer"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* CITY */}
            {title === "CITY" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.id}
                      className="flex gap-1 items-center my-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        id={filter.id}
                        name={filter.city}
                        checked={checked === filter.city}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.city)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-base font-medium text-secondary-text hover:text-primary"
                      >
                        {filter.city}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="text-right text-blue-500 font-medium cursor-pointer"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* COURSE */}
            {title === "COURSE" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.id}
                      className="flex gap-1 items-center my-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        id={filter.id}
                        name={filter.course}
                        checked={checked === filter.course}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.course)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-base font-medium text-secondary-text hover:text-primary"
                      >
                        {filter.course}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="text-right text-blue-500 font-medium cursor-pointer"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* PROGRAM TYPE */}
            {title === "PROGRAM TYPE" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.id}
                      className="flex gap-1 items-center my-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        id={filter.id}
                        name={filter.programType}
                        checked={checked === filter.programType}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.programType)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-base font-medium text-secondary-text hover:text-primary"
                      >
                        {filter.programType}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="text-right text-blue-500 font-medium cursor-pointer"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* COLLEGE TYPE */}
            {title === "COLLEGE TYPE" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.id}
                      className="flex gap-1 items-center my-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        id={filter.id}
                        name={filter.collegeType}
                        checked={checked === filter.collegeType}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.collegeType)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-base font-medium text-secondary-text hover:text-primary"
                      >
                        {filter.collegeType}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="text-right text-blue-500 font-medium cursor-pointer"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* COLLEGE CATEGORY */}
            {title === "COLLEGE CATEGORY" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.id}
                      className="flex gap-1 items-center my-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        id={filter.id}
                        name={filter.collegeCategory}
                        checked={checked === filter.collegeCategory}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.collegeCategory)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-base font-medium text-secondary-text hover:text-primary"
                      >
                        {filter.collegeCategory}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="text-right text-blue-500 font-medium cursor-pointer"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* AFFILIATION */}
            {title === "AFFILIATION" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.id}
                      className="flex gap-1 items-center my-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        id={filter.id}
                        name={filter.affiliation}
                        checked={checked === filter.affiliation}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.affiliation)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-base font-medium text-secondary-text hover:text-primary"
                      >
                        {filter.affiliation}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="text-right text-blue-500 font-medium cursor-pointer"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* GENDER ACCEPTED */}
            {title === "GENDER ACCEPTED" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.id}
                      className="flex gap-1 items-center my-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        id={filter.id}
                        name={filter.gender}
                        checked={checked === filter.gender}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.gender)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-base font-medium text-secondary-text hover:text-primary"
                      >
                        {filter.gender}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="text-right text-blue-500 font-medium cursor-pointer"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* RANKING */}
            {title === "RANKING" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.id}
                      className="flex gap-1 items-center my-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        id={filter.id}
                        name={filter.ranking}
                        checked={checked === filter.ranking}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.ranking)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-base font-medium text-secondary-text hover:text-primary"
                      >
                        {filter.ranking}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="text-right text-blue-500 font-medium cursor-pointer"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* EXAM ACCEPTED */}
            {title === "EXAM ACCEPTED" && (
              <>
                {filteredDataArray
                  .slice(0, showAll ? filteredDataArray.length : 2)
                  .map((filter: any) => (
                    <div
                      key={filter.id}
                      className="flex gap-1 items-center my-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        id={filter.id}
                        name={filter.exam}
                        checked={checked === filter.exam}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter.exam)}
                      />
                      <label
                        htmlFor={filter.id}
                        className="text-base font-medium text-secondary-text hover:text-primary"
                      >
                        {filter.exam}
                      </label>
                    </div>
                  ))}
                {!showAll && filteredDataArray.length > 2 && (
                  <p
                    className="text-right text-blue-500 font-medium cursor-pointer"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
