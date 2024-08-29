import React from "react";
import Image from "next/image";

interface TwoColSectionProps {
  title1: string;
  description1: string;
  image1: string;
  title2: string;
  description2: string;
  image2: string;
}

const TwoColSection: React.FC<TwoColSectionProps> = ({
  title1,
  description1,
  image1,
  title2,
  description2,
  image2,
}) => {
  return (
    <>
      <div className="px-4 lg:px-0">
        <section className="container mx-auto">
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Column 1 */}
              <div className="bg-white rounded-lg p-2">
                <Image
                  className="w-full rounded-lg mb-4"
                  src={image1}
                  alt=""
                  width={500}
                  height={300}
                />
                <h2 className="text-xl font-bold text-zinc-900 px-2 mb-2">
                  {title1}
                </h2>
                <p className="text-[1.0rem] text-zinc-600 mb-4 px-2">{description1}</p>
              </div>
              {/* Column 2 */}
              <div className="bg-white rounded-lg p-2">
                <Image
                  className="w-full rounded-lg mb-4"
                  src={image2}
                  alt=""
                  width={500}
                  height={300}
                />
                <h2 className="text-xl font-bold text-zinc-900 px-2 mb-2">
                  {title2}
                </h2>
                <p className="text-[1.0rem] text-zinc-600 mb-4 px-2">{description2}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TwoColSection;
