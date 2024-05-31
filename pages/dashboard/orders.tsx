import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'

function Orders() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div container px-4 border mx-auto h-full py-24">
                        The orders will display here
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default Orders