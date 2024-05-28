import Image from "next/image";
import React from "react";

export default function Section2({data}:any) {
  return (
    <section className="w-full my-5">
      <div className="flex max-md:flex-col relative mx-auto max-w-screen-2xl">
        <Card bgColor="bg-blue-950" title={data.card1.title} text={data.card1.text} icon={data.card1.icon}  />
        <Card bgColor="bg-[#165bae]" title={data.card2.title} text={data.card2.text} icon={data.card2.icon} />
        <Card bgColor="bg-sky-500" title={data.card3.title} text={data.card3.text} icon={data.card3.icon} />
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
