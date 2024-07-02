import React from "react";
import { ReactNode } from "react";

interface SectionWrapProps {
  children: ReactNode;
}

const SectionWrap: React.FC<SectionWrapProps> = ({children}) => {
  return (
    <>
      <div className="wrapp  bg-transparent pb-12">
        {children}
      </div>
    </>
  );
};

export default SectionWrap;
