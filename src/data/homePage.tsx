import {
  c1,
  b1,
  b2,
  b3,
  Student,
  Certificate,
  GraduationCap,
  user1,
  testimonialBg,
} from "@/asset";
import { CiCalendar, CiStar } from "react-icons/ci";
import { FaUniversity } from "react-icons/fa";
import { Landing1, Landing2, Landing3 } from "@/asset";
import {
  MdDescription,
  MdOutlineFileDownload,
  MdOutlineHomeRepairService,
} from "react-icons/md";

export const homeBanner = {
  title: {
    t1: "Best Education",
    t2: "Counselling Platform",
    t3: "in The World",
  },
  text1: "Search your career opportunities across 27000+ Colleges",
  button1: {
    text: "Explore Colleges",
    href: "#",
  },
  button2: {
    text: "Schedule Counselling",
    href: "#",
  },
  img: [Landing1, Landing2, Landing3],
  text2: "Get 30% off on every 1st month",
  text3: "Expert Counsellors",
};

export const section2 = {
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
};

export const section3 = {
  title:
    "Embark on Your Career Journey Today! Connect \n with Our Expert Counseling Team Now.",
  text1: "Navigate the Path to Success with Our Support",
  button: {
    text: "Schedule  Counselling",
    href: "#",
  },
};

export const topColleges = {
  title: {
    t1: "Discover",
    t2: "Top Colleges",
  },
  colleges: [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
};

export const BlogsAndOthers = {
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
};

export const testimonialsSection = {
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
};
