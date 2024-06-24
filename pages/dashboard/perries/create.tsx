import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import withAuth from '@/utils/withAuth'
import PerryForm from '@/components/Dashboards/perry/PerryForm'


function CreatePerryPage() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container lg:px-8  mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all perries'}>
                            Add Perry
                        </DashboardPageTitle>
                        {/* <CreatePerry /> */}
                    </div>

                    <div className="div container lg:px-8 bg-white rounded-lg mx-auto h-full">
                      <PerryForm />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(CreatePerryPage)
