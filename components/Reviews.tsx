import React from "react";
import Button from "./Button_4";
import Image from "next/image";
import { NM } from "@/utils/font";

const Infomation = [
  {
    name: "Planetly",
  },
  {
    name: "Workiz Easy",
  },
  {
    name: "Premium Blend",
  },
  {
    name: "Hypercase System",
  },
  {
    name: "Officevibe",
  },
  {
    name: "Orderlion",
  },
  {
    name: "Black Book",
  },
  {
    name: "Trawa Energy",
  },
];

const Reviews = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl border-b  border-slate-300 py-8 px-5 lg:px-14">
          Clients review
        </h1>
        <div className="flex justify-between px-5 lg:px-14">
          <p>Karman Ventures</p>
          <p>READ</p>
        </div>
        <div className="px-5 lg:px-14">
          <div>
            <h4 className="mt-5">Services:</h4>
            <div className="mt-3">
              <Button title="INVESTOR DECK" />
              <Button title="SALES DECK" />
            </div>
          </div>
          <div className="space-y-3 mt-5">
            <h5>William Barnes</h5>
            <Image
              src="/William-Barnes-1-300x300.png"
              alt="image"
              width={120}
              height={64}
            />
            <p>
              They were transparent about the time and the stages of the
              project. The end product is high quality, and I feel confident
              about how they were handholding the client through the process. I
              feel like I can introduce them to someone who needs to put a sales
              deck together from scratch, and they would be able to handhold the
              client experience from 0 to 100 very effectively from story to
              design. 5/5
            </p>
          </div>
        </div>
        <div className="border-slate-300 border-t mt-8 ">
          {Infomation.map((inf, i) => {
            return <Info title={inf.name} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

type InfoProp = {
  title: string;
};
type BoxProp = {
  title: string;
  year: string;
};

export const Info = ({ title }: InfoProp) => {
  return (
    <div className="">
      <div
        className={`flex justify-between  border-b p-5 lg:px-14  capitalize border-slate-300 ${NM.className}`}
      >
        <h5 className="">{title}</h5>
        <h5>READ</h5>
      </div>
    </div>
  );
};
