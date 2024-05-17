import Image from "next/image";
import React from "react";
import { Certificate, GraduationCap, Student, } from "@/asset";

export default function CounsellingSessionsCard() {
    return (
        <section className="bg-primary-extra-light text-primary-text">
            <div className="max-w-screen-xl mx-auto">
                <div className="w-full max-w-[1230px] bg-[#2095F2] border border-[#2095F2]">
                    <div className="flex flex-col items-center pb-4">
                        <Image src={Student} width={56} height={56} className="w-20 h-20 mb-3" alt="" />
                        <h5 className="mb-1 text-[32px]  font-bold text-white">5,100+</h5>
                        <span className="text-sm font-medium text-white">Counselling sessions </span>
                    </div>
                </div>

            </div>
        </section>
    );
}



