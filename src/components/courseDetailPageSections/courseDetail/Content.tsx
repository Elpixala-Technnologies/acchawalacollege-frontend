import TimelineList from "@/components/TimelineList";
import React from "react";
import { SiTicktick } from "react-icons/si";

export default function Content({ courseDetails, selectedIndex }: any) {
  const selectedDetail = courseDetails[selectedIndex];

  return (
    <div className="w-full  border-b border-zinc-300">
      {/* Title  */}
      {selectedDetail?.title && (
        <h2 className="mb-3 text-blue-950 text-2xl font-medium p-5 pb-0">
          {selectedDetail?.title}
        </h2>
      )}
      {/* Article  */}
      {selectedDetail.article && (
        <div
          className="dangerouslySetInnerHTMLStyle p-5 text-justify"
          dangerouslySetInnerHTML={{ __html: selectedDetail.article }}
        />
      )}
      {/* List  */}
      {selectedDetail?.list && (
        <ul className="flex gap-x-5 flex-wrap p-5 pt-0">
          {selectedDetail?.list.map((item: any, index: any) => (
            <li key={index} className="mb-2 flex items-center gap-x-2">
              <SiTicktick className="text-blue-500 text-xl" />{item}
            </li>
          ))}
        </ul>
      )}
      {selectedDetail?.semesters && (
        <TimelineList data={selectedDetail?.semesters} />
      )}
    </div>
  );
}
