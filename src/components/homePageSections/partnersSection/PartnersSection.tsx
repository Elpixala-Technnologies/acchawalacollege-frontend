"use client";
import PartnersCard from "@/components/cards/PartnersCard";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { s1, s2, s3, s4, s5, s6, s7, s8, s9, s10 } from "@/asset";

export default function PartnersSection() {
  const images = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    <section className="relative w-full max-w-[1440px] mx-auto overflow-x-hidden py-8">
        <h1 className="w-full text-center title1 font-semibold mb-5">Our Knowledge Partners</h1>
      <div className="h-full w-20 absolute top-0 left-0 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="h-full w-20 absolute top-0 right-0 bg-gradient-to-r from-transparent to-white z-10"></div>
      <motion.div
        className=" flex gap-4 max-w-[1440px] mx-auto"
        style={{ x: xTranslation }}
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...images, ...images].map((item, idx) => (
          <PartnersCard image={item} key={idx} />
        ))}
      </motion.div>
    </section>
  );
}
