import React, { FC } from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
}

const Button: FC<ButtonProps> = ({ text, href,}) => {
  return (
    <Link href={href}>
      <button className={`border bg-black text-white px-4 py-2 rounded-lg hover:bg-zinc-800`}>
        {text}
      </button>
    </Link>
  );
};

export default Button;

