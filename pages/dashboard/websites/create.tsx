import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import withAuth from '@/utils/withAuth'
import WebsiteForm from '@/components/Dashboards/website/WebsiteForm'


function CreateWebsitePage() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container lg:px-8  mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all websites'}>
                            Add Website
                        </DashboardPageTitle>
                        {/* <CreateWebsite /> */}
                    </div>

                    <div className="div container lg:px-8 bg-white rounded-lg mx-auto h-full">
                      <WebsiteForm />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(CreateWebsitePage)
