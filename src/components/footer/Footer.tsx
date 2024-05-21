"use client";
import React from "react";
import Wrapper from "../Wrapper";
import { footer } from "@/data/globalData";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import TextWithLineBreak from "@/utils/TextWithLineBreack";

export default function Footer() {
  return (
    <footer className="w-full bg-indigo-100">
      <Wrapper className="pt-5 md:pt-12">
        {/* NewsLetter Section  */}
        <div className="flex-center mb-5 flex-col gap-y-1 md:mb-12">
          <h2 className="text-3xl font-semibold">{footer?.newLetterTitle}</h2>
          <form action="" className="flex-center w-full gap-x-2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email Address"
              className="my-2 w-full max-w-[450px] rounded border border-zinc-500 p-3 pl-4 text-sm  outline-none"
            />
            <button
              className="flex-center  rounded bg-blue-950 px-8  py-2.5 font-medium text-white hover:bg-blue-900"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Footer links section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 pb-5 md:grid-cols-4 lg:grid-cols-4">
          <div className="flex flex-col gap-y-2">
            <h4 className="text-xl font-medium my-2">{footer?.list1?.title}</h4>
            <ul>
              {footer?.list1?.links?.map((d: any, i: number) => (
                <li key={i}>
                  <Link
                    href={d?.link}
                    className="hover:pl-2 hover:text-blue-500"
                  >
                    {d?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <h4 className="text-xl font-medium my-2">{footer?.list2?.title}</h4>
            <ul>
              {footer?.list2?.links?.map((d: any, i: number) => (
                <li key={i}>
                  <Link
                    href={d?.link}
                    className="hover:pl-2 hover:text-blue-500"
                  >
                    {d?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <h4 className="text-xl font-medium my-2">{footer?.list3?.title}</h4>
            <ul>
              {footer?.list3?.links?.map((d: any, i: number) => (
                <li key={i}>
                  <Link
                    href={d?.link}
                    className="hover:pl-2 hover:text-blue-500"
                  >
                    {d?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
          <h4 className="text-xl font-medium my-2 mb-3">Contact Us</h4>
            <p><Link href={`tel:${footer?.contactDetails?.contactNo}`}>{footer?.contactDetails?.contactNo}</Link></p>
            <p><Link href={`mailto:${footer?.contactDetails?.email}`}>{footer?.contactDetails.email}</Link></p>
          <h4 className="text-xl font-medium my-2">Location</h4>
          <p><TextWithLineBreak text={footer?.contactDetails?.location} /></p>
          </div>
        </div>
        {/* copyright  */}
        <div className="flex items-center justify-between border-t border-zinc-400 py-5 max-md:flex-col">
          <Image
            src={footer?.logo}
            alt="logo"
            className="h-20 w-auto object-contain"
          />
          <p className="text-center text-sm">{footer?.copyrightText}</p>
          {/* Socials  */}
          {footer?.socials && (
            <div className="flex-center gap-x-2 text-3xl text-white">
              {footer?.socials?.facebook && (
                <FaFacebook
                  className="social-icon"
                  onClick={() =>
                    window.open(footer?.socials?.facebook, "_blank")
                  }
                />
              )}
              {footer?.socials?.instagram && (
                <AiFillInstagram
                  className="social-icon"
                  onClick={() =>
                    window.open(footer?.socials?.instagram, "_blank")
                  }
                />
              )}
              {footer?.socials?.linkedin && (
                <FaLinkedinIn
                  className="social-icon"
                  onClick={() =>
                    window.open(footer?.socials?.linkedin, "_blank")
                  }
                />
              )}
              {footer?.socials?.youtube && (
                <TbBrandYoutubeFilled
                  className="social-icon"
                  onClick={() =>
                    window.open(footer?.socials?.youtube, "_blank")
                  }
                />
              )}
              {footer?.socials?.twitter && (
                <FaXTwitter
                  className="social-icon"
                  onClick={() =>
                    window.open(footer?.socials?.twitter, "_blank")
                  }
                />
              )}
            </div>
          )}
        </div>
      </Wrapper>
    </footer>
  );
}
