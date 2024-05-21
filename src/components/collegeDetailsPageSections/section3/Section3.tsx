import Image from "next/image";
import React from "react";
import { Student, building, community } from "@/asset";

export default function Section3({ collegeDetails }: any) {
  return (
    <section className="my-5 w-full">
      <div className="flex w-full max-w-screen-2xl max-md:flex-col">
        <Card
          bgColor="bg-blue-950"
          title={collegeDetails?.campusSize}
          text="Campus Size"
          icon={building}
        />
        <Card
          bgColor="bg-[#165bae]"
          title={collegeDetails?.noOfFaculty}
          text="No. of Faculty"
          icon={Student}
        />
        <Card
          bgColor="bg-sky-500"
          title={collegeDetails?.noOfStudents}
          text="No. of Students"
          icon={community}
        />
      </div>
    </section>
  );
}

function Card({ bgColor, title, text, icon }: any) {
  return (
    <div className={`flex-center flex-col [flex:1] ${bgColor} p-5 text-white`}>
      <Image src={icon} alt="icon" className="mb-2" />
      <h3 className="text-3xl font-medium">{title}</h3>
      <p>{text}</p>
    </div>
  );
}
