"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
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
import {
  GET_HOME_PAGE,
  // GET_BLOGS,
  // GET_COLLEGES,
  // GET_COLLEGES_BY_ID,
  GET_COUNSELLING_PACKAGES,
  // GET_COURSES,
  // GET_EXAMS,
  // GET_EXAMS_LEVEL,
  // GET_EXAM_BY_ID,
  // GET_FEATURED_EXAMS,
  GET_PARTNERS,
  // GET_TOP_COLLEGES
} from "@/query/schema";
import { flattenAttributes } from "@/utils/flattenAttributes";

export default function Home() {
  // const { data: BlogsData } = useQuery(GET_BLOGS);
  // const { data: CoursesData } = useQuery(GET_COURSES);
  // const { data: CollegesData } = useQuery(GET_COLLEGES);
  // const { data: TopCollegesData } = useQuery(GET_TOP_COLLEGES);
  // const collegeId = 2;
  // const { data: CollegesDatabyId } = useQuery(GET_COLLEGES_BY_ID, {
  //   variables: { collegeId },
  // });
  // const { data: ExamsData } = useQuery(GET_EXAMS);
  // const { data: ExamsLevelData } = useQuery(GET_EXAMS_LEVEL);
  // const examId = 1;
  // const { data: ExamDatabyId } = useQuery(GET_EXAM_BY_ID, {
  //   variables: { examId },
  // });
  // const { data: FeaturedExamsData } = useQuery(GET_FEATURED_EXAMS);

  // HOME DATA FETCHING
  const [homeData, setHomeData] = useState<any>(null);
  const [homePartnersData, setHomePartnersData] = useState<any>(null);
  const [counsellingPackagesData, setCounsellingPackagesData] = useState<any>( )

  const {
    data: homePageData,
    loading: HomePageLoader,
    error: homePageError,
  } = useQuery(GET_HOME_PAGE);

  useEffect(() => {
    if (homePageData) {
      setHomeData(flattenAttributes(homePageData?.heroSections?.data?.[0]));
    }
  }, [homePageData]);

  // SPONSORS DATA FETCHING
  const {
    data: partnersData,
    loading: PartnersLoader,
    error: partnersError,
  } = useQuery(GET_PARTNERS);

  useEffect(() => {
    if (partnersData) {
      setHomePartnersData(
        flattenAttributes(
          partnersData?.heroSections?.data[0]?.attributes?.partners,
        ),
      );
    }
  }, [partnersData]);

  // COUNSELLING PACKAGES DATA FETCHING
  const {
    data: counsellingPackages,
    loading: CounsellingPackagesLoader,
    error: CounsellingPackagesError,
  } = useQuery(GET_COUNSELLING_PACKAGES);

  useEffect(() => {
    if (counsellingPackages) {
      setCounsellingPackagesData(
        flattenAttributes(
          counsellingPackages?.heroSections?.data[0]?.attributes?.CounsellingPackages,
        ),
      );
    }
  }, [counsellingPackages]);


  if (HomePageLoader || PartnersLoader || CounsellingPackagesLoader) return <p>Loading...</p>;
  if (homePageError) return <p>Error: {homePageError.message}</p>;
  if (partnersError) return <p>Error: {partnersError.message}</p>;

  console.log(counsellingPackagesData, "homeData");

  return (
    <>
      <BannerSection data={home?.homeBanner} sData={homeData?.homebanner} />
      <Section2 data={home?.section2} sData={homeData?.section2} />
      <PartnersSection data={global?.partners} sData={homePartnersData} />
      <BannerSection1 data={home?.banner2} sData={homeData?.banner2} />
      <TopColleges data={global?.topColleges} />
      <TopCourses data={global?.topCourses} />
      <CounsellingPackages data={home?.CounsellingPackages} sData={counsellingPackagesData} />
      <Section6 data={home?.banner1} sData={homeData?.banner1} />
      <BlogAndOthersFilterSection data={global?.BlogsAndOthers} />
      <Testimonials data={global?.testimonialsSection} />
    </>
  );
}
