import CollegeListSection from "@/components/collegesListingPageSections/collegeListSection/CollegeListSection";
import HeroSection from "@/components/collegesListingPageSections/heroSection/HeroSection";
import React from "react";
import { collegePages } from "@/data/collegeData";
import { global } from "@/data/globalData";

export default function colleges() {
  return (
    <main className="mx-auto w-full bg-white">
      <HeroSection data={collegePages?.bannerSection} />
      <CollegeListSection data={collegePages?.CollegesDataArray} topColleges={global?.topColleges} />
    </main>
  );
}
