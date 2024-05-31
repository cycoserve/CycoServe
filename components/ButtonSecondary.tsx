import React from "react";
import Link from "next/link";

interface ButtonSecondaryProps {
  title: string;
  url: string;
}

const ButtonSecondary:React.FC<ButtonSecondaryProps> = ({ title, url }) => {
  return (
    <Link href={url}>
      <button className="bg-white border shadow-sm hover:shadow-lg hover:bg-slate-100 text-gray-900 font-bold py-1 px-2 rounded-full transition duration-300">
        {title}
      </button>
    </Link>
  );
};

export default ButtonSecondary;
