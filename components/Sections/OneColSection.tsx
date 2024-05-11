import React from "react";
import Image from "next/image";

interface OneColSectionProps {
  title: string;
  description: string;

}

const OneColSection: React.FC<OneColSectionProps> = ({
  title,
  description,

}) => {
  return (
    <>
      <div className="px-4 lg:px-0">
        <section className="container mx-auto h-48  py-4 px-4 lg:px-4 bg-zinc-950 backdrop-blur-sm rounded-md border-gray-500 border-2 border-opacity-15 my-12 ">
          <div className="">
            <div className="grid grid-cols-2 items-start">
              <div>
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
