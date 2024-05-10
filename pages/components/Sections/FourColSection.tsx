import React from "react";
import Image from "next/image";
import TitleSection from "./TitleSection";

interface FourColSectionProps {
  title1: string;
  description1: string;
  image1: string;
  title2: string;
  description2: string;
  image2: string;
  title3: string;
  description3: string;
  image3: string;
  title4: string;
  description4: string;
  image4: string;
}

const FourColSection: React.FC<FourColSectionProps> = ({
  title1,
  description1,
  image1,
  title2,
  description2,
  image2,
  title3,
  description3,
  image3,
  title4,
  description4,
  image4,
}) => {
  return (
    <>
      <div className="px-4 lg:px-0">
        <section className="container py-4 mx-auto px-4 lg:px-4 bg-gradient-to-l from-zinc-900 to-zinc-950 backdrop-blur-sm rounded-md border-gray-500 border-2 border-opacity-15 my-8">
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
              <div>
                <Image
                  className="w-full h-36 object-cover rounded-lg mb-4 shadow-lg shadow-blue-900/5 hover:shadow-blue-500/35"
                  src={image1}
                  alt=""
                  width={500}
                  height={300}
                />
                <h2 className="text-xl font-bold text-gray-100 mb-2">
                  {title1}
                </h2>
                <p className="text-sm text-gray-100 mb-4 ">{description1}</p>
              </div>
              <div>
                <Image
                  className="w-full h-36 object-cover rounded-lg mb-4 shadow-lg shadow-blue-900/5 hover:shadow-blue-500/35"
                  src={image2}
                  alt=""
                  width={500}
                  height={300}
                />
                <h2 className="text-xl font-bold text-gray-100 mb-2">
                  {title2}
                </h2>
                <p className="text-sm text-gray-100 mb-4">{description2}</p>
              </div>
              <div>
                <Image
                  className="w-full object-cover h-36 rounded-lg mb-4 shadow-lg shadow-blue-900/5 hover:shadow-blue-500/35"
                  src={image3}
                  alt=""
                  width={500}
                  height={300}
                />
                <h2 className="text-xl font-bold text-gray-100 mb-2">
                  {title3}
                </h2>
                <p className="text-sm text-gray-100 mb-4">{description3}</p>
              </div>
              <div>
                <Image
                  className="w-full h-36 object-cover top-0 rounded-lg mb-4 shadow-lg shadow-blue-900/5 hover:shadow-blue-500/35"
                  src={image4}
                  alt=""
                  width={500}
                  height={300}
                />
                <h2 className="text-xl font-bold text-gray-100 mb-2">
                  {title4}
                </h2>
                <p className="text-sm text-gray-100 mb-4">{description4}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FourColSection;
