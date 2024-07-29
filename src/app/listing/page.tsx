import React from "react";
import CourseCard from "@/components/listing-cards/CourseCard";
import Wrapper from "@/components/Wrapper";
import CourseImg from "@/asset/listing/courseImg.png";
import CareerCard from "@/components/listing-cards/CareerCard";
import CareerImg from "@/asset/listing/career.png";
import CountryCard from "@/components/listing-cards/CountryCard";
import CountryImg from "@/asset/listing/countryImg.jpeg";
import FlagImg from "@/asset/listing/flag.png";
import mit from "@/asset/listing/mit.jpeg";
import ucc from "@/asset/listing/ucc.png";
import scholarship from "@/asset/listing/scholar.png";
import ScholarshipCard from "@/components/listing-cards/ScholarshipCard";

// data for course card
const courseData = {
  img: CourseImg,
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

// data for career card
const careerData = {
  img: CareerImg,
  titleBg: "53, 73, 0", // in RGB format
  education: "Bachelor’s, Masters (Agriculture, Biology, Microbiology)",
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

// data for country Card
const countryData = {
  img: CountryImg,
  flag: FlagImg,
  location: "Europe",
  name: "United State of America  (USA)",
  desc: "Explore new horizons with a study abroad experience. Immerse yourself in a different culture, broaden your perspective, and gain valuable skills for your future. Explore new horizons with a study abroad experience. Immerse yourself in a different culture, broaden your perspective, and gain valuable skills for your future.",
  lang: "English",
  avgLivingCost: [40, 60],
  rank: "QS Top 10",
  viewAll: "#", //link
  topUniversities: [
    {
      img: mit,
      title: "Massachusetts Institute of Technology (MIT)",
    },
    {
      img: mit,
      title: "Harvard University",
    },
  ],
  button: { text: "Explore Programs in USA" },
};

// data for scholarship card
const scholarshipData = [
  {
    img: scholarship,
    uccImg: ucc,
    imgText:
      "Conducted By : University College Cork [UCC] and Government of Ireland",
    title: "UCC Ireland Meritorious Scholarship for Indian Students",
    eligiblity: "International Student (Yes)",
    type: "Merit-Based",
    numberOfSchol: 150,
    ammount: 28961,
    degree: "(Doctorate Degree)",
    button1: { text: "Apply Now" },
    button2: { text: "Get Alert" },
  },
  {
    img: scholarship,
    uccImg: ucc,
    imgText:
      "Conducted By : University College Cork [UCC] and Government of Ireland",
    title: "UCC Ireland Meritorious Scholarship for Indian Students",
    eligiblity: "International Student (Yes)",
    type: "Merit-Based",
    numberOfSchol: 150,
    ammount: 28961,
    degree: "(Doctorate Degree)",
    button1: { text: "Apply Now" },
    button2: { text: "Get Alert" },
  }
];

function page() {
  return (
    <>
      <Wrapper>
        <div className="w-full sm:flex">
          {/* filter */}
          <div className=" w-full sm:w-1/4">filter</div>
          {/* cards go here  */}
          <div className=" w-full gap-y-5 sm:w-3/4">
            <CourseCard course={courseData} />
            <CareerCard career={careerData} />
            <CountryCard country={countryData} />
            <div className="flex flex-wrap justify-center gap-6 my-4">
              {scholarshipData.map((data, index) => (
                <ScholarshipCard key={index} data={data} />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
export default page;
