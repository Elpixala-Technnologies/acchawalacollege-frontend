"use client";
import BannerSection from "@/components/homePageSections/bannerSection/BannerSection";
import CounsellingPackages from "@/components/homePageSections/counsellingPackages/CounsellingPackages";
import TopColleges from "@/components/topColleges/TopColleges";
import BlogAndOthersFilterSection from "@/components/homePageSections/blogAndOthersFilterSection/BlogAndOthersFilterSection";
import PartnersSection from "@/components/homePageSections/partnersSection/PartnersSection";
import Section2 from "@/components/section2/Section2";
import Section6 from "@/components/homePageSections/section6/Section6";
import TopCourses from "@/components/topCourses/TopCourses";
import Testimonials from "@/components/testimonials/Testimonials";
import { home } from "@/data/homePage";
import { global } from "@/data/globalData";
import BannerSection1 from "@/components/homePageSections/bannerSection/BannerSection1";
import { useQuery } from "@apollo/client";
import {
  GET_BLOGS,
  GET_COLLEGES,
  GET_COLLEGES_BY_ID,
  GET_COUNSELLING_PACKAGES,
  GET_COURSES,
  GET_EXAMS,
  GET_EXAMS_LEVEL,
  GET_EXAM_BY_ID,
  GET_FEATURED_EXAMS,
  GET_HOME_PAGE,
  GET_PARTNERS,
  GET_TOP_COLLEGES,
} from "@/query/schema";
import { flattenAttributes } from "@/utils/flattenAttributes";

export default function Home() {
  
  const { data: BlogsData } = useQuery(GET_BLOGS);

  const { data: CoursesData } = useQuery(GET_COURSES);

  const { data: homePageData, loading: HomePageLoader, error: homePageError, } = useQuery(GET_HOME_PAGE);

  const { data: partnersData } = useQuery(GET_PARTNERS);
  const { data: counsellingPackagesData } = useQuery(GET_COUNSELLING_PACKAGES);

  const { data: CollegesData } = useQuery(GET_COLLEGES);

  const { data: TopCollegesData } = useQuery(GET_TOP_COLLEGES);

  const collegeId = 2;

  const { data: CollegesDatabyId } = useQuery(GET_COLLEGES_BY_ID, {
    variables: { collegeId },
  });

  const { data: ExamsData } = useQuery(GET_EXAMS);

  const { data: ExamsLevelData } = useQuery(GET_EXAMS_LEVEL);

  const examId = 1;

  const { data: ExamDatabyId } = useQuery(GET_EXAM_BY_ID, {
    variables: { examId },
  });

  const { data: FeaturedExamsData } = useQuery(GET_FEATURED_EXAMS);

  // console.log("BlogsData: ", BlogsData);

  // console.log("CoursesData: ", CoursesData);

  // console.log("homePageData: ", homePageData);
  // console.log("partnersData: ", partnersData);
  // console.log("counsellingPackagesData: ", counsellingPackagesData);
  
  
  // console.log("CollegesData: ", CollegesData);
  // console.log("TopCollegesData: ", TopCollegesData);
  // console.log("CollegesDatabyId: ", CollegesDatabyId);

  // console.log("ExamsData: ", ExamsData);
  // console.log("ExamsLevelData: ", ExamsLevelData);
  // console.log("ExamDatabyId: ", ExamDatabyId);
  // console.log("FeaturedExamsData: ", FeaturedExamsData);

  const homeData = flattenAttributes(homePageData?.heroSections?.data?.[0]);
  console.log(homeData?.section2, "home");

  return (
    <>
      <BannerSection data={home?.homeBanner} sData={homeData?.homebanner} />
      <Section2 data={home?.section2} sData={homeData?.section2} />
      <PartnersSection data={global?.partners} />
      <BannerSection1 data={home?.banner2} />
      <TopColleges data={global?.topColleges} />
      <TopCourses data={global?.topCourses} />
      <CounsellingPackages data={home?.CounsellingPackages} />
      <Section6 data={home?.banner1} />
      <BlogAndOthersFilterSection data={global?.BlogsAndOthers} />
      <Testimonials data={global?.testimonialsSection} />
    </>
  );
}
