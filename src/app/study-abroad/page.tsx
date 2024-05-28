import BannerSection from '@/components/studyAbroadPageSections/bannerSection/BannerSection';
import Section2 from '@/components/studyAbroadPageSections/section2/Section2';
import TopColleges from '@/components/topColleges/TopColleges';
import { global } from "@/data/globalData";
import React from 'react'
import TopCourses from '@/components/homePageSections/topCourses/TopCourses';
import { studyAbroadData } from '@/data/studyAbroadPage';
import Section3 from '@/components/studyAbroadPageSections/section3/Section3';
import Section4 from '@/components/studyAbroadPageSections/section4/Section4';

export default function StudyAbroad() {
  return (
    <>
      <BannerSection data={studyAbroadData?.homeBanner} />
      <Section2 data={studyAbroadData?.section2} />
      <TopColleges data={global?.topColleges} />
      <Section3 data={studyAbroadData?.scheduleCounsellingBanner} />
      <TopCourses data={global?.topCourses} />
      <Section4 data={studyAbroadData?.section4} />
    </>
  );
}
