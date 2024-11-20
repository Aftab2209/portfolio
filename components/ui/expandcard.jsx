"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/lib/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (<div className="w-full flex flex-wrap">
    <AnimatePresence>
      {active && typeof active === "object" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 h-full w-full z-10" />
      )}
    </AnimatePresence>
    <AnimatePresence>
      {active && typeof active === "object" ? (
        <div className="fixed inset-0  grid place-items-center z-[100]">
          <motion.button
            key={`button-${active.title}-${id}`}
            layout
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.05,
              },
            }}
            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
            onClick={() => setActive(null)}>
            <CloseIcon />
          </motion.button>
          <motion.div
            layoutId={`card-${active.title}-${id}`}
            ref={ref}
            className="w-full max-w-[700px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
            <motion.div layoutId={`image-${active.title}-${id}`}>
              <Image
                priority
                width={200}
                height={200}
                src={active.src}
                alt={active.title}
                className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
            </motion.div>

            <div>
              <div className="flex justify-between items-start p-4">
                <div className="">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-bold text-neutral-700 dark:text-neutral-200">
                    {active.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400">
                    {active.description}
                  </motion.p>
                </div>

                <motion.a
                  layoutId={`button-${active.title}-${id}`}
                  href={active.ctaLink}
                  target="_blank"
                  className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white">
                  {active.ctaText}
                </motion.a>
              </div>
              <div className="pt-4 relative px-4">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
    <ul className="w-full mx-auto w-full gap-4 flex flex-wrap">
      {cards.map((card, index) => (
        <motion.div
          layoutId={`card-${card.title}-${id}`}
          key={`card-${card.title}-${id}`}
          onClick={() => setActive(card)}
          className="p-4 w-[100%] flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
          <div className="flex gap-4 flex-col md:flex-row w-[90%] items-center justify-center">
            <motion.div layoutId={`image-${card.title}-${id}` } className="md:w-1/3 w-full">
              <Image
                width={100}
                height={100}
                src={card.src}
                alt={card.title}
                className="h-40 w-full md:h-full rounded-lg object-cover object-top " />
            </motion.div>
            <div className="w-full md:ml-10 md:mr-10">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left ">
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-neutral-600 dark:text-neutral-400 text-center md:text-left">
                {card.description}
              </motion.p>
            </div>
          </div>
          <motion.button
            layoutId={`button-${card.title}-${id}`}
            className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0 md:w-[10%]">
            {card.ctaText}
          </motion.button>
        </motion.div>
      ))}
    </ul>
  </div>);
}

export const CloseIcon = () => {
  return (
    (<motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>)
  );
};

const cards = [
  {
    id: "1",
    description: "A simple yet powerful React hooks library for browser APIs like enhanced LocalStorage with auto-expiry and easy set/get methods to track item age, same for Session Storage, Geolocation, and Clipboard. Effortlessly add real-time location tracking, clipboard access, and smart storage to your React apps.",
    title: "An NPM package - react-browser-api",
    src: "/npm.png",
    ctaText: "Know more!",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>

The react-browser-api library streamlines integrating complex browser functionalities with React's declarative components, saving development time and improving maintainability. Whether you're building modern applications with dynamic user data or need to handle advanced storage management seamlessly, this package provides a robust solution. It is lightweight, well-documented, and designed to scale with the needs of small to large projects alike.
          </p>)
      );
    },
  },
  {
    id: "2",
    description: "As part of ITC's data migration project for BAT, I developed a code converter tool to streamline the transition from Snowflake to Microsoft Fabric. This tool automatically converts Snowflake SQL code into Spark SQL, simplifying a complex migration process that typically requires significant manual effort.",
    title: "Code Converter",
    src: "/npm.png",
    ctaText: "Know more!",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>The tool was designed to handle the nuances and syntax differences between Snowflake and Spark SQL, ensuring that existing queries and scripts would work seamlessly in the new environment. By reducing the need for manual rewriting of SQL code, it saved valuable time and minimized the risk of errors, making the migration process smoother and more efficient.
<br></br>
                  </p>)
      );
    },
  },
  
  {
    id: "3",
    description: "I developed a Power BI Designer Tool that revolutionizes the way users design and customize Power BI reports. This tool leverages reverse engineering techniques to automatically generate templates. Users can then simply connect their own data sources, eliminating the need to start from scratch.",
    title: "Power BI Designer",
    src: "/npm.png",
    ctaText: "Know more!",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>The tool offers features like color theming and a variety of pre-made templates, allowing users to quickly apply consistent branding and visual designs to their reports. This approach not only saves time but also enhances the design process, enabling users to create polished and professional reports with minimal effort.
                  </p>)
      );
    },
  },

];
