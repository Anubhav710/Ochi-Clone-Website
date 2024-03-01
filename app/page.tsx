"use client";
import About from "@/components/About";
import Box from "@/components/Box";
import Cutie from "@/components/Cutie";
import Cutie2 from "@/components/Cutie2";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loadering from "@/components/Loadering";

import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Project";
import Reviews from "@/components/Reviews";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        smooth: true,
      });
      setTimeout(() => {
        setIsLoading(false);

        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <main className="bg-[#F1F1F1]">
      <AnimatePresence mode="wait">
        {isLoading && <Loadering />}
      </AnimatePresence>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Cutie />
      <Projects />
      <Reviews />
      <Box />
      <Cutie2 />
      <Footer />
    </main>
  );
}
