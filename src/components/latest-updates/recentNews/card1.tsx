import React from "react";
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
      desc:"GATE 2025 exam dates: be held as a computer-based test (CBT) for a total of 30 test papers. GATE 2025 examATE 2025 will be held as a computer-based test (CBT) for a total of 30 test papers. GATE 2025 exam dates: be held as a computer-based test (CBT) for a total of 30 test papers. GATE 2025 exam  date Read More",
    },
    {
        date: "June 24,2024",
        time: "5:50 PM",
        title:
          "UN chief calls for ‘dramatic shift’ to transform education worldwide",
        desc:"GATE 2025 exam dates: be held as a computer-based test (CBT) for a total of 30 test papers. GATE 2025 examATE 2025 will be held as a computer-based test (CBT) for a total of 30 test papers. GATE 2025 exam dates: be held as a computer-based test (CBT) for a total of 30 test papers. GATE 2025 exam  date Read More",
      },
  ];

  return (
      <div className={`${inter.className}`}>
      {CardItems.map((item, index) => (
        <div key={index} className="mx-2 overflow-hidden border-b-2 border-[#00000033] mb-10 pb-3">
                    
            {/* description  */}
          <div className="">
            <h2 className="mb-7 text-3xl font-extrabold text-black">{item.title}</h2>
            <p className="text-xl font-normal text-black">{item.desc} <Link href={""} className="text-base underline underline-offset-4 text-[#2095F2]">Read More</Link> </p>
          </div>

          <div className="mb-2 text-base font-normal text-[#000000]">
              <span>{item.date}</span> - <span>{item.time}</span>
            </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
