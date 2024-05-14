import Section3 from "@/components/homePageSections/section3/Section3";
import CounsellingPackages from "@/components/homePageSections/counsellingPackages/CounsellingPackages";
import TopColleges from "@/components/homePageSections/topColleges/TopColleges";
import BlogAndOthersFilterSection from "@/components/homePageSections/blogAndOthersFilterSection/BlogAndOthersFilterSection";
import PartnersSection from "@/components/homePageSections/partnersSection/PartnersSection";

export default function Home() {
  return (
    <main className="w-full mx-auto bg-white">
      <Section3 />
      <TopColleges />
      <CounsellingPackages />
      <BlogAndOthersFilterSection />
      <PartnersSection />
    </main>
  );
}
