import React from "react";
import Link from "next/link";

interface ButtonSecondaryProps {
  title: string;
  btnLink: string;
}

const ButtonSecondary:React.FC<ButtonSecondaryProps> = ({ title, btnLink }) => {
  return (
    <Link href={btnLink}>
      <button className="bg-white border shadow-sm hover:shadow-lg hover:bg-slate-100 text-gray-900 font-bold py-2 px-8 rounded-full transition duration-300">
        {title}
      </button>
    </Link>
  );
};

export default ButtonSecondary;
