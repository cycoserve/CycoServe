import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import DashboardComponent from '@/components/Dashboards/DashboardComponent'
import withAuth from '@/utils/withAuth'

function Dashboard() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container lg:px-8 mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all products'}>
                            Dashboard
                        </DashboardPageTitle>


                    </div>
                    <div className="container mx-auto flex ">
                        <DashboardComponent />
                    </div>
                </SectionWrap>

            </DashLayout>
        </>
    )
}

export default withAuth(Dashboard);