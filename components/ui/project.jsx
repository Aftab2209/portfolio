"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { AnimatedPinDemo } from "./card";
import { ExpandableCardDemo } from "@/components/ui/expandcard";

export const Project = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  return (
    <div
      className="w-full h-full bg-white dark:bg-neutral-950 md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Projects
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-md md:text-base max-w-sm">
          Here’s a selection of projects that showcase my skills, creativity,
          and commitment to results. Each one reflects unique challenges and
          achievements along the way.{" "}
        </p>
      </div>
      <div className="md:px-[8%] w-full gap-4 flex flex-wrap mb-10">
        <ExpandableCardDemo />
  
      </div>
    </div>
  );
};
