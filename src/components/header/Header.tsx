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
import { DownArrow, Logo } from "@/asset";
import HeaderOptions from "./NavbarOptions";
import Wrapper from "../Wrapper";

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

  return (
    <header className="relative w-full bg-zinc-50 text-blue-900 shadow-lg flex justify-center h-24">
      <Wrapper className="flex-no-wrap fixed top-0 z-10 flex-center  w-full  lg:flex-wrap lg:justify-start">
        <div className="flex gap-2 bg-secondary items-center">
          <div className="flex-1 flex items-center">
            <div className="logo">
              <Link href={"/"}>
                <Image
                  src={Logo}
                  width={218}
                  height={56}
                  alt="Logo"
                  className="max-md:hidden"
                />
              </Link>
            </div>
            <div className="flex-1">
              <HeaderOptions />
            </div>
              <span>Latest Updates</span>
              <span>More</span>
          </div>
          <div className="pr-6">
            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-[#2095F2] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Sign up</button>
            <button type="button" className="text-white bg-[#2095F2] hover:bg-[#2095F2] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Login </button>
          </div>
          {/* <div className="flex gap-8 max-md:hidden">
            <div className="flex gap-2 items-center text-primary">
              <div>
                <Image
                  src={Logo}
                  width={30}
                  height={30}
                  alt="login logo"
                />
              </div>
              <div className="text-sm text-primary">
                login or <br />
                Create account
              </div>
            </div>
            <div>
              <div className="text-xs">country</div>
              <div className="flex gap-1">
                <Image
                  src={Logo}
                  width={24}
                  height={24}
                  alt={"countryFlag"}
                />
                <Image
                  src={DownArrow}
                  width={14}
                  height={14}
                  alt={"approvedBy"}
                />
              </div>
            </div>
            <div>
              <div className="text-xs">Language</div>
              <div className="flex gap-1 text-sm">
                ENG
                <Image
                  src={DownArrow}
                  width={14}
                  height={14}
                  alt={"approvedBy"}
                />
              </div>
            </div>
          </div> */}
          {/* <div className="block md:hidden">
            <div className="flex gap-6 text-white text-sm">
              <div className="flex flex-col gap-2 items-center">
                <Image src={DownArrow} width={20} height={20} alt="" />
                Ask
              </div>
              <div className="flex flex-col  gap-2 items-center">
                <Image src={DownArrow} width={20} height={20} alt="" />
                Search
              </div>
              <div className="flex flex-col gap-2  items-center">
                <Image src={DownArrow} width={20} height={20} alt="" />
                Login
              </div>
            </div>
          </div> */}
        </div>
      </Wrapper>
    </header>
  );
}

// mobile nav 
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
              icon={d.icon}

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
    icon: "../../asset/icons/DownArrow.svg"
  },
  {
    label: "Exams",
    link: "/exams",
    icon: "../../asset/icons/DownArrow.svg"
  },
  {
    label: "Courses",
    link: "/courses",
    icon: "../../asset/icons/DownArrow.svg"

  },
  {
    label: "News",
    link: "/news",
    icon: "../../asset/icons/DownArrow.svg"
  },
  {
    label: "More",
    link: "/more",
    icon: "../../asset/icons/DownArrow.svg"
  },
];
