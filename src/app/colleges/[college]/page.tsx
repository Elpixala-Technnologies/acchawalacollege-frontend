import HeroSection1 from "@/components/collegeDetailsPageSections/heroSection/HeroSection1";
import HeroSection2 from "@/components/collegeDetailsPageSections/heroSection/HeroSection2";
import Section3 from "@/components/collegeDetailsPageSections/section3/Section3";
import { collegeDetails } from "@/data/collegeDetail";
import React from "react";

export default function CollegeDetails() {
  return <main className="mx-auto w-full bg-white">
    <HeroSection1 collegeDetails={collegeDetails}  />
    <HeroSection2 collegeDetails={collegeDetails} />
    <Section3 collegeDetails={collegeDetails} />
  </main>;
}
