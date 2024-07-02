import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import withAuth from '@/utils/withAuth'
import ServiceForm from '@/components/Dashboards/service/ServiceForm'


function CreateServicePage() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container lg:px-8  mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all services'}>
                            Add Service
                        </DashboardPageTitle>
                        {/* <CreateService /> */}
                    </div>

                    <div className="div container lg:px-8 bg-white rounded-lg mx-auto h-full">
                      <ServiceForm />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(CreateServicePage)
