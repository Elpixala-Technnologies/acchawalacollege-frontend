import { ExamBanner, ExamPaper, UpcomingExams1, UpcomingExams2, exam } from "@/asset";
import { CiCalendar, CiStar } from "react-icons/ci";
import { FaUniversity } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineFileDownload, MdOutlineHomeRepairService } from "react-icons/md";

export const dummyExamDataArray = [
  {
    id: 1,
    img: exam,
    name: "Joint Entrance Exam Advanced (JEE Advanced) ",
    link: "#",
    examDate: "26 May 24",
    applicationForm: "26 May 24",
    navbar: [
      "Sample Papers",
      "Eligibility",
      "Application",
      "Results",
      "Cut Off ",
      "Exam Pattern",
      "Preparation Tips",
      // "Answer Key",
      // "Counselling",
      "College Predictor ",
    ],
    button1: {
      text: "Register Now",
      link: "#",
    },
    button2: {
      text: "Gets Updates",
      link: "#",
    },
    button3: {
      text: "Download Brochure",
      link: "#",
    },
  },
  {
    id: 2,
    img: exam,
    name: "Joint Entrance Exam Advanced (JEE Advanced) ",
    link: "#",
    examDate: "26 May 24",
    applicationForm: "26 May 24",
    navbar: [
      "Sample Papers",
      "Eligibility",
      "Application",
      "Results",
      "Cut Off ",
      "Exam Pattern",
      "Preparation Tips",
      // "Answer Key",
      // "Counselling",
      "College Predictor ",
    ],
    button1: {
      text: "Register Now",
      link: "#",
    },
    button2: {
      text: "Gets Updates",
      link: "#",
    },
    button3: {
      text: "Download Brochure",
      link: "#",
    },
  },
  {
    id: 3,
    img: exam,
    name: "Joint Entrance Exam Advanced (JEE Advanced) ",
    link: "#",
    examDate: "26 May 24",
    applicationForm: "26 May 24",
    navbar: [
      "Sample Papers",
      "Eligibility",
      "Application",
      "Results",
      "Cut Off ",
      "Exam Pattern",
      "Preparation Tips",
      // "Answer Key",
      // "Counselling",
      "College Predictor ",
    ],
    button1: {
      text: "Register Now",
      link: "#",
    },
    button2: {
      text: "Gets Updates",
      link: "#",
    },
    button3: {
      text: "Download Brochure",
      link: "#",
    },
  },
  {
    id: 4,
    img: exam,
    name: "Joint Entrance Exam Advanced (JEE Advanced) ",
    link: "#",
    examDate: "26 May 24",
    applicationForm: "26 May 24",
    navbar: [
      "Sample Papers",
      "Eligibility",
      "Application",
      "Results",
      "Cut Off ",
      "Exam Pattern",
      "Preparation Tips",
      // "Answer Key",
      // "Counselling",
      "College Predictor ",
    ],
    button1: {
      text: "Register Now",
      link: "#",
    },
    button2: {
      text: "Gets Updates",
      link: "#",
    },
    button3: {
      text: "Download Brochure",
      link: "#",
    },
  },
  {
    id: 5,
    img: exam,
    name: "Joint Entrance Exam Advanced (JEE Advanced) ",
    link: "#",
    examDate: "26 May 24",
    applicationForm: "26 May 24",
    navbar: [
      "Sample Papers",
      "Eligibility",
      "Application",
      "Results",
      "Cut Off ",
      "Exam Pattern",
      "Preparation Tips",
      // "Answer Key",
      // "Counselling",
      "College Predictor ",
    ],
    button1: {
      text: "Register Now",
      link: "#",
    },
    button2: {
      text: "Gets Updates",
      link: "#",
    },
    button3: {
      text: "Download Brochure",
      link: "#",
    },
  },

];

export const topExams = {
  title: {
    t1: "Upcoming",
    t2: "Exams",
  },
  exams: [
    {
      id: 1,
      examName: "Joint Entrance Examination Advanced",
      icon: <FaUniversity />,
      img: UpcomingExams1,
      examParticipating: {
        name: "Students Participating",
        icon: <FaCircleUser />,
        value: "63,73,884"
      },
      examDate: {
        name: "Registration Date",
        icon: <CiCalendar />,
        value: "6th May, 2024"
      },
      examLevel: {
        name: "Exam Level",
        icon: <CiStar />,
        value: "National"
      },
      button1: {
        icon: "",
        text: "Apply Now",
        href: "#",
      },
      button2: {
        icon: <MdOutlineFileDownload />,
        text: "Syllabus",
        href: "#",
      },
    },
    {
      id: 2,
      examName: "Birla Institute of Technology and Scien....",
      icon: <FaUniversity />,
      img: UpcomingExams2,
      examParticipating: {
        name: "Students Participating",
        icon: <FaCircleUser />,
        value: "63,73,884"
      },
      examDate: {
        name: "Registration Date",
        icon: <CiCalendar />,
        value: "6th May, 2024"
      },
      examLevel: {
        name: "Exam Level",
        icon: <CiStar />,
        value: "National"
      },
      button1: {
        icon: "",
        text: "Apply Now",
        href: "#",
      },
      button2: {
        icon: <MdOutlineFileDownload />,
        text: "Syllabus",
        href: "#",
      },
    },
    {
      id: 3,
      examName: "Birla Institute of Technology and Scien....",
      icon: <FaUniversity />,
      img: UpcomingExams1,
      examParticipating: {
        name: "Students Participating",
        icon: <FaCircleUser />,
        value: "63,73,884"
      },
      examDate: {
        name: "Registration Date",
        icon: <CiCalendar />,
        value: "6th May, 2024"
      },
      examLevel: {
        name: "Exam Level",
        icon: <CiStar />,
        value: "National"
      },
      button1: {
        icon: "",
        text: "Apply Now",
        href: "#",
      },
      button2: {
        icon: <MdOutlineFileDownload />,
        text: "Syllabus",
        href: "#",
      },
    },
    {
      id: 4,
      stream: "MBA",
      examName: "upGrad Tech",
      icon: <FaUniversity />,
      img: UpcomingExams1,
      examParticipating: {
        name: "Students Participating",
        icon: <FaCircleUser />,
        value: "63,73,884"
      },
      examDate: {
        name: "Registration Date",
        icon: <CiCalendar />,
        value: "6th May, 2024"
      },
      examLevel: {
        name: "Exam Level",
        icon: <CiStar />,
        value: "National"
      },
      button1: {
        icon: "",
        text: "Apply Now",
        href: "#",
      },
      button2: {
        icon: <MdOutlineFileDownload />,
        text: "Syllabus",
        href: "#",
      },
    },
  ],
};

export const previousYearSection = {
  title: {
    t1: "Top JEE Main",
    t2: "Previous Year Paper",
  },
  examPreviousYearPaper: [
    {
      id: 1,
      img: ExamPaper,
      examPaperName1: "JEE Main 2024 Mathematics",
      examPaperName2: "Question Paper April 8 Shift 1",
    },
    {
      id: 2,
      img: ExamPaper,
      examPaperName1: "JEE Main 2024 Chemistry",
      examPaperName2: "Question Paper April 8 Shift 1",
    },
    {
      id: 3,
      img: ExamPaper,
      examPaperName1: "JEE Main 2024 Physics",
      examPaperName2: "Question Paper April 8 Shift 1",
    },
    {
      id: 4,
      img: ExamPaper,
      examPaperName1: "JEE Main 2024 Biology",
      examPaperName2: "Question Paper April 8 Shift 1",
    },
  ]
}
// export const bannerSection = {
//   title: {
//     t1: "Top Engineering Colleges",
//     t2: "in India",
//     t3: "2024",
//   },
//   author: {
//     avatar: user1,
//     name: "Pankaj Kumar",
//     lastUpdated: "MAR 21, 2024 18:39 IST",
//   },
//   article:
//     "<p><strong>Indian Institute of Technologies, National Institute or Technologies and Indian Institutes or Information Technology</strong> are considered to be the best Engineering Colleges in India. Engineering is likewise one of the most logically predominant fields of choice in India. Pretty much every science student has a fantasy to turn into a successful engineer. However, It is not easy for engineering aspirants to select the right engineering college in India. Here Is the following information regarding the Top Engineering Colleges in India for engineering aspirants...</p>",
//   readMoreLink: "#",
// };
