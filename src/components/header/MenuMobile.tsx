import React, { useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import Image from "next/image";

const MenuMobile = ({
  navItemsArray,
}:any) => {
  return (
    <ul className="absolute left-0 top-20 flex w-full flex-col border-t bg-white text-blue-950 md:hidden">
      {navItemsArray.map((d: any) => (
        <SingleNavItem
          key={d?.id}
          label={d?.label}
          link={d?.href}
          subNav={d?.subNav}
        />
      ))}
    </ul>
  );
};

export default MenuMobile;


const SingleNavItem = (d: any) => {
  const [isItemOpen, setItem] = useState(false);

  const toggleItem = () => {
    setItem(!isItemOpen);
  };

  return (
    <>
      <Link
        onClick={toggleItem}
        href={d?.link ?? "#"}
        className="relative px-2 py-3 transition-all border-b border-zinc-200"
      >
        <p className="flex justify-between cursor-pointer items-center gap-2 text-blue-950 group-hover:text-blue-500 ">
          <span>{d?.label}</span>
          {d?.subNav && d.subNav.length !== 0 && (
            <BsChevronDown
              className={`text-xs transition-all ${isItemOpen ? "rotate-180" : ""}`}
            />
          )}
        </p>
      </Link>

      {isItemOpen && d.subNav && d.subNav.length !==0 && (
        <div className="z-10 w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
          {d.subNav.map((ch: any, i: any) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-blue-950 hover:text-blue-500"
            >
              {ch.iconImage && (
                <Image src={ch.iconImage} alt="item-icon" width={20} height={20} />
              )}
              <span className="whitespace-nowrap pl-3">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
