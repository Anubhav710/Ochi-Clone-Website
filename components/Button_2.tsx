import React from "react";
import font from "next/font/local";

const FG = font({
  src: "../fonts/NeueMontreal-Regular.ttf",
  display: "swap",
});

const SocialButton = ({ title }: { title: string }) => {
  return (
    <div className={`${FG.className}`}>
      <h1 className="text-md capitalize">{title}</h1>
    </div>
  );
};

export default SocialButton;
