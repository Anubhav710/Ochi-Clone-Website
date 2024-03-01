"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import AnimatedButton from "./Button_1";
import NavButton from "./Button_1";
import SocialButton from "./Button_2";
import { FG } from "@/utils/font";

const NavLinks = [
  {
    name: "Services",
    href: "/",
  },
  {
    name: "Our work",
    href: "/",
  },
  {
    name: "About us",
    href: "/",
  },
  {
    name: "Insights",
    href: "/",
  },
  {
    name: "Contact us",
    href: "/",
  },
];

const SocialLinks = [
  {
    name: "Instagram",
    href: "/",
  },
  {
    name: "Behance",
    href: "/",
  },
  {
    name: "Facebook",
    href: "/",
  },
  {
    name: "Linkedin",
    href: "/",
  },
];

const location = [
  {
    name: "202-1965 W 4th Ave",
  },
  {
    name: "Vancouver, Canada",
  },
  {
    name: "30 Chukarina St",
  },
  {
    name: "Lviv, Ukraine",
  },
];

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0.5,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

type MobileNavbarProps = {
  isActive: boolean;
  setIsActive: any;
};
const MobileNavbar = ({ isActive, setIsActive }: MobileNavbarProps) => {
  return (
    <nav className="">
      <div className="container  ">
        <motion.button
          onClick={() => setIsActive(!isActive)}
          animate={isActive ? "open" : "closed"}
          id="line"
          className="space-y-2 h-10 w-10 rounded-full relative z-20  flex flex-col p-1 items-center justify-center"
        >
          <motion.div
            variants={{
              open: {
                rotate: "45deg",
                y: 5,
              },
              close: {
                rotate: "0deg",
              },
            }}
            className="w-[80%] h-[2px] absolute top-[35%]   bg-gray-400"
          />
          <motion.div
            variants={{
              open: {
                rotate: "-45deg",
                y: -5,
              },
              close: {
                rotate: "0deg",
              },
            }}
            className="w-[80%] h-[2px] absolute bottom-[35%] bg-gray-400"
          />
        </motion.button>
      </div>
      <div className="nav-window">
        {isActive && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            className={`absolute left-0 top-0 flex flex-col  z-10 bg-[#212121] origin-top h-screen w-full text-white `}
          >
            <div className="w-full h-[1px] bg-gray-500 relative top-[12%]" />
            <div className="pl-5 relative top-[15%] ">
              {NavLinks.map((link, i) => (
                <NavButton key={i} className={FG.className}>
                  {link.name}
                </NavButton>
              ))}
            </div>
            <div className="pl-5 relative top-[15%] space-y-6">
              <div>
                <h1>S:</h1>
                {SocialLinks.map((sLink) => (
                  <SocialButton title={sLink.name} key={sLink.name} />
                ))}
              </div>
              <div>
                <h1>L:</h1>
                {location.map((lLink) => (
                  <SocialButton title={lLink.name} key={lLink.name} />
                ))}
              </div>
              <div>
                E: <SocialButton title="hello@ochi.design" />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default MobileNavbar;
