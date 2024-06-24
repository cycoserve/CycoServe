import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import withAuth from '@/utils/withAuth'
import CreateWebsite from '@/components/Dashboards/website/CreateWebsite'
import WebsiteTable from '@/components/Dashboards/website/WebsiteTable'

function Website() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container shrink-0 lg:px-8 mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all websites'}>
                            Website
                        </DashboardPageTitle>
                        <CreateWebsite />
                    </div>

                    <div className="div container lg:px-8 mx-auto h-full shrink-0">
                        <WebsiteTable />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(Website)
