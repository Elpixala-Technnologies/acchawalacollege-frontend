import React from "react";
import CourseCard from "@/components/listing-cards/CourseCard";
import Wrapper from "@/components/Wrapper";
import CourseImg from '@/asset/listing/courseImg.png'
import ScholarshipCard from "@/components/listing-cards/CareerCard"
import ScholarshipImg from "@/asset/listing/scholarshipImg.png"
import CountryCard from "@/components/listing-cards/CountryCard";
import CountryImg from "@/asset/listing/countryImg.jpeg"
import FlagImg from "@/asset/listing/flag.png"
import mit from "@/asset/listing/mit.jpeg"
import mitt from "next/dist/shared/lib/mitt";
const courseData = {
  img:CourseImg,
  rating: 4.5,
  reviews: 7,
  state: "Tamil Nadu",
  city: "Chennai",
  courseType: "Govt",
  avgFeePerYear: 1.2,
  package: 10,
  exam: "Exam",
  desc: "The Indian Institute of Technology Madras is known both nationally and internationally for excellence in technical education, basic and applied research, innovation, entrepreneurship and industrial consultancy.",
  name: "Bachelor of Technology [B.Tech] (Computer Science and Engineering)",
  readMore: "#",
  navbar: [
    "Dates",
    "Admission",
    "Placement",
    "Courses",
    "Cut Off",
    "Facilities",
  ],
  button1: { text: "Apply Now" },
  button2: { text: "Contact Us" },
};

const careerData = {
  img:ScholarshipImg,
  titleBg:"53, 73, 0", // in RGB format
  education:"Bachelor’s, Masters (Agriculture, Biology, Microbiology)",
  package: 16.5,
  skills: "Creativity, Empathy",
  desc: "The agriculture, food and natural resources industries have a huge impact on our daily lives. Without them, what would we eat or how would we know whether our drinking water is safe? These fields involve the production, processing, marketing, financing, distribution and development of agricultural commodities and resources, including food, fibres, wood products, natural resources, horticulture and other plant and animal products.",
  name: "Agriculture, Food, and Natural Resources",
  readMore: "#",
  navbar: [
    "Dates",
    "Admission",
    "Placement",
    "Courses",
    "Cut Off",
    "Facilities",
  ],
  button1: { text: "Explore More" },
  button2: { text: "Download Brochure" },
};


const countryData = {
  img:CountryImg,
  flag:FlagImg,
  location:"Europe",
  name: "United State of America  (USA)",
  desc: "Explore new horizons with a study abroad experience. Immerse yourself in a different culture, broaden your perspective, and gain valuable skills for your future. Explore new horizons with a study abroad experience. Immerse yourself in a different culture, broaden your perspective, and gain valuable skills for your future.",
  lang:"English",
  avgLivingCost: [40,60],
  rank:"QS Top 10",
  viewAll: "#",  //link
  topUniversities: [
    {
      img: mit,
      title: "Massachusetts Institute of Technology (MIT)"
    },
    {
      img: mit,
      title: "Harvard University"
    }
  ],
  button: { text: "Explore Programs in USA" },
};




function page() {
  return (
    <>
      <Wrapper>
        <div className="w-full sm:flex">
            {/* filter */}
          <div className=" w-full sm:w-1/4">filter</div>
          {/* cards go here  */}
          <div className=" w-full sm:w-3/4 gap-y-5">
            <CourseCard course={courseData} />
            <ScholarshipCard career={careerData}/>
            <CountryCard country ={countryData}/>

          </div>
        </div>
      </Wrapper>
    </>
  );
}
export default page;
