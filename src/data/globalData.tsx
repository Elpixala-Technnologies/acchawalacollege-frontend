import { logo } from "@/asset";

export const header = {
  logo: logo,
  href: "/",

  navItems: [
    {
      id: 1,
      label: "Colleges",
      link: "/colleges",
      subNav: [
        {
          id: 11,
          label: "college1",
          link: "#",
        },
        {
          id: 12,
          label: "college2",
          link: "#",
        },
        {
          id: 13,
          label: "college3",
          link: "#",
        },
      ],
    },
    {
      id: 2,
      label: "Courses",
      link: "/courses",
      subNav: [
        {
          id: 21,
          label: "courses1",
          link: "#",
        },
        {
          id: 22,
          label: "courses2",
          link: "#",
        },
        {
          id: 23,
          label: "courses3",
          link: "#",
        },
      ],
    },
    {
      id: 3,
      label: "Exams",
      link: "/exams",
      subNav: [
        {
          id: 31,
          label: "exams1",
          link: "#",
        },
        {
          id: 32,
          label: "exams2",
          link: "#",
        },
        {
          id: 33,
          label: "exams3",
          link: "#",
        },
      ],
    },
    {
      id: 4,
      label: "Study Abroad",
      link: "/study-abroad",
      subNav: [
        {
          id: 51,
          label: "Study Abroad1",
          link: "#",
        },
        {
          id: 52,
          label: "Study Abroad2",
          link: "#",
        },
        {
          id: 53,
          label: "Study Abroad3",
          link: "#",
        },
      ],
    },
    {
      id: 5,
      label: "Latest Updates",
      link: "/latest-updates",
      subNav: [],
    },
    {
      id: 6,
      label: "More",
      link: "/more",
      subNav: [],
    },
  ],
};
