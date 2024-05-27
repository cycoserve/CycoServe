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
        <section className="container flex justify-center items-center mx-auto min-h-96  py-4 px-4 lg:px-4 features-bg rounded-md border-gray-500 border-2 border-opacity-15 my-4 ">
          <div className="">
            <div className="inline-flex justify-center items-start">
              <div>
                <h2 className="text-4xl font-bold text-gray-100 mb-2">
                  {title}
                </h2>
                <p className="text-lg text-gray-100 mb-4">{description}</p>
              </div>
              <div className="list">
                The list
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OneColSection;
