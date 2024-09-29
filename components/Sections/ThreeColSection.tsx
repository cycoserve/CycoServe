import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ThreeColSectionProps {
  title1: string;
  description1: string;
  image1: string;
  title2: string;
  description2: string;
  image2: string;
  title3: string;
  description3: string;
  image3: string;
}

const ThreeColSection: React.FC<ThreeColSectionProps> = ({
  title1,
  description1,
  image1,
  title2,
  description2,
  image2,
  title3,
  description3,
  image3,
}) => {
  return (
    <>
      <div className=" ">
        <section className="container py-4 mx-auto my-0 ">
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <Link href={'/'} className=" bg-gradient-to-br from-zinc-900 to-black rounded-md border border-zinc-800 hover:border-orange-500 p-2">
                <Image
                  className="w-full rounded-lg mb-4 aspect-video"
                  src={image1}
                  alt=""
                  width={500}
                  height={300}
                />
                <h2 className="text-lg font-bold text-white mb-2">
                  {title1}
                </h2>
                <p className="text-[0.8rem] text-white mb-4 line-clamp-2">{description1}</p>
              </Link>
              <Link href={'/'} className=" bg-gradient-to-br from-zinc-900 to-black rounded-md border border-zinc-800 hover:border-orange-500 p-2">
                <Image
                  className="w-full rounded-lg mb-4 aspect-video"
                  src={image2}
                  alt=""
                  width={500}
                  height={300}
                />
                <h2 className="text-lg font-bold text-white mb-2">
                  {title2}
                </h2>
                <p className="text-[0.8rem] text-white mb-4 line-clamp-2">{description2}</p>
              </Link>
              <Link href="/" className=" bg-gradient-to-br from-zinc-900 to-black rounded-md border border-zinc-800 hover:border-orange-500 p-2">
                <Image
                  className="w-full rounded-lg mb-4 aspect-video"
                  src={image3}
                  alt=""
                  width={500}
                  height={300}
                />
                <h2 className="text-lg font-bold text-white mb-2">
                  {title3}
                </h2>
                <p className="text-[0.8rem] text-white mb-4 line-clamp-2">{description3}</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ThreeColSection;
