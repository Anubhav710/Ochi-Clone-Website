import React from "react";

type ButtonProps = {
  title: string;
};

const Button_4 = ({ title }: ButtonProps) => {
  return (
    <div className="px-4 mr-4 mb-2 py-1 rounded-full border border-black inline-block">
      {title}
    </div>
  );
};

export default Button_4;
