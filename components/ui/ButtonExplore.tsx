import React from "react";
import Link from "next/link";

interface ButtonExploreProps {
  title: string;
  url: string;
}

const ButtonExplore:React.FC<ButtonExploreProps> = ({ title, url }) => {
  return (
    <Link href={url}>
      <button className="bg-purple-600 hover:bg-purple-700 shadow-sm hover:shadow-lg text-white font-bold p-1 rounded-full transition duration-300 min-w-32">
        {title}
      </button>
    </Link>
  );
};

export default ButtonExplore;
