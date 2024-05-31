"use client";
import React, { useState, useEffect } from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Image from "next/image";
import SignInModal from "../loginModal/SignInModal";
import SignUpModal from "../loginModal/SignUpModal";
// import { fetchDataFromApi } from "@/utils/api";
// import { useSelector } from "react-redux";

const Header = ({ header }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [show, setShow] = useState<string>("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [navItems, setNavItems] = useState<any[]>([]);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState<boolean>(false);
  const [isModalOpen, setSignInModalOpen] = useState(false);

  // const { cartItems } = useSelector((state: any) => state.cart);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !isMobileMenuOpen) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, isMobileMenuOpen]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    // const { header } = await fetchDataFromApi("/api/navItemsArray?populate=*");
    setNavItems(header?.navItems || []);
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLoginModal = () => {
    setIsSignUpModalOpen(!isSignUpModalOpen);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 flex h-20 w-full items-center justify-between bg-indigo-100 transition-transform duration-300 md:h-20 ${show}`}
      >
        <Wrapper className="hidden h-20 items-center justify-between md:flex">
          {/* Logo with Link */}
          <Link href={header?.href || "/"}>
            <Image
              src={header?.logo}
              alt="logo"
              height={100}
              className="h-[12vw] object-contain md:h-20"
            />
          </Link>
          <div className="flex items-center gap-5">
            {/* Menu */}
            <Menu navItemsArray={navItems} />
            <div className="flex items-center gap-3">
              {/* Sign Up / Sign In  */}
              <button onClick={handleLoginModal} className="button5 px-10 rounded">
                Sign up
              </button>
              {/* <Link href={"/signup"} className="button5">
                Sign up
              </Link> */}
              {/* <Link href={"/login"} className="button4 px-10 rounded">
                Login
              </Link> */}
              <button className="button4 px-10 rounded" onClick={() => setSignInModalOpen(true)}>
                Login
              </button>
            </div>
          </div>
        </Wrapper>
        {/* Mobile Section */}
        <Wrapper className="flex items-center justify-between md:hidden">
          {isMobileMenuOpen && <MenuMobile navItemsArray={navItems} />}
          {/* Logo with Link */}
          <Link href={header?.href}>
            <Image
              src={header?.logo}
              alt="logo"
              height={100}
              className="w-52 object-contain"
            />
          </Link>
          <div className="flex items-center gap-2">
            <Link href={"/login"} className="button4 rounded">
              <button>LogIn</button>
            </Link>
            <div className="flex-center relative cursor-pointer rounded-full p-2 text-2xl hover:bg-blue-500/5">
              {isMobileMenuOpen ? (
                <VscChromeClose onClick={handleMobileMenu} />
              ) : (
                <BiMenuAltRight onClick={handleMobileMenu} />
              )}
            </div>
          </div>
        </Wrapper>
      </header>
      <SignUpModal isOpen={isSignUpModalOpen} onClose={handleLoginModal} />
      <SignInModal show={isModalOpen} onClose={() => setSignInModalOpen(false)} />
    </>
  );
};

export default Header;
