import Image from "next/image";
import React from "react";
import { Certificate, GraduationCap, Student, } from "@/asset";

export default function AdmissionsCard() {
    return (
        <section className="bg-primary-extra-light text-primary-text">
            <div className="max-w-screen-xl mx-auto">
                <div className="w-full max-w-[1230px] bg-[#012148] border border-[#012148]">
                    <div className="flex flex-col items-center pb-4">
                        <Image src={Certificate} width={56} height={56} className="w-20 h-20 mb-3" alt="" />
                        <h5 className="mb-1 text-[32px]  font-bold text-white">2,300+</h5>
                        <span className="text-sm font-medium text-white">Admissions done</span>
                    </div>
                </div>
            </div>
        </section>
    );
}



