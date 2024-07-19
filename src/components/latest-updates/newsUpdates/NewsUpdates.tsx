import Wrapper from "@/components/Wrapper";
import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});
function NewsUpdates() {
  return (
    <Wrapper className="my-6"> 
      <div className={`${inter.className} flex w-full  border-l-2 border-[#2095F2] bg-[#DCE9F3] py-2`}>
        <div className="mr-6 ml-4 h-fit">
          <h1 className="text-lg font-bold text-[#2095F2]">News Updates</h1>
        </div>
          <li className=" list-disc text-base font-semibold text-[#111111] w-fit">IIT Madras JEE Advanced Cutoff 2024: Check Closing</li>
          <li className=" list-disc text-base font-semibold text-[#111111] ml-6 w-fit">IIT Madras JEE Advanced Cutoff 2024: Check Closing Ranks</li>
         
      </div>
    </Wrapper>
  );
}

export default NewsUpdates;
