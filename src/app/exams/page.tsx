import CollegeListSection from "@/components/collegesListingPageSections/collegeListSection/CollegeListSection";
import HeroSection from "@/components/collegesListingPageSections/heroSection/HeroSection";
import React from "react";
import ExamListSection from "@/components/examsListingPageSections/examListSection/ExamListSection";
import BannerSection from "@/components/examsListingPageSections/HeroSection";
import { examsListingPage } from "@/data/examBannerData";


export default function exams() {
    return (
        <main className="mx-auto w-full bg-white">
            <section className='w-full'>
                <BannerSection data={examsListingPage?.homeBanner} />
                <ExamListSection />
            </section>
        </main>
    );
}
