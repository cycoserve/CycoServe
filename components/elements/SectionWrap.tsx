import React from "react";
import { ReactNode } from "react";

interface SectionWrapProps {
  children: ReactNode;
}

const SectionWrap: React.FC<SectionWrapProps> = ({children}) => {
  return (
    <>
      <div className="wrapp min-h-full bg-transparent pt-12 pb-12">
        {children}
      </div>
    </>
  );
};

export default SectionWrap;
