import React from "react";
import { ReactNode } from "react";

interface LongTextSectionProps {
  children: ReactNode;
}

const LongTextSection: React.FC<LongTextSectionProps> = ({ children }) => {
  return (
    <>
      <section className="px-4 lg:px-0">
        <div className="container mx-auto h-full px-0 lg:px-0 my-0 ">
          <div className="max-w-5xl text-white">{children}</div>
        </div>
      </section>
    </>
  );
};

export default LongTextSection;
