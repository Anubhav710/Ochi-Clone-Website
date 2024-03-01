"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useAnimate } from "framer-motion";

const Button_3 = ({
  text,
  px,
  dpy,
  dpx,
  className,
}: {
  text: string;
  px?: string;
  dpx?: string;
  dpy?: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const handleMouseEnter = async () => {
    await animate(
      "#Circle1",
      { y: "0%", display: "block" },
      { duration: 0.5, ease: "linear" }
    );
  };
  const handleMouseLeave = async () => {
    await animate(
      "#Circle1",
      { y: "-100%", display: "block" },
      { duration: 0.5, ease: "linear" }
    );
    await animate(
      "#Circle1",
      { y: "100%", display: "none" },
      { duration: 0.5, ease: "linear" }
    );
  };
  return (
    <AnimatePresence>
      {/* BUTTON  */}
      <motion.div
        ref={scope}
        className="group    cursor-pointer mr-4 mb-2  rounded-full border border-black  overflow-hidden  justify-center   relative items-center flex"
      >
        <h1
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`  px-[1rem] py-2 lg:text-xl ${className}  text-black relative z-10  group-hover:text-white delay-100 transition-all`}
        >
          {text}
        </h1>
        {/* Animated Cirvle  */}
        <motion.div
          id="Circle1"
          initial={{ y: "70%" }}
          className={`px-[2.2rem] py-[5.2rem] text-2xl bg-black rounded-full absolute  `}
        >
          {text}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Button_3;
