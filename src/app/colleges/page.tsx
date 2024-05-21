import CollegeListSection from "@/components/collegesListingPageSections/collegeListSection/CollegeListSection";
import HeroSection from "@/components/collegesListingPageSections/heroSection/HeroSection";
import React from "react";

export default function colleges() {
  return (
    <main className="mx-auto w-full bg-white">
      <HeroSection />
      <CollegeListSection />
    </main>
  );
}
