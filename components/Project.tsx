"use client";
import Image from "next/image";

import React, { useState } from "react";
import NeueMontreal from "next/font/local";
import Button_3 from "./Button_3";
import { motion } from "framer-motion";
import { NM, FG } from "@/utils/font";

const myFont1 = NeueMontreal({
  src: "../fonts/NeueMontreal-Regular.ttf",
  display: "swap",
});

const Projects = () => {
  return (
    <div
      className={` relative z-30 w-full ${myFont1.className} rounded-2xl  bg-[#F1F1F1]`}
    >
      <div className="w-full h-full ">
        <div className="">
          <h1 className="text-4xl border-b py-7 border-b-black px-5 lg:px-14">
            Featured projects
          </h1>
        </div>
        <div className="flex flex-col w-full  px-5 mt-10 lg:px-14 space-y-5 ">
          <div className="w-full flex flex-col space-y-5">
            <ImageContainer
              name="
              FYDE
              "
              img1="/Vise_front2-663x551.jpg"
              imgCnt1={["AGENCY", "COMPANY PRESENTATION"]}
              img="/Fyde_Illustration_Crypto_2-663x551.png"
              imgCnt={["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"]}
              name1="VISE"
            />
            <ImageContainer
              name="
              TRAWA
              "
              img1="/PB-Front-4-663x551.png"
              imgCnt1={["BRAND IDENTITY", "DESIGN RESEARCH", "INVESTOR DECK"]}
              img="/Frame-3875-663x551.jpg"
              imgCnt={["BRAND TEMPLATE"]}
              name1="PREMIUM BLEND"
            />
          </div>

          <div className="flex justify-center py-5">
            <button className="bg-black text-white flex items-center space-x-7 py-3 px-5 rounded-full">
              <h1>VIWE ALL CASE STUDIES </h1>
              <div className="w-3 h-3 rounded-full bg-white " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

const Varient1 = {
  onHover: {
    scale: 0.95,
  },
};
const Varient2 = {
  onHover: {
    scale: 1.1,
  },
};

const Varient3 = {
  initial: {
    y: "100%",
  },
  onHover: {
    y: "0%",
  },
};

type ImageContainerProp = {
  img: string;
  name: string;
  imgCnt: string[];
  img1: string;
  name1: string;
  imgCnt1: string[];
};

const ImageContainer = ({
  img,
  name,
  imgCnt,
  name1,
  img1,
  imgCnt1,
}: ImageContainerProp) => {
  const [showText, setShowText] = useState(false);
  const [showText1, setShowText1] = useState(false);
  const [key, setKey] = useState(0);
  const [key1, setKey1] = useState(0);

  const handleMouseEnter = () => {
    setShowText(true);
    setKey(1);
  };
  const handleMouseLeave = () => {
    setShowText(true);
    setKey(0);
  };
  const handleMouseEnter1 = () => {
    setShowText1(true);
    setKey1(1);
  };
  const handleMouseLeave1 = () => {
    setShowText1(true);
    setKey1(0);
  };

  return (
    <motion.div className="w-full  block  md:flex    relative ">
      {key === 1 && (
        <div className="font-bold   pointer-events-none text-[#CCE478] text-center md:text-6xl lg:text-[6rem] w-full  overflow-hidden absolute z-50 text-6xl top-[20%] md:-translate-y-1/2 md:top-1/2">
          {name.split("").map((item, indx) => {
            return (
              <motion.span
                key={indx}
                initial={showText ? { y: "100%" } : { y: 0 }}
                animate={showText ? { y: 0 } : { y: "100%" }}
                transition={{
                  delay: indx * 0.05,
                  duration: 0.3,
                }}
                className={`${FG.className} inline-block`}
              >
                {item}
              </motion.span>
            );
          })}
        </div>
      )}
      {key1 === 1 && (
        <div className="font-bold  pointer-events-none text-[#CCE478] text-center md:text-6xl lg:text-[6rem] w-full  overflow-hidden absolute z-50 top-[73%] text-6xl md:-translate-y-1/2 md:top-1/2 ">
          {name1.split("").map((item, indx) => {
            return (
              <motion.span
                key={indx}
                initial={showText1 ? { y: "100%" } : { y: 0 }}
                animate={showText1 ? { y: 0 } : { y: "100%" }}
                transition={{
                  delay: indx * 0.05,
                  duration: 0.3,
                }}
                className={`${FG.className} inline-block`}
              >
                {item}
              </motion.span>
            );
          })}
        </div>
      )}

      {/* FIRST CONTAINER  */}
      <motion.div className="outer-container md:w-1/2   space-y-4 p-2  relative ">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-black " />
          {name}
        </div>
        <motion.div
          variants={Varient1}
          whileHover={"onHover"}
          transition={{ duration: 0.7 }}
          className=" rounded-3xl  overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            variants={Varient2}
            transition={{ duration: 0.7 }}
            className="inner-conainer "
          >
            <Image
              src={img}
              alt="image"
              width={1080}
              height={100}
              className="w-full  object-cover rounded-3xl"
            />
          </motion.div>
        </motion.div>

        <div className="flex flex-wrap ">
          {imgCnt.map((word, i) => {
            return (
              <div key={i}>
                <Button_3 text={word} key={i} />
              </div>
            );
          })}
        </div>
      </motion.div>
      {/* SECOUND CONTAINER  */}
      <motion.div className="outer-container md:w-1/2  space-y-4 p-2  relative ">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-black " />
          {name1}
        </div>
        <motion.div
          variants={Varient1}
          whileHover={"onHover"}
          transition={{ duration: 0.7 }}
          className=" rounded-3xl  overflow-hidden"
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          <motion.div
            variants={Varient2}
            transition={{ duration: 0.7 }}
            className="inner-conainer "
          >
            <Image
              src={img1}
              alt="image"
              width={1080}
              height={100}
              className="w-full  object-cover rounded-3xl"
            />
          </motion.div>
        </motion.div>

        <div className="flex flex-wrap ">
          {imgCnt1.map((word, i) => {
            return (
              <div key={i}>
                <Button_3 text={word} key={i} />
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};
