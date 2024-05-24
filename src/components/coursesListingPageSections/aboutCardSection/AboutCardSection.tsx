import Wrapper from "@/components/Wrapper";
import TextWithLineBreak from "@/utils/TextWithLineBreack";
import React from "react";
import { FaComputer, FaEarthAmericas } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import { MdOutlineAutoGraph } from "react-icons/md";

export default function AboutCardSection({ data }: any) {
  const cardContentArray = [
    {
      icon: <FaComputer />,
      title: data.section1.title,
      text: data.section1.text,
      isHighlights: data?.section1?.isHighlights,
    },
    {
      icon: <FaEarthAmericas />,
      title: data.section2.title,
      text: data.section2.text,
      isHighlights: data?.section2?.isHighlights,
    },
    {
      icon: <MdOutlineAutoGraph />,
      title: data.section3.title,
      text: data.section3.text,
      isHighlights: data?.section3?.isHighlights,
      
    },
    {
      icon: <LuAlarmClock />,
      title: data.section4.title,
      text: data.section4.text,
      isHighlights: data?.section4?.isHighlights,
    },
  ];
  return (
    <section className="my-16 w-full">
      <Wrapper className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        {cardContentArray?.map((d: any, i: number) => (
          <Card content={d} key={i} />
        ))}
      </Wrapper>
    </section>
  );
}

function Card({ content }: any) {
  return (
    <div className={`${!!content?.isHighlights ? "bg-blue-700 text-white " : "bg-white text-zinc-700"}  w-full border flex flex-col gap-3 border-zinc-100 p-5 md:p-10 shadow-md rounded-lg`}>
      <div className="text-white bg-blue-700 rounded p-3 text-4xl w-max border border-white">
      {content?.icon}
      </div>
      <h3 className="text-xl font-medium"><TextWithLineBreak text={content?.title} /></h3>
      <p className="text-sm"><TextWithLineBreak text={content?.text} /></p>
    </div>
  );
}
