import React from "react";
import { examDetails } from "@/data/exanDetail";
import HeroExamSection from "@/components/examDetailsPageSections/heroSection/HeroExamsSection";


export default function ExamDetails() {
  return (
    <main className="mx-auto w-full bg-white">
      <HeroExamSection examDetails={examDetails} />
    </main>
  );
}
