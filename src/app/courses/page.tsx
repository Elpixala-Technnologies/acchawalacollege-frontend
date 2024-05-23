import React from "react";
import { courseListingPage } from "@/data/courseData";
import HeroSection from "@/components/coursesListingPageSections/heroSection/HeroSection";
import Section10 from "@/components/Section10";
import AboutCardSection from "@/components/coursesListingPageSections/aboutCardSection/AboutCardSection";

export default function courses() {
  return (
    <section className="w-full">
      <HeroSection data={courseListingPage?.MBA?.homeBanner} />
      <Section10 data={courseListingPage?.MBA?.brochureSection} />
      <AboutCardSection data={courseListingPage?.MBA?.about} />
    </section>
  );
}
