"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "@/utils/motion";

const words = ["Hello", "Welcome", "To", "Ochi"];

export default function Loadering() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen w-[100vw] flex items-center justify-center fixed z-[99] bg-black"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            className="flex text-white font-bold items-center absolute z-10"
            variants={opacity}
            initial="initial"
            animate="enter"
          >
            <span className="block w-[30px] h-[30px] bg-white rounded-full mr-[10px]"></span>
            <h1 className="inline-block text-[10vw]">{words[index]}</h1>
          </motion.p>
          <svg className="absolute top-0 w-full h-[70vh]">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              className={"fill-[ #141516]"}
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
