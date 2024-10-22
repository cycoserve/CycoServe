import React from "react";
import Image from "next/image";
import { resourcesInfo } from "./data/resourcesData";





const ResourcesGridComponent: React.FC = ({

}) => {
  return (
    <>
      <div className="">
        <section className="container mx-auto">
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {resourcesInfo.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-zinc-900 to-black rounded-lg p-2 border border-zinc-800 hover:border-orange-500 hover:cursor-pointer">
                  <Image
                    className="w-full h-auto aspect-video rounded-lg mb-4"
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                  />
                  <h2 className="text-2xl font-bold text-white px-2 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-[1.0rem] text-white mb-4 px-2 line-clamp-3">{item.description}</p>
                </div>
              ))}

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResourcesGridComponent;
