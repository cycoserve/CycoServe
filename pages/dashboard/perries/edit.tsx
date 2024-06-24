import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import withAuth from '@/utils/withAuth'
import CreatePerry from '@/components/Dashboards/perry/CreatePerry'
import PerryTable from '@/components/Dashboards/perry/PerryTable'

function Perry() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container shrink-0 lg:px-8 mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all perries'}>
                            Perry
                        </DashboardPageTitle>
                        <CreatePerry />
                    </div>

                    <div className="div container lg:px-8 mx-auto h-full shrink-0">
                        <PerryTable />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(Perry)
