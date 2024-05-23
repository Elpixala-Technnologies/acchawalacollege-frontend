import Wrapper from "@/components/Wrapper";
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
    },
    {
      icon: <FaEarthAmericas />,
      title: data.section2.title,
      text: data.section2.text,
    },
    {
      icon: <MdOutlineAutoGraph />,
      title: data.section3.title,
      text: data.section3.text,
      
    },
    {
      icon: <LuAlarmClock />,
      title: data.section4.title,
      text: data.section4.text,
    },
  ];
  return (
    <section className="my-5 w-full">
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
    <div className="w-full border border-zinc-100 p-5 md:p-10 shadow-md">
      <div className="text-white bg-blue-700 rounded p-3 text-2xl w-max">
      {content?.icon}
      </div>
      <h3 className="text-xl font-medium">{content?.title}</h3>
      <p className="text-sm">{content?.text}</p>
    </div>
  );
}
