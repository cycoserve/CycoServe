import DashboardPageTitle from '@/components/Dashboards/DashboardPageTitle'
import DashLayout from '@/components/Layouts/DashLayouts'
import SectionWrap from '@/components/elements/SectionWrap'
import React from 'react'
import withAuth from '@/utils/withAuth'
import CreateUser from '@/components/Dashboards/user/CreateUser'
import UserTable from '@/components/Dashboards/user/UserTable'

function User() {
    return (
        <>
            <DashLayout>
                <SectionWrap>
                    <div className="div flex items-center container shrink-0 lg:px-8 mx-auto ">
                        <DashboardPageTitle subtitle={'View, Add and Edit all users'}>
                            User
                        </DashboardPageTitle>
                        <CreateUser />
                    </div>

                    <div className="div container lg:px-8 mx-auto h-full shrink-0">
                        <UserTable />
                    </div>
                </SectionWrap>
            </DashLayout>
        </>
    )
}

export default withAuth(User)
