import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import withAuth from '@/utils/withAuth'
import CreateService from '@/components/Dashboards/service/CreateService'
import ServiceTable from '@/components/Dashboards/service/ServiceTable'

function Service() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container shrink-0 lg:px-8 mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all services'}>
                            Services
                        </DashboardPageTitle>
                        <CreateService />
                    </div>

                    <div className="div container lg:px-8 mx-auto h-full shrink-0">
                        <ServiceTable />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(Service)
