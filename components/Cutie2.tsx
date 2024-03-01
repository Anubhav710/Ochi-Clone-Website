"use client";

import { FG, NM } from "@/utils/font";
import Button_5 from "./Button_5";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Cutie2 = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [rotate, setRotate] = useState(0);

  const handleMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current!.getBoundingClientRect();
    console.log(width, height);

    let deltaX = clientX - left - width / 2;
    let deltaY = clientY - top - height / 2;

    let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    setRotate(angle - 180);
  };
  return (
    <div
      className="bg-[#CDEA68] relative z-30  rounded-2xl"
      onMouseMove={handleMouseMove}
      data-scroll
      data-scroll-speed="-.1"
    >
      {/* CUTIE  */}
      <div className="image-conatner w-full relative top-96  ">
        <div
          className="flex   space-x-7   justify-center "
          data-scroll
          data-scroll-speed=".4"
        >
          <motion.div
            ref={ref}
            className="w-40 h-40 lg:h-52 lg:w-52 bg-white rounded-full flex items-center justify-center "
          >
            <motion.div className="w-2/3 h-2/3 bg-black rounded-full flex items-center justify-center ">
              <motion.div
                style={{
                  rotate: rotate,
                }}
                className=" w-full h-4 lg:h-6 "
              >
                <div className="w-4 lg:w-6 h-full rounded-full bg-white" />
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            ref={ref}
            className="w-40 h-40 lg:h-52 lg:w-52 bg-white rounded-full flex items-center justify-center"
          >
            <motion.div className="w-2/3 h-2/3 bg-black rounded-full flex items-center justify-center ">
              <motion.div
                style={{
                  rotate: rotate,
                }}
                className=" w-full h-4 lg:h-6 "
              >
                <div className="w-4 lg:w-6  h-full rounded-full bg-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div
        className={` flex-col h-screen w-full ${FG.className} flex items-center justify-between py-24`}
      >
        <div className="text-[13vw] text-center leading-[55px] md:leading-[95px] lg:leading-[175px]">
          <h1>READY</h1>
          <h1>TO START</h1>
          <h1>THE PROJECT </h1>
        </div>
        <div className="space-y-4">
          <Button_5
            white
            classname={`bg-black py-3 px-6 rounded-full text-white`}
          >
            START THE PROJECT
          </Button_5>
          <h1 className={`text-center ${NM.className}`}>OR</h1>
          <Button_5
            classname={` py-3 px-6 rounded-full text-black border border-black`}
          >
            HELLO@OCHI.DESIGN
          </Button_5>
        </div>
      </div>
    </div>
  );
};

export default Cutie2;
