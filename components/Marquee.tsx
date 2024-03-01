"use client";
import React from "react";
import { motion } from "framer-motion";
import FoundersGrotesk from "next/font/local";
import { FG } from "@/utils/font";

let xP = 0;
let direction = -1;

const marqueeVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-400%",
  },
};

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.4"
      className={` relative    w-full ${FG.className}`}
    >
      <div className=" w-full py-10 bg-[#004D43]  rounded-2xl ">
        <div className="slider border-t-2 border-b-2 border-zinc-300 uppercase text-white  p-2 flex whitespace-nowrap overflow-hidden ">
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
            }}
            className="text-[24vw]   leading-none pr-20"
          >
            we are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
            }}
            className="text-[24vw] leading-none pr-20 "
          >
            we are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
            }}
            className="text-[24vw] leading-none pr-20"
          >
            we are ochi
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
