import React from 'react'
import { ReactNode } from 'react'

interface DashboardPageTitleProps {
    children: ReactNode;
    subtitle: string;

}

const DashboardPageTitle: React.FC<DashboardPageTitleProps> = ({ children }) => {
    return (
        <>
            <div className='text-xl flex flex-col text-gray-700 mb-6 container mx-auto'>
                {children}
            </div>

        </>
    )
}

export default DashboardPageTitle