"use client";
import React from "react";
import FoundersGrotesk from "next/font/local";
import { GoArrowUpRight } from "react-icons/go";
import NeueMontreal from "next/font/local";
import Image from "next/image";
import { motion } from "framer-motion";
import { NM, FG } from "@/utils/font";

const Hero = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.6"
      className="w-full overflow-hidden     "
    >
      {/* WRAPPER DIV  */}
      <div>
        {/* H1 DIVS CONTAINER */}
        <div className="px-5 lg:px-14 pt-36">
          {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, i) => {
            return (
              <div className="masker  " key={i}>
                <div className="flex w-fit items-baseline ">
                  {i === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "10.2vw" }}
                      transition={{
                        duration: 0.5,
                        delay: 3,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                      className="w-[10.2vw] relative h-[6.3vw] rounded-md overflow-hidden bg-red-300 mr-2"
                    >
                      <Image
                        src="/content-image01.jpg"
                        alt="logo"
                        fill
                        sizes="100%"
                      />
                    </motion.div>
                  )}
                  <h1
                    className={`${FG.className} text-[10vw] font-bold leading-[8.1vw]`}
                  >
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM DIV  */}
        <div className="border-t  border-gray-400 mt-96 md:mt-36 py-4 ">
          <div
            className={`block   md:flex md:justify-between md:items-center space-y-7  px-5 lg:px-14 lg:text-[1vw] md:text-[1.5vw] ${NM.className}`}
          >
            {[
              "For public and private companies",
              "From the first pitch to IPO",
            ].map((item, i) => {
              return <p key={i}>{item}</p>;
            })}
            <div className="flex items-center gap-2 group ">
              <button className="p-3 py-1 border border-black rounded-full group-hover:bg-black group-hover:text-white transition-all duration-500">
                START THE PROJECT
              </button>
              <div className="relative items-center justify-center  w-10 h-10 border border-black rounded-full p-1  hidden lg:block ">
                <GoArrowUpRight className="w-7 h-7 z-20  relative group-hover:text-white duration-500 transition-all" />
                <div className="w-full h-full absolute inset-0 bg-black rounded-full scale-0 group-hover:scale-[1] duration-500 transition-all" />
              </div>
            </div>
          </div>
          <div className="px-14  hidden  justify-center mt-16  lg:flex   ">
            <h1 className="overflow-hidden">
              <motion.span
                animate={{ y: [-40, -40, -40, 0, 0, 0, 0, 20, 40, 40, 40] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="inline-block text-xl text-gray-400 leading-none"
              >
                Scroll Down
              </motion.span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
