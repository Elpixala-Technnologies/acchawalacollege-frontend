import Image from "next/image";
import React from "react";
import { Certificate, GraduationCap, Student, } from "@/asset";

export default function FulfilledDreamsCard() {
    return (
        <section className="bg-primary-extra-light text-primary-text">
            <div className="max-w-screen-xl mx-auto">
                <div className="w-full max-w-[1230px] bg-[#165BAE] border border-[#165BAE]">
                    <div className="flex flex-col items-center pb-4">
                        <Image src={GraduationCap} width={56} height={56} className="w-20 h-20 mb-3" alt="" />
                        <h5 className="mb-1 text-[32px]  font-bold text-white">6,200+</h5>
                        <span className="text-sm font-medium text-white">Fulfilled dreams</span>
                    </div>
                </div>
            </div>
        </section>
    );
}



