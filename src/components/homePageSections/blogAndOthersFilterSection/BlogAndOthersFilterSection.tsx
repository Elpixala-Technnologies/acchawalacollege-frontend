"use client";
import BlogCard from "@/components/cards/BlogCard";
import { BlogsAndOthers } from "@/data/homePage";
import Image from "next/image";
import { useState } from "react";

export default function BlogAndOthersFilterSection() {
  const [activeCategory, setActiveCategory] = useState("articles");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto p-5 my-16">
      <div className="flex gap-5 justify-center flex-wrap mb-10">
        {/* Filter Titles  */}
        {BlogsAndOthers.filterBy.map((item: any) => (
          <h1
            className={`px-3 cursor-pointer transition-all duration-200  ${
              activeCategory === item?.category
                ? "border-b-2 border-black text-black pb-1 -translate-y-1"
                : "pb-0 text-zinc-500"
            }`}
            key={item.id}
            onClick={() => handleCategoryClick(item.category)}
          >
            {item?.category.toUpperCase()}
          </h1>
        ))}
      </div>
      <div className="flex flex-wrap justify-center mt-5 gap-5">
        {BlogsAndOthers.cardsContent
          .filter(
            (card) =>
              activeCategory === "articles" || card.category.includes(activeCategory)
          )
          .slice(0, 3)
          .map((card) => (
            <BlogCard key={card.id} card={card} />
          ))}
      </div>
    </section>
  );
}
