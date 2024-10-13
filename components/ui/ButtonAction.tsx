import React from "react";
import Link from "next/link";

interface ButtonActionProps {
  title: string;
  url: string;
}

const ButtonAction: React.FC<ButtonActionProps> = ({ title, url }) => {
  return (
    <Link href={url} className="inline-block">
      <button className="bg-orange-500 hover:bg-orange-400 shadow-sm hover:shadow-lg text-white font-bold px-4 py-1 rounded-full transition duration-300 min-w-24">
        {title}
      </button>
    </Link>
  );
};

export default ButtonAction;