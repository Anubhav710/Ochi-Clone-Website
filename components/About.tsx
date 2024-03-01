import { NM } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialButton from "./Button_2";
import Button_5 from "./Button_5";

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

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-speed=".1"
      className={`py-20  w-full relative z-30 rounded-2xl  bg-[#CDEA68] ${NM.className}`}
    >
      <h1 className="text-4xl w-full lg:px-14 px-5 max-w-[1700px] lg:text-[69px] lg:leading-[69px] md:text-[40px] md:leading-[40px] ">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full h-[1px] bg-gray-400 mt-14 " />
      <div className="mt-5  lg:px-14 px-5 md:flex md:justify-between md:text-[21.33px]">
        <h5>What you can expect:</h5>
        <div className="mt-5 md:mt-0">
          <p className="max-w-[380px] mb-5">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it live or digital,
            delivered for one or a hundred people.
          </p>
          <p className="max-w-[380px]">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="mt-5 md:mt-0">
          <h1>S:</h1>
          {NavLinks.map((NLink) => (
            <SocialButton title={NLink.name} key={NLink.name} />
          ))}
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-400 mt-14 " />
      <div className="px-5 w-full lg:px-14 space-y-7 md:flex">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-[4vw] lg:my-10 my-5">
            Our approach:
          </h1>
          <Button_5
            white
            classname={
              "bg-black text-white px-6 py-3 lg:px-10 lg:py-5  lg:text-lg"
            }
          >
            READ MORE
          </Button_5>
        </div>
        <div className="w-full md:w-1/2 h-[40vh] lg:h-[70vh]  bg-red-400 rounded-2xl relative overflow-hidden">
          <Image src={"/Homepage-Photo-663x469.jpg"} alt="" fill sizes="100%" />
        </div>
      </div>
    </div>
  );
};

export default About;
