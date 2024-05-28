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
    AbroadLanding1, AbroadLanding2, AbroadLanding3, banner2,
    SuccessStories2,
    SuccessStories1,
    SuccessStories3
} from "@/asset";



export const studyAbroadData = {
    homeBanner: {
        title: {
            t1: "Embark on Your Global",
            t2: "Education Journey",
        },
        text1: "Explore Top Universities Worldwide and Transform \n Your Future with Expert Guidance",
        button1: {
            text: "Explore Colleges",
            href: "#",
        },
        button2: {
            text: "Schedule Counselling",
            href: "#",
        },
        img: [AbroadLanding1, AbroadLanding2, AbroadLanding3],
        text2: "Get 30% off on every 1st month",
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

    // Section 3
    scheduleCounsellingBanner: {
        title:
            "Embark on Your Career Journey Today! Connect \n with Our Expert Counseling Team Now.",
        text1: "Navigate the Path to Success with Our Support",
        button: {
            text: "Schedule  Counselling",
            href: "#",
        },
        bgImg: section6Bg,
    },

    section4: {
        title: {
            t1: "Growth and",
            t2: "Success Stories",
        },
        text1: "Discover how our guidance has empowered students to achieve their dreams abroad.",
        text2: "Raj transformed his aspirations into reality by securing admission to <br> MIT. With our  personalized guidance, he navigated the complexities <br> of studying abroad and achieved his dream",
        button1: {
            text: "Read More",
            href: "#",
        },
        img: [SuccessStories3, SuccessStories1],
        middleCard: {
            img: SuccessStories2,
            t1: "50K+",
            t2: "Students",
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
};
