import { section2 } from "@/data/homePage";
import Image from "next/image";
import React from "react";

export default function Section2() {
  return (
    <section className="w-full my-5">
      <div className="flex max-md:flex-col w-full max-w-screen-2xl">
        <Card bgColor="bg-blue-950" title={section2.card1.title} text={section2.card1.text} icon={section2.card1.icon}  />
        <Card bgColor="bg-[#165bae]" title={section2.card2.title} text={section2.card2.text} icon={section2.card2.icon} />
        <Card bgColor="bg-sky-500" title={section2.card3.title} text={section2.card3.text} icon={section2.card3.icon} />
      </div>
    </section>
  );
}

function Card({ bgColor, title, text, icon }: any) {
  return (
    <div className={`flex-center flex-col [flex:1] ${bgColor} text-white p-5`}>
      <Image src={icon} alt="icon" />
      <h3 className="text-3xl font-medium">{title}</h3>
      <p>{text}</p>
    </div>
  );
}
