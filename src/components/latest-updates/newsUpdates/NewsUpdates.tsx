import Wrapper from "@/components/Wrapper";
import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});
function NewsUpdates() {
  return (
    <Wrapper className="my-6"> 
      <div className={`${inter.className} sm:flex items-center w-full  border-l-2 border-[#2095F2] bg-[#DCE9F3] py-2`}>
        <div className="mr-6 ml-4 h-fit">
          <h1 className=" text-xs sm:text-sm  lg:text-base xl:text-lg font-bold text-[#2095F2] align-baseline text-nowrap">News Updates</h1>
        </div>
          <li className=" list-disc text-[0.625rem] lg:text-xs xl:text-lg  ml-1 text-[#2095F2] font-semibold  xl:text-[#111111] w-fit text-nowrap">IIT Madras JEE Advanced Cutoff 2024: Check Closing</li>
          <li className="hidden sm:block list-disc lg:text-xs xl:text-lg  font-semibold text-[#111111] ml-4 w-fit  text-nowrap">IIT Madras JEE Advanced Cutoff 2024: Check Closing Ranks</li>
         
      </div>
    </Wrapper>
  );
}

export default NewsUpdates;
