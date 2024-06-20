import DashLayout from '@/components/Layouts/DashLayouts'
import LogoutButton from '@/components/elements/LogOutBtn'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'

function Settings() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div container px-4 border mx-auto h-full py-24">
                    <LogoutButton />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default Settings