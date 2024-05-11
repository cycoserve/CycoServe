import React, { Children } from 'react'
import { ReactNode } from 'react'

interface ParagraphTitleProps {
    children:ReactNode;
}

const ParagraphTitle:React.FC<ParagraphTitleProps> = ({children}) => {
  return (
    <>
    <h2 className="text-xl my-4 max-w-3xl font-semibold">
        {children}
    </h2>
    </>
    
  )
}

export default ParagraphTitle