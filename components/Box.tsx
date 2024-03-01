import { NM } from "@/utils/font";
import Image from "next/image";
import React from "react";

const Box = () => {
  return (
    <div
      className={`md:flex md:space-x-3 block  w-full mt-24 mb-72 px-5 ${NM.className} lg:px-14  sticky top-2 `}
    >
      <div className="h-[32vh] lg:h-[40vh] md:w-1/2 w-full rounded-2xl relative bg-[#004D43] text-[#CDEA68] mt-5">
        <h1 className="text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  font-bold ">
          Ochi
        </h1>
        <button className="absolute bottom-5 text-sm left-5 px-4 py-1 border border-[#CDEA68] rounded-3xl">
          &copy; 2019-2022
        </button>
      </div>
      <div className="h-[32vh] lg:h-[40vh] md:w-[25%]  w-full rounded-2xl relative bg-black text-white mt-5 flex items-center justify-center">
        <h1 className="text-6xl  font-bold flex flex-col items-center ">
          Clutch <span className="text-xl">⭐⭐⭐⭐⭐</span>
        </h1>
        <button className="absolute bottom-5 text-sm left-5 px-4 py-1 border border-white rounded-3xl ">
          RATING 5.0 ON CLUTCH
        </button>
      </div>
      <div className="h-[32vh] lg:h-[40vh] md:w-[25%]  w-full rounded-2xl relative bg-black  mt-5">
        <div className="text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  font-bold ">
          <Image src={"/logo003.png"} alt="image" width={100} height={100} />
        </div>
        <button className="absolute bottom-5 text-sm left-5 px-4 py-1 border border-white text-white rounded-3xl">
          BUSINESS BOOTCAMP ALUMNI
        </button>
      </div>
    </div>
  );
};

export default Box;
