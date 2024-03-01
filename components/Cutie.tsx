"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Cutie = () => {
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
    <div data-scroll data-scroll-speed="-.5" className="w-full  ">
      <div onMouseMove={handleMouseMove} className="image-conatner relative  ">
        <Image
          src={"/Top-Viewbbcbv-1-1440x921.jpg"}
          alt=""
          width={1920}
          height={100}
        />
        <div
          className="flex space-x-7 absolute md:top-[35%] md:left-[33%] top-[23%] left-[14%]  "
          data-scroll
          data-scroll-speed=".2"
        >
          <motion.div
            ref={ref}
            className="w-28 h-28 md:h-40 md:w-40 lg:h-80 lg:w-80 bg-white dark:bg-black rounded-full flex items-center justify-center"
          >
            <motion.div className="w-2/3 h-2/3 bg-black dark:bg-white  rounded-full flex items-center justify-center ">
              <motion.div
                style={{
                  rotate: rotate,
                }}
                className=" w-full h-4 lg:h-6 "
              >
                <div className="w-4 lg:w-6 h-full rounded-full bg-white dark:bg-black" />
              </motion.div>
            </motion.div>
            <h1 className="absolute text-white dark:text-black md:text-[1.7vw] text-xl ">
              PLAY
            </h1>
          </motion.div>
          <motion.div
            ref={ref}
            className="w-28 h-28 md:h-40 md:w-40  lg:h-80 lg:w-80 overflow-hidden dark:bg-black bg-white rounded-full flex items-center justify-center"
          >
            <motion.div className="w-2/3 h-2/3 bg-black dark:bg-white rounded-full flex items-center justify-center ">
              <motion.div
                style={{
                  rotate: rotate,
                }}
                className=" w-full h-4 lg:h-6 "
              >
                <div className="w-4 lg:w-6  h-full rounded-full bg-white dark:bg-black" />
              </motion.div>
            </motion.div>
            <h1 className="absolute text-white dark:text-black md:text-[1.7vw] text-xl ">
              PLAY
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cutie;
