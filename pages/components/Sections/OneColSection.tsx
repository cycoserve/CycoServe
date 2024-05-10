import React from "react";
import Image from "next/image";

interface OneColSectionProps {
  title: string;
  description: string;
  image: string;
}

const OneColSection: React.FC<OneColSectionProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <>
      <div className="px-4 lg:px-0">
        <section className="container py-4 mx-auto px-4 lg:px-4 bg-orange-800 backdrop-blur-sm rounded-md border-gray-500 border-2 border-opacity-15 my-12 ">
          <div className="mx-auto">
            <div className="grid grid-cols-1 items-start">
              <div>
                <Image
                  className="w-full h-48 rounded-lg mb-4"
                  src={image}
                  alt="CycoServe AI"
                  width={500}
                  height={300}
                />
                <h2 className="text-xl font-bold text-gray-100 mb-2">
                  {title}
                </h2>
                <p className="text-lg text-gray-100 mb-4">{description}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OneColSection;
