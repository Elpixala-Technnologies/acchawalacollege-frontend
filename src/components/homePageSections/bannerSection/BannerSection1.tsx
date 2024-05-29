"use client";
import Wrapper from "@/components/Wrapper";
import TextWithLineBreak from "@/utils/TextWithLineBreak";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function BannerSection1({ data }: any) {
  const [positions, setPositions] = useState<any[]>([]);
  const [isMdScreen, setIsMdScreen] = useState<boolean>(false);

  useEffect(() => {
    if (data?.steps) {
      const radius = 100; // Adjust the radius as needed
      const steps = data.steps.length;
      const angleStep = Math.PI / (steps - 1); // Half circle (π radians)
      const newPositions = data.steps.map((_: any, i: any) => {
        const angle = i * angleStep - Math.PI / 2; // Adjust angle to start from the top
        return {
          x: radius * Math.cos(angle),
        };
      });
      setPositions(newPositions);
    }
  }, [data]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaChange = (e: MediaQueryListEvent) =>
      setIsMdScreen(e.matches);

    mediaQuery.addEventListener("change", handleMediaChange);

    // Initial check
    setIsMdScreen(mediaQuery.matches);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <section className="my-16 w-full">
      <Wrapper>
        <h1 className="mb-5 title1">
          <span className="text-blue-950/70">{data?.title?.t1}</span>{" "}
          <span className="text-blue-950">{data?.title?.t2}</span>{" "}
          <span className="text-blue-500">{data?.title?.t3}</span>
        </h1>
        {data?.text && (
          <p className="mb-8">
            <TextWithLineBreak text={data?.text} />
          </p>
        )}
        <div className="flex w-full justify-center max-md:flex-col">
          {/* Image */}
          <div className="relative flex w-[29rem] md:scale-[0.82] scale-[0.72] md:justify-center">
            <Image
              src={data?.bg}
              height={700}
              width={700}
              alt="banner"
              className="h-[31rem] rounded-b-full object-contain"
            />
            <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-blue-500"></div>
            <div className="absolute bottom-[14px] left-0 -z-20 h-96 w-96 rounded-full bg-blue-950"></div>
          </div>
          {/* Steps */}
          <ul className="mt-8 flex flex-col gap-y-5 md:mt-0 md:-translate-x-16 md:gap-y-[2.8rem]">
            {data?.steps &&
              data?.steps.map((item: any, i: any) => (
                <li
                  key={i}
                  className="flex w-full gap-x-3"
                  style={{
                    transform: isMdScreen
                      ? `translateX(${positions[i]?.x}px)`
                      : "none",
                  }}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full p-2 text-lg font-semibold shadow-md shadow-blue-500">
                    {i + 1}
                  </span>
                  <span className="rounded-md p-2 shadow-md shadow-zinc-500 md:pr-20">
                    {item}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  );
}