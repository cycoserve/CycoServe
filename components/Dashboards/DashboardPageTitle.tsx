import React from 'react'
import { ReactNode } from 'react'

interface DashboardPageTitleProps {
    children: ReactNode;
    subtitle: string;

}

const DashboardPageTitle: React.FC<DashboardPageTitleProps> = ({ children, subtitle }) => {
    return (
        <>
            <div className='text-2xl flex flex-col font-semibold mb-6 container mx-auto'>
                {children}
                <div className='font-thin text-sm '>{subtitle}</div>
            </div>

        </>
    )
}

export default DashboardPageTitle