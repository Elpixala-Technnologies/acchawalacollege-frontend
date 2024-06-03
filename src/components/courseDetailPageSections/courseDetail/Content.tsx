import TimelineList from "@/components/TimelineList";
import React from "react";
import { SiTicktick } from "react-icons/si";

export default function Content({ courseDetails, selectedIndex }: any) {
  const selectedDetail = courseDetails[selectedIndex];

  return (
    <div className="mt-5 w-full border-b border-zinc-300 pb-5">
      {/* Title  */}
      {selectedDetail?.title && (
        <h2 className="title1 mb-8 ">
          {selectedDetail?.title?.split(" ")?.map((word: any, index: any) => (
            <span
              key={index}
              className={`font-medium ${index === 0 ? "text-blue-950" : "text-blue-500"}`}
            >
              {word}{" "}
            </span>
          ))}
        </h2>
      )}
      {/* Article  */}
      {selectedDetail.article && (
        <div
          className="dangerouslySetInnerHTMLStyle text-justify"
          dangerouslySetInnerHTML={{ __html: selectedDetail.article }}
        />
      )}
      {/* List  */}
      {selectedDetail?.list && (
        <ul className="flex flex-wrap gap-x-5">
          {selectedDetail?.list.map((item: any, index: any) => (
            <li key={index} className="mb-2 flex items-center gap-x-2">
              <SiTicktick className="text-xl text-blue-500" />
              {item}
            </li>
          ))}
        </ul>
      )}
      {/* Semester  */}
      {selectedDetail?.semesters && (
        <TimelineList data={selectedDetail?.semesters} />
      )}
    </div>
  );
}
