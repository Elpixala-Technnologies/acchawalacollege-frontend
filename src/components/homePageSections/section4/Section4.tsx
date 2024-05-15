import Image from "next/image";
import React from "react";
import { Student, } from "@/asset";

export default function Section4() {
  return (
    <section className="bg-primary-extra-light text-primary-text py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="w-full max-w-sm bg-[#012148] border border-[#012148] rounded-lg">
          <div className="flex flex-col items-center pb-4">
            <Image src={Student} className="w-20 h-20 mb-3 rounded-full shadow-lg" alt="" />
            {/* <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" /> */}
            <h5 className="mb-1 text-[32px]  text-semibold text-white">2,300+</h5>
            <span className="text-sm text-white">Admissions done</span>
          </div>
        </div>

      </div>
    </section>
  );
}



