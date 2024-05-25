import Image from "next/image";
import TabComponent from "../tab/tab";
import { UpcomingExams1 } from "@/asset";
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

    return (
        <>
            <div className="w-[300px]">
                <TabComponent tabs={NewsTab} />
                {/* <TabComponent tabs={ExamsNotificationsTab} /> */}
            </div>
        </>
    );
}
