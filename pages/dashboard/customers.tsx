import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'

function Customers() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div container px-4 border mx-auto h-full py-24">
                        The Customers information here
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default Customers