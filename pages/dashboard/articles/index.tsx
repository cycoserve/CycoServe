import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import withAuth from '@/utils/withAuth'
import FullWidthTabs from '@/components/Layouts/FullWidthTabs'
import Spacer from '@/components/Spacer'




function Articles() {
    return (
        <>
            <DashLayout>
                <FullWidthTabs />
            </DashLayout>
        </>
    )
}

export default withAuth(Articles)