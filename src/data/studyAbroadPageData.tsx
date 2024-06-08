import {
  Student,
  Certificate,
  GraduationCap,
  section6Bg,
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  s7,
  s8,
  s9,
  s10,
  abroadLanding1,
  abroadLanding2,
  abroadLanding3,
  banner2,
  // successStories2,
  // successStories1,
  // successStories3,
  p1,
  // assistanceFrom,
  c1,
  c2,
  c4,
  c3,
  c5,
  c6,
  c7,
  c8,
  exam1,
  abroad3,
  abroad2,
  au3,
  au2,
  au1,
} from "@/asset";
import { TbRuler2Off } from "react-icons/tb";

export const studyAbroadData = {
  homeBanner: {
    title: {
      t1: "Embark on",
      t2: "Your Global",
      t3: "Education Journey",
    },
    text1:
      "Explore Top Universities Worldwide and Transform Your \nFuture with Expert Guidance",
    button1: {
      text: "Explore Colleges",
      href: "#",
    },
    button2: {
      text: "Schedule Counselling",
      href: "#",
    },
    img: [abroadLanding1, abroadLanding2, abroadLanding3],
    text2: "Get 30% off on every \n  1st month",
    text3: "Expert Counsellors",
  },

  section2: {
    card1: {
      icon: Certificate,
      title: "2,300+",
      text: "Admissions done",
    },
    card2: {
      icon: Student,
      title: "6,200+",
      text: "Fulfilled dreams",
    },
    card3: {
      icon: GraduationCap,
      title: "5,100+",
      text: "Counselling sessions ",
    },
  },
  partners: {
    title: "Our Knowledge Partners",
    images: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10],
  },
  brochureSection: {
    text: "Discover courses tailored to your aspirations and unlock endless \nopportunities for growth and success.",
    buttons: {
      button1: {
        text: "Download Brochure",
        href: "#",
      },
    },
  },
  topAbroadColleges: {
    title: {
      t1: "",
      t2: "Discover",
      t3: "Top Colleges",
    },
    colleges: [
      {
        id: 1,
        bgImage: c1,
        collegeName: "University of Cambridge",
        location: {
          state: "Tamil Nadu",
          city: "England",
          country: "England",
        },
        overallRating: "4.5",
        reviews: "2.3k reviews",
        priceRange: "$20,000 to $50,000",
        distanceFromAirport: "5.8",
      },
      {
        id: 2,
        bgImage: c2,
        collegeName: "University of Oxford",
        location: {
          state: "Tamil Nadu",
          city: "England",
        },
        overallRating: "4.5",
        reviews: "2.3k reviews",
        priceRange: "$20,000 to $50,000",
        distanceFromAirport: "5.8",
      },
      {
        id: 3,
        bgImage: c3,
        collegeName: "University of Massachusetts",
        location: {
          state: "Tamil Nadu",
          city: "England",
        },
        overallRating: "4.5",
        reviews: "2.3k reviews",
        priceRange: "$20,000 to $50,000",
        distanceFromAirport: "5.8",
      },
      {
        id: 4,
        bgImage: c5,
        collegeName: "University of California",
        location: {
          state: "Tamil Nadu",
          city: "England",
        },
        overallRating: "4.5",
        reviews: "2.3k reviews",
        priceRange: "$20,000 to $50,000",
        distanceFromAirport: "5.8",
      },
      {
        id: 5,
        bgImage: c5,
        collegeName: "University of Cambridge",
        location: {
          state: "Tamil Nadu",
          city: "England",
        },
        overallRating: "4.5",
        reviews: "2.3k reviews",
        priceRange: "$20,000 to $50,000",
        distanceFromAirport: "5.8",
      },
      {
        id: 6,
        bgImage: c1,
        collegeName: "University of Oxford",
        location: {
          state: "Tamil Nadu",
          city: "England",
        },
        overallRating: "4.5",
        reviews: "2.3k reviews",
        priceRange: "$20,000 to $50,000",
        distanceFromAirport: "5.8",
      },
      {
        id: 7,
        bgImage: c2,
        collegeName: "University of Massachusetts",
        location: {
          state: "Tamil Nadu",
          city: "England",
        },
        overallRating: "4.5",
        reviews: "2.3k reviews",
        priceRange: "$20,000 to $50,000",
        distanceFromAirport: "5.8",
      },
      {
        id: 8,
        bgImage: c2,
        collegeName: "University of California",
        location: {
          state: "Tamil Nadu",
          city: "England",
        },
        overallRating: "4.5",
        reviews: "2.3k reviews",
        priceRange: "$20,000 to $50,000",
        distanceFromAirport: "5.8",
      },
    ],
  },
  banner2: {
    title: {
      t1: "Growth and",
      t2: "Success Stories",
    },
    text:
      "Discover how our guidance has empowered students to achieve their dreams abroad.",
    text1:
      "Raj transformed his aspirations into reality by securing <br> admission to  MIT. With our  personalized guidance, he <br> navigated the  complexities of studying abroad and <br> achieved his dream",
    button1: {
      text: "Read More",
      href: "#",
    },
    img: [abroad2, abroad3],
    reviews: {
      userAvatars: [au1,au2,au3],
      text1: "50K+",
      text2: "Students",
    },

    card1: {
      t1: "35+",
      t2: "Course",
    },
    card2: {
      t1: "56+",
      t2: "Startups",
    },
    card3: {
      t1: "100+",
      t2: "Language",
    },
    card4: {
      t1: "150+",
      t2: "Professors",
    },
  },
  // Admission Process and Assistance
  banner3: {
    title: {
      t1: "Student Admission",
      t2: "Process and",
      t3: "Assistance from us",
    },
    text: "Comprehensive Guidance and Support for a Seamless Admission Process to Your Dream University",
    button: {
      text: "See all our admission",
      href: "#",
    },
    img: abroad3,
    steps: [
      "Fill The Acchawalacollege End to End Form",
      "Our Expert Counsellor will Contact you",
      "Select The Right Counselling Package",
      "Shortlist Colleges And Fill Application Forms",
      "Upload Documents & Pay Fee",
      "Confirm Admission and Claim Gift",
    ],
  },
  banner1: {
    title:
      "Embark on Your Career Journey Today! Connect \n with Our Expert Counseling Team Now.",
    text1: "Navigate the Path to Success with Our Support",
    button: {
      text: "Schedule  Counselling",
      href: "#",
    },
    bgImg: section6Bg,
  },
  counsellingPackages: {
    title: "Counselling Packages",
    CounsellingPackagesCards: [
      {
        id: 1,
        icon: p1,
        PackageName: "Silver Package",
        isPopular: false,
        price: 11000,
        text1: "Essential guidance to kickstart \nyour journey",
        list: [
          {
            isInclude: true,
            text: "Personal Counsellor",
          },
          {
            isInclude: true,
            text: "Admission Procedure",
          },
          {
            isInclude: true,
            text: "Lowest Package Seats",
          },
          {
            isInclude: true,
            text: "Budget Based Counselling",
          },
          {
            isInclude: true,
            text: "Detailed College Description",
          },
          {
            isInclude: false,
            text: "Premium College Counseling",
          },
          {
            isInclude: false,
            text: "24x7 Availability via Messaging",
          },
          {
            isInclude: false,
            text: "24x7 Availability via Calling",
          },
          {
            isInclude: false,
            text: "MCI/NTA Updates",
          },
          {
            isInclude: false,
            text: "College Based Analysis",
          },
          {
            isInclude: false,
            text: "Score Based Analysis",
          },
          {
            isInclude: false,
            text: "Management Quota Counseling",
          },
          {
            isInclude: false,
            text: "Fees Negotiation",
          },
        ],
        button: {
          text: "Get Started",
          href: "#",
        },
        styling: {
          border: "border-zinc-300",
          tagBg: "from-zinc-400 to-white",
        },
      },
      {
        id: 2,
        icon: p1,
        PackageName: "Gold Package",
        // isPopular: TbRuler2Off,
        price: 25000,
        text1: "Comprehensive support tailored \nto your ambitions",
        list: [
          {
            isInclude: true,
            text: "Personal Counsellor",
          },
          {
            isInclude: true,
            text: "Admission Procedure",
          },
          {
            isInclude: true,
            text: "Lowest Package Seats",
          },
          {
            isInclude: true,
            text: "Budget Based Counselling",
          },
          {
            isInclude: true,
            text: "Detailed College Description",
          },
          {
            isInclude: true,
            text: "Premium College Counseling",
          },
          {
            isInclude: true,
            text: "24x7 Availability via Messaging",
          },
          {
            isInclude: false,
            text: "24x7 Availability via Calling",
          },
          {
            isInclude: false,
            text: "MCI/NTA Updates",
          },
          {
            isInclude: false,
            text: "College Based Analysis",
          },
          {
            isInclude: false,
            text: "Score Based Analysis",
          },
          {
            isInclude: false,
            text: "Management Quota Counseling",
          },
          {
            isInclude: false,
            text: "Fees Negotiation",
          },
        ],
        button: {
          text: "Get Started",
          href: "#",
        },
        styling: {
          border: "border-orange-300",
          tagBg: "from-orange-400 to-white",
        },
      },
      {
        id: 3,
        icon: p1,
        PackageName: "Diamond Package",
        isPopular: false,
        price: 55000,
        text1: "Unmatched assistance for your \nacademic aspirations",
        list: [
          {
            isInclude: true,
            text: "Personal Counsellor",
          },
          {
            isInclude: true,
            text: "Admission Procedure",
          },
          {
            isInclude: true,
            text: "Lowest Package Seats",
          },
          {
            isInclude: true,
            text: "Budget Based Counselling",
          },
          {
            isInclude: true,
            text: "Detailed College Description",
          },
          {
            isInclude: true,
            text: "Premium College Counseling",
          },
          {
            isInclude: true,
            text: "24x7 Availability via Messaging",
          },
          {
            isInclude: false,
            text: "24x7 Availability via Calling",
          },
          {
            isInclude: false,
            text: "MCI/NTA Updates",
          },
          {
            isInclude: false,
            text: "College Based Analysis",
          },
          {
            isInclude: false,
            text: "Score Based Analysis",
          },
          {
            isInclude: false,
            text: "Management Quota Counseling",
          },
          {
            isInclude: false,
            text: "Fees Negotiation",
          },
        ],
        button: {
          text: "Get Started",
          href: "#",
        },
        styling: {
          border: "border-orange-300",
          tagBg: "from-orange-400 to-white",
        },
      },
    ],
  },
  upcomingExams: {
    title: {
      t1: "Abroad",
      t2: "Upcoming",
      t3: "Exams",
    },
    exams: [
      {
        id: 1,
        img: exam1,
        title: "Joint Entrance Exam Advanced (JEE Advanced)",
        studentsParticipation: "63,73,884",
        slug: "/jee-advanced",
        stream: "Engineering",
        level: ["national", "international"],
        mode: ["offline", "online"],
        category: ["JEE MAIN", "JEE ADVANCED"],
        examDate: "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        applicationFormDate: {
          startDate: "Thu Jan 30 2024 14:42:25 GMT+0530 (India Standard Time)",
          endDate: "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        },
        resultAnnounceDate:
          "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        examDetails: [
          {
            navItem: "overview",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Overview",
            },
          },
          {
            navItem: "sample papers",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Sample Papers",
            },
          },
          {
            navItem: "cutoff",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Cutoff",
            },
          },
          {
            navItem: "eligibility",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Eligibility",
            },
          },
          {
            navItem: "application",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Application",
            },
          },
          {
            navItem: "results",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Results",
            },
          },
          {
            navItem: "Exam Pattern",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Exam Pattern",
            },
          },
          {
            navItem: "Preparation Tips",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Preparation Tips",
            },
          },
          {
            navItem: "Answer Key",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Answer Key",
            },
          },
          {
            navItem: "Counselling",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Counselling",
            },
          },
          {
            navItem: "College Predictor",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "College Predictor",
            },
          },
        ],
        button1: {
          text: "Register Now",
          href: "#",
        },
        button2: {
          text: "Get Updates",
          href: "#",
        },
        button3: {
          text: "Download Brochure",
          href: 1,
        },
      },
      {
        id: 2,
        img: exam1,
        title: "Joint Entrance Exam Advanced (JEE Advanced)",
        slug: "/jee-advanced",
        studentsParticipation: "63,73,884",
        stream: "Engineering",
        level: ["national", "international"],
        mode: ["offline", "online"],
        category: ["JEE MAIN", "JEE ADVANCED"],
        examDate: "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        applicationFormDate: {
          startDate: "Thu Jan 30 2024 14:42:25 GMT+0530 (India Standard Time)",
          endDate: "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        },
        resultAnnounceDate:
          "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        examDetails: [
          {
            navItem: "overview",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Overview",
            },
          },
          {
            navItem: "sample papers",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Sample Papers",
            },
          },
          {
            navItem: "cutoff",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Cutoff",
            },
          },
          {
            navItem: "eligibility",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Eligibility",
            },
          },
          {
            navItem: "application",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Application",
            },
          },
          {
            navItem: "results",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Results",
            },
          },
          {
            navItem: "Exam Pattern",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Exam Pattern",
            },
          },
          {
            navItem: "Preparation Tips",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Preparation Tips",
            },
          },
          {
            navItem: "Answer Key",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Answer Key",
            },
          },
          {
            navItem: "Counselling",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Counselling",
            },
          },
          {
            navItem: "College Predictor",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "College Predictor",
            },
          },
        ],
        button1: {
          text: "Register Now",
          href: "#",
        },
        button2: {
          text: "Get Updates",
          href: "#",
        },
        button3: {
          text: "Download Brochure",
          href: 1,
        },
      },
      {
        id: 3,
        img: exam1,
        title: "Joint Entrance Exam Advanced (JEE Advanced)",
        slug: "/jee-advanced",
        studentsParticipation: "63,73,884",
        stream: "Engineering",
        level: ["national", "international"],
        mode: ["offline", "online"],
        category: ["JEE MAIN", "JEE ADVANCED"],
        examDate: "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        applicationFormDate: {
          startDate: "Thu Jan 30 2024 14:42:25 GMT+0530 (India Standard Time)",
          endDate: "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        },
        resultAnnounceDate:
          "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        examDetails: [
          {
            navItem: "overview",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Overview",
            },
          },
          {
            navItem: "sample papers",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Sample Papers",
            },
          },
          {
            navItem: "cutoff",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Cutoff",
            },
          },
          {
            navItem: "eligibility",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Eligibility",
            },
          },
          {
            navItem: "application",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Application",
            },
          },
          {
            navItem: "results",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Results",
            },
          },
          {
            navItem: "Exam Pattern",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Exam Pattern",
            },
          },
          {
            navItem: "Preparation Tips",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Preparation Tips",
            },
          },
          {
            navItem: "Answer Key",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Answer Key",
            },
          },
          {
            navItem: "Counselling",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Counselling",
            },
          },
          {
            navItem: "College Predictor",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "College Predictor",
            },
          },
        ],
        button1: {
          text: "Register Now",
          href: "#",
        },
        button2: {
          text: "Get Updates",
          href: "#",
        },
        button3: {
          text: "Download Brochure",
          href: "#",
        },
      },
      {
        id: 4,
        img: exam1,
        title: "Joint Entrance Exam Advanced (JEE Advanced)",
        slug: "/jee-advanced",
        studentsParticipation: "63,73,884",
        stream: "Engineering",
        level: ["national", "international"],
        mode: ["offline", "online"],
        category: ["JEE MAIN", "JEE ADVANCED"],
        examDate: "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        applicationFormDate: {
          startDate: "Thu Jan 30 2024 14:42:25 GMT+0530 (India Standard Time)",
          endDate: "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        },
        resultAnnounceDate:
          "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        examDetails: [
          {
            navItem: "overview",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Overview",
            },
          },
          {
            navItem: "sample papers",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Sample Papers",
            },
          },
          {
            navItem: "cutoff",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Cutoff",
            },
          },
          {
            navItem: "eligibility",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Eligibility",
            },
          },
          {
            navItem: "application",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Application",
            },
          },
          {
            navItem: "results",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Results",
            },
          },
          {
            navItem: "Exam Pattern",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Exam Pattern",
            },
          },
          {
            navItem: "Preparation Tips",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Preparation Tips",
            },
          },
          {
            navItem: "Answer Key",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Answer Key",
            },
          },
          {
            navItem: "Counselling",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Counselling",
            },
          },
          {
            navItem: "College Predictor",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "College Predictor",
            },
          },
        ],
        button1: {
          text: "Register Now",
          href: "#",
        },
        button2: {
          text: "Get Updates",
          href: "#",
        },
        button3: {
          text: "Download Brochure",
          href: 1,
        },
      },
    ],
  },
};
