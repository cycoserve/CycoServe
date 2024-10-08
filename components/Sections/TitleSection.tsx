import React from "react";

interface TitleSectionProps {
  title: string;
  subtitle: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, subtitle }) => {
  return (
    <>
      <div className="mx-auto mb-8 max-w-7xl">
        <div className="max-w-3xl text-start">
          <div className="text-md text-white font-semibold md:text-lg mb-2">{subtitle}</div>
          <div className="text-4xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-violet-500 overflow-y-visible pb-2">{title}</div>
        </div>
      </div>
    </>
  );
};

export default TitleSection;
