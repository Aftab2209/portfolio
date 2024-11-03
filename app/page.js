import React from "react";
// import { Spotlight } from "@/components/ui/Spotlight";
import { TimelineDemo } from "@/components/ui/time";
import { LampContainer, LampDemo } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { SpotlightPreview } from "@/components/ui/spot";
export default function Home() {
  return (
    <>
     {/* <LampDemo/> */}
     <SpotlightPreview/>
      <TimelineDemo />
    </>
  );
}
