"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { FaRegQuestionCircle, FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlinePerson } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

export default function Header() {
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const [isNavFixed, setNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 410) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function openSideMenu() {
    setSideMenu(true);
  }

  function closeSideMenu() {
    setSideMenu(false);
  }

  return (
    <header className="w-full bg-black text-white ">
      <nav
        id="nav-menu"
        className={`w-full flex flex-wrap md:justify-between ${
          isNavFixed ? "fixed top-0 left-0 min-w-full z-50 bg-black " : ""
        }`}
      >
        <div className="w-full max-w-[1320px] mx-auto flex items-center">
          {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
          <div className="w-full hidden md:flex justify-between items-center transition-all">
            {/* left Side  */}
            {/* <Image
              src={logo}
              alt="logo"
              width={120}
              height={120}
              className="object-cover w-24 h-24"
            /> */}
            AcchaWalaCollage
            {/* center side  */}
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-7 transition-all">
                {navItems.map((d, i) => (
                  <div key={i} className="relative group transition-all">
                    <SingleNavItem label={d.label} link={d.link} />
                  </div>
                ))}
              </div>
              <div className="hidden md:flex gap-7 text-white text-3xl">
                <Link href={"/"}>
                  <FaRegQuestionCircle className="text-2xl hover:text-primary" />
                </Link>
                <div className="relative group">
              <FaRegCircleUser className="text-2xl hover:text-primary cursor-pointer group" />
            <div className="absolute z-10 top-6 right-0 hidden group-hover:block bg-white border text-zinc-600 text-sm border-gray-200 rounded-md py-1 w-max">
              <Link href={"/profile"}  className="flex item-center gap-x-2 px-3 py-1 hover:bg-gray-100 cursor-pointer">
              <MdOutlinePerson className="mt-0.5" /> Profile
              </Link>
              <div className="flex item-center gap-x-2 px-3 py-1 hover:bg-gray-100 cursor-pointer">
              <IoLogOutOutline className="mt-0.5" /> Logout
              </div>
            </div>
          </div>
              </div>
            </div>
          </div>
        </div>

        {/* hamburger menu */}
        <div className="text-4xl md:hidden flex justify-between w-full items-center py-5">
          {/* <Image
            src={TalentLogo}
            alt="logo"
            width={120}
            height={120}
            className="object-cover w-24 h-24"
          /> */}
          AcchaWalaCollage
          <div className="flex gap-7 text-white text-3xl">
            <BsFillPatchQuestionFill />
            <FaUserCircle />
            <FiMenu onClick={openSideMenu} className="cursor-pointer" />
          </div>
        </div>
      </nav>
    </header>
  );
}

function MobileNav({ closeSideMenu }: any) {
  return (
    <nav className="text-black z-10 fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className="h-full w-[65%] bg-black px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl"
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              link={d.link}
              closeSideMenu={closeSideMenu}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}

function SingleNavItem({ label, link, closeSideMenu, logo }: any) {
  return (
    <Link href={link ?? "#"}>
      <div
        onClick={closeSideMenu}
        className="group text-lg font-normal py-6 px-2 transition-all duration-500 flex flex-col"
      >
        {/* Render the logo if it's provided */}
        {/* { <Image width={2000} height={2000} src={logo} alt={label} className="w-10 h-10  bg-white" />} */}
        {label}
        <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
    </Link>
  );
}

export const navItems = [
  {
    label: "Colleges",
    link: "/colleges",
  },
  {
    label: "Exams",
    link: "/exams",
  },
  {
    label: "Courses",
    link: "/courses",
  },
  {
    label: "News",
    link: "/news",
  },
  {
    label: "More",
    link: "/more",
  },
];
