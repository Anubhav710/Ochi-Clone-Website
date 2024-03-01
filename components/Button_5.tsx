import { NM } from "@/utils/font";
import React from "react";

const Button_5 = ({
  children,
  classname,
  white,
}: {
  children: React.ReactNode;
  classname: any;
  white?: boolean;
}) => {
  return (
    <button className={`   rounded-full  ${NM.className}  ${classname}`}>
      <h1 className={`flex items-center justify-center`}>
        {children}{" "}
        <span
          className={`inline-block w-2 h-2 ml-4 ${
            white ? "bg-white" : "bg-black"
          } rounded-full`}
        />
      </h1>
    </button>
  );
};

export default Button_5;
