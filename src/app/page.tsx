import Section3 from "@/components/homePageSections/section3/Section3";
import Image from "next/image";
import CounsellingPackages from "@/components/homePageSections/counsellingPackages/CounsellingPackages";

export default function Home() {
  return (
    <main className="w-full mx-auto bg-white">
      <Section3 />
      <CounsellingPackages />
    </main>
  );
}
