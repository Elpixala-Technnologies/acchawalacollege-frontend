import {
  logo,
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
  c1,
  b1,
  b2,
  b3,
  user1,
  testimonialBg,
  co1,
  co2,
  co3,
  au1,
  au2,
  au3,
} from "@/asset";
import { CiCalendar, CiStar } from "react-icons/ci";
import { FaUniversity } from "react-icons/fa";
import {
  MdOutlineFileDownload,
  MdOutlineHomeRepairService,
} from "react-icons/md";

export const global = {
  header : {
    logo: logo,
    href: "/",

    navItems: [
      {
        id: 1,
        label: "Colleges",
        href: "/colleges",
        subNav: [
          // {
          //   id: 21,
          //   label: "courses1",
          //   href: "#",
          // },
        ],
      },
      {
        id: 2,
        label: "Courses",
        href: "/courses",
        subNav: [
        ],
      },
      {
        id: 3,
        label: "Exams",
        href: "/exams",
        subNav: [
        ],
      },
      {
        id: 4,
        label: "Study Abroad",
        href: "/study-abroad",
        subNav: [
        ],
      },
      {
        id: 5,
        label: "Latest Updates",
        href: "/latest-updates",
        subNav: [],
      },
      {
        id: 6,
        label: "More",
        href: "/more",
        subNav: [],
      },
    ],
  },
  partners: {
    title: "Our Knowledge Partners",
    images: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10],
  },
  footer : {
    logo: logo,
    newLetterTitle: "Subscribe to Our Newsletter!",
    contactDetails: {
      contactNo: "+1 (999) 888-77-66",
      email: "info@acchawalacollege.com",
      location:
        "#1701, B Tower, World \nTrade Tower, Sector - 16, \nNoida, U.P - 201301",
    },
    socials: {
      facebook: "https://www.facebook.com/acchawalacollege",
      twitter: "https://twitter.com/acchawalacollege",
      instagram: "https://www.instagram.com/acchawalacollege/",
      linkedin: "https://www.linkedin.com/school/acchawalacollege/",
      youtube: "https://www.youtube.com/c/acchawalacollege",
    },
    copyrightText: "Copyrights © 2024 Acchawalacollege. All rights reserved.",
    list1: {
      title: "Quick Links",
      links: [
        {
          id: 1,
          label: "Home",
          href: "/",
        },
        {
          id: 2,
          label: "About",
          href: "/about",
        },
        {
          id: 3,
          label: "Contact Us",
          href: "/contact-us",
        },
        {
          id: 4,
          label: "Work with Us",
          href: "/work-with-us",
        },
        {
          id: 5,
          label: "Testimonials",
          href: "/testimonials",
        },
        {
          id: 6,
          label: "Blogs",
          href: "/blogs",
        },
        {
          id: 7,
          label: "News",
          href: "/news",
        },
      ],
    },
    list2: {
      title: "Useful Links",
      links: [
        {
          id: 1,
          label: "Education Loan",
          href: "/education-loan",
        },
        {
          id: 2,
          label: "Courses",
          href: "/courses",
        },
        {
          id: 3,
          label: "MBBS India",
          href: "/mbbs-india",
        },
        {
          id: 4,
          label: "MBBS Abroad",
          href: "/mbbs-abroad",
        },
        {
          id: 5,
          label: "Top Para Medical Colleges",
          href: "/top-para-medical-colleges",
        },
        {
          id: 6,
          label: "Top MBA Colleges",
          href: "/top-mba-colleges",
        },
        {
          id: 7,
          label: "B.Tech",
          href: "/b-tech",
        },
        {
          id: 8,
          label: "Explore Exams",
          href: "/explore-exams",
        },
      ],
    },
    list3: {
      title: "Pages",
      links: [
        {
          id: 1,
          label: "Application Form",
          href: "/application-form",
        },
        {
          id: 2,
          label: "Counselling Packages",
          href: "/counselling-packages",
        },
        {
          id: 3,
          label: "Study Abroad",
          href: "/study-abroad",
        },
        {
          id: 4,
          label: "Latest Updates",
          href: "/latest-updates",
        },
      ],
    },
  },
  topColleges : {
    title: {
      t1: "Discover",
      t2: "Top Colleges",
    },
    colleges: [
      {
        id: 1,
        stream: "MBA",
        collegeName: "upGrad Tech",
        icon: <FaUniversity />,
        img: c1,
        title: "UpGrad",
        text1: "Dual Specialisation",
        degreeType: {
          name: "Masters Degree",
          icon: <CiStar />,
        },
        duration: {
          name: "15 Months",
          icon: <CiCalendar />,
        },
        noOfSpecializations: {
          no: 13,
          icon: <MdOutlineHomeRepairService />,
        },
        button1: {
          icon: "",
          text: "View Program",
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
        stream: "MBA",
        collegeName: "upGrad Tech",
        icon: <FaUniversity />,
        img: c1,
        title: "Upgrad",
        text1: "Dual Specialization",
        degreeType: {
          name: "Masters Degree",
          icon: <CiStar />,
        },
        duration: {
          name: "15 Months",
          icon: <CiCalendar />,
        },
        noOfSpecializations: {
          no: 13,
          icon: <MdOutlineHomeRepairService />,
        },
        button1: {
          icon: "",
          text: "View Program",
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
        stream: "MBA",
        collegeName: "upGrad Tech",
        icon: <FaUniversity />,
        img: c1,
        title: "Upgrad",
        text1: "Dual Specialisation",
        degreeType: {
          name: "Masters Degree",
          icon: <CiStar />,
        },
        duration: {
          name: "15 Months",
          icon: <CiCalendar />,
        },
        noOfSpecializations: {
          no: 13,
          icon: <MdOutlineHomeRepairService />,
        },
        button1: {
          icon: "",
          text: "View Program",
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
        collegeName: "upGrad Tech",
        icon: <FaUniversity />,
        img: c1,
        title: "Upgrad",
        text1: "Dual Specialisation",
        degreeType: {
          name: "Masters Degree",
          icon: <CiStar />,
        },
        duration: {
          name: "15 Months",
          icon: <CiCalendar />,
        },
        noOfSpecializations: {
          no: 13,
          icon: <MdOutlineHomeRepairService />,
        },
        button1: {
          icon: "",
          text: "View Program",
          href: "#",
        },
        button2: {
          icon: <MdOutlineFileDownload />,
          text: "Syllabus",
          href: "#",
        },
      },
    ],
  },
  topCourses : {
    title: {
      t1: "Discover",
      t2: "Top Courses",
    },
    courses: [
      {
        id: 1,
        stream: "MBA",
  
        bg: co1,
        teacherAvatar: user1,
        teacherName: "Dr. Pankaj Kumar",
        teacherRole: "Teacher",
        designation: "MBA Specialist and Director of Admission",
  
        title: "Acchawala",
        stars: 4.5,
        courseDetails: {
          noOfAvailableCourses: "13",
          courseTime: "2 hours",
          duration: "15 months",
          coursesPrice: {
            fullTime: "20000",
            partTime: "10000",
          },
        },
        summery:
          "MBA is a graduate degree in business management, covering finance, marketing, operations, and strategy.",
        button: {
          text: "Learn More",
          href: "#",
        },
      },
      {
        id: 2,
        stream: "MBA",
  
        bg: co2,
        teacherAvatar: au2,
        teacherName: "Andrew Garfield",
        teacherRole: "Teacher",
        designation: "MBA Specialist and Director of Admission",
  
        title: "Acchawala",
        stars: 4.5,
        courseDetails: {
          noOfAvailableCourses: "13",
          courseTime: "2 hours",
          duration: "15 months",
          coursesPrice: {
            fullTime: "20000",
            partTime: "10000",
          },
        },
        summery:
          "MBA is a graduate degree in business management, covering finance, marketing, operations, and strategy.",
        button: {
          text: "Learn More",
          href: "#",
        },
      },
      {
        id: 3,
        stream: "MBA",
  
        bg: co3,
        teacherAvatar: au3,
        teacherName: "Andrew Garfield",
        teacherRole: "Teacher",
        designation: "MBA Specialist and Director of Admission",
  
        title: "Acchawala",
        stars: 4.5,
        courseDetails: {
          noOfAvailableCourses: "13",
          courseTime: "2 hours",
          duration: "15 months",
          coursesPrice: {
            fullTime: "20000",
            partTime: "10000",
          },
        },
        summery:
          "MBA is a graduate degree in business management, covering finance, marketing, operations, and strategy.",
        button: {
          text: "Learn More",
          href: "#",
        },
      },
      {
        id: 4,
        stream: "MBA",
  
        bg: co1,
        teacherAvatar: au1,
        teacherName: "Andrew Garfield",
        teacherRole: "Teacher",
        designation: "MBA Specialist and Director of Admission",
  
        title: "Acchawala",
        stars: 4.5,
        courseDetails: {
          noOfAvailableCourses: "13",
          courseTime: "2 hours",
          duration: "15 months",
          coursesPrice: {
            fullTime: "20000",
            partTime: "10000",
          },
        },
        summery:
          "MBA is a graduate degree in business management, covering finance, marketing, operations, and strategy.",
        button: {
          text: "Learn More",
          href: "#",
        },
      },
    ],
  },
  BlogsAndOthers : {
    filterBy: [
      {
        id: 1,
        category: "articles",
      },
      {
        id: 2,
        category: "blog",
      },
      {
        id: 3,
        category: "news",
      },
      {
        id: 4,
        category: "boards",
      },
    ],
    cardsContent: [
      {
        id: 1,
        img: b1,
        tag: "Study abroad",
        category: ["all", "articles"],
        date: "June 28, 2024",
        shares: "1K Shares",
        author: {
          name: "Joanna Wllick",
          avatar: b1,
        },
        title: "Integration of AI on this Acchawala College",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cursus maecenas pretium lectus sit ut ullamcorper massa. Id adipiscing faucibus dictum vitae. Pellentesque urna a pretium sed. Volutpat sem habitant faucibus pharetra dui.",
        button: {
          label: "View Post",
          href: "#",
        },
      },
      {
        id: 2,
        img: b2,
        tag: "Study abroad",
        category: ["all", "articles"],
        date: "June 28, 2024",
        shares: "1K Shares",
        author: {
          name: "Joanna Wllick",
          avatar: b1,
        },
        title: "Integration of AI on this Acchawala College",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cursus maecenas pretium lectus sit ut ullamcorper massa. Id adipiscing faucibus dictum vitae. Pellentesque urna a pretium sed. Volutpat sem habitant faucibus pharetra dui.",
        button: {
          label: "View Post",
          href: "#",
        },
      },
      {
        id: 3,
        img: b3,
        tag: "Study abroad",
        category: ["all", "articles"],
        date: "June 28, 2024",
        shares: "1K Shares",
        author: {
          name: "Joanna Wllick",
          avatar: b1,
        },
        title: "Integration of AI on this Acchawala College",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cursus maecenas pretium lectus sit ut ullamcorper massa. Id adipiscing faucibus dictum vitae. Pellentesque urna a pretium sed. Volutpat sem habitant faucibus pharetra dui.",
        button: {
          label: "View Post",
          href: "#",
        },
      },
      {
        id: 4,
        img: b2,
        tag: "Study abroad",
        category: ["all", "blog"],
        date: "June 28, 2024",
        shares: "1K Shares",
        author: {
          name: "Joanna Wllick",
          avatar: b1,
        },
        title: "Integration of AI on this Acchawala College",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cursus maecenas pretium lectus sit ut ullamcorper massa. Id adipiscing faucibus dictum vitae. Pellentesque urna a pretium sed. Volutpat sem habitant faucibus pharetra dui.",
        button: {
          label: "View Post",
          href: "#",
        },
      },
      {
        id: 5,
        img: b3,
        tag: "Study abroad",
        category: ["all", "blog"],
        date: "June 28, 2024",
        shares: "1K Shares",
        author: {
          name: "Joanna Wllick",
          avatar: b1,
        },
        title: "Integration of AI on this Acchawala College",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cursus maecenas pretium lectus sit ut ullamcorper massa. Id adipiscing faucibus dictum vitae. Pellentesque urna a pretium sed. Volutpat sem habitant faucibus pharetra dui.",
        button: {
          label: "View Post",
          href: "#",
        },
      },
      {
        id: 6,
        img: b3,
        tag: "Study abroad",
        category: ["all", "news"],
        date: "June 28, 2024",
        shares: "1K Shares",
        author: {
          name: "Joanna Wllick",
          avatar: b1,
        },
        title: "Integration of AI on this Acchawala College",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cursus maecenas pretium lectus sit ut ullamcorper massa. Id adipiscing faucibus dictum vitae. Pellentesque urna a pretium sed. Volutpat sem habitant faucibus pharetra dui.",
        button: {
          label: "View Post",
          href: "#",
        },
      },
      {
        id: 7,
        img: b3,
        tag: "Study abroad",
        category: ["all", "boards"],
        date: "June 28, 2024",
        shares: "1K Shares",
        author: {
          name: "Joanna Wllick",
          avatar: b1,
        },
        title: "Integration of AI on this Acchawala College",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cursus maecenas pretium lectus sit ut ullamcorper massa. Id adipiscing faucibus dictum vitae. Pellentesque urna a pretium sed. Volutpat sem habitant faucibus pharetra dui.",
        button: {
          label: "View Post",
          href: "#",
        },
      },
    ],
  },
  testimonialsSection: {
    title: {
      t1: "Student",
      t2: "Testimonials",
    },
    text1: "Discover Success Stories \nfrom Our Satisfied Students",
    bgImg: testimonialBg,
    testimonials: [
      {
        id: "1",
        userName: "Pankaj",
        userAvatar: user1,
        college: "MBA, IIM Ahmedabad",
        comment:
          "Thanks to the guidance I received from this platform, I not only found the perfect college but also gained invaluable insights into the admission process. Highly recommended!",
        storyVideoLink: "#",
      },
      {
        id: "2",
        userName: "Aman Sherawat",
        userAvatar: user1,
        college: "B.tech, IIT Delhi",
        comment:
          "I was overwhelmed with options until I came across this website. The personalized counseling helped me narrow down my choices and make informed decisions.",
        storyVideoLink: "#",
      },
      {
        id: "3",
        userName: "Karan Gill",
        userAvatar: user1,
        college: "B.tech, IIT Delhi",
        comment:
          "I was overwhelmed with options until I came across this website. The personalized counseling helped me narrow down my choices and make informed decisions.",
        storyVideoLink: "#",
      },
      {
        id: "4",
        userName: "Aman Gill",
        userAvatar: user1,
        college: "B.tech, IIT Delhi",
        comment:
          "I was overwhelmed with options until I came across this website. The personalized counseling helped me narrow down my choices and make informed decisions.",
        storyVideoLink: "#",
      },
    ],
  }
};
