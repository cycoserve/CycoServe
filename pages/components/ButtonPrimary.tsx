import React from "react";
import Link from "next/link";

interface ButtonPrimaryProps {
  title: string;
  url: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ title, url }) => {
  return (
    <Link href={url} className="inline-block">
      <button className="bg-orange-500 hover:bg-orange-600 shadow-sm hover:shadow-lg text-white font-bold py-2 px-8 rounded-full transition duration-300">
        {title}
      </button>
    </Link>
  );
};

export default ButtonPrimary;