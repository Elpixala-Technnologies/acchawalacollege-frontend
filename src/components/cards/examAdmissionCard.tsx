import React from "react";
import Link from "next/link";
import TextWithLineBreak from "@/utils/TextWithLineBreack";
import Wrapper from "../Wrapper";

export default function ExamAdmissionCard({ data }: any) {
    return (
        <section className="my-5 w-full md:p-5">
            <Wrapper className="flex justify-between md:rounded-xl bg-[#9190AD] p-5 text-white">
                <div className="flex flex-col justify-center md:pl-10">
                    <h2 className="text-lg font-medium">Amity University, Noida B.Tech Admissions 2024</h2>
                    <p>Asia's Only University with the Highest US & UK Accreditation</p>
                    {/* <Link href="/contact-us" className="button7 max-w-48">
                        Ask a Question
                    </Link> */}
                </div>
                <Link href="/contact-us" className="button7 h-10 max-w-48">
                    Apply
                </Link>
            </Wrapper>
        </section>
        // <section className="my-5 w-full bg-[#9190AD] py-10 text-white">
        //   <Wrapper className="flex items-center justify-between">
        //     {data?.text && <h2 className="text-lg font-medium"><TextWithLineBreak text={data?.text} /></h2>}
        //     {data?.buttons && data?.buttons?.button1 && (
        //       <Link
        //         className="flex-center rounded border border-blue-950 bg-white px-5 py-3 text-sm font-bold text-blue-950 transition-all duration-300 hover:bg-gray-100 active:scale-90"
        //         href={data?.buttons?.button1?.href}
        //         target="_blank"
        //         rel="noreferrer"
        //         download={true}
        //       >
        //         {data?.buttons?.button1?.text}
        //       </Link>
        //     )}
        //   </Wrapper>
        // </section>
    );
}