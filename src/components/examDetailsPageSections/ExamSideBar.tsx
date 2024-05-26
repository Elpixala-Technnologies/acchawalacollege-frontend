import Image from "next/image";
import TabComponent from "../tab/tab";
import { ExamNews, ExamQuestions, NewsLetter, UpcomingExams1 } from "@/asset";
import { RiCalendar2Fill } from "react-icons/ri";
import ExamAccordian from "../examAccordian/examAccordian";
import { examsOverviewData } from "@/data/examOverviewData";
import Wrapper from "../Wrapper";
import Link from "next/link";
import NewsLetterCard from "../cards/newsletterCard";
TabComponent
export default function ExamSideBarComponent() {
    let FeatureNews = () => {
        return (
            <div className="flex flex-col gap-2">
                {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                        <div
                            key={item}
                            className={`flex gap-2 ${index < 4 ? "border-b border-b-primary-text-light" : ""
                                } pb-2`}
                        >
                            <Image src={UpcomingExams1} width={80} height={80} alt="" className="rounded-md" />
                            <div className="text-sm leading-5">
                                <span className="font-semibold">GATE 2024</span>
                                <p>Registration Window Extended to Nov 10 at consortium ofnlus...</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    let RecentNews = () => {
        return (
            <div className="flex flex-col gap-2">
                {[1, 2, 3].map((item, index) => {
                    return (
                        <div
                            key={item}
                            className={`flex gap-2 ${index < 4 ? "border-b border-b-primary-text-light" : ""
                                } pb-2`}
                        >
                            <Image src={ExamNews} width={80} height={80} alt="" className="rounded-md" />
                            <div className="text-sm leading-5">
                                <span className="font-semibold">GATE 2024</span>
                                <p>Registration Window Extended to Nov 10 at consortium ofnlus...</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    let ExamsNotifications = () => {
        return (
            <div className="flex flex-col gap-2">
                {[1, 2, 3].map((item, index) => {
                    return (
                        <div
                            key={item}
                            className={`flex gap-2 ${index < 4 ? "border-b border-b-primary-text-light" : ""
                                } pb-2`}
                        >
                            <Image src={ExamNews} width={80} height={80} alt="" className="rounded-md" />
                            <div className="text-sm leading-5">
                                <span className="font-semibold">AEEE 2024 CSAP Re..</span>
                                <p>Registration Window Extended to Nov 10 at consortium ofnlus...</p>
                                {/* <div className="flex flex-col gap-2">
                                    <span className="font-semibold">{`May 21, 2024`}</span><RiCalendar2Fill />
                                </div> */}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };
    let ExamsSyllabus = () => {
        return (
            <div className="flex flex-col gap-2">
                {[1].map((item, index) => {
                    return (
                        <div
                            key={item}
                            className={`flex gap-2 ${index < 4 ? "border-b border-b-primary-text-light" : ""
                                } pb-2`}
                        >
                            <div>
                                <Image src={ExamNews} width={80} height={80} alt="" className="rounded-md" />
                            </div>
                            <div className="text-sm leading-5">
                                <span className="font-semibold">Gate</span>
                                <p>online Exam</p>
                                <br />
                                <div className="flex flex-col gap-2">
                                    <ExamAccordian title={examsOverviewData?.examSyllabus?.title?.heading1}>
                                        {examsOverviewData?.frequentlyAskedQuestions?.title?.description1}
                                    </ExamAccordian>
                                    <ExamAccordian title={examsOverviewData?.examSyllabus?.title?.heading2}>
                                        {examsOverviewData?.frequentlyAskedQuestions?.title?.description2}
                                    </ExamAccordian>
                                    <ExamAccordian title={examsOverviewData?.examSyllabus?.title?.heading3}>
                                        {examsOverviewData?.frequentlyAskedQuestions?.title?.description3}
                                    </ExamAccordian>
                                    <ExamAccordian title={examsOverviewData?.examSyllabus?.title?.heading4}>
                                        {examsOverviewData?.frequentlyAskedQuestions?.title?.description4}
                                    </ExamAccordian>
                                </div>
                            </div>
                        </div>

                    );
                })}
            </div>
        );
    };

    const NewsTab = [
        {
            title: "Exams News",
            content: <FeatureNews />,
        },
        {
            title: "Recent News",
            content: <RecentNews />,
        },
    ];

    const ExamsNotificationsTab = [
        {
            title: "Exams Notifications",
            content: <ExamsNotifications />,
        },
    ];

    const ExamsSyllabusTab = [
        {
            title: "Exams 2024 Syllabus",
            content: <ExamsSyllabus />,
        },
    ];

    return (
        <>
            <div className="w-[300px]">
                <TabComponent tabs={NewsTab} />
                <NewsLetterCard />
                <TabComponent tabs={ExamsNotificationsTab} />
                <TabComponent tabs={ExamsSyllabusTab} />
            </div>
        </>
    );
}
