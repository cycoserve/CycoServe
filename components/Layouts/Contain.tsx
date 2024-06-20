
import React from 'react'
import { ReactNode } from 'react'

interface ContainProps {
    children: ReactNode;
}


const Contain:React.FC<ContainProps> = ({children}) => {
  return (
    <>
    <div className="container mx-auto h-full px-4 lg:px-0">
        {children}
    </div>
    </>

  )
}

export default Contain