//src/app/page.tsx
"use client";
import BannerSection from "@/components/homePageSections/bannerSection/BannerSection";
import CounsellingPackages from "@/components/homePageSections/counsellingPackages/CounsellingPackages";
import TopColleges from "@/components/homePageSections/topColleges/TopColleges";
import BlogAndOthersFilterSection from "@/components/homePageSections/blogAndOthersFilterSection/BlogAndOthersFilterSection";
import PartnersSection from "@/components/homePageSections/partnersSection/PartnersSection";
import Section2 from "@/components/homePageSections/section2/Section2";
import Testimonials from "@/components/homePageSections/testimonials/testimonials";
import { useQuery } from "@apollo/client";
import{ GET_BLOGS, GET_COLLEGES, GET_COURSES, GET_EXAMS, GET_EXAMS_LEVEL } from "@/query/schema";

export default function Home() {

const {
  data: BlogsData,
} = useQuery(GET_BLOGS);
  
const {
  data: CollegesData,
} = useQuery(GET_COLLEGES);


const {
  data: CoursesData,
} = useQuery(GET_COURSES);

const {
  data: ExamsData,
} = useQuery(GET_EXAMS);

const {
  data: ExamsLevelData,
} = useQuery(GET_EXAMS_LEVEL);

console.log("BlogsData:", BlogsData);
console.log("CollegesData:", CollegesData);
console.log("ExamsData:", ExamsData);
console.log("ExamsLevelData:", ExamsLevelData);
console.log("CoursesData:", CoursesData);


  return (
    <>
      <BannerSection />
      <Section2 />
      <PartnersSection />
      <TopColleges />
      <CounsellingPackages />
      <BlogAndOthersFilterSection />
      <Testimonials />
      </>
  );
}
