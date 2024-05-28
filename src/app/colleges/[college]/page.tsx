import HeroSection1 from "@/components/collegeDetailsPageSections/heroSection/HeroSection1";
import InformationSection from "@/components/collegeDetailsPageSections/InformationSection";
import HighlightsSlider from "@/components/collegeDetailsPageSections/highlightsSlider/HighlightsSlider";
import Section3 from "@/components/collegeDetailsPageSections/section3/Section3";
import { collegeDetails } from "@/data/collegeDetail";
import { global } from "@/data/globalData";
import React from "react";
import TopColleges from "@/components/topColleges/TopColleges";
import Section10 from "@/components/Section10";
import AreYouConfused from "@/components/AreYouConfused";

export default function CollegeDetails() {
  return (
    <main className="mx-auto w-full bg-white">
      <HeroSection1 collegeDetails={collegeDetails} />
      <InformationSection data={collegeDetails?.overview} />
      <Section3 collegeDetails={collegeDetails} />
      <HighlightsSlider collegeDetails={collegeDetails} />
      <InformationSection data={collegeDetails?.placement} />
      <InformationSection data={collegeDetails?.topRecruiters} />
      <InformationSection data={collegeDetails?.coursesAndAdmission} />
      <InformationSection
        data={collegeDetails?.coursesAndEligibilityCriteria}
      />
      <InformationSection data={collegeDetails?.cutOff} />
      <Section10 data={collegeDetails?.brochureSection} />
      <InformationSection data={collegeDetails?.reviews} />
      <TopColleges data={global?.topColleges} />
      <InformationSection data={collegeDetails?.campusFacilities} />
      <InformationSection data={collegeDetails?.photoGallery} />
      <InformationSection data={collegeDetails?.videoGallery} />
      <InformationSection data={collegeDetails?.faqs} />
      <AreYouConfused />
    </main>
  );
}
