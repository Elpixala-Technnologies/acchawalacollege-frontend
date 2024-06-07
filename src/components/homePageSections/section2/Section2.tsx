import Image from "next/image";
import React from "react";

export default function Section2({ data, sData }: any) {
  return (
    <section className="my-5 w-full">
      <div className="flex w-full max-w-screen-2xl max-md:flex-col">
        <Card
          bgColor="bg-blue-950"
          title={sData?.card1?.title}
          text={sData?.card1?.text}
          icon={data?.card1?.icon}
        />
        <Card
          bgColor="bg-[#165bae]"
          title={data?.card2?.title}
          text={data?.card2?.text}
          icon={data?.card2?.icon}
        />
        <Card
          bgColor="bg-sky-500"
          title={data?.card3?.title}
          text={data?.card3?.text}
          icon={data?.card3?.icon}
        />
      </div>
    </section>
  );
}

function Card({ bgColor, title, text, icon }: any) {
  return (
    <div
      className={`md:flex-center flex  [flex:1] max-md:gap-5 md:flex-col ${bgColor} p-3 text-white max-md:pl-5 md:p-5`}
    >
      <Image src={icon} alt="icon" />
      <div className="md:text-center">
        <h3 className="text-2xl font-medium md:text-3xl">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
