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
      date: "June 24,2024",
      time: "5:50 PM",
      title:
        "GATE 2025: IIT Roorkee to conduct exams on February 1, 2, 15, 16",
      desc:"GATE 2025 will be held as a computer-based test (CBT) for a total of 30 test papers.GATE 2025 exam dates: The Indian Institute of Technology (IIT) Roorkee today announced the exam dates for the Graduate Aptitude Test Roorkee today announced the exam dates for the Graduate Aptitude Test in Engineering.",
      img: cardImg,
      dp: dpImg,
      pname: "Ashiq Umer",
      pcontent: "Content Creator | Jun 28, 2024",
    },
  ];

  return (
      <div className={`${inter.className}`}>
      {CardItems.map((item, index) => (
        <div key={index} className="mx-2 overflow-hidden rounded-3xl border border-[#0000004D] ">
          

          {/* profile  */}
          <div className="flex w-full p-2 pt-8">
            {/* pic  */}
            <div className="w-fit h-fit bg-white">
              <Image
               src={item.dp}
               alt="img"
               className="w-[50px] h-[50px] rounded-full object-cover"
             />
            </div>
            {/* content  */}
            <div className="flex flex-col ml-3">
              <span className="text-xl text-[#2095F2] font-bold"> Ashik Umer</span>
              <span className="text-[#00000099] text-sm font-medium">Content Curator | Jun 28, 2024</span>
            </div>
          </div>

          {/* image  */}
          <div className="h-72 w-full p-6  relative">
            <Image
              src={item.img}
              alt="img"
              className=" h-full object-cover "
            />
          </div>

          
            {/* description  */}
          <div className="px-4 pb-3">
            <h2 className="mb-2 text-2xl font-extrabold text-black">{item.title}</h2>
            <p className="text-lg font-base text-black">{item.desc} <Link href={""} className="text-base underline underline-offset-4 text-[#2095F2]">Read More</Link> </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;