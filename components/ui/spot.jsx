import React from "react";
import { Spotlight } from "../ui/Spotlight";
import ScrollDown from "./ScrollDown";
import { SlSocialLinkedin } from "react-icons/sl";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import Link from "next/link";
export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Hi, I’m Aftab
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          a full-stack developer passionate about creating end-to-end web
          solutions. With expertise across Angular, React, Node.js, and Next.js,
          I build seamless user experiences and scalable backends. Take a look
          at my work and see how I bring ideas to life through code.   
        </p>
        <div className="flex gap-4 mb-2 flex-wrap w-full items-center justify-center mt-4">
            <Link href={"https://www.linkedin.com/in/aftab-alam-12583a1b9/"} target="_blank">
            <button className="rounded-full w-[40px] h-[40px] inline-flex animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400">
            <SlSocialLinkedin />
            </button>
            </Link>
           
            <button className="rounded-full w-[40px] h-[40px] inline-flex h-8 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400">
            <BiLogoInstagramAlt className="text-2xl" />

            </button>
            <button className="rounded-full w-[40px] h-[40px]  inline-flex h-8 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400">
            <FaGithub />

            </button>
            <button className="rounded-full w-[40px] h-[40px]  inline-flex h-8 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400">
            <IoCallOutline />


            </button>
          </div>
        <ScrollDown />
      </div>
    </div>
  );
}
