import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import withAuth from '@/utils/withAuth'
import CreateJudge from '@/components/Dashboards/judge/CreateJudge'
import JudgeTable from '@/components/Dashboards/judge/JudgeTable'

function Judge() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container shrink-0 lg:px-8 mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all judges'}>
                            Judge
                        </DashboardPageTitle>
                        <CreateJudge />
                    </div>

                    <div className="div container lg:px-8 mx-auto h-full shrink-0">
                        <JudgeTable />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(Judge)
