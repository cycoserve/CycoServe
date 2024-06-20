import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import withAuth from '@/utils/withAuth'
import JudgeForm from '@/components/Dashboards/judge/JudgeForm'


function CreateJudgePage() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container lg:px-8  mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all judges'}>
                            Add Judge
                        </DashboardPageTitle>
                        {/* <CreateJudge /> */}
                    </div>

                    <div className="div container lg:px-8 bg-white rounded-lg mx-auto h-full">
                      <JudgeForm />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(CreateJudgePage)
