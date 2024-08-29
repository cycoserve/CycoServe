import React from "react";
import Link from "next/link";

interface ButtonSecondaryProps {
  title: string;
  url: string;
}

const ButtonSecondary:React.FC<ButtonSecondaryProps> = ({ title, url }) => {
  return (
    <Link href={url}>
      <button className="bg-white hover:bg-gray-200 shadow-sm hover:shadow-lg text-black font-bold p-1 rounded-full transition duration-300 min-w-32">
        {title}
      </button>
    </Link>
  );
};

export default ButtonSecondary;
