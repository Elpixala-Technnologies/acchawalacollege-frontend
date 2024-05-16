import Section3 from "@/components/homePageSections/section3/Section3";
import Image from "next/image";
import CounsellingPackages from "@/components/homePageSections/counsellingPackages/CounsellingPackages";
import Testimonials from "@/components/homePageSections/testimonials/testimonials";
import PartnerBanner from "@/components/homePageSections/PartnerBanner";

export default function Home() {
  return (
    <>
      <Section3 />
      <PartnerBanner />
      <CounsellingPackages />
      <Testimonials />
    </>
  );
}
