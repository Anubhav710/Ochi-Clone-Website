import { FG, NM } from "@/utils/font";
import React from "react";
import SocialButton from "./Button_2";

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
const Footer = () => {
  return (
    <div className="rounded-2xl relative z-50  bg-[#F1F1F1] lg:px-14 px-5   w-full  pt-16 pb-2">
      <div className="">
        <div className="md:flex block h-full w-full">
          {/* LEFT CONTAINER  */}
          <div className={`text-8xl leading-[70px]  w-1/2 `}>
            <h1 className={`${FG.className}`}>
              EYE- <br />
              OPENING
            </h1>
          </div>
          {/* RIGHT CONTAINER  */}

          <div className={`  flex flex-col md:w-1/2 w-full  overflow-x-clip `}>
            <h1 className={`${FG.className} text-8xl`}>PRESENTATIONS</h1>
            <div className="flex justify-between items-center ">
              <div className="space-y-7">
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
              <div>
                <h1>S:</h1>
                {NavLinks.map((NLink) => (
                  <SocialButton title={NLink.name} key={NLink.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM ELEMNTS  */}
        <div className="mt-5 block md:mt-16   md:flex md:justify-between md:w-full">
          <h1
            className={`${NM.className} md:w-1/2 font-extrabold text-4xl py-2`}
          >
            ochi
          </h1>
          <h1
            className={`${NM.className} md:w-1/2   text-lg text-gray-400 py-2 md:flex md:justify-between`}
          >
            <p>© ochi design 2024. Legal Terms</p>
            <p>Website by Obys</p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <h1 className={`${NM.className} font-extrabold text-4xl`}>ochi</h1> */
}

{
}
