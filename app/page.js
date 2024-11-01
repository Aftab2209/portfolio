import React from "react";
// import { Spotlight } from "@/components/ui/Spotlight";
import { TimelineDemo } from "@/components/ui/time";
import { LampContainer, LampDemo } from "@/components/ui/lamp";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
     <LampDemo/>
      <TimelineDemo />
    </>
  );
}
