import { ReactNode, useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
export default function ExamAccordian({
    children,
    title,
    opened = false,
    titlePrimary = false,
}: {
    children: ReactNode;
    title: string;
    opened?: boolean;
    titlePrimary?: boolean;
}) {
    const [Open, setOpen] = useState(false);
    const handleOpenAccordion = () => {
        console.log(Open);

        setOpen(!Open);
    };
    useEffect(() => {
        setOpen(opened);
    }, [opened]);
    return (
        <>
            <div className="">
                <div
                    className={`flex justify-between border-b border-b-primary-text-light ${Open ? "border-b border-b-primary-text-light" : ""
                        } items-center ${titlePrimary ? "px-5 py-4" : "p-2"}`}
                    onClick={handleOpenAccordion}
                >
                    <p
                        className={`flex-1 ${titlePrimary
                            ? "text-primary text-[25px] font-semibold"
                            : "text-secondary text-base"
                            }`}
                    >
                        {title}
                    </p>
                    <div className="bg-primary-light p-1 text-primary rounded-sm">
                        {Open ? <FaAngleDown /> : <FaAngleRight />}
                    </div>
                </div>
                {Open ? <div className="p-5">{children}</div> : <></>}
            </div>
        </>
    );
}
