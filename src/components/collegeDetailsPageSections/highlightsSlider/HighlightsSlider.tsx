import Wrapper from "@/components/Wrapper";
import HighlightsCard from "@/components/cards/HighlightsCard";
import React from "react";

export default function HighlightsSlider({ collegeDetails }: any) {
  return (
    <section className="my-5 w-full">
      <Wrapper>
      <h2 className="text-2xl font-medium">
        {collegeDetails?.CollegeName}{" "}
        <span className="text-blue-950">Highlights</span>
      </h2>
      <div className="HighlightsSlider w-full relative">
        <HighlightsCard collegeDetails={collegeDetails} />
      </div>
      </Wrapper>
    </section>
  );
}
