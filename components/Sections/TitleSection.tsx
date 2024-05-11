import React from "react";

interface TitleSectionProps {
  title: string;
  subtitle: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, subtitle }) => {
  return (
    <>
      <div className="container mx-auto my-4  px-4 lg:px-0">
        <div className="max-w-3xl text-start">
          <div className="text-sm text-white md:text-lg mb-2">{subtitle}</div>
          <div className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-violet-500 overflow-y-visible pb-2">{title}</div>
        </div>
      </div>
    </>
  );
};

export default TitleSection;