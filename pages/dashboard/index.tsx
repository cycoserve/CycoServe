import DashLayout from '@/components/Layouts/DashLayouts'
import RootLayout from '@/components/Layouts/RootLayout'
import HeaderSpace from '@/components/elements/HeaderSpace'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'

function Dashboard() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div container px-4 border mx-auto h-full py-24">
                        The Dashboard information here
                    </div>

                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default Dashboard