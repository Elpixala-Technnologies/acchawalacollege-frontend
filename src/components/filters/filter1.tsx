"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";

interface FilterProps {
  title: string;
  filterList: any[];
  handleFilter: (data: string) => void;
  checked: string[];
}

const Filter: React.FC<FilterProps> = ({
  title,
  filterList,
  handleFilter,
  checked,
}) => {
  const [open, setOpen] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpen = () => setOpen(!open);
  const handleViewMore = () => setShowAll(!showAll);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div
      className={`w-full ${title === "LEVEL" ? "" : "border-b"} mb-5 border-zinc-500 pb-5`}
    >
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={handleOpen}
      >
        <span className="font-bold uppercase text-blue-500">{title}</span>
        <span className="font-light">
          {open ? (
            <IoIosArrowDown className="transition-all duration-300" />
          ) : (
            <IoIosArrowDown className="-rotate-180 transition-all duration-300" />
          )}
        </span>
      </div>
      {open && (
        <div>
          {title !== "MODE" && title !== "LEVEL" && (
            <div className="searchBar relative">
              <input
                type="text"
                className="my-2 w-full rounded border border-zinc-500 p-2 pl-4 text-sm shadow-md outline-none"
                placeholder={`Search ${title.toLowerCase()}`}
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <IoIosSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          )}
          <div className="h-full max-h-48 overflow-y-auto">
            {/* Stream  */}
            {(title === "STREAM" || title === "MODE" || title === "LEVEL") && (
              <>
                {filterList
                  ?.reduce((uniqueStreams: string[], filter: any) => {
                    if (!uniqueStreams.includes(filter)) {
                      uniqueStreams.push(filter);
                    }
                    return uniqueStreams;
                  }, [])
                  .slice(0, showAll ? filterList?.length : 5)
                  .map((stream: string) => (
                    <div
                      key={stream}
                      className="my-2 flex cursor-pointer items-center gap-1"
                    >
                      <input
                        type="checkbox"
                        id={stream}
                        name={stream}
                        checked={checked.includes(stream)}
                        className="cursor-pointer"
                        onChange={() => handleFilter(stream)}
                      />
                      <label
                        htmlFor={stream}
                        className="text-secondary-text hover:text-primary text-base font-medium"
                      >
                        {stream}
                      </label>
                    </div>
                  ))}
                {!showAll && filterList.length > 2 && (
                  <p
                    className="cursor-pointer text-right font-medium text-blue-500"
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
};

export default Filter;
