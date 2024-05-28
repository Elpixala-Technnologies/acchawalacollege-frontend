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
import{ GET_BLOGS } from "@/query/schema";

export default function Home() {

//get all BLogs data
const {
  loading,
  error,
  data: BlogsData,
} = useQuery(GET_BLOGS);
  
console.log("BlogsData:", BlogsData);


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
