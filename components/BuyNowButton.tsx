import React from "react";
import Link from "next/link";

interface BuyNowButonProps {
  title: string;
  url: string;
}

const BuyNowButon: React.FC<BuyNowButonProps> = ({ title, url }) => {
  return (
    <Link href={url} className="inline-block">
      <button className="bg-orange-500 hover:bg-orange-600 shadow-sm hover:shadow-lg text-white font-bold py-2 px-16 rounded-full transition duration-300">
        {title}
      </button>
    </Link>
  );
};

export default BuyNowButon;