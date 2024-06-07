import AreYouConfused from "@/components/AreYouConfused";
import Section2 from "@/components/section2/Section2";
import BannerSection from "@/components/studyAbroadPageSections/bannerSection/BannerSection";
import Section6 from "@/components/studyAbroadPageSections/section6/Section6";
import TopCourses from "@/components/topCourses/TopCourses";
import {studyAbroadData} from "@/data/studyAbroadPageData";
import { global } from "@/data/globalData";
import BlogAndOthersFilterSection from "@/components/homePageSections/blogAndOthersFilterSection/BlogAndOthersFilterSection";
import CounsellingPackages from "@/components/homePageSections/counsellingPackages/CounsellingPackages";
import Section10 from "@/components/Section10";
import UpcomingExams from "@/components/upcomingExams/upcomingExams";
export default function StudyAbroad() {
  return (
    <>
      <BannerSection data={studyAbroadData?.homeBanner} />
       <Section2 data={studyAbroadData?.section2} />
       <Section6 data={studyAbroadData?.banner1} />
       <TopCourses data={global?.topCourses} />
       <BlogAndOthersFilterSection data={global?.BlogsAndOthers} />
       <CounsellingPackages data={studyAbroadData?.counsellingPackages} />
       <Section10 data={studyAbroadData?.brochureSection} />
       <UpcomingExams data={studyAbroadData?.upcomingExams} />
      {/*<DiscoverTopColleges data={studyAbroadData.topAbroadColleges} />
      <Section3 data={studyAbroadData?.scheduleCounsellingBanner} />
      <Section4 data={studyAbroadData?.section4} />
      <Section5 data={studyAbroadData?.brochureSection} />
      <Section6 data={studyAbroadData?.Section5} />
       */}
      <AreYouConfused />
    </>
  );
}