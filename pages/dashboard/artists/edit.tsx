import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import withAuth from '@/utils/withAuth'

function EditArtist() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all Edit Artist'}>
                            Edit Artist 
                        </DashboardPageTitle>
                 
                    </div>



                    <div className="div container bg-white rounded-lg mx-auto h-full">
                   
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(EditArtist)