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
    SuccessStories3,
    p1,
    AssistanceFrom,
    c1,
    c2,
    c4,
    c3,
    c5,
    c6,
    c7,
    c8
} from "@/asset";
import { TbRuler2Off } from "react-icons/tb";



export const studyAbroadData = {
    homeBanner: {
        title: {
            t1: "Embark on",
            t2: "Your Global",
            t3: "Education Journey",
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

    colleges: [
        {
            id: 1,
            image: c1,
            name: 'University of Cambridge',
            location: 'Public university in Cambridge, England',
            rating: '4.5',
            reviews: '2.3k reviews',
            priceRange: '$20,000 to $50,000',
            distance: '5.8k',
        },
        {
            id: 2,
            image: c2,
            name: 'University of Oxford',
            location: 'Public university in Cambridge, England',
            rating: '4.5',
            reviews: '2.3k reviews',
            priceRange: '$20,000 to $50,000',
            distance: '5.8',
        },
        {
            id: 3,
            image: c3,
            name: 'University of Massachusetts',
            location: 'Public university in Cambridge, England',
            rating: '4.5',
            reviews: '2.3k reviews',
            priceRange: '$20,000 to $50,000',
            distance: '5.8',
        },
        {
            id: 4,
            image: c5,
            name: 'University of California',
            location: 'Public university in Cambridge, England',
            rating: '4.5',
            reviews: '2.3k reviews',
            priceRange: '$20,000 to $50,000',
            distance: '5.8',
        },
        {
            id: 5,
            image: c5,
            name: 'University of Cambridge',
            location: 'Public university in Cambridge, England',
            rating: '4.5',
            reviews: '2.3k reviews',
            priceRange: '$20,000 to $50,000',
            distance: '5.8',
        },
        {
            id: 6,
            image: c1,
            name: 'University of Oxford',
            location: 'Public university in Cambridge, England',
            rating: '4.5',
            reviews: '2.3k reviews',
            priceRange: '$20,000 to $50,000',
            distance: '5.8',
        },
        {
            id: 7,
            image: c2,
            name: 'University of Massachusetts',
            location: 'Public university in Cambridge, England',
            rating: '4.5',
            reviews: '2.3k reviews',
            priceRange: '$20,000 to $50,000',
            distance: '5.8',
        },
        {
            id: 8,
            image: c2,
            name: 'University of California',
            location: 'Public university in Cambridge, England',
            rating: '4.5',
            reviews: '2.3k reviews',
            priceRange: '$20,000 to $50,000',
            distance: '5.8',
        },
    ],

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
        text2: "Raj transformed his aspirations into reality by securing <br> admission to  MIT. With our  personalized guidance, he <br> navigated the  complexities of studying abroad and <br> achieved his dream",
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

    Section5: {
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
        img: AssistanceFrom,

        checkBoxData: {
            t1: "Fill The Acchawalacollege End to End Form",
            t2: "Our Expert Counsellor will Contact you",
            t3: "Select The Right Counselling Package",
            t4: "Shortlist Colleges And Fill Application Forms",
            t5: "Upload Documents & Pay Fee",
            t6: "Confirm Admission and Claim Gift",
        },
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
};
