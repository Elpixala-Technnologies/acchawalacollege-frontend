import {
  au1,
  au2,
  au3,
  co1,
  co2,
  co3,
  courseBg1,
  courseBg2,
  courseBg3,
  user1,
  coursesBanner,
  coursesBanner1,
  comp1,
  comp2,
  comp3,
  comp4,
  comp5,
  testimonialBg,
} from "@/asset";

export const courseListingPage = {
  MBA: {
    homeBanner: {
      title: {
        t1: "Discover Our",
        t2: "Online",
        t3: "MBA Programs",
      },
      text1: "Improve your MBA Journey with us and become the best",
      button1: {
        text: "Explore Courses",
        href: "#",
      },
      button2: {
        text: "Explore Courses",
        href: "#",
      },
      img: [courseBg1, courseBg2, courseBg3],
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
    about: {
      section1: {
        title: "Fully Online",
        text: "Berpedoman dan berakhlak mulia sesuai dengan ajaran Nabi Muhammad SAW",
        isHighlights: false,
      },
      section2: {
        title: "5m+ Worldwide Learners",
        text: "Berpedoman dan berakhlak mulia sesuai dengan ajaran Nabi Muhammad SAW",
        isHighlights: false,
      },
      section3: {
        title: "80% Positive Career Impact",
        text: "Berpedoman dan berakhlak mulia sesuai dengan ajaran Nabi Muhammad SAW",
        isHighlights: true,
      },
      section4: {
        title: "15m+ Learning Hours",
        text: "Berpedoman dan berakhlak mulia sesuai dengan ajaran Nabi Muhammad SAW",
        isHighlights: false,
      },
    },
    topCourses: {
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
    bannerSection: {
      bg1: coursesBanner,
      bg2: coursesBanner1,
      title:
        "Embark on Your Career Journey Today! Find \nThe Best Course To Take You To The Next Level",
      text: "Navigate the Path to Success with Our Support",
      button: {
        text: "Browse Coourses",
        href: "#",
      },
    },
    partners: {
      title: "Our Knowledge Partners",
      companyLogos: [comp1, comp2, comp3, comp4, comp5],
    },
    testimonial: {
      title: "What Our Students Say About Us",
      text: "Discover Success Stories from Our Satisfied Students",
      bg: testimonialBg,
      card: [
        {
          id: 1,
          name: "Pankaj Kumar",
          avatar: user1,
          collegeName: "MBA, IIM Ahmedabad",
          rating: 4.5,
          comment:
            "Thanks to the guidance I received from this platform, I not only found the perfect college but also gained valuable insights into the admission process. Highly recommended!",
          button: {
            text: "Watch their Story",
            href: "#",
          },
        },
        {
          id: 2,
          name: "Aman Sherawat",
          avatar: au1,
          collegeName: "B.tech, IIT Delhi",
          rating: 4.5,
          comment:
            "I was overwhelmed with options until I came across this website. The personalized counseling helped me narrow down my choices and make informed decisions.",
          button: {
            text: "Watch their Story",
            href: "#",
          },
        },
        {
          id: 3,
          name: "Priya Mehra",
          avatar: au2,
          collegeName: "Computer sciences, IIT Bombay",
          rating: 3,
          comment:
            "I was overwhelmed with options until I came across this website. The personalized counseling helped me narrow down my choices and make informed decisions.",
          button: {
            text: "Watch their Story",
            href: "#",
          },
        },
        {
          id: 4,
          name: "Karan Gill",
          avatar: au3,
          collegeName: "B.tech, IIT Delhi",
          rating: 4.5,
          comment: "I was overwhelmed with options until I came across this website. The personalized counseling helped me narrow down my choices and make informed decisions.",
          button: {
            text: "Watch their Story",
            href: "#",
          },
        }
      ],
    },
  },
};
