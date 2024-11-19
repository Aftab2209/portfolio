"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import { DiNpm } from "react-icons/di";

export function AnimatedPinDemo() {
  return (
    (<div className="flex items-center justify-center mb-10 ">
      <PinContainer title="/aftabalam.in" href="">
        <div
          className="flex basis-full flex-col rounded-xl p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <div className="flex w-full items-center justify-center">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Npm Package
          </h3>
          <DiNpm className="text-5xl ml-auto " fill=""/>
          </div>
        
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              will be
            </span>
          </div>
          <div
            className="flex flex-1 w-full rounded-lg mt-4  " />
        </div>
      </PinContainer>
    </div>)
  );
}
