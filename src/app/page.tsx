import BannerSection from "@/components/homePageSections/bannerSection/BannerSection";
import CounsellingPackages from "@/components/homePageSections/counsellingPackages/CounsellingPackages";
import TopColleges from "@/components/homePageSections/topColleges/TopColleges";
import BlogAndOthersFilterSection from "@/components/homePageSections/blogAndOthersFilterSection/BlogAndOthersFilterSection";
import PartnersSection from "@/components/homePageSections/partnersSection/PartnersSection";
import Section2 from "@/components/homePageSections/section2/Section2";
import Testimonials from "@/components/homePageSections/testimonials/Testimonials";
import Section6 from "@/components/homePageSections/section6/Section6";
import TopCourses from "@/components/homePageSections/topCourses/TopCourses";

export default function Home() {
  return (
    <>
      <BannerSection />
      <Section2 />
      <PartnersSection />
      <TopColleges />
      <TopCourses />
      <CounsellingPackages />
      <Section6 />
      <BlogAndOthersFilterSection />
      <Testimonials />
    </>
  );
}
