import { title } from "process";
import React from "react";
import { ReactNode } from "react";

interface PageHeroProps {
  title:string;
}

const PageHero: React.FC<PageHeroProps> = ({ title }) => {
  return (
    <section className="bg-gray-900 w-full text-white pt-32 pb-12">
      <div className="container mx-auto px-4 lg:px-2">
        <div className="max-w-2xl text-start">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-normal mb-6">
         {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
