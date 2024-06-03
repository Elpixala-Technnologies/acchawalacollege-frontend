import BannerSection from '@/components/studyAbroadPageSections/bannerSection/BannerSection';
import Section2 from '@/components/studyAbroadPageSections/section2/Section2';
import TopColleges from '@/components/topColleges/TopColleges';
import { global } from "@/data/globalData";
import React from 'react'
import { studyAbroadData } from '@/data/studyAbroadPage';
import Section3 from '@/components/studyAbroadPageSections/section3/Section3';
import Section4 from '@/components/studyAbroadPageSections/section4/Section4';
import Section5 from '@/components/studyAbroadPageSections/section5/Section5';
import BlogAndOthersFilterSection from '@/components/homePageSections/blogAndOthersFilterSection/BlogAndOthersFilterSection';
import Section6 from '@/components/studyAbroadPageSections/section6/Section6';
import CounsellingPackages from '@/components/homePageSections/counsellingPackages/CounsellingPackages';
import AreYouConfused from '@/components/AreYouConfused';
import DiscoverTopColleges from '@/components/studyAbroadPageSections/discoverTopColleges/DiscoverTopColleges';
import TopCourses from '@/components/topCourses/TopCourses';


export default function StudyAbroad() {
  return (
    <>
      <BannerSection data={studyAbroadData?.homeBanner} />
      <Section2 data={studyAbroadData?.section2} />
      <DiscoverTopColleges data={studyAbroadData.topAbroadColleges} />
      {/* <TopColleges data={global?.topColleges} /> */}
      <Section3 data={studyAbroadData?.scheduleCounsellingBanner} />
      <TopCourses data={global?.topCourses} />
      <Section4 data={studyAbroadData?.section4} />
      <Section5 data={studyAbroadData?.brochureSection} />
      <BlogAndOthersFilterSection data={global?.BlogsAndOthers} />
      <Section6 data={studyAbroadData?.Section5} />
      <CounsellingPackages data={studyAbroadData?.counsellingPackages} />
      <AreYouConfused />
    </>
  );
}
