import React from "react";
import Image from "next/image";
import cardImg from "@/asset/latestUpdates/heroImg.png";
import dpImg from "@/asset/latestUpdates/dpImg.png";
import { Inter } from "next/font/google";
import Link from "next/link";


const inter = Inter({
  subsets: ["latin"],
});

function Card() {
  const CardItems = [
    {
        title:
          "GATE 2025: IIT Roorkee to conduct exams on February 1, 2, 15, 16",
        desc: "GATE 2025 will be held as a computer-based test (CBT) for a total of 30 test",
        dp: dpImg,
        pname: "Ashiq Umer",
        pcontent: "Content Creator | Jun 28, 2024",
      },
      {
        title:
          "GATE 2025: IIT Roorkee to conduct exams on February 1, 2, 15, 16",
        desc: "GATE 2025 will be held as a computer-based test (CBT) for a total of 30 test",
        dp: dpImg,
        pname: "Ashiq Umer",
        pcontent: "Content Creator | Jun 28, 2024",
      },
      {
        title:
          "GATE 2025: IIT Roorkee to conduct exams on February 1, 2, 15, 16",
        desc: "GATE 2025 will be held as a computer-based test (CBT) for a total of 30 test",
        dp: dpImg,
        pname: "Ashiq Umer",
        pcontent: "Content Creator | Jun 28, 2024",
      },
      {
        title:
          "GATE 2025: IIT Roorkee to conduct exams on February 1, 2, 15, 16",
        desc: "GATE 2025 will be held as a computer-based test (CBT) for a total of 30 test",
        dp: dpImg,
        pname: "Ashiq Umer",
        pcontent: "Content Creator | Jun 28, 2024",
      },
    
  ];

  return (
      <div className={`${inter.className}`}>
      {CardItems.map((item, index) => (
        <div key={index} className="mx-2 mb-6 overflow-hidden border-b-2 border-[#00000033]">

          {/* profile  */}
          <div className="flex w-full p-2">
            {/* pic  */}
            <div className="w-fit h-fit bg-white">
              <Image
               src={item.dp}
               alt="img"
               className="w-[40px] h-[40px] rounded-full object-cover"
             />
            </div>
            {/* content  */}
            <div className="flex flex-col ml-3">
              <span className="text-base text-[#2095F2] font-bold">{item.pname}</span>
              <span className="text-[#00000099] text-xs font-medium">{item.pcontent}</span>
            </div>
          </div>
          

          <div className="px-4 pb-5">
            <h2 className="mb-2 text-base font-bold text-black">{item.title}</h2>
            <p className="text-sm font-base text-black">{item.desc} <Link href={""} className="text-base underline underline-offset-4 text-[#2095F2]"></Link> </p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;
