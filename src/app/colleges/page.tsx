import CollegeListSection from "@/components/collegesListingPageSections/collegeListSection/CollegeListSection";
import HeroSection from "@/components/collegesListingPageSections/heroSection/HeroSection";
import React from "react";
import { collegePages } from "@/data/collegeData";
import { global } from "@/data/globalData";
import Faqs from "@/components/faqs/Faqs";

export default function colleges() {
  return (
    <>
      <HeroSection data={collegePages?.bannerSection} />
      <CollegeListSection
        data={collegePages?.CollegesDataArray}
        topColleges={global?.topColleges}
        filterBy={collegePages?.filterBy}
      />
      <Faqs data={collegePages?.faqs} />
    </>
  );
}
