"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

const NavButton = ({
  className,
  children,
}: {
  className?: any;
  children: React.ReactNode;
}) => {
  return (
    <div className=" ">
      <motion.div
        whileHover={"hover"}
        className="cursor-pointer  inline-block overflow-hidden h-[5rem] lg:h-[2rem] "
      >
        <motion.h1
          variants={{
            hover: {
              y: "-100%",
            },
          }}
          transition={{
            type: "spring",
            duration: ".8",
          }}
          className={`text-6xl h-[5rem] lg:h-[2rem] inline-block   md:text-7xl  uppercase lg:capitalize lg:text-[21.3333px] ${className}  `}
        >
          {children}
        </motion.h1>
        <br />
        <motion.h1
          variants={{
            hover: {
              y: "-100%",
            },
          }}
          transition={{
            type: "spring",
            duration: ".8",
          }}
          className={`text-6xl h-[5rem] lg:h-[2rem] inline-block  md:text-7xl  uppercase lg:capitalize lg:text-[21.3333px] ${className}  `}
        >
          {children}
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default NavButton;
