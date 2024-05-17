import Section3 from "@/components/homePageSections/section3/Section3";
import CounsellingPackages from "@/components/homePageSections/counsellingPackages/CounsellingPackages";
import Testimonials from "@/components/homePageSections/testimonials/testimonials";
import PartnerBanner from "@/components/homePageSections/PartnerBanner";
import TopColleges from "@/components/homePageSections/topColleges/TopColleges";
import BlogAndOthersFilterSection from "@/components/homePageSections/blogAndOthersFilterSection/BlogAndOthersFilterSection";
import PartnersSection from "@/components/homePageSections/partnersSection/PartnersSection";

export default function Home() {
  return (
    <>
      <Section3 />
      <TopColleges />
      <PartnerBanner />
      <CounsellingPackages />
      <BlogAndOthersFilterSection />
      <PartnersSection />
      <Testimonials />
    </>
  );
}
