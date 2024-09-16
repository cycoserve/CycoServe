import React from "react";
import { ReactNode } from "react";

interface SectionWrapProps {
  children: ReactNode;
}

const SectionWrap: React.FC<SectionWrapProps> = ({children}) => {
  return (
    <>
      <div className="max-w-7xl mx-auto bg-transparent  min-h-[100vh]">
        {children}
      </div>
    </>
  );
};

export default SectionWrap;
