import React from "react";
import { ReactNode } from "react";

interface SectionWrapProps {
  children: ReactNode;
}

const SectionWrap: React.FC<SectionWrapProps> = ({children}) => {
  return (
    <>
      <div className="max-w-7xl mx-auto bg-transparent px-4 ">
        {children}
      </div>
    </>
  );
};

export default SectionWrap;
