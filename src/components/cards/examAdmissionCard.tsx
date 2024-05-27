import React from "react";
import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";

export default function ExamAdmissionCard({ data }: any) {
    return (
        <section className="my-5 w-85 float-right">
            <div className="flex justify-between md:rounded-xl p-5 bg-gradient-to-r from-[#AFAEB4] via-[#E0E0E0] to-[#D7D6DB]">
                <div className="flex flex-col justify-center">
                    <h2 className="text-lg font-medium text-blue-950">{`Amity University, Noida B.Tech Admissions 2024`}</h2>
                    <p className="p-1">{`Recognized as Institute of Eminence by Govt. of India | NAAC ‘A++’ Grade | JEE Scores Accepted`}</p>
                </div>
                <Link href="" className="button7 h-10 max-w-48">
                    Apply
                </Link>
            </div>
        </section>
    );
}