import React from "react";
import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

export default function ExamAdmissionCard({ data }: any) {
    return (
        <section className="my-5 w-85 flex justify-center">
            <div className="flex  md:rounded-xl p-5 bg-gradient-to-r from-[#AFAEB4] via-[#E0E0E0] to-[#D7D6DB]">
                <div className="flex flex-col justify-center">
                    <h2 className="text-lg font-medium text-blue-950">{`Amity University, Noida B.Tech Admissions 2024`}</h2>
                    <p className="p-1">{`Recognized as Institute of Eminence by Govt. of India | NAAC ‘A++’ Grade | JEE Scores Accepted`}</p>
                </div>
                <Link href="" className="examButton h-8 max-w-48">
                    <p className="flex items-center gap-x-1 font-thin">
                        <FaRegCheckCircle />
                        Apply
                    </p>
                </Link>
            </div>
        </section>
    );
}