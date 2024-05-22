import HeroSection1 from "@/components/collegeDetailsPageSections/heroSection/HeroSection1";
import InformationSection from "@/components/collegeDetailsPageSections/InformationSection";
import HighlightsSlider from "@/components/collegeDetailsPageSections/highlightsSlider/HighlightsSlider";
import Section3 from "@/components/collegeDetailsPageSections/section3/Section3";
import { collegeDetails } from "@/data/collegeDetail";
import React from "react";
import TopColleges from "@/components/homePageSections/topColleges/TopColleges";

export default function CollegeDetails() {
  return (
    <main className="mx-auto w-full bg-white">
      <HeroSection1 collegeDetails={collegeDetails} />
      <InformationSection data={collegeDetails?.overview} />
      <Section3 collegeDetails={collegeDetails} />
      <HighlightsSlider collegeDetails={collegeDetails} />
      <InformationSection data={collegeDetails?.placement} />
      <InformationSection data={collegeDetails?.coursesAndAdmission} />
      <InformationSection data={collegeDetails?.coursesAndEligibilityCriteria} />
      <InformationSection data={collegeDetails?.cutOff} />
      <TopColleges />
      <InformationSection data={collegeDetails?.campusFacilities} />
      <InformationSection data={collegeDetails?.topRecruiters} />
    </main>
  );
}
