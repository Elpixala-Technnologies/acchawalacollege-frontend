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
        "UN chief calls for ‘dramatic shift’ to transform education worldwide",
      desc: "JEE Advanced Opening and Closing Ranks 2024 for Old IITs - Are you waiting for JoSAA to release the counselling results to figure out the IITs you are eligible for? Don’t wait any longer and....",
      img: cardImg,
      dp: dpImg,
      pname: "Ashiq Umer",
      pcontent: "Content Creator | Jun 28, 2024",
    },
  ];

  return (
      <div className={`${inter.className} `}>
      {CardItems.map((item, index) => (
        <div key={index} className="mx-2 overflow-hidden  rounded-3xl border border-[#00000033]">
          {/* image  */}
          <div className="h-96 w-full p-6  relative">
            <Image
              src={item.img}
              alt="img"
              className=" h-full object-cover rounded-2xl"
            />
          </div>

          {/* content  */}
          <div className="flex w-full  p-2">
            {/* pic  */}
            <div className="w-fit h-fit bg-white">
              <Image
               src={item.dp}
               alt="img"
               className="w-[50px] h-[50px] rounded-full object-cover"
             />
            </div>
            <div className="flex flex-col ml-3">
              <span className="text-xl text-[#2095F2] font-bold"> {item.pname}</span>
              <span className="text-[#00000099] text-sm font-medium">{item.pcontent}</span>
            </div>
          </div>
          
            {/* description  */}
          <div className="p-4">
            <div className="mb-2 text-base font-normal text-[#000000]">
              <span>{item.date}</span> - <span>{item.time}</span>
            </div>
            <h2 className="mb-2 text-xl font-bold text-black">{item.title}</h2>
            <p className="text-lg font-base text-black">{item.desc} <Link href={""} className="text-base underline underline-offset-4 text-[#2095F2]">Read More</Link> </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
